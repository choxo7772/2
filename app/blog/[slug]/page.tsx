import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/uibutton"
import { Badge } from "@/components/uibadge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

// Blog post data
const blogPosts = {
  "key-metrics-smb-growth": {
    title: "5 Key Metrics Every SMB Should Track for Sustainable Growth",
    excerpt:
      "Discover the essential performance indicators that can help your small business make data-driven decisions and achieve consistent growth.",
    author: "Samara Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Strategy",
    image: "/business-analytics-dashboard-metrics.jpg",
    content: `
      <p>In today's competitive business landscape, small and medium-sized businesses (SMBs) need to make informed decisions based on solid data. However, with countless metrics available, it can be overwhelming to know which ones truly matter for your business growth.</p>
      
      <h2>1. Customer Acquisition Cost (CAC)</h2>
      <p>Understanding how much it costs to acquire a new customer is crucial for sustainable growth. Calculate your CAC by dividing your total marketing and sales expenses by the number of new customers acquired in a specific period.</p>
      
      <h2>2. Customer Lifetime Value (CLV)</h2>
      <p>CLV represents the total revenue you can expect from a customer throughout their relationship with your business. This metric helps you understand the long-term value of your customer relationships and justify your acquisition costs.</p>
      
      <h2>3. Monthly Recurring Revenue (MRR)</h2>
      <p>For subscription-based businesses or those with recurring revenue streams, MRR provides a clear picture of predictable income. This metric helps with forecasting and planning for future growth.</p>
      
      <h2>4. Cash Flow</h2>
      <p>Cash flow is the lifeblood of any business. Monitoring your cash flow helps you understand your business's financial health and ensures you can meet your obligations while investing in growth opportunities.</p>
      
      <h2>5. Employee Productivity</h2>
      <p>Measuring employee productivity through revenue per employee or other relevant KPIs helps you understand how efficiently your team is working and where improvements can be made.</p>
      
      <h2>Implementing These Metrics</h2>
      <p>Start by implementing tracking systems for these five key metrics. Use tools like Google Analytics, CRM systems, and financial software to automate data collection where possible. Regular review and analysis of these metrics will help you make informed decisions that drive sustainable growth.</p>
    `,
  },
  "startup-funding-guide": {
    title: "Startup Funding Options: A Complete Guide for Entrepreneurs",
    excerpt:
      "Navigate the complex world of startup funding with this comprehensive guide covering everything from bootstrapping to venture capital.",
    author: "Samara Johnson",
    date: "2024-01-20",
    readTime: "10 min read",
    category: "Startup",
    image: "/startup-funding-investment-meeting.jpg",
    content: `
      <p>Securing funding is one of the biggest challenges facing entrepreneurs today. With numerous funding options available, it's essential to understand which approach aligns best with your business goals, stage, and industry.</p>
      
      <h2>1. Bootstrapping</h2>
      <p>Self-funding your startup allows you to maintain complete control over your business. While it limits your initial capital, bootstrapping forces you to be resourceful and build a sustainable business model from day one.</p>
      
      <h2>2. Friends and Family</h2>
      <p>Often the first external source of funding, friends and family can provide initial capital with more flexible terms. However, mixing personal relationships with business can be challenging, so clear agreements are essential.</p>
      
      <h2>3. Angel Investors</h2>
      <p>Angel investors are typically high-net-worth individuals who invest their personal funds in early-stage startups. They often bring valuable experience and networks in addition to capital.</p>
      
      <h2>4. Venture Capital</h2>
      <p>VC firms invest institutional money in high-growth potential startups. While they provide significant capital and expertise, they typically require substantial equity and board representation.</p>
      
      <h2>5. Crowdfunding</h2>
      <p>Platforms like Kickstarter and Indiegogo allow you to raise funds from a large number of people. This approach also serves as market validation for your product or service.</p>
      
      <h2>6. Government Grants and Programs</h2>
      <p>Many governments offer grants, loans, and programs specifically designed to support startups and small businesses. These often come with favorable terms and don't require equity.</p>
      
      <h2>Choosing the Right Option</h2>
      <p>The best funding option depends on your business stage, industry, growth plans, and personal preferences. Consider factors like control, timeline, and the value-add beyond capital when making your decision.</p>
    `,
  },
  "optimize-business-operations": {
    title: "How to Optimize Your Business Operations for Maximum Efficiency",
    excerpt:
      "Learn practical strategies to streamline your operations, reduce waste, and improve productivity across your organization.",
    author: "Samara Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Operations",
    image: "/business-process-optimization.png",
    content: `
      <p>Operational efficiency is the cornerstone of business success. By optimizing your operations, you can reduce costs, improve customer satisfaction, and create a competitive advantage in your market.</p>
      
      <h2>Process Mapping and Analysis</h2>
      <p>Start by mapping out your current processes to identify bottlenecks, redundancies, and inefficiencies. Document each step and analyze where improvements can be made.</p>
      
      <h2>Automation Opportunities</h2>
      <p>Identify repetitive tasks that can be automated using technology. From customer service chatbots to automated invoicing, technology can free up your team to focus on higher-value activities.</p>
      
      <h2>Employee Training and Development</h2>
      <p>Invest in your team's skills and knowledge. Well-trained employees are more productive, make fewer errors, and contribute to overall operational efficiency.</p>
      
      <h2>Performance Metrics</h2>
      <p>Establish clear KPIs to measure operational performance. Regular monitoring helps you identify issues early and track the impact of your optimization efforts.</p>
      
      <h2>Continuous Improvement Culture</h2>
      <p>Foster a culture where employees are encouraged to suggest improvements. Often, the people closest to the work have the best insights into how processes can be optimized.</p>
    `,
  },
  "financial-planning-strategies": {
    title: "Financial Planning Strategies for Small Business Success",
    excerpt:
      "Essential financial planning techniques that can help your business weather economic uncertainty and plan for growth.",
    author: "Samara Johnson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Finance",
    image: "/financial-planning-charts-graphs.jpg",
    content: `
      <p>Effective financial planning is crucial for small business success. It provides a roadmap for growth, helps you prepare for challenges, and ensures you make informed decisions about your business's future.</p>
      
      <h2>Cash Flow Forecasting</h2>
      <p>Develop detailed cash flow projections to understand when money will come in and go out of your business. This helps you plan for seasonal fluctuations and identify potential cash shortfalls.</p>
      
      <h2>Emergency Fund Planning</h2>
      <p>Build an emergency fund to cover 3-6 months of operating expenses. This financial cushion helps you navigate unexpected challenges without compromising your business operations.</p>
      
      <h2>Investment Planning</h2>
      <p>Plan for strategic investments in equipment, technology, or expansion. Proper planning ensures you have the resources needed for growth opportunities when they arise.</p>
      
      <h2>Tax Strategy</h2>
      <p>Work with a qualified accountant to develop tax-efficient strategies. Proper tax planning can significantly impact your bottom line and free up resources for business growth.</p>
      
      <h2>Regular Financial Reviews</h2>
      <p>Conduct monthly financial reviews to track performance against your plans. Regular monitoring allows you to make adjustments and stay on track toward your financial goals.</p>
    `,
  },
  "building-company-culture": {
    title: "Building a Strong Company Culture in Small Businesses",
    excerpt:
      "Why company culture matters for SMBs and practical steps to create an environment that attracts and retains top talent.",
    author: "Samara Johnson",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Leadership",
    image: "/team-collaboration-company-culture.jpg",
    content: `
      <p>Company culture isn't just for large corporations. Small businesses that invest in building a strong culture see improved employee satisfaction, better retention rates, and increased productivity.</p>
      
      <h2>Define Your Values</h2>
      <p>Start by clearly defining your company's core values. These should reflect what your business stands for and guide decision-making at all levels of the organization.</p>
      
      <h2>Lead by Example</h2>
      <p>As a business owner or leader, your actions set the tone for your company culture. Demonstrate the behaviors and attitudes you want to see throughout your organization.</p>
      
      <h2>Communication and Transparency</h2>
      <p>Foster open communication and transparency. Regular team meetings, feedback sessions, and clear communication channels help build trust and engagement.</p>
      
      <h2>Recognition and Rewards</h2>
      <p>Implement systems to recognize and reward good performance. This doesn't always mean monetary rewards – sometimes acknowledgment and appreciation are equally valuable.</p>
      
      <h2>Work-Life Balance</h2>
      <p>Promote healthy work-life balance through flexible scheduling, remote work options, and respect for personal time. This shows you value your employees as whole people, not just workers.</p>
    `,
  },
  "digital-transformation-guide": {
    title: "Digital Transformation for Traditional Businesses",
    excerpt:
      "A step-by-step guide to modernizing your traditional business operations with digital tools and technologies.",
    author: "Samara Johnson",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Technology",
    image: "/digital-transformation-technology-business.jpg",
    content: `
      <p>Digital transformation isn't just a buzzword – it's a necessity for businesses that want to remain competitive in today's digital-first world. Here's how traditional businesses can successfully navigate this transformation.</p>
      
      <h2>Assess Your Current State</h2>
      <p>Begin by evaluating your current technology infrastructure, processes, and digital capabilities. Identify gaps between where you are and where you need to be.</p>
      
      <h2>Start with Customer-Facing Processes</h2>
      <p>Focus first on digitizing processes that directly impact customer experience. This might include online ordering systems, customer service portals, or mobile apps.</p>
      
      <h2>Invest in Cloud Technology</h2>
      <p>Cloud-based solutions offer scalability, cost-effectiveness, and accessibility. Start with basic cloud services and gradually expand your cloud adoption.</p>
      
      <h2>Data Analytics and Insights</h2>
      <p>Implement systems to collect and analyze customer data. These insights can drive better decision-making and help you understand your customers' needs and behaviors.</p>
      
      <h2>Employee Training and Change Management</h2>
      <p>Successful digital transformation requires buy-in from your team. Invest in training and support to help employees adapt to new technologies and processes.</p>
      
      <h2>Cybersecurity Considerations</h2>
      <p>As you digitize your operations, cybersecurity becomes increasingly important. Implement robust security measures to protect your business and customer data.</p>
    `,
  },
  "customer-retention-strategies": {
    title: "Customer Retention Strategies That Actually Work",
    excerpt: "Proven methods to keep your customers coming back and turn them into loyal advocates for your business.",
    author: "Samara Johnson",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Marketing",
    image: "/customer-retention-loyalty-program.jpg",
    content: `
      <p>Acquiring new customers is important, but retaining existing ones is often more cost-effective and profitable. Here are proven strategies to improve customer retention and build lasting relationships.</p>
      
      <h2>Exceptional Customer Service</h2>
      <p>Outstanding customer service is the foundation of customer retention. Train your team to go above and beyond in resolving issues and exceeding customer expectations.</p>
      
      <h2>Personalization</h2>
      <p>Use customer data to personalize interactions, recommendations, and communications. Customers appreciate when businesses understand their preferences and needs.</p>
      
      <h2>Loyalty Programs</h2>
      <p>Implement loyalty programs that reward repeat customers. These can include points systems, exclusive discounts, or special perks for long-term customers.</p>
      
      <h2>Regular Communication</h2>
      <p>Stay in touch with customers through newsletters, social media, and personalized messages. Regular communication keeps your brand top-of-mind.</p>
      
      <h2>Feedback and Improvement</h2>
      <p>Actively seek customer feedback and use it to improve your products and services. Customers appreciate when their input leads to tangible improvements.</p>
      
      <h2>Value-Added Services</h2>
      <p>Offer additional services or resources that provide value beyond your core product. This could include educational content, training, or complementary services.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Article Header */}
            <header className="mb-12">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">{post.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      SJ
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Business Consultant & Strategist</p>
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="text-center">
              <Button asChild>
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
