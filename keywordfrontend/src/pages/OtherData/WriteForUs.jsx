import React from "react";

const WriteForUs = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl shadow-red-500/50 rounded-md mt-10 mb-10">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Submit Your Guest Post
        </h1>
        <p className="text-lg mb-4">
          We invite experts to share their stories, opinions, and suggestions
          with our audience through guest blogs and articles on Ytubetool. We
          will keep an eye on every guest post request. It would be best if you
          read our guidelines before sending any guest post requests, as we may
          reject a request that does not meet our guidelines.
        </p>

        <div className="mb-6">
          <strong>Note:</strong> We receive many requests daily, so we ask that
          you be patient. In most cases, we respond within 3-5 business days.
        </div>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>The Article/blog must have 800+ words minimum.</li>
          <li>The article/blog should be SEO optimized.</li>
          <li>
            The meta title, meta description, and focus keyword must be in the
            article/blog.
          </li>
          <li>
            It is crucial that your content is 100% unique and not copied from
            anywhere else.
          </li>
          <li>
            Your content should include paragraphs (not more than four lines),
            sub-section, and bullet points.
          </li>
          <li>2 to 3 images are a must based on your context.</li>
          <li>
            It is instructed that the context is in the form of a DOC document.
          </li>
          <li>Keep your grammar correct.</li>
          <li>Ensure that our Blog Editor has the right to edit your blog.</li>
        </ul>

        <p className="mb-4">
          Our editors will review your context once we select it. We will send
          you our comments if any significant changes need to be made.
        </p>

        <p className="font-semibold">
          For any queries, please email us at{" "}
          <a
            href="mailto:contact@ytubetool.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            keywords4ubusiness@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default WriteForUs;
