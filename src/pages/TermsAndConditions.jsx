import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container max-w-6xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to NewsFlash, a news platform with voice search capabilities,
        forums, "for you" section, basic search, and top headlines. By accessing
        or using NewsFlash, you agree to be bound by these terms and conditions
        and our privacy policy.
      </p>

      <h2 className="text-lg font-bold mb-2">User Conduct</h2>
      <p className="mb-4">
        In using NewsFlash, you agree to follow these rules:
        <ul className="list-disc list-inside">
          <li>
            Do not use NewsFlash for illegal purposes or to harass others.
          </li>
          <li>
            Do not impersonate someone else or misrepresent your affiliation
            with a person or entity.
          </li>
          <li>
            Do not post content that is defamatory, obscene, or violates someone
            else's privacy or intellectual property rights.
          </li>
        </ul>
      </p>

      <h2 className="text-lg font-bold mb-2">Forums</h2>
      <p className="mb-4">
        NewsFlash offers forums where you can engage in discussions with other
        users. By using the forums, you agree to follow these guidelines:
        <ul className="list-disc list-inside">
          <li>
            Do not post spam, advertisements, or solicitations for business.
          </li>
          <li>
            Do not post content that is unrelated to the topic or violates
            someone else's privacy or intellectual property rights.
          </li>
          <li>
            Do not post personal information about others without their consent.
          </li>
        </ul>
      </p>

      <h2 className="text-lg font-bold mb-2">Voice Search</h2>
      <p className="mb-4">
        NewsFlash offers voice search capabilities to make it easier for you to
        find the news you are interested in. By using voice search, you agree to
        the following:
        <ul className="list-disc list-inside">
          <li>
            Do not use voice search while driving or operating heavy machinery.
          </li>
          <li>
            NewsFlash is not responsible for any inaccuracies or errors in voice
            search results.
          </li>
        </ul>
      </p>

      <h2 className="text-lg font-bold mb-2">Search and Top Headlines</h2>
      <p className="mb-4">
        NewsFlash offers basic search and top headlines sections to help you
        find the news you are interested in. By using these features, you agree
        to the following:
        <ul className="list-disc list-inside">
          <li>
            NewsFlash is not responsible for any inaccuracies or errors in
            search results or top headlines.
          </li>
          <li>
            Top headlines are provided by third-party sources and may contain
            content that is not suitable for all audiences.
          </li>
        </ul>
      </p>

      <h2 className="text-xl font-bold mb-4">
        Changes to Terms and Conditions
      </h2>
      <p className="mb-4">
        NewsFlash reserves the right to modify these terms and conditions at any
        time. Any changes we make to these terms and conditions will be
        effective immediately upon posting on this page. Your continued use of
        our website after any such changes constitutes your acceptance of the
        new terms and conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
