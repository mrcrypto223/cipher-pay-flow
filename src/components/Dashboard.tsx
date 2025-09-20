import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Send, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [showSalaries, setShowSalaries] = useState(false);

  const employees = [
    {
      id: 1,
      name: "Alice Thompson",
      role: "Senior Developer",
      wallet: "0x1234...5678",
      salary: showSalaries ? "$8,500" : "••••••",
      status: "active",
      lastPaid: "2 days ago",
      nextPayment: "12 days"
    },
    {
      id: 2,
      name: "Bob Chen",
      role: "Product Manager", 
      wallet: "0x5678...9abc",
      salary: showSalaries ? "$7,200" : "••••••",
      status: "pending",
      lastPaid: "2 days ago",
      nextPayment: "12 days"
    },
    {
      id: 3,
      name: "Carol Martinez",
      role: "UI/UX Designer",
      wallet: "0x9abc...def0",
      salary: showSalaries ? "$6,800" : "••••••",
      status: "active",
      lastPaid: "2 days ago", 
      nextPayment: "12 days"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'pending': return 'warning';
      case 'failed': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'failed': return <AlertCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Encrypted Salary Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage your team's compensation with complete privacy. All salary data is encrypted and only visible to authorized parties.
          </p>
        </div>

        {/* Dashboard Header */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Team Payroll Overview</h3>
              <p className="text-muted-foreground">Next payment cycle: March 15, 2024</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSalaries(!showSalaries)}
                className="border-border hover:bg-surface"
              >
                {showSalaries ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                {showSalaries ? 'Hide' : 'Show'} Salaries
              </Button>
              <Button className="bg-gradient-success hover:bg-success-hover text-success-foreground">
                <Send className="h-4 w-4 mr-2" />
                Process Payments
              </Button>
            </div>
          </div>
        </div>

        {/* Employee Cards */}
        <div className="grid gap-6">
          {employees.map((employee) => (
            <Card key={employee.id} className="glass-card p-6 hover:bg-surface/50 transition-colors">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{employee.name}</h4>
                    <p className="text-muted-foreground">{employee.role}</p>
                    <p className="text-sm text-muted-foreground font-mono">{employee.wallet}</p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Salary</p>
                    <p className={`text-2xl font-bold ${showSalaries ? '' : 'encrypted-text'}`}>
                      {employee.salary}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <Badge variant={getStatusColor(employee.status) as any} className="flex items-center gap-1">
                      {getStatusIcon(employee.status)}
                      {employee.status}
                    </Badge>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Next Payment</p>
                    <p className="font-medium">{employee.nextPayment}</p>
                  </div>

                  <div className="payment-stream w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-success rounded-full"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="glass-card p-6 text-center">
            <h4 className="text-3xl font-bold text-success mb-2">
              {showSalaries ? '$22,500' : '••••••'}
            </h4>
            <p className="text-muted-foreground">Total Monthly Payroll</p>
          </Card>
          <Card className="glass-card p-6 text-center">
            <h4 className="text-3xl font-bold text-accent mb-2">3</h4>
            <p className="text-muted-foreground">Active Employees</p>
          </Card>
          <Card className="glass-card p-6 text-center">
            <h4 className="text-3xl font-bold text-success-glow mb-2">100%</h4>
            <p className="text-muted-foreground">Payment Success Rate</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;