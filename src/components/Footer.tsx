import { Link } from "react-router-dom"
import { Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Elite Services</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium personal services delivered with excellence and care. Your wellness and satisfaction are our top
              priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/services" className="hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/booking" className="hover:text-accent transition-colors">
                Book Now
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">hello@eliteservices.com</p>
                <p className="text-muted-foreground text-sm">(555) 123-4567</p>
              </div>
              <div className="flex space-x-4 pt-2">
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <p className="text-center text-muted-foreground text-sm">© 2024 Elite Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
