"use client"

import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { Navigation } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, Calendar, Clock, User, Mail, ArrowRight, Home } from "lucide-react"

const services = [
  { id: "personal-training", name: "Personal Training", duration: "60 min", price: "$120" },
  { id: "wellness-consulting", name: "Wellness Consulting", duration: "90 min", price: "$150" },
  { id: "premium-grooming", name: "Premium Grooming", duration: "45 min", price: "$85" },
  { id: "nutrition-coaching", name: "Nutrition Coaching", duration: "75 min", price: "$100" },
  { id: "massage-therapy", name: "Therapeutic Massage", duration: "60 min", price: "$110" },
  { id: "life-coaching", name: "Life Coaching", duration: "60 min", price: "$130" },
]

export default function ConfirmationPage() {
  const [searchParams] = useSearchParams()
  const [bookingData, setBookingData] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const bookingParam = searchParams.get("booking")
    if (bookingParam) {
      try {
        const data = JSON.parse(decodeURIComponent(bookingParam))
        setBookingData(data)
      } catch (error) {
        console.error("Error parsing booking data:", error)
      }
    }

    // Trigger fade-in animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [searchParams])

  const selectedService = bookingData ? services.find((s) => s.id === bookingData.service) : null

  if (!bookingData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">No booking information found</h1>
            <Button asChild>
              <Link to="/booking">Make a Booking</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-gradient-to-br from-background to-card">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Success Icon and Message */}
              <div className="text-center space-y-6 mb-12">
                <div className="relative">
                  <div className="mx-auto w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-accent animate-pulse" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto bg-accent/20 rounded-full animate-ping"></div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Booking Confirmed!</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Thank you for choosing Elite Services. Your appointment has been successfully scheduled and a
                    confirmation email has been sent to your inbox.
                  </p>
                </div>
              </div>

              {/* Booking Details Card */}
              <Card className="bg-card border-border shadow-lg mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-semibold text-foreground">Appointment Details</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Please save these details for your records
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Personal Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <User className="h-5 w-5 text-accent" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Full Name</p>
                            <p className="text-sm text-muted-foreground">{bookingData.fullName}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-accent" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Email Address</p>
                            <p className="text-sm text-muted-foreground">{bookingData.email}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Appointment Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                        Appointment Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Service</p>
                            <p className="text-sm text-muted-foreground">{selectedService?.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-accent" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Date</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(bookingData.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-accent" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Time</p>
                            <p className="text-sm text-muted-foreground">{bookingData.timeSlot}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Summary */}
                  {selectedService && (
                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-foreground">{selectedService.name}</p>
                          <p className="text-sm text-muted-foreground">Duration: {selectedService.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-accent">{selectedService.price}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-card border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Confirmation Email</p>
                        <p className="text-sm text-muted-foreground">
                          You'll receive a detailed confirmation email with all appointment information and preparation
                          instructions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Reminder Notification</p>
                        <p className="text-sm text-muted-foreground">
                          We'll send you a reminder 24 hours before your appointment with any specific instructions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Arrive & Enjoy</p>
                        <p className="text-sm text-muted-foreground">
                          Arrive 10 minutes early and get ready for an exceptional service experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Return to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link to="/services">
                    Book Another Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Contact Information */}
              <div className="text-center mt-12 p-6 bg-card/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Need to make changes or have questions about your appointment?
                </p>
                <div className="space-y-1">
                  <p className="text-sm text-foreground">📧 hello@eliteservices.com</p>
                  <p className="text-sm text-foreground">📞 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
