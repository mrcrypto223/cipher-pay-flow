import { FileText, Github, Twitter, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      {/* Animated Payslip Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="payslip-float absolute top-8 left-10 text-success/20">
          <FileText className="h-6 w-6" />
        </div>
        <div className="payslip-float absolute top-16 left-32 text-accent/20">
          <FileText className="h-4 w-4" />
        </div>
        <div className="payslip-float absolute top-12 left-64 text-success-glow/20">
          <FileText className="h-5 w-5" />
        </div>
        <div className="payslip-float absolute top-20 left-96 text-success/20">
          <FileText className="h-6 w-6" />
        </div>
        <div className="payslip-float absolute top-10 right-10 text-accent/20">
          <FileText className="h-4 w-4" />
        </div>
        <div className="payslip-float absolute top-24 right-32 text-success-glow/20">
          <FileText className="h-5 w-5" />
        </div>
        <div className="payslip-float absolute top-14 right-64 text-success/20">
          <FileText className="h-6 w-6" />
        </div>
        <div className="payslip-float absolute top-18 right-96 text-accent/20">
          <FileText className="h-4 w-4" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-success" />
              <span className="font-bold text-xl">PrivateDAO</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Revolutionary encrypted payroll system for decentralized organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-success transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-success transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Payments</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-semibold mb-4">Security</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Encryption</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Bug Bounty</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 PrivateDAO. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Powered by zero-knowledge encryption</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
              <span className="text-xs text-success font-medium">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;