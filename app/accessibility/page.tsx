import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/uicard"
import { Button } from "@/components/uibutton"
import Link from "next/link"

export default function AccessibilityPage() {
  const lastUpdated = "January 15, 2025"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Accessibility Statement</h1>
              <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Commitment to Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    SJ Business Consulting, LLC is committed to ensuring digital accessibility for people with
                    disabilities. We are continually improving the user experience for everyone and applying the
                    relevant accessibility standards to ensure we provide equal access to all of our users.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
                    These guidelines explain how to make web content more accessible for people with disabilities and
                    user-friendly for everyone.
                  </p>
                  <p className="text-muted-foreground">
                    Our website has been designed and developed with accessibility in mind, incorporating features such
                    as:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-1">
                    <li>Semantic HTML structure for screen readers</li>
                    <li>Keyboard navigation support</li>
                    <li>High contrast color schemes</li>
                    <li>Alternative text for images</li>
                    <li>Descriptive link text</li>
                    <li>Proper heading hierarchy</li>
                    <li>Focus indicators for interactive elements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accessibility Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Keyboard Navigation</h4>
                    <p className="text-muted-foreground">
                      Our website can be navigated using only a keyboard. Use the Tab key to move between interactive
                      elements, Enter to activate buttons and links, and the arrow keys to navigate menus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Screen Reader Support</h4>
                    <p className="text-muted-foreground">
                      We use semantic HTML and ARIA labels to ensure our content is properly announced by screen
                      readers. All images include alternative text descriptions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Color and Contrast</h4>
                    <p className="text-muted-foreground">
                      Our color scheme meets WCAG AA contrast requirements. We don't rely solely on color to convey
                      important information.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Text Scaling</h4>
                    <p className="text-muted-foreground">
                      Our website supports text scaling up to 200% without loss of functionality or content. You can
                      adjust text size using your browser's zoom feature.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Known Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    While we strive for full accessibility, we acknowledge that some areas of our website may not yet
                    meet all accessibility standards. We are actively working to address these issues:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Some third-party embedded content may not be fully accessible</li>
                    <li>Complex data visualizations may require alternative formats</li>
                    <li>Some PDF documents may not be fully screen reader compatible</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We are committed to addressing these limitations and improving accessibility across our entire
                    website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feedback and Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We welcome your feedback on the accessibility of our website. If you encounter any accessibility
                    barriers or have suggestions for improvement, please let us know:
                  </p>
                  <div className="space-y-2 text-muted-foreground mb-6">
                    <p>
                      <strong>Email:</strong> info@sjbusinessconsulting.com
                    </p>
                    <p>
                      <strong>Phone:</strong> (645) 228-8480
                    </p>
                    <p>
                      <strong>Mail:</strong> 4957 NW 92nd Avenue, Sunrise, FL 33351
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We aim to respond to accessibility feedback within 5 business days and will work with you to provide
                    the information or service you need in an accessible format.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Contact Us About Accessibility</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Efforts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Accessibility is an ongoing effort. We regularly review our website for accessibility issues and
                    make improvements as needed. Our team receives training on accessibility best practices, and we
                    conduct regular accessibility audits to identify and address potential barriers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alternative Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you need information from our website in an alternative format, such as large print, audio, or
                    braille, please contact us. We will work with you to provide the information in a format that meets
                    your needs at no additional cost.
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
