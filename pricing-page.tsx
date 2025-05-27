"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Star, Zap, Rocket } from "lucide-react"
import Header from "./components/header"
import Footer from "./components/footer"

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Hobby",
      icon: Star,
      description: "Perfect for personal projects and learning",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Up to 3 projects",
        "5GB storage",
        "Community support",
        "Basic analytics",
        "SSL certificates",
        "99.9% uptime SLA",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Freelancer",
      icon: Zap,
      description: "Ideal for freelancers and small businesses",
      monthlyPrice: 19,
      yearlyPrice: 15,
      features: [
        "Unlimited projects",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
        "Team collaboration (up to 3 members)",
        "API access",
        "99.95% uptime SLA",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Startup",
      icon: Rocket,
      description: "Built for growing teams and businesses",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "Unlimited projects",
        "500GB storage",
        "24/7 priority support",
        "Advanced analytics & insights",
        "Custom domains",
        "Team collaboration (up to 10 members)",
        "API access",
        "Advanced security features",
        "Custom integrations",
        "99.99% uptime SLA",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always know what you'll pay.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-blue-600" />
              <span className={`text-sm font-medium ${isYearly ? "text-gray-900" : "text-gray-500"}`}>Yearly</span>
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                Save 20%
              </Badge>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
              const originalPrice = isYearly ? plan.monthlyPrice : null

              return (
                <Card
                  key={plan.name}
                  className={`relative ${plan.popular ? "border-blue-500 border-2 shadow-xl scale-105" : "border-gray-200"} transition-all duration-300 hover:shadow-lg`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="text-center pb-8">
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold text-gray-900">${price}</span>
                        <span className="text-gray-600">/{isYearly ? "month" : "month"}</span>
                      </div>
                      {isYearly && originalPrice > 0 && (
                        <div className="text-sm text-gray-500 mt-1">
                          <span className="line-through">${originalPrice}/month</span>
                          <span className="text-green-600 ml-2">billed yearly</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I change my plan later?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 text-sm">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-600 text-sm">
                  Absolutely. You can cancel your subscription at any time with no cancellation fees.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust our platform to build and deploy their applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
