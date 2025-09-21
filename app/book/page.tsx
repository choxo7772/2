import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import { Calendar, Clock, Video, MapPin } from "lucide-react"

export default function BookPage() {
  const consultationTypes = [
    {
      title: "Strategy Consultation",
      duration: "60 minutes",
      price: "Free",
      description: "Discuss your business goals and explore strategic opportunities",
      features: ["Business assessment", "Goal alignment", "Strategic recommendations", "Next steps planning"],
    },
    {
      title: "Operations Review",
      duration: "45 minutes",
      price: "Free",
      description: "Review current operations and identify improvement opportunities",
      features: ["Process evaluation", "Efficiency analysis", "Quick wins identification", "Implementation roadmap"],
    },
    {
      title: "Financial Health Check",
      duration: "45 minutes",
      price: "Free",
      description: "Analyze financial performance and cash flow management",
      features: ["Financial review", "Cash flow analysis", "Cost optimization", "Financial planning guidance"],
    },
  ]

  const meetingOptions = [
    {
      icon: Video,
      title: "Video Call",
      description: "Secure video consultation via Zoom or Teams",
      popular: true,
    },
    {
      icon: MapPin,
      title: "In-Person",
      description: "Meet at our Sunrise, FL office",
    },
    {
      icon: Calendar,
      title: "Phone Call",
      description: "Traditional phone consultation",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Book a complimentary consultation to discuss your business challenges and explore how we can help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Choose Your Consultation Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {consultationTypes.map((type, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">
                        <Clock className="w-3 h-3 mr-1" />
                        {type.duration}
                      </Badge>
                      <Badge className="bg-primary text-primary-foreground">{type.price}</Badge>
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
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

      {/* Meeting Options */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">How Would You Like to Meet?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {meetingOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <Card key={index} className={`text-center ${option.popular ? "border-primary" : ""}`}>
                    {option.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                      </div>
                    )}
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Book Your Consultation</CardTitle>
                <p className="text-muted-foreground text-center">
                  Fill out the form below to schedule your free consultation
                </p>
              </CardHeader>
              <CardContent>
                <BookingForm consultationTypes={consultationTypes} meetingOptions={meetingOptions} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-card-foreground mb-4">Before the Call</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• You'll receive a confirmation email with meeting details</li>
                  <li>• We'll send a brief questionnaire to understand your needs</li>
                  <li>• Prepare any relevant business documents or questions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-4">During the Consultation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Discuss your current business challenges and goals</li>
                  <li>• Explore potential solutions and strategies</li>
                  <li>• Receive initial recommendations and next steps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
