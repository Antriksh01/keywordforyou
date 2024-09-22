import React from "react";
import { CardBody, CardContainer, CardItem } from "../../Extras/3d-card";
import { FaExternalLinkAlt } from "react-icons/fa";

const Contactus = () => {
  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-2xl shadow-red-500/50 max-w-4xl mx-auto my-8">
        <h2 className="text-3xl text-center">Contact us</h2>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full">
              <img
                src="https://keywords4u.com/assets/images/q-r.jpeg"
                height="1000"
                width="1000"
                className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-row justify-center items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <p className="text-gray-500 mt-2">
                  You can reach us by scanning the QR code. Otherwise, you can
                  email us directly at
                </p>
                <h2 className="text-sm font-bold text-cyan-800 hover:text-red-900 inline-flex items-center">
                  keywords4ubusiness@gmail.com{" "}
                  <span className="ml-2">
                    <FaExternalLinkAlt />
                  </span>
                </h2>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default Contactus;
