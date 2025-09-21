import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import { DollarSign, CheckCircle, TrendingUp, PieChart, BarChart3, Calculator, ArrowRight } from "lucide-react"

export default function FinancePage() {
  const services = [
    {
      title: "Financial Health Assessment",
      description: "Comprehensive analysis of your current financial position and performance",
      icon: BarChart3,
      features: [
        "Cash flow analysis",
        "Profitability review",
        "Financial ratio analysis",
        "Benchmarking against industry standards",
      ],
    },
    {
      title: "Cash Flow Management",
      description: "Optimize cash flow to ensure healthy working capital and growth funding",
      icon: TrendingUp,
      features: [
        "Cash flow forecasting",
        "Working capital optimization",
        "Payment terms analysis",
        "Seasonal planning strategies",
      ],
    },
    {
      title: "Budgeting & Forecasting",
      description: "Create realistic budgets and financial projections for strategic planning",
      icon: Calculator,
      features: ["Annual budget development", "Rolling forecasts", "Scenario planning", "Variance analysis reporting"],
    },
    {
      title: "Cost Optimization",
      description: "Identify and eliminate unnecessary costs while maintaining quality",
      icon: PieChart,
      features: [
        "Cost structure analysis",
        "Vendor negotiation support",
        "Process cost reduction",
        "ROI improvement strategies",
      ],
    },
  ]

  const outcomes = [
    {
      metric: "25%",
      description: "Average cost reduction achieved",
      icon: DollarSign,
    },
    {
      metric: "40%",
      description: "Improvement in cash flow predictability",
      icon: TrendingUp,
    },
    {
      metric: "90%",
      description: "Budget accuracy improvement",
      icon: Calculator,
    },
    {
      metric: "6mo",
      description: "Typical payback period",
      icon: BarChart3,
    },
  ]

  const process = [
    {
      step: "Financial Review",
      description: "Analyze current financial statements, cash flow, and key metrics",
      deliverables: ["Financial health report", "Key metrics dashboard", "Benchmark analysis"],
    },
    {
      step: "Gap Analysis",
      description: "Identify areas for improvement and optimization opportunities",
      deliverables: ["Gap analysis report", "Improvement recommendations", "Priority action items"],
    },
    {
      step: "Strategy Development",
      description: "Create customized financial strategies and implementation plans",
      deliverables: ["Financial strategy document", "Implementation roadmap", "Success metrics"],
    },
    {
      step: "Implementation Support",
      description: "Guide implementation and provide ongoing monitoring and adjustments",
      deliverables: ["Implementation guidance", "Progress tracking", "Ongoing optimization"],
    },
  ]

  const pricingTiers = [
    {
      name: "Financial Assessment",
      price: "$2,000",
      description: "Comprehensive financial health check and recommendations",
      features: [
        "Financial statement analysis",
        "Cash flow review",
        "Key metrics assessment",
        "Improvement recommendations",
        "30-day follow-up support",
      ],
      timeline: "2-3 weeks",
    },
    {
      name: "Financial Planning",
      price: "$4,500",
      description: "Complete financial planning and budgeting engagement",
      features: [
        "Everything in Assessment",
        "Budget development",
        "Financial forecasting",
        "Cash flow projections",
        "Quarterly reviews (1 year)",
      ],
      timeline: "4-6 weeks",
      popular: true,
    },
    {
      name: "Ongoing CFO Support",
      price: "$3,500",
      period: "per month",
      description: "Part-time CFO services for ongoing financial management",
      features: [
        "Monthly financial reporting",
        "Strategic financial guidance",
        "Budget monitoring",
        "Cash flow management",
        "Board presentation support",
      ],
      timeline: "Ongoing",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Financial Advisory</h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Strategic financial guidance for sustainable growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Master Your Financial Future</h2>
                <p className="text-muted-foreground mb-6">
                  Financial clarity is essential for business success. Our comprehensive financial advisory services
                  help you understand your current position, optimize cash flow, and create strategic plans for
                  sustainable growth.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you need help with budgeting, cash flow management, or strategic financial planning, we
                  provide the expertise and tools to make informed decisions that drive profitability and growth.
                </p>
                <Button asChild>
                  <Link href="/contact">Schedule Financial Review</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="pt-6">
                        <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                        <div className="text-2xl font-bold text-foreground mb-1">{outcome.metric}</div>
                        <div className="text-sm text-muted-foreground">{outcome.description}</div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">Our Financial Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Financial Advisory Process</h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-lg mb-2">{step.step}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Deliverables:</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable, idx) => (
                              <Badge key={idx} variant="outline">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">Investment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className={`relative ${tier.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="text-sm">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-card-foreground">{tier.price}</span>
                      {tier.period && <span className="text-muted-foreground ml-2">{tier.period}</span>}
                    </div>
                    <div className="text-sm text-muted-foreground">{tier.timeline}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
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
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Take Control of Your Finances</h2>
            <p className="text-primary-foreground/90 mb-8">
              Get the financial clarity and strategic guidance you need to drive sustainable business growth.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Financial Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
