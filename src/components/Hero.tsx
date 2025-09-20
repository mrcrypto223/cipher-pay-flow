import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Users, Zap } from "lucide-react";
import heroImage from "@/assets/payroll-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Lock className="h-8 w-8 text-success" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <Users className="h-6 w-6 text-accent" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-35" style={{ animationDelay: '2s' }}>
        <Zap className="h-10 w-10 text-success-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 text-success-glow border border-success/20 text-sm font-medium">
            <Lock className="h-4 w-4 mr-2" />
            End-to-End Encrypted Payroll
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-success-glow bg-clip-text text-transparent">
          Pay Your Team,<br />
          <span className="text-success-glow">Privately.</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Revolutionary DAO payroll system with zero-knowledge encryption. 
          Only you and your employees can see salary information.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-success hover:bg-success-hover text-success-foreground shadow-success group">
            <span>Start Paying Privately</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-surface">
            View Demo Dashboard
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="glass-card p-6 text-center">
            <Lock className="h-8 w-8 text-success mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Zero-Knowledge</h3>
            <p className="text-sm text-muted-foreground">End-to-end encrypted salary data</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Users className="h-8 w-8 text-accent mx-auto mb-3" />
            <h3 className="font-semibold mb-2">DAO Native</h3>
            <p className="text-sm text-muted-foreground">Built for decentralized organizations</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Zap className="h-8 w-8 text-success-glow mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Instant Payments</h3>
            <p className="text-sm text-muted-foreground">Lightning-fast crypto transfers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;