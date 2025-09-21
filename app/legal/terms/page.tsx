import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/uicard"

export default function TermsOfServicePage() {
  const lastUpdated = "January 15, 2025"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By accessing and using the services provided by SJ Business Consulting, LLC ("Company," "we," "us,"
                    or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do
                    not agree to abide by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Description of Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    SJ Business Consulting, LLC provides business consulting services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Strategic planning and business development</li>
                    <li>Operations optimization and process improvement</li>
                    <li>Financial advisory and analysis</li>
                    <li>Startup guidance and business formation support</li>
                    <li>Other related consulting services as agreed upon</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Client Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide accurate and complete information necessary for our services</li>
                    <li>Cooperate in good faith with our consulting team</li>
                    <li>Make timely payments according to agreed terms</li>
                    <li>Maintain confidentiality of proprietary methodologies and materials</li>
                    <li>Use our services and recommendations in a lawful manner</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Fees and Payment</h4>
                    <p className="text-muted-foreground">
                      Fees for services will be as agreed upon in writing. Payment terms are typically net 30 days
                      unless otherwise specified. Late payments may incur additional charges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Refund Policy</h4>
                    <p className="text-muted-foreground">
                      Refunds are considered on a case-by-case basis. Any refund requests must be made in writing within
                      30 days of service completion.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We maintain strict confidentiality regarding all client information and business matters. We will
                    not disclose any confidential information without prior written consent, except as required by law.
                    This confidentiality obligation survives the termination of our services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Our Materials</h4>
                    <p className="text-muted-foreground">
                      All methodologies, frameworks, templates, and proprietary materials developed by us remain our
                      intellectual property. Clients receive a limited license to use these materials for their internal
                      business purposes only.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Client Materials</h4>
                    <p className="text-muted-foreground">
                      All client data, information, and materials remain the property of the client. We claim no
                      ownership rights to client intellectual property.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>7. Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our liability for any claims arising from our services shall not exceed the total fees paid by the
                    client for the specific services giving rise to the claim. We shall not be liable for any indirect,
                    incidental, special, or consequential damages, including but not limited to lost profits or business
                    opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Professional Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide our services in accordance with generally accepted professional standards. However, we
                    make no guarantees regarding specific business outcomes or results. Business success depends on many
                    factors beyond our control, including market conditions, implementation quality, and client
                    execution.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Either party may terminate services with 30 days written notice. Upon termination, the client
                    remains responsible for payment of all services rendered through the termination date. All
                    confidentiality obligations survive termination.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    These terms shall be governed by and construed in accordance with the laws of the State of Florida.
                    Any disputes arising from these terms or our services shall be resolved in the courts of Broward
                    County, Florida.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>11. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                    posting on our website. Your continued use of our services constitutes acceptance of any changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12. Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For questions about these Terms of Service, please contact us:
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
