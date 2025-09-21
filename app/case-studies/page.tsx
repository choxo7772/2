import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Restaurant Chain Operational Transformation",
      industry: "Food Service",
      challenge:
        "A growing restaurant chain was struggling with inconsistent operations across locations, leading to customer complaints and declining profitability.",
      solution:
        "Implemented standardized operating procedures, staff training programs, and performance monitoring systems across all locations.",
      results: [
        { metric: "40%", description: "Reduction in customer complaints" },
        { metric: "$75K", description: "Annual cost savings" },
        { metric: "25%", description: "Improvement in staff efficiency" },
        { metric: "6 months", description: "Time to full implementation" },
      ],
      timeline: "6 months",
      services: ["Operations Optimization", "Process Standardization", "Staff Training"],
    },
    {
      title: "E-commerce Startup Growth Strategy",
      industry: "E-commerce",
      challenge:
        "A new e-commerce business needed strategic guidance to scale operations and improve conversion rates while managing rapid growth.",
      solution:
        "Developed comprehensive growth strategy including inventory management, customer acquisition optimization, and operational scaling plans.",
      results: [
        { metric: "300%", description: "Revenue growth in 12 months" },
        { metric: "45%", description: "Improvement in conversion rate" },
        { metric: "60%", description: "Reduction in customer acquisition cost" },
        { metric: "12 months", description: "Time to profitability" },
      ],
      timeline: "12 months",
      services: ["Strategic Planning", "Growth Strategy", "Operations Optimization"],
    },
    {
      title: "Professional Services Firm Restructuring",
      industry: "Professional Services",
      challenge:
        "A consulting firm was experiencing cash flow issues and needed to restructure operations to improve profitability and client satisfaction.",
      solution:
        "Conducted comprehensive financial analysis, restructured service offerings, and implemented new project management and billing systems.",
      results: [
        { metric: "50%", description: "Improvement in cash flow" },
        { metric: "35%", description: "Increase in client satisfaction" },
        { metric: "$100K", description: "Annual revenue increase" },
        { metric: "9 months", description: "Time to positive cash flow" },
      ],
      timeline: "9 months",
      services: ["Financial Advisory", "Strategic Planning", "Process Optimization"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Case Studies</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Real success stories from businesses we've helped transform through strategic consulting and operational
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-card">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="outline">
                      <Clock className="w-3 h-3 mr-1" />
                      {study.timeline}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Services Provided</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, idx) => (
                            <Badge key={idx} variant="outline">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-8">Aggregate Results Across All Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-card-foreground mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Average efficiency improvement</div>
              </div>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-card-foreground mb-1">$250K+</div>
                <div className="text-sm text-muted-foreground">Total cost savings generated</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-card-foreground mb-1">9mo</div>
                <div className="text-sm text-muted-foreground">Average project timeline</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-card-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help your business achieve similar transformational results.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
