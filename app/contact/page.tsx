import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/uicard"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["4957 NW 92nd Avenue", "Sunrise, FL 33351", "United States"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(645) 228-8480", "Monday - Friday", "9:00 AM - 6:00 PM EST"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sjbusinessconsulting.com", "Response within 24 hours", "Monday - Friday"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM EST", "Saturday: 10:00 AM - 2:00 PM EST", "Sunday: Closed"],
    },
  ]

  const services = [
    "Strategy & Planning",
    "Operations Optimization",
    "Financial Advisory",
    "Startup Guidance",
    "General Consultation",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Ready to transform your business? Let's discuss how we can help you achieve your goals through strategic
              consulting and practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm services={services} />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Visit Our Office</h2>
            <p className="text-muted-foreground mb-8">
              Located in Sunrise, Florida, we serve clients throughout South Florida and nationwide through remote
              consulting.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8234567890123!2d-80.2234567890123!3d26.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9abcdef123456%3A0x1234567890abcdef!2s4957%20NW%2092nd%20Ave%2C%20Sunrise%2C%20FL%2033351%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SJ Business Consulting Office Location"
                className="w-full h-96"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-semibold text-card-foreground mb-2">4957 NW 92nd Avenue</h3>
              <p className="text-muted-foreground">Sunrise, FL 33351</p>
              <p className="text-sm text-muted-foreground mt-2">Free parking available • Wheelchair accessible</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">How quickly can we get started?</h3>
                  <p className="text-muted-foreground">
                    We typically schedule initial consultations within 3-5 business days. For urgent needs, we offer
                    same-day or next-day consultations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">Do you work with businesses outside Florida?</h3>
                  <p className="text-muted-foreground">
                    Yes! While we're based in Florida, we provide remote consulting services to businesses nationwide.
                    Many of our engagements are conducted virtually with excellent results.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    What information should I prepare for our call?
                  </h3>
                  <p className="text-muted-foreground">
                    Come prepared with your current challenges, goals, and any relevant business documents. We'll guide
                    you through what specific information would be most helpful during our initial conversation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
