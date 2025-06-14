import { Link } from "react-router-dom"

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-lg mb-4">
        Welcome to CodeX! These Terms of Service ("Terms") govern your access to and use of our website, services, and activities (collectively, "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Eligibility</h2>
      <p className="mb-4">
        You must be a student to participate in CodeX activities. By agreeing to these Terms, you represent and warrant that you are eligible to use our Services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Conduct</h2>
      <p className="mb-4">
        You agree to use our Services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Services. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
      <p className="mb-4">
        All content on the CodeX website, including text, graphics, logos, images, and software, is the property of CodeX or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without prior written permission from CodeX.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclaimers and Limitation of Liability</h2>
      <p className="mb-4">
        Our Services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. CodeX does not warrant that the Services will be uninterrupted or error-free. In no event shall CodeX be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, the Services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to Terms</h2>
      <p className="mb-4">
        We may revise these Terms at any time by updating this page. By using our Services, you agree to be bound by the current version of these Terms. We encourage you to review these Terms periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms of Service, please contact us via our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.
      </p>
    </div>
  )
} 