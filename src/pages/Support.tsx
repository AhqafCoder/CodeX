import { Mail, Phone, MapPin } from "lucide-react"

export default function Support() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Support</h1>
      <p className="text-lg mb-4">
        We're here to help! If you have any questions, issues, or need assistance, please reach out to us using the methods below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex items-start space-x-4">
          <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p className="text-muted-foreground">
              For general inquiries and support, please send us an email.
            </p>
            <a href="mailto:support@codex.com" className="text-primary hover:underline mt-2 inline-block">
              support@codex.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
            <p className="text-muted-foreground">
              For urgent matters, you can reach us by phone during business hours.
            </p>
            <a href="tel:+1234567890" className="text-primary hover:underline mt-2 inline-block">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Our Location</h2>
            <p className="text-muted-foreground">
              Visit us at our office during our open hours. Please make an appointment in advance.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              123 Code Street, Tech City, TC 98765
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          {/* Placeholder for FAQ or other support info */}
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <p className="text-muted-foreground">
            Check our Frequently Asked Questions section for quick answers.
          </p>
          <a href="/faq" className="text-primary hover:underline mt-2 inline-block">
            View FAQs
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground text-sm">
          Our support team strives to respond to all inquiries within 24-48 business hours.
        </p>
      </div>
    </div>
  )
} 