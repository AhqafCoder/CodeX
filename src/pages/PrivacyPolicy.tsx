import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        At CodeX, we are committed to protecting your privacy. This policy explains how we collect, use, and share your information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We collect information that you provide directly to us, such as when you register for an event, sign up for our newsletter, or contact us. This may include your name, email address, and other contact details.
      </p>
      <p className="mb-4">
        We also automatically collect certain information when you access and use our services, such as your IP address, device information, browser type, and usage data. This helps us understand how our services are used and improve your experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide, maintain, and improve our services.</li>
        <li>To communicate with you, including sending you updates, security alerts, and support messages.</li>
        <li>To personalize your experience and provide content and features that match your interests.</li>
        <li>To monitor and analyze trends, usage, and activities in connection with our services.</li>
        <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of CodeX and others.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
      <p className="mb-4">
        We do not share your personal information with third parties except as described in this policy:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>With your consent.</li>
        <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
        <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</li>
        <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of CodeX or others.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
      <p className="mb-4">
        You may update, correct, or delete information about you at any time by contacting us. If you wish to opt out of receiving promotional communications, you can do so by following the instructions in those communications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us via our <Link to="/contact" className="text-primary hover:underline">contact page</Link>.
      </p>
    </div>
  )
} 