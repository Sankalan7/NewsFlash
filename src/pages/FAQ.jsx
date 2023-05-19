import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-medium mb-2">
            What kind of news do you cover?
          </h2>
          <p className="text-gray-700">
            We cover a wide range of news topics including politics, sports,
            entertainment, science, technology, and more. Our goal is to provide
            a diverse range of news content that appeals to a broad audience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2">
            Do you publish fake news or clickbait headlines?
          </h2>
          <p className="text-gray-700">
            No, we do not publish fake news or use clickbait headlines to
            attract readers. We are committed to providing accurate and
            trustworthy news content that is thoroughly researched and verified.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2">
            Can I submit a news tip or story idea to your website?
          </h2>
          <p className="text-gray-700">
            Yes, we welcome news tips and story ideas from our readers. Please
            use the contact form on our website to submit your tip or idea, and
            our editorial team will review it.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            How frequently is the news content updated?
          </h2>
          <p className="text-gray-700">
            We update our news content on a daily basis to ensure that our
            readers are receiving the most up-to-date information available.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            Is your website free to use?
          </h2>
          <p className="text-gray-700">
            Yes, our website is completely free to use. We believe that everyone
            should have access to high-quality news content, regardless of their
            financial situation.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            Do you have a mobile app?
          </h2>
          <p className="text-gray-700">
            this time, we do not have a mobile app. However, our website is
            mobile-responsive and can be accessed from any device with an
            internet connection.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            Is my personal information safe on your website?
          </h2>
          <p className="text-gray-700">
            Yes, we take the privacy and security of our users very seriously.
            We use industry-standard encryption technology to protect your
            personal information and do not share your information with any
            third parties without your consent.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            Do you have a newsletter?
          </h2>
          <p className="text-gray-700">
            Yes, we have a newsletter that you can sign up for to receive the
            latest news stories and updates from our website. To sign up, please
            visit our Newsletter page and fill out the subscription form.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            How can I unsubscribe from your newsletter?
          </h2>
          <p className="text-gray-700">
            To unsubscribe from our newsletter, simply click the "unsubscribe"
            link at the bottom of any newsletter email you receive from us.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-2">
            Can I advertise on your website?
          </h2>
          <p className="text-gray-700">
            Yes, we offer advertising opportunities for businesses and
            organizations that would like to reach our audience. To learn more
            about our advertising options, please visit our Advertising page.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2">
            How can I contact your customer support team?
          </h2>
          <p className="text-gray-700">
            You can contact our customer support team by emailing
            <button className="text-blue-500 ml-1">
              {" "}
              support@newsflash.com
            </button>{" "}
            or by using the contact form on our website. Our team is available
            to assist you with any questions or concerns you may have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
