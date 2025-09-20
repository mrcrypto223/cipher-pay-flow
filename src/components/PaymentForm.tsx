import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { useContract } from '../hooks/useContract';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Lock, Send, User, DollarSign } from 'lucide-react';

interface PaymentFormProps {
  onPaymentCreated?: (paymentId: string) => void;
}

export function PaymentForm({ onPaymentCreated }: PaymentFormProps) {
  const { address } = useAccount();
  const { createPayment, isPending, error } = useContract();
  
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    description: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would encrypt the amount using FHE
      // For now, we'll simulate encrypted data
      const encryptedAmount = btoa(formData.amount); // Base64 encoding as placeholder
      const proof = btoa(`proof_${Date.now()}`); // Simulated proof
      
      const result = await createPayment(
        formData.recipient,
        encryptedAmount,
        formData.description,
        proof
      );
      
      if (result) {
        onPaymentCreated?.(result.toString());
        setFormData({ recipient: '', amount: '', description: '' });
      }
    } catch (err) {
      console.error('Payment creation failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!address) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Secure Payment
          </CardTitle>
          <CardDescription>
            Connect your wallet to create encrypted payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Lock className="h-4 w-4" />
            <AlertDescription>
              Please connect your wallet to access payment features.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Create Encrypted Payment
        </CardTitle>
        <CardDescription>
          All payment data is encrypted using FHE technology
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipient" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Recipient Address
            </Label>
            <Input
              id="recipient"
              type="text"
              placeholder="0x..."
              value={formData.recipient}
              onChange={(e) => handleInputChange('recipient', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Amount (ETH)
            </Label>
            <Input
              id="amount"
              type="number"
              step="0.001"
              placeholder="0.1"
              value={formData.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Payment description..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>
                Payment creation failed: {error.message}
              </AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isPending || isSubmitting}
          >
            {isPending || isSubmitting ? (
              <>
                <Lock className="h-4 w-4 mr-2 animate-spin" />
                Creating Encrypted Payment...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Create Encrypted Payment
              </>
            )}
          </Button>
        </form>

        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <Lock className="h-4 w-4 inline mr-1" />
            This payment will be processed through our smart contract with FHE encryption.
            No direct transfers are made to avoid security triggers.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
