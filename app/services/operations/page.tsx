import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import { TrendingUp, CheckCircle, Clock, ArrowRight, Zap, Target, BarChart } from "lucide-react"

export default function OperationsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Streamline workflows and eliminate bottlenecks for 30-50% productivity gains",
    },
    {
      icon: Target,
      title: "Cost Reduction",
      description: "Identify and eliminate waste, reducing operational costs by 15-25%",
    },
    {
      icon: BarChart,
      title: "Quality Improvement",
      description: "Implement quality controls that reduce errors and improve customer satisfaction",
    },
    {
      icon: Zap,
      title: "Faster Delivery",
      description: "Optimize processes to reduce cycle times and improve customer response",
    },
  ]

  const services = [
    {
      title: "Process Mapping & Analysis",
      description: "Document current workflows and identify optimization opportunities",
      deliverables: ["Current state process maps", "Gap analysis report", "Improvement recommendations"],
    },
    {
      title: "Workflow Optimization",
      description: "Redesign processes for maximum efficiency and minimal waste",
      deliverables: ["Optimized process designs", "Implementation roadmap", "Training materials"],
    },
    {
      title: "Quality Management",
      description: "Implement quality control systems and continuous improvement practices",
      deliverables: ["Quality management framework", "Standard operating procedures", "Monitoring systems"],
    },
    {
      title: "Performance Monitoring",
      description: "Establish KPIs and dashboards to track operational performance",
      deliverables: ["KPI framework", "Performance dashboards", "Reporting templates"],
    },
  ]

  const caseStudy = {
    title: "Manufacturing Company Transformation",
    challenge: "A mid-size manufacturer was struggling with production delays, quality issues, and rising costs.",
    solution:
      "We implemented lean manufacturing principles, redesigned workflows, and established quality control systems.",
    results: [
      { metric: "40%", description: "Reduction in production time" },
      { metric: "60%", description: "Decrease in quality defects" },
      { metric: "$200K", description: "Annual cost savings" },
      { metric: "95%", description: "On-time delivery rate" },
    ],
  }

  const methodology = [
    {
      phase: "Current State Assessment",
      description: "Map existing processes and identify pain points",
      duration: "1-2 weeks",
    },
    {
      phase: "Gap Analysis",
      description: "Compare current state to best practices and identify opportunities",
      duration: "1 week",
    },
    {
      phase: "Solution Design",
      description: "Design optimized processes and implementation plan",
      duration: "2-3 weeks",
    },
    {
      phase: "Implementation Support",
      description: "Guide implementation and provide change management support",
      duration: "2-4 weeks",
    },
    {
      phase: "Performance Monitoring",
      description: "Establish monitoring systems and continuous improvement processes",
      duration: "Ongoing",
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
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Operations Optimization</h1>
                <p className="text-xl text-muted-foreground mt-2">Streamline processes for maximum efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Transform Your Operations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">Our Operations Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-card-foreground mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Success Story</h2>
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">{caseStudy.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Solution</h3>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Results</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                          <div className="text-xs text-muted-foreground">{result.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">Our Methodology</h2>
            <div className="space-y-6">
              {methodology.map((phase, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold text-card-foreground text-lg">{phase.phase}</h3>
                      </div>
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {phase.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground ml-14">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Investment & Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Process Assessment</CardTitle>
                  <div className="text-3xl font-bold text-primary">$3,500</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Current state mapping</li>
                    <li>• Gap analysis</li>
                    <li>• Improvement recommendations</li>
                    <li>• 2-3 week timeline</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle>Full Optimization</CardTitle>
                  <div className="text-3xl font-bold text-primary">$7,500</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Everything in Assessment</li>
                    <li>• Process redesign</li>
                    <li>• Implementation support</li>
                    <li>• 6-8 week timeline</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Support</CardTitle>
                  <div className="text-3xl font-bold text-primary">$2,500</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Performance monitoring</li>
                    <li>• Continuous improvement</li>
                    <li>• Monthly reviews</li>
                    <li>• Ongoing optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Optimize Your Operations?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Let's identify opportunities to streamline your processes and boost efficiency.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Optimization
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
