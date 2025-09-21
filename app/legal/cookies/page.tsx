import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/uicard"

export default function CookiePolicyPage() {
  const lastUpdated = "January 15, 2025"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
              <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>What Are Cookies?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a
                    website. They are widely used to make websites work more efficiently and provide information to
                    website owners about how users interact with their sites.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We use cookies to enhance your experience on our website and to help us understand how our site is
                    being used. Our cookies help us:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our website</li>
                    <li>Improve our website performance and functionality</li>
                    <li>Provide relevant content and advertisements</li>
                    <li>Analyze website traffic and usage patterns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Types of Cookies We Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Essential Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation, access to secure areas, and form submissions. The website cannot function
                      properly without these cookies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting and
                      reporting information anonymously. We use this information to improve our website and services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Functional Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies enable enhanced functionality and personalization, such as remembering your
                      preferences, language settings, and other customizations you've made to the website.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Marketing Cookies</h4>
                    <p className="text-muted-foreground">
                      These cookies are used to track visitors across websites to display relevant and engaging
                      advertisements. They may be set by us or by third-party providers whose services we use on our
                      pages.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Third-Party Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We may use third-party services that set cookies on our website, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms for sharing functionality</li>
                    <li>Marketing and advertising platforms</li>
                    <li>Customer support and chat services</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    These third parties have their own privacy policies and cookie practices, which we encourage you to
                    review.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Managing Your Cookie Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cookie Consent Banner</h4>
                    <p className="text-muted-foreground">
                      When you first visit our website, you'll see a cookie consent banner that allows you to accept or
                      customize your cookie preferences. You can change these preferences at any time by clicking the
                      cookie settings link in our website footer.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Browser Settings</h4>
                    <p className="text-muted-foreground">
                      You can also control cookies through your browser settings. Most browsers allow you to block or
                      delete cookies, though this may affect your experience on our website. Please note that disabling
                      essential cookies may prevent certain parts of our website from functioning properly.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cookie Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Different cookies have different retention periods. Some cookies are deleted when you close your
                    browser (session cookies), while others remain on your device for a set period or until you delete
                    them (persistent cookies). The retention period depends on the purpose of the cookie and your
                    settings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Updates to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                    operational, legal, or regulatory reasons. We will notify you of any material changes by updating
                    the "Last updated" date at the top of this policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about our use of cookies, please contact us:
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
