import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Settings, Lock, Key, AlertTriangle, CheckCircle, Eye, EyeOff, Fingerprint, Smartphone } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-success-glow bg-clip-text text-transparent flex items-center gap-2">
              <Settings className="h-8 w-8" />
              Security Settings
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Manage your DAO's security settings and encryption protocols for maximum privacy protection.
            </p>
          </div>

          {/* Security Score */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-success" />
                Security Score
              </CardTitle>
              <CardDescription>
                Your current security level and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-success mb-2">87%</div>
                  <Badge variant="success">Excellent</Badge>
                </div>
                <div className="flex-1">
                  <Progress value={87} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Your security score is excellent. Enable 2FA to reach 95%.
                  </p>
                </div>
              </div>
              <Button className="bg-gradient-success hover:bg-success-hover text-success-foreground">
                View Security Recommendations
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings Grid */}
          <div className="grid gap-6 mb-8">
            
            {/* Encryption Settings */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-success" />
                  Encryption Settings
                </CardTitle>
                <CardDescription>
                  Configure zero-knowledge encryption protocols
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">End-to-End Encryption</p>
                    <p className="text-sm text-muted-foreground">All salary data encrypted with AES-256</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <Badge variant="success">Active</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Zero-Knowledge Proofs</p>
                    <p className="text-sm text-muted-foreground">Verify payments without revealing amounts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Private Key Rotation</p>
                    <p className="text-sm text-muted-foreground">Automatically rotate encryption keys monthly</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Access Control */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-accent" />
                  Access Control
                </CardTitle>
                <CardDescription>
                  Manage authentication and authorization settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Multi-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Require 2FA for all admin actions</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Biometric Authentication</p>
                    <p className="text-sm text-muted-foreground">Use fingerprint for wallet access</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fingerprint className="h-4 w-4 text-muted-foreground" />
                    <Switch />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Session Timeout</p>
                    <p className="text-sm text-muted-foreground">Auto-logout after 30 minutes of inactivity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Privacy Controls */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-success-glow" />
                  Privacy Controls
                </CardTitle>
                <CardDescription>
                  Configure data visibility and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Anonymous Payments</p>
                    <p className="text-sm text-muted-foreground">Hide sender identity in transaction logs</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Salary Privacy Mode</p>
                    <p className="text-sm text-muted-foreground">Only recipient can see payment amounts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Metadata Scrubbing</p>
                    <p className="text-sm text-muted-foreground">Remove identifying information from logs</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Alerts */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Security Alerts
              </CardTitle>
              <CardDescription>
                Recent security events and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "recommendation", message: "Enable 2FA for improved security", time: "Now", priority: "medium" },
                  { type: "success", message: "Encryption keys rotated successfully", time: "2 hours ago", priority: "low" },
                  { type: "info", message: "New login from mobile device", time: "4 hours ago", priority: "low" },
                  { type: "warning", message: "Unusual payment pattern detected", time: "1 day ago", priority: "high" }
                ].map((alert, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-surface/50 border border-border">
                    <div className={`p-2 rounded-full ${
                      alert.priority === 'high' ? 'bg-destructive/20 text-destructive' :
                      alert.priority === 'medium' ? 'bg-warning/20 text-warning' :
                      alert.type === 'success' ? 'bg-success/20 text-success' :
                      'bg-accent/20 text-accent'
                    }`}>
                      {alert.type === 'success' ? <CheckCircle className="h-4 w-4" /> :
                       alert.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> :
                       <Shield className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-muted-foreground">{alert.time}</p>
                    </div>
                    <Badge variant={alert.priority === 'high' ? 'destructive' : 
                                   alert.priority === 'medium' ? 'warning' : 'secondary'}>
                      {alert.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;