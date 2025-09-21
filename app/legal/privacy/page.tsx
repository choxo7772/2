import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/uicard"

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2025"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account, contact us,
                      or use our services. This may include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Company information and business details</li>
                      <li>Communication preferences</li>
                      <li>Information provided in forms, surveys, or consultations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Automatically Collected Information</h4>
                    <p className="text-muted-foreground">
                      We automatically collect certain information about your device and usage of our website,
                      including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>IP address and device identifiers</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website information</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide, maintain, and improve our consulting services</li>
                    <li>Communicate with you about our services and respond to inquiries</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Analyze usage patterns to improve our website and services</li>
                    <li>Comply with legal obligations and protect our rights</li>
                    <li>Prevent fraud and ensure security</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Information Sharing and Disclosure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except as
                    described in this policy:
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                    <p className="text-muted-foreground">
                      We may share information with trusted third-party service providers who assist us in operating our
                      website and conducting business, provided they agree to keep information confidential.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Legal Requirements</h4>
                    <p className="text-muted-foreground">
                      We may disclose information when required by law or to protect our rights, property, or safety, or
                      that of others.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Access, update, or delete your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                    <li>Object to processing of your personal information</li>
                    <li>Request data portability</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, please contact us at info@sjbusinessconsulting.com.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can
                    control cookie preferences through your browser settings or our cookie consent banner. For more
                    information, see our Cookie Policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our services are not directed to children under 13. We do not knowingly collect personal information
                    from children under 13. If we become aware that we have collected such information, we will take
                    steps to delete it.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new policy on this page and updating the "Last updated" date. Your continued use of our services
                    after any changes constitutes acceptance of the updated policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>SJ Business Consulting, LLC</strong>
                    </p>
                    <p>4957 NW 92nd Avenue, Sunrise, FL 33351</p>
                    <p>Email: info@sjbusinessconsulting.com</p>
                    <p>Phone: (645) 228-8480</p>
                  </div>
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
