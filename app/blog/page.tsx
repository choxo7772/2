import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/uicard"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "5 Key Metrics Every SMB Should Track for Sustainable Growth",
    excerpt:
      "Discover the essential performance indicators that can help your small business make data-driven decisions and achieve consistent growth.",
    author: "Samara Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Strategy",
    image: "/business-analytics-dashboard-metrics.jpg",
    slug: "key-metrics-smb-growth",
  }

  const blogPosts = [
    {
      title: "Startup Funding Options: A Complete Guide for Entrepreneurs",
      excerpt:
        "Navigate the complex world of startup funding with this comprehensive guide covering everything from bootstrapping to venture capital.",
      author: "Samara Johnson",
      date: "2024-01-20",
      readTime: "10 min read",
      category: "Startup",
      image: "/startup-funding-investment-meeting.jpg",
      slug: "startup-funding-guide",
    },
    {
      title: "How to Optimize Your Business Operations for Maximum Efficiency",
      excerpt:
        "Learn practical strategies to streamline your operations, reduce waste, and improve productivity across your organization.",
      author: "Samara Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Operations",
      image: "/business-process-optimization.png",
      slug: "optimize-business-operations",
    },
    {
      title: "Financial Planning Strategies for Small Business Success",
      excerpt:
        "Essential financial planning techniques that can help your business weather economic uncertainty and plan for growth.",
      author: "Samara Johnson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Finance",
      image: "/financial-planning-charts-graphs.jpg",
      slug: "financial-planning-strategies",
    },
    {
      title: "Building a Strong Company Culture in Small Businesses",
      excerpt:
        "Why company culture matters for SMBs and practical steps to create an environment that attracts and retains top talent.",
      author: "Samara Johnson",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "Leadership",
      image: "/team-collaboration-company-culture.jpg",
      slug: "building-company-culture",
    },
    {
      title: "Digital Transformation for Traditional Businesses",
      excerpt:
        "A step-by-step guide to modernizing your traditional business operations with digital tools and technologies.",
      author: "Samara Johnson",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Technology",
      image: "/digital-transformation-technology-business.jpg",
      slug: "digital-transformation-guide",
    },
    {
      title: "Customer Retention Strategies That Actually Work",
      excerpt:
        "Proven methods to keep your customers coming back and turn them into loyal advocates for your business.",
      author: "Samara Johnson",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Marketing",
      image: "/customer-retention-loyalty-program.jpg",
      slug: "customer-retention-strategies",
    },
  ]

  const categories = ["All", "Strategy", "Operations", "Finance", "Leadership", "Technology", "Marketing", "Startup"]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Business Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Practical advice, strategies, and insights to help your business grow and thrive in today's competitive
              marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <CardTitle className="text-2xl mb-4 text-balance">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg text-balance group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/90 mb-8">
              Get the latest business insights and strategies delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
