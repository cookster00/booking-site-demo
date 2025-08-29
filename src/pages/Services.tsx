import { Navigation } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Link } from "react-router-dom"
import { Clock, DollarSign, Star, ArrowRight } from "lucide-react"

const services = [
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "One-on-one fitness coaching tailored to your specific goals, fitness level, and lifestyle preferences.",
    duration: "60 minutes",
    price: "$120",
    features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
    image: "personal trainer working with client in modern gym",
  },
  {
    id: "wellness-consulting",
    name: "Wellness Consulting",
    description:
      "Comprehensive health and wellness guidance covering nutrition, mental health, and lifestyle optimization.",
    duration: "90 minutes",
    price: "$150",
    features: ["Holistic health assessment", "Personalized wellness plan", "Stress management", "Follow-up support"],
    image: "wellness consultant in peaceful consultation room",
  },
  {
    id: "premium-grooming",
    name: "Premium Grooming",
    description: "Expert barber services including precision cuts, beard styling, and premium grooming treatments.",
    duration: "45 minutes",
    price: "$85",
    features: ["Precision haircuts", "Beard styling", "Hot towel treatment", "Premium products"],
    image: "luxury barber shop with professional styling chair",
  },
  {
    id: "nutrition-coaching",
    name: "Nutrition Coaching",
    description: "Personalized nutrition planning and coaching to support your health and fitness objectives.",
    duration: "75 minutes",
    price: "$100",
    features: ["Meal planning", "Dietary analysis", "Supplement guidance", "Recipe recommendations"],
    image: "nutrition coach with healthy meal planning setup",
  },
  {
    id: "massage-therapy",
    name: "Therapeutic Massage",
    description: "Professional massage therapy for relaxation, recovery, and overall wellness enhancement.",
    duration: "60 minutes",
    price: "$110",
    features: ["Deep tissue massage", "Relaxation therapy", "Sports recovery", "Stress relief"],
    image: "serene massage therapy room with professional setup",
  },
  {
    id: "life-coaching",
    name: "Life Coaching",
    description: "Personal development coaching to help you achieve your goals and unlock your full potential.",
    duration: "60 minutes",
    price: "$130",
    features: ["Goal setting", "Personal development", "Mindset coaching", "Action planning"],
    image: "professional life coach in modern office setting",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-background to-card py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Our Premium Services</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
                Discover our comprehensive range of personalized services designed to enhance your well-being,
                confidence, and overall quality of life. Each service is delivered by expert professionals committed to
                your success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 bg-card border-border"
                >
                  <CardHeader className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/${service.id}/400/300`}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Duration and Price */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-lg">{service.price}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Star className="h-3 w-3 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200"
                    >
                      <Link to={`/booking?service=${service.id}`}>
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent/5 to-secondary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Book your preferred service today and take the first step towards achieving your personal goals with our
              expert guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/booking">
                  Book Any Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
