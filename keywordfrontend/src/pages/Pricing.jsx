import React from "react";
import { Tabs } from "../Extras/tabs";

const Pricing = () => {
  const tabs = [
    {
      title: "Monthly",
      value: "Monthly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Yearly",
      value: "Yearly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];
  return (
    <div className="h-full">
      <h2 className="text-4xl font-semibold mt-6 text-center">
        Plans & Pricing
      </h2>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-center my-4">
        <Tabs tabs={tabs} />
      </div>
      <div className="bg-slate-400 mt-12">
        <h2>Hello pricing</h2>
      </div>
    </div>
  );
};

export default Pricing;

const DummyContent = () => {
  return (
    <img
      src="https://keywords4u.com/assets/images/new-logo.png"
      alt="dummy image"
      width="100"
      height="100"
      className="object-cover object-left-top absolute inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
