import { Navigation } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Button } from "./components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Star, Users, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background to-card py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                    Premium Personal Services
                    <span className="text-accent block">Tailored for You</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                    Experience excellence in fitness coaching, wellness consulting, and premium grooming services. Our
                    expert professionals are dedicated to helping you achieve your personal best.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/booking">
                      Book Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">4.9</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                    alt="Professional wellness coach in modern studio"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Premium Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover our range of personalized services designed to enhance your well-being and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Training",
                  description: "One-on-one fitness coaching tailored to your goals and lifestyle.",
                  image: "personal trainer working with client in modern gym",
                },
                {
                  title: "Wellness Consulting",
                  description: "Holistic approach to health, nutrition, and mental well-being.",
                  image: "wellness consultant in peaceful consultation room",
                },
                {
                  title: "Premium Grooming",
                  description: "Expert barber services for the modern professional.",
                  image: "luxury barber shop with professional styling chair",
                },
              ].map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-card rounded-xl p-6 h-full border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg mb-6 overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/${service.title}/400/300`}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
