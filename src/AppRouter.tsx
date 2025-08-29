import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./App"
import ServicesPage from "./pages/Services"
import BookingPage from "./pages/Booking"
import ConfirmationPage from "./pages/Confirmation"
import ContactPage from "./pages/Contact"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}