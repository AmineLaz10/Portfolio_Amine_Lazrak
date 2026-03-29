import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("enter");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("exit");

      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("enter");
        window.scrollTo(0, 0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`page-transition page-transition-${transitionStage}`}
    >
      {children}
    </div>
  );
}
