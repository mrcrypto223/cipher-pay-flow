import { Shield } from "lucide-react";
import { WalletConnect } from "./WalletConnect";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Cipher Pay Flow" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Cipher Pay Flow</h1>
            <p className="text-xs text-muted-foreground">Secure Payment System</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="/payments" className="text-muted-foreground hover:text-foreground transition-colors">
            Payments
          </a>
          <a href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
            Team
          </a>
          <a href="/security" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </a>
        </nav>

        <WalletConnect />
      </div>
    </header>
  );
};

export default Header;