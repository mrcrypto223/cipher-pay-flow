import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserPlus, Search, Mail, Shield, Users, Wallet } from "lucide-react";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-success-glow bg-clip-text text-transparent">
                Team Management
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Manage your DAO team members and their encrypted payment access.
              </p>
            </div>
            <Button className="bg-gradient-success hover:bg-success-hover text-success-foreground">
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Team Member
            </Button>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Total Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-success" />
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Active</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Wallet className="h-8 w-8 text-success-glow" />
                  <div>
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-sm text-muted-foreground">Pending Setup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-muted-foreground">Invitations Sent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input className="pl-10" placeholder="Search team members..." />
            </div>
          </div>

          {/* Team Members */}
          <div className="grid gap-4">
            {[
              { name: "Alice Johnson", role: "Senior Developer", status: "active", email: "alice@dao.com", walletConnected: true, lastActive: "2 hours ago" },
              { name: "Bob Smith", role: "Smart Contract Dev", status: "active", email: "bob@dao.com", walletConnected: true, lastActive: "4 hours ago" },
              { name: "Carol Davis", role: "Product Manager", status: "active", email: "carol@dao.com", walletConnected: true, lastActive: "1 day ago" },
              { name: "David Wilson", role: "Security Auditor", status: "pending", email: "david@dao.com", walletConnected: false, lastActive: "Never" },
              { name: "Eva Brown", role: "UI/UX Designer", status: "active", email: "eva@dao.com", walletConnected: true, lastActive: "3 hours ago" },
              { name: "Frank Miller", role: "DevOps Engineer", status: "invited", email: "frank@dao.com", walletConnected: false, lastActive: "Never" }
            ].map((member, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-primary/20 text-primary font-semibold">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-lg">{member.name}</p>
                        <p className="text-muted-foreground">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant={member.status === 'active' ? 'success' : 
                                  member.status === 'pending' ? 'warning' : 'secondary'}
                        >
                          {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                        </Badge>
                        {member.walletConnected && (
                          <Badge variant="outline" className="border-success text-success">
                            <Wallet className="h-3 w-3 mr-1" />
                            Wallet Connected
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Last active: {member.lastActive}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;