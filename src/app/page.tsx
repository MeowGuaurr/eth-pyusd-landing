import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Wallet,
  QrCode,
  Zap,
  Shield,
  Globe,
  DollarSign,
  Smartphone,
  Store,
  Coffee,
  ShoppingBag,
  Blocks,
  Send,
  Receipt,
  TrendingUp,
  Lock,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div className="backdrop-blur-xl bg-background/70 border border-border/50 rounded-2xl px-6 py-3 shadow-lg shadow-primary/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary via-accent to-success flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                Seamless Pay
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                How It Works
              </Link>
              <Button size="sm" className="rounded-full">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side oh th e page */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 border border-primary/20">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                Web3 POS • PayPal Blockchain
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Scan.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                Authorize.
              </span>
              <br />
              Done.
            </h1>

            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              The blockchain-powered POS that makes accepting PYUSD as simple as
              showing a QR code. No banks, no delays, no complexity—just instant
              payments for your business.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="text-base px-8 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                Start Accepting PYUSD
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 rounded-full border-2 hover:bg-accent/5 hover:border-accent bg-transparent"
              >
                Get started
              </Button>
            </div>

            {/* dummy stats just to flex */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">3s</div>
                <div className="text-sm text-muted-foreground">
                  Avg. Settlement
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">0%</div>
                <div className="text-sm text-muted-foreground">
                  Transaction Fees
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Global Access
                </div>
              </div>
            </div>
          </div>

          {/* Right side card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-success/20 rounded-3xl blur-3xl" />
            <Card className="relative p-8 bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20 shadow-2xl">
              <div className="space-y-6">
                {/* dummy QR Code Display */}
                <div className="aspect-square rounded-2xl bg-white p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-accent/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 h-32 w-32 bg-primary/10 rounded-full blur-2xl" />
                  <QrCode className="h-48 w-48 text-foreground relative z-10" />
                </div>

                {/* Payment */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border">
                    <span className="text-sm text-muted-foreground">
                      Amount
                    </span>
                    <span className="text-2xl font-bold">$24.99</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-success/10 to-success/5 border border-success/30">
                    <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm text-black font-medium">
                        Payment Confirmed
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Settled in 3 seconds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
            Web3 Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            More Than Just a{" "}
            <span className="text-primary">Payment Terminal</span>
          </h2>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* 2 col card */}
          <Card className="md:col-span-2 p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-background border-2 border-primary/20 hover:border-primary/40 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Blocks className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  Built on PayPal's Blockchain
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every transaction is secured by blockchain technology.
                  Transparent, verifiable, and instant—no intermediaries, just
                  direct peer-to-peer payments powered by PYUSD stablecoin.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    <Shield className="h-3 w-3 mr-1" />
                    Secure
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    <Lock className="h-3 w-3 mr-1" />
                    Transparent
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success border-success/20"
                  >
                    <Zap className="h-3 w-3 mr-1" />
                    Instant
                  </Badge>
                </div>
              </div>
              <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl">⛓️</div>
              </div>
            </div>
          </Card>

          {/* biggg card section */}
          <Card className="lg:row-span-2 p-8 bg-gradient-to-br from-accent/10 via-success/5 to-background border-2 border-accent/20 hover:border-accent/40 transition-all">
            <div className="h-full flex flex-col space-y-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent to-success flex items-center justify-center">
                <Send className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Send & Receive</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Not just for accepting payments. Transfer funds to anyone with a
                wallet. Full two-way transaction capability in one simple
                interface.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary rotate-180" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Receive Payments</div>
                    <div className="text-xs text-muted-foreground">
                      From customers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Send Payments</div>
                    <div className="text-xs text-muted-foreground">
                      To anyone, anywhere
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Wide section card */}
          <Card className="md:col-span-2 p-8 bg-gradient-to-br from-success/10 via-primary/5 to-background border-2 border-success/20 hover:border-success/40 transition-all">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                <QrCode className="h-16 w-16 text-success" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-success to-primary flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Scan. Authorize. Done.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The simplest payment flow ever created. Customer scans your QR
                  code, authorizes in their wallet, and funds arrive instantly.
                  Three seconds, zero friction, no special hardware needed.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 transform -skew-y-3" />
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                  PYUSD Stablecoin
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                  What is <span className="text-primary">PYUSD</span>?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  PayPal's official stablecoin—a digital dollar living on the
                  blockchain. Backed 1:1 by US dollars, designed for instant,
                  borderless payments. Think of it as cash for the internet, but
                  better.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 space-y-3 bg-card border-2 border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold">Stable Value</h3>
                  <p className="text-sm text-muted-foreground">
                    Always $1 USD, backed by reserves
                  </p>
                </Card>

                <Card className="p-6 space-y-3 bg-card border-2 border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-success flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold">Instant</h3>
                  <p className="text-sm text-muted-foreground">
                    Funds arrive in seconds, not days
                  </p>
                </Card>

                <Card className="p-6 space-y-3 bg-card border-2 border-success/20 hover:shadow-lg hover:shadow-success/10 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-success to-primary flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold">Global</h3>
                  <p className="text-sm text-muted-foreground">
                    Accept from anywhere, 24/7
                  </p>
                </Card>

                <Card className="p-6 space-y-3 bg-card border-2 border-warning/20 hover:shadow-lg hover:shadow-warning/10 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-warning to-accent flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold">Secure</h3>
                  <p className="text-sm text-muted-foreground">
                    Blockchain verified & transparent
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Three simple steps to start accepting PYUSD
            </p>
          </div>

          <div className="relative">
            {/* Steps section */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-success rounded-full" />

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                    <Wallet className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Card className="flex-1 p-8 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary text-primary-foreground">
                        Step 1
                      </Badge>
                      <h3 className="text-2xl font-bold">
                        Connect Your Wallet
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Link your crypto wallet in seconds. No paperwork, no bank
                      accounts, no waiting for approval.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-success flex items-center justify-center shadow-lg shadow-accent/20">
                    <QrCode className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Card className="flex-1 p-8 border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg hover:shadow-accent/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-accent text-accent-foreground">
                        Step 2
                      </Badge>
                      <h3 className="text-2xl font-bold">Generate QR Code</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Create a unique QR code for each transaction with one tap.
                      Just scan it with any smartphone camera, no special
                      hardware or equipment needed.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-success to-primary flex items-center justify-center shadow-lg shadow-success/20">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Card className="flex-1 p-8 border-2 border-success/20 hover:border-success/40 transition-all hover:shadow-lg hover:shadow-success/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-success text-success-foreground">
                        Step 3
                      </Badge>
                      <h3 className="text-2xl font-bold">Get Paid Instantly</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Customer authorizes the payment in their wallet, and PYUSD
                      arrives in yours immediately.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This is just in case we proceed to the ecommerce part of the project  
     <section
        id="businesses"
        className="bg-gradient-to-b from-muted/30 to-background py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Built for Every Business
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              From brick-and-mortar to digital-first, Seamless Pay adapts to
              your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="group p-8 text-center space-y-4 border-2 border-border hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Coffee className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cafés & Restaurants</h3>
              <p className="text-sm text-muted-foreground">
                Lightning-fast checkout for busy customers and peak hours
              </p>
              <Badge variant="outline" className="border-primary/30">
                <TrendingUp className="h-3 w-3 mr-1" />
                Fast Service
              </Badge>
            </Card>

            <Card className="group p-8 text-center space-y-4 border-2 border-border hover:border-accent/40 transition-all hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
              <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-br from-accent/10 to-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Store className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Retail Stores</h3>
              <p className="text-sm text-muted-foreground">
                Modern POS system for the next generation of shoppers
              </p>
              <Badge variant="outline" className="border-accent/30">
                <Smartphone className="h-3 w-3 mr-1" />
                Mobile Ready
              </Badge>
            </Card>

            <Card className="group p-8 text-center space-y-4 border-2 border-border hover:border-success/40 transition-all hover:shadow-xl hover:shadow-success/10 hover:-translate-y-1">
              <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-br from-success/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingBag className="h-10 w-10 text-success" />
              </div>
              <h3 className="text-xl font-bold">E-commerce</h3>
              <p className="text-sm text-muted-foreground">
                Seamless integration with your online store platform
              </p>
              <Badge variant="outline" className="border-success/30">
                <Globe className="h-3 w-3 mr-1" />
                Global Sales
              </Badge>
            </Card>

            <Card className="group p-8 text-center space-y-4 border-2 border-border hover:border-warning/40 transition-all hover:shadow-xl hover:shadow-warning/10 hover:-translate-y-1">
              <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-br from-warning/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="h-10 w-10 text-warning" />
              </div>
              <h3 className="text-xl font-bold">Freelancers</h3>
              <p className="text-sm text-muted-foreground">
                Get paid instantly for your work, anywhere in the world
              </p>
              <Badge variant="outline" className="border-warning/30">
                <Zap className="h-3 w-3 mr-1" />
                Instant Pay
              </Badge>
            </Card>
          </div>
        </div>
      </section> */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-success/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* dummy button waiting to call the actual app */}
                <div className="p-12 space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
                      Ready to Go <span className="text-primary">Seamless</span>
                      ?
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto text-base px-8 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/20"
                    >
                      Get Started Now
                    </Button>
                  </div>
                </div>

                {/* Just dummy visual */}
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 p-12 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                    <div className="relative h-80 w-80 rounded-3xl bg-gradient-to-br from-card to-background border-2 border-primary/20 flex items-center justify-center shadow-2xl">
                      <div className="text-center space-y-6">
                        <div className="h-40 w-40 mx-auto rounded-2xl bg-white flex items-center justify-center shadow-lg">
                          <QrCode className="h-32 w-32 text-foreground" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-3xl font-bold">$0.00</div>
                          <div className="text-sm text-muted-foreground">
                            Join us and start accepting PYUSD today!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary via-accent to-success flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold">Seamless Pay</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Seamless Pay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
