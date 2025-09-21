import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import { Users, CheckCircle, Rocket, FileText, Shield, Target, ArrowRight } from "lucide-react"

export default function StartupPage() {
  const services = [
    {
      title: "Business Formation",
      description: "Complete business entity setup and legal structure guidance",
      icon: FileText,
      checklist: [
        "Entity type selection (LLC, Corp, etc.)",
        "State registration and filing",
        "EIN and tax ID setup",
        "Operating agreements",
        "Corporate bylaws",
        "Initial compliance requirements",
      ],
    },
    {
      title: "Compliance & Legal",
      description: "Ensure your business meets all regulatory and legal requirements",
      icon: Shield,
      checklist: [
        "Business license applications",
        "Industry-specific permits",
        "Tax registration setup",
        "Employment law compliance",
        "Insurance requirements",
        "Ongoing compliance calendar",
      ],
    },
    {
      title: "Financial Foundation",
      description: "Establish financial systems and accounting infrastructure",
      icon: Target,
      checklist: [
        "Business banking setup",
        "Accounting system selection",
        "Financial reporting templates",
        "Tax planning strategies",
        "Funding preparation",
        "Financial projections",
      ],
    },
    {
      title: "Launch Strategy",
      description: "Develop go-to-market strategy and operational plans",
      icon: Rocket,
      checklist: [
        "Market analysis and positioning",
        "Pricing strategy development",
        "Marketing plan creation",
        "Operational procedures",
        "Growth planning",
        "Success metrics definition",
      ],
    },
  ]

  const timeline = [
    {
      week: "Week 1",
      title: "Foundation Setup",
      tasks: ["Business entity formation", "EIN registration", "Initial compliance review"],
    },
    {
      week: "Week 2",
      title: "Legal & Compliance",
      tasks: ["License applications", "Permit research", "Legal document preparation"],
    },
    {
      week: "Week 3",
      title: "Financial Systems",
      tasks: ["Banking setup", "Accounting system", "Financial planning"],
    },
    {
      week: "Week 4-5",
      title: "Launch Preparation",
      tasks: ["Market strategy", "Operational setup", "Launch plan finalization"],
    },
  ]

  const packages = [
    {
      name: "Startup Essentials",
      price: "$2,500",
      description: "Everything you need to legally start your business",
      features: [
        "Business entity formation",
        "EIN and tax setup",
        "Basic compliance guidance",
        "Banking setup assistance",
        "Essential legal documents",
      ],
      ideal: "Simple business structures, solo entrepreneurs",
    },
    {
      name: "Complete Launch",
      price: "$5,000",
      description: "Comprehensive startup package with strategic planning",
      features: [
        "Everything in Essentials",
        "Full compliance review",
        "Financial system setup",
        "Market analysis",
        "Launch strategy development",
        "3-month follow-up support",
      ],
      ideal: "Growing teams, complex business models",
      popular: true,
    },
    {
      name: "Ongoing Support",
      price: "$1,500",
      period: "per month",
      description: "Continued guidance through your first year",
      features: [
        "Monthly compliance check-ins",
        "Financial review and guidance",
        "Strategic planning support",
        "Problem-solving assistance",
        "Growth planning",
      ],
      ideal: "Businesses needing ongoing guidance",
    },
  ]

  const successStory = {
    title: "Tech Startup Success",
    description:
      "A software startup needed help with entity formation, compliance, and initial financial planning to secure their first round of funding.",
    results: [
      "Completed formation in 2 weeks",
      "Secured $250K seed funding",
      "Achieved full compliance",
      "Launched successfully in 4 months",
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Startup Guidance</h1>
                <p className="text-xl text-muted-foreground mt-2">From idea to launch - we'll guide you every step</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Turn Your Vision Into Reality</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Starting a business can be overwhelming. We simplify the process by handling the complex legal, financial,
              and strategic requirements so you can focus on building your product and serving customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Startups launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3-5wks</div>
                <div className="text-sm text-muted-foreground">Average setup time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Success rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">Complete Startup Services</h2>
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
                      <h4 className="font-semibold text-card-foreground mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.checklist.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
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

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Your Startup Journey</h2>
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="font-semibold text-foreground text-lg">{phase.title}</h3>
                          <Badge variant="outline">{phase.week}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.tasks.map((task, idx) => (
                            <Badge key={idx} variant="secondary">
                              {task}
                            </Badge>
                          ))}
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

      {/* Success Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">Success Story</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">{successStory.title}</CardTitle>
                <CardDescription className="text-center text-base">{successStory.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {successStory.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-card-foreground">{result}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Startup Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                      {pkg.period && <span className="text-muted-foreground ml-2">{pkg.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-6">
                      <div className="font-semibold text-foreground text-sm mb-2">Ideal For:</div>
                      <div className="text-xs text-muted-foreground">{pkg.ideal}</div>
                    </div>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
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
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Launch Your Business?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Let's turn your business idea into reality with proper planning, legal setup, and strategic guidance.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Business Journey
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
