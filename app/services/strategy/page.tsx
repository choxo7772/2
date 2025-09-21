import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import { Target, CheckCircle, Clock, ArrowRight } from "lucide-react"

export default function StrategyPage() {
  const deliverables = [
    "Comprehensive business assessment report",
    "Strategic roadmap with 12-18 month timeline",
    "Market analysis and competitive positioning",
    "SWOT analysis and risk assessment",
    "Key performance indicators (KPI) framework",
    "Implementation timeline and milestones",
    "Resource allocation recommendations",
    "Monthly review and adjustment protocols",
  ]

  const process = [
    {
      phase: "Discovery & Assessment",
      duration: "Week 1-2",
      activities: [
        "Stakeholder interviews",
        "Current state analysis",
        "Market research",
        "Competitive analysis",
        "Financial review",
      ],
    },
    {
      phase: "Strategic Analysis",
      duration: "Week 3-4",
      activities: [
        "SWOT analysis",
        "Gap analysis",
        "Opportunity identification",
        "Risk assessment",
        "Resource evaluation",
      ],
    },
    {
      phase: "Strategy Development",
      duration: "Week 5-6",
      activities: [
        "Strategic options development",
        "Scenario planning",
        "Implementation roadmap",
        "KPI framework design",
        "Success metrics definition",
      ],
    },
  ]

  const pricingOptions = [
    {
      name: "Strategic Assessment",
      price: "$2,500",
      description: "Comprehensive business assessment with strategic recommendations",
      features: ["Business assessment", "Strategic recommendations", "Implementation roadmap", "30-day support"],
    },
    {
      name: "Full Strategic Planning",
      price: "$5,000",
      description: "Complete strategic planning engagement with ongoing support",
      features: [
        "Everything in Assessment",
        "Detailed market analysis",
        "Competitive positioning",
        "12-month implementation support",
      ],
      popular: true,
    },
  ]

  const faqs = [
    {
      question: "How long does the strategic planning process take?",
      answer:
        "Our typical strategic planning engagement takes 4-6 weeks from start to finish, with ongoing implementation support available for 12 months.",
    },
    {
      question: "What information do you need from us to get started?",
      answer:
        "We'll need access to financial statements, organizational charts, current business plans, and key stakeholder availability for interviews.",
    },
    {
      question: "How do you ensure the strategy is actionable?",
      answer:
        "Every strategic recommendation includes specific implementation steps, timelines, resource requirements, and success metrics to ensure practical execution.",
    },
    {
      question: "Can you help with strategy implementation?",
      answer:
        "Yes, we offer ongoing implementation support including monthly reviews, progress tracking, and strategy adjustments as needed.",
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
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Strategy & Planning</h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Data-driven strategic planning for sustainable growth
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Transform Your Vision Into Action</h2>
                <p className="text-muted-foreground mb-6">
                  Strategic planning is the foundation of business success. Our comprehensive approach helps you define
                  clear objectives, identify growth opportunities, and create actionable roadmaps that align your entire
                  organization toward common goals.
                </p>
                <p className="text-muted-foreground mb-6">
                  We work with you to assess your current position, analyze market opportunities, and develop strategies
                  that leverage your strengths while addressing potential challenges. Our data-driven methodology
                  ensures your strategic plan is both ambitious and achievable.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">85%</div>
                    <div className="text-sm text-muted-foreground">Strategy success rate</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">12mo</div>
                    <div className="text-sm text-muted-foreground">Average ROI timeline</div>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Quick Facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-semibold text-foreground">Timeline</div>
                      <div className="text-sm text-muted-foreground">4-6 weeks</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Investment</div>
                      <div className="text-sm text-muted-foreground">Starting at $2,500</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Deliverables</div>
                      <div className="text-sm text-muted-foreground">8+ strategic documents</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Support</div>
                      <div className="text-sm text-muted-foreground">12 months included</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">What You'll Receive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Strategic Planning Process</h2>
            <div className="space-y-8">
              {process.map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{phase.phase}</CardTitle>
                      <Badge variant="outline">{phase.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-primary font-semibold text-sm">{idx + 1}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{activity}</div>
                        </div>
                      ))}
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">Investment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingOptions.map((option, index) => (
                <Card key={index} className={`relative ${option.popular ? "border-primary shadow-lg" : ""}`}>
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{option.name}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-card-foreground">{option.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={option.popular ? "default" : "outline"} asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
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
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Plan Your Success?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Let's create a strategic plan that transforms your vision into measurable business results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Strategy Session
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
