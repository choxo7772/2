import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import { Check, Star } from "lucide-react"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses needing focused consulting support",
      price: "$2,500",
      period: "per project",
      features: [
        "Initial business assessment",
        "Strategic planning session",
        "Actionable recommendations report",
        "30-day implementation support",
        "Email support",
        "1 follow-up consultation",
      ],
      ideal: "Small businesses, startups, single-location operations",
      timeline: "2-4 weeks",
      cta: "Get Started",
    },
    {
      name: "Growth",
      description: "Comprehensive consulting for growing businesses",
      price: "$5,000",
      period: "per month",
      popular: true,
      features: [
        "Everything in Starter",
        "Monthly strategic reviews",
        "Operational optimization",
        "Financial performance analysis",
        "Process documentation",
        "Staff training support",
        "Priority phone & email support",
        "Quarterly business reviews",
      ],
      ideal: "Growing SMBs, multi-location businesses, scaling operations",
      timeline: "3-6 months",
      cta: "Most Popular",
    },
    {
      name: "Custom",
      description: "Tailored solutions for complex business transformations",
      price: "Custom",
      period: "pricing",
      features: [
        "Everything in Growth",
        "Dedicated consultant team",
        "Custom solution development",
        "Change management support",
        "Technology implementation",
        "Executive coaching",
        "24/7 support availability",
        "Ongoing partnership",
      ],
      ideal: "Large SMBs, complex transformations, long-term partnerships",
      timeline: "6+ months",
      cta: "Contact Us",
    },
  ]

  const faqs = [
    {
      question: "How do you determine pricing for custom projects?",
      answer:
        "Custom pricing is based on project scope, timeline, complexity, and required resources. We provide detailed proposals after an initial consultation to understand your specific needs.",
    },
    {
      question: "What's included in the initial assessment?",
      answer:
        "Our assessment includes a comprehensive review of your operations, finances, strategy, and market position, followed by prioritized recommendations and an implementation roadmap.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment arrangements for larger projects, including milestone-based payments and monthly retainer options.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "We stand behind our work. If you're not satisfied within the first 30 days, we'll work with you to address concerns or provide a partial refund based on work completed.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely. We can adjust your engagement level based on your evolving needs and business growth.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Choose the consulting package that fits your business needs and budget. All plans include our commitment
              to measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-sm">{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Ideal For:</h4>
                      <p className="text-xs text-muted-foreground">{tier.ideal}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Timeline:</h4>
                      <p className="text-xs text-muted-foreground">{tier.timeline}</p>
                    </div>
                  </div>

                  <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Investment That Pays for Itself</h2>
            <p className="text-muted-foreground mb-8">
              Our clients typically see returns that far exceed their consulting investment within the first year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3-5x</div>
                <div className="text-sm text-muted-foreground">Average ROI within 12 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$50K+</div>
                <div className="text-sm text-muted-foreground">Average annual cost savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Client retention rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Schedule a free consultation to discuss your needs and determine the best approach for your business.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
