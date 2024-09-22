import React from "react";
// import { BackgroundLines } from "../../Extras/background-lines";

const Aboutus = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl shadow-red-500/50 max-w-4xl mx-auto my-8">
      {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> */}
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      {/* The Gist Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">The Gist</h2>
        <p className="text-gray-700 leading-relaxed">
          We (the folks at Keywords4u) run a Keywords4u research service called
          Keywords4u.com and would love for you to use it. Our service is
          designed to help you find relevant Keywords for your YouTube Channel,
          websites, and mobile apps.
        </p>
      </section>

      {/* Terms of Service Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Terms of Service</h2>
        <p className="text-gray-700 leading-relaxed">
          The following terms and conditions govern all use of the
          Keywords4u.com website and all content, services, and products
          available at or through the website, including, but not limited to,
          the Keywords4u.com, (taken together, the Website). The Website is
          owned and operated by Keywords4u Tools Limited ("Keywords4u"). The
          Website is offered subject to your acceptance without modification of
          all of the terms and conditions contained herein and all other
          operating rules, policies (including, without limitation,
          Keywords4u.com Privacy Policy) and procedures that may be published
          from time to time on this Site by Keywords4u.com (collectively, the
          "Agreement").
        </p>
      </section>
      {/* </BackgroundLines> */}
    </div>
  );
};

export default Aboutus;
