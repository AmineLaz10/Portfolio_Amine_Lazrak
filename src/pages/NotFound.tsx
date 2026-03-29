import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 md:py-44">
        <div className="max-w-md">
          <p className="text-[120px] md:text-[160px] font-display leading-none text-primary/20 mb-4">
            404
          </p>
          <h2 className="text-xl font-display mb-3">Page not found</h2>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="outline" className="rounded-full px-6 border-border/60 hover:border-primary/40 hover:text-primary group">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
