import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import Link from "next/link"
import { ShoppingCart, Globe, Briefcase, Wrench, Heart } from "lucide-react"

export default function IndustriesPage() {
  const industries = [
    {
      title: "Retail",
      description:
        "Inventory management, customer experience optimization, and omnichannel strategies for retail businesses.",
      icon: ShoppingCart,
      challenges: ["Inventory optimization", "Customer retention", "Seasonal planning", "Supply chain efficiency"],
      solutions: [
        "Demand forecasting systems",
        "Customer loyalty programs",
        "Inventory management tools",
        "Process automation",
      ],
    },
    {
      title: "E-commerce",
      description: "Digital strategy, conversion optimization, and operational scaling for online businesses.",
      icon: Globe,
      challenges: [
        "Conversion optimization",
        "Customer acquisition",
        "Fulfillment efficiency",
        "Digital marketing ROI",
      ],
      solutions: [
        "A/B testing frameworks",
        "Marketing automation",
        "Fulfillment optimization",
        "Analytics implementation",
      ],
    },
    {
      title: "Professional Services",
      description: "Practice management, client acquisition, and operational efficiency for service-based businesses.",
      icon: Briefcase,
      challenges: ["Client acquisition", "Project management", "Resource allocation", "Pricing strategies"],
      solutions: ["CRM implementation", "Project workflows", "Capacity planning", "Value-based pricing"],
    },
    {
      title: "Trades & Construction",
      description: "Project management, workforce optimization, and business development for trade businesses.",
      icon: Wrench,
      challenges: ["Project scheduling", "Cost estimation", "Workforce management", "Customer communication"],
      solutions: ["Project management systems", "Estimating tools", "Scheduling optimization", "Customer portals"],
    },
    {
      title: "Nonprofits",
      description:
        "Mission-driven strategy, fundraising optimization, and operational efficiency for nonprofit organizations.",
      icon: Heart,
      challenges: ["Fundraising efficiency", "Program effectiveness", "Volunteer management", "Impact measurement"],
      solutions: ["Donor management systems", "Program evaluation", "Volunteer coordination", "Impact tracking"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Industry Expertise</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Specialized consulting solutions tailored to the unique challenges and opportunities in your industry
              sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{industry.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Common Challenges</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Our Solutions</h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Cross-Industry Expertise</h2>
            <p className="text-muted-foreground mb-8">
              While we specialize in these key industries, our core consulting services apply across all business
              sectors.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Strategic Planning", "Financial Analysis", "Process Optimization", "Growth Strategy"].map(
                (service, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-card-foreground text-sm">{service}</h3>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Don't See Your Industry?</h2>
            <p className="text-muted-foreground mb-8">
              We work with businesses across many sectors. Contact us to discuss how our expertise can be tailored to
              your specific industry needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Your Industry</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
