"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Navigation } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Calendar, Clock, User, Mail, CheckCircle } from "lucide-react"
import { Loader2 } from "lucide-react"

const services = [
  { id: "personal-training", name: "Personal Training", duration: "60 min", price: "$120" },
  { id: "wellness-consulting", name: "Wellness Consulting", duration: "90 min", price: "$150" },
  { id: "premium-grooming", name: "Premium Grooming", duration: "45 min", price: "$85" },
  { id: "nutrition-coaching", name: "Nutrition Coaching", duration: "75 min", price: "$100" },
  { id: "massage-therapy", name: "Therapeutic Massage", duration: "60 min", price: "$110" },
  { id: "life-coaching", name: "Life Coaching", duration: "60 min", price: "$130" },
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
]

export default function BookingPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const preselectedService = searchParams.get("service")

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: preselectedService || "",
    date: "",
    timeSlot: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to confirmation page with booking data
    const bookingData = encodeURIComponent(JSON.stringify(formData))
    navigate(`/confirmation?booking=${bookingData}`)
  }

  const selectedService = services.find((s) => s.id === formData.service)
  const isFormValid = formData.fullName && formData.email && formData.service && formData.date && formData.timeSlot

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-gradient-to-br from-background to-card">
        {/* Header */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Book Your Service</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Schedule your appointment with our expert professionals. We'll take care of the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <Card className="bg-card border-border shadow-lg">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl font-semibold text-foreground">Booking Details</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill in your information to schedule your appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="bg-input border-border focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-input border-border focus:border-accent focus:ring-accent"
                        required
                      />
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Select Service
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="bg-input border-border focus:border-accent focus:ring-accent">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              <div className="flex items-center justify-between w-full">
                                <span>{service.name}</span>
                                <span className="text-muted-foreground text-sm ml-4">
                                  {service.duration} • {service.price}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Preferred Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="bg-input border-border focus:border-accent focus:ring-accent"
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Preferred Time
                      </Label>
                      <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                        <SelectTrigger className="bg-input border-border focus:border-accent focus:ring-accent">
                          <SelectValue placeholder="Choose a time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full text-lg py-6" disabled={!isFormValid || isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing Booking...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Booking Summary & Tips */}
              <div className="space-y-8">
                {/* Booking Summary */}
                {selectedService && (
                  <Card className="bg-accent/5 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-foreground">Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">Service:</span>
                        <span className="text-muted-foreground">{selectedService.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">Duration:</span>
                        <span className="text-muted-foreground">{selectedService.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">Price:</span>
                        <span className="text-accent font-semibold text-lg">{selectedService.price}</span>
                      </div>
                      {formData.date && formData.timeSlot && (
                        <>
                          <hr className="border-border" />
                          <div className="flex justify-between items-center">
                            <span className="text-foreground font-medium">Date & Time:</span>
                            <span className="text-muted-foreground">
                              {new Date(formData.date).toLocaleDateString()} at {formData.timeSlot}
                            </span>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Tips */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">Booking Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Arrive 10 minutes early</p>
                          <p className="text-sm text-muted-foreground">
                            This helps us start your session on time and ensures you get the full experience.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Cancellation policy</p>
                          <p className="text-sm text-muted-foreground">
                            Please provide at least 24 hours notice for cancellations or rescheduling.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">What to bring</p>
                          <p className="text-sm text-muted-foreground">
                            Just bring yourself! We provide all necessary equipment and materials.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Have questions about your booking? We're here to help.
                      </p>
                      <div className="space-y-1">
                        <p className="text-sm text-foreground">📧 hello@eliteservices.com</p>
                        <p className="text-sm text-foreground">📞 (555) 123-4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
