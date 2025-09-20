import { Lock, BarChart3, Users, Settings } from "lucide-react";
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
            <p className="text-xs text-muted-foreground">Encrypted Payment Platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
            <BarChart3 className="h-4 w-4" />
            <span>Dashboard</span>
          </a>
          <a href="/payments" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
            <Lock className="h-4 w-4" />
            <span>Payments</span>
          </a>
          <a href="/team" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>Team</span>
          </a>
          <a href="/settings" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </a>
        </nav>

        <WalletConnect />
      </div>
    </header>
  );
};

export default Header;