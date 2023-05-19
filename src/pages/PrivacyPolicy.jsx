import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-4">
          We take your privacy very seriously. This privacy policy describes how
          we collect and use personal information about you when you use our
          website.
        </p>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-8 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-500 mb-4">
          When you use our website, we may collect the following types of
          information from you:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Your name and contact details, such as your email address</li>
          <li>Information about your device and how you use our website</li>
          <li>Information about your location</li>
        </ul>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-500 mb-4">
          We use your information to provide you with the best possible service.
          Specifically, we may use your information in the following ways:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>To respond to your queries and requests</li>
          <li>To provide and improve our website</li>
          <li>
            To send you marketing communications, if you have opted in to
            receive them
          </li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-8 mb-4">
          Sharing Your Information
        </h2>
        <p className="text-gray-500 mb-4">
          We do not share your personal information with any third parties,
          except in the following circumstances:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            With our service providers, who process data on our behalf and are
            bound by confidentiality obligations
          </li>
          <li>
            If we are required to do so by law or in order to protect our rights
            or the rights of others
          </li>
        </ul>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 mt-8 mb-4">
          Your Rights
        </h2>
        <p className="text-gray-500 mb-4">
          You have the following rights in relation to your personal
          information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>To request access to your personal information</li>
          <li>To request correction of your personal information</li>
          <li>To request erasure of your personal information</li>
          <li>To object to processing of your personal information</li>
          <li>
            To request restriction of processing of your personal information
          </li>
          <li>
            To request the transfer of your personal information to another
            party
          </li>
        </ul>
        <h2 className="text-xl font-bold mb-4">Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>

        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <button className="text-blue-500">privacy@newsflash.com</button>.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
