import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-extrabold text-lg">
              WhyIsMyWebsite<span className="text-primary">Slow?</span>
            </span>
          </div>
          
          <div className="text-center md:text-left text-sm text-secondary font-medium">
            <p>© {new Date().getFullYear()} Why Is My Website Slow? All rights reserved.</p>
            <p className="mt-1">Making enterprise-level performance analysis accessible to every developer.</p>
          </div>

    
        </div>
      </div>
    </footer>
  );
}

