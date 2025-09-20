import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PaymentForm } from "@/components/PaymentForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, CheckCircle, AlertCircle, Search, Lock } from "lucide-react";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-success-glow bg-clip-text text-transparent flex items-center gap-2">
              <Lock className="h-8 w-8" />
              Encrypted Payments
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Send secure, encrypted payments using FHE technology with complete privacy protection.
            </p>
          </div>

          {/* Encrypted Payment Form */}
          <div className="mb-8">
            <PaymentForm onPaymentCreated={(paymentId) => {
              console.log('Payment created:', paymentId);
              // Handle payment creation success
            }} />
          </div>

          {/* Payment History */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Payment History</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input className="pl-10" placeholder="Search payments..." />
              </div>
            </div>
          </div>

          {/* Payment List */}
          <div className="grid gap-4">
            {[
              { id: 1, recipient: "Alice Johnson", amount: "2.5", status: "completed", time: "2 hours ago", memo: "Monthly salary payment" },
              { id: 2, recipient: "Bob Smith", amount: "1.8", status: "pending", time: "4 hours ago", memo: "Freelance project bonus" },
              { id: 3, recipient: "Carol Davis", amount: "3.2", status: "completed", time: "1 day ago", memo: "Senior developer salary" },
              { id: 4, recipient: "David Wilson", amount: "0.5", status: "failed", time: "2 days ago", memo: "Bug bounty reward" },
              { id: 5, recipient: "Eva Brown", amount: "2.1", status: "completed", time: "3 days ago", memo: "Design work payment" }
            ].map((payment) => (
              <Card key={payment.id} className="glass-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {payment.recipient.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{payment.recipient}</p>
                        <p className="text-sm text-muted-foreground">{payment.memo}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-success">{payment.amount} ETH</p>
                      <p className="text-sm text-muted-foreground">{payment.time}</p>
                    </div>
                    <Badge 
                      variant={payment.status === 'completed' ? 'success' : 
                              payment.status === 'pending' ? 'warning' : 'destructive'}
                      className="ml-4"
                    >
                      {payment.status === 'completed' && <CheckCircle className="h-3 w-3 mr-1" />}
                      {payment.status === 'pending' && <Clock className="h-3 w-3 mr-1" />}
                      {payment.status === 'failed' && <AlertCircle className="h-3 w-3 mr-1" />}
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </Badge>
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

export default Payments;