import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet, ArrowRightCircle, Shield, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Banking for the Digital Age
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Experience seamless, secure, and smart banking solutions designed for modern life.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Get Started
              <ArrowRightCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4">
            <Wallet className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-semibold">Smart Banking</h3>
            <p className="text-muted-foreground">
              Manage your money with intelligent insights and automated savings.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <Shield className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-semibold">Secure Transactions</h3>
            <p className="text-muted-foreground">
              Bank with confidence using our advanced security measures.
            </p>
          </Card>
          <Card className="p-6 space-y-4">
            <Clock className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-semibold">24/7 Access</h3>
            <p className="text-muted-foreground">
              Your money is always accessible, whenever you need it.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}