import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Section = ({ heading, desciption, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="mt-1">
      <div className="flex justify-between">
        <span className="text-[#252422] font-semibold">{heading}</span>
        <div>
          {isVisible ? (
            <button
              onClick={() => setIsVisible(false)}
              className="font-semibold text-[#ff6b35]"
            >
              Hide
            </button>
          ) : (
            <button
              onClick={() => setIsVisible(true)}
              className="font-semibold text-[#ff6b35]"
            >
              Show
            </button>
          )}
        </div>
      </div>
      <p className="w-96">{isVisible && desciption}</p>
    </div>
  );
};

const Contact = () => {
  const [accordion, setAccordion] = useState("");
  return (
    <div className="flex ml-6 pt-6 pb-6 gap-10 justify-around">
      <div>
        <div className=" mb-4">
          <h5 className="text-[#252422] font-semibold">
            Who should I contact if I need help & support?
          </h5>
          <p className="text-[#252422] mt-1">
            You can connect with Partner Support on{" "}
            <span className="text-[#ff6b35] font-semibold">
              010-01123456789
            </span>{" "}
            or write to{" "}
            <span className="text-[#ff6b35] font-semibold">
              partnersuport@zaikahub.in
            </span>
          </p>
        </div>
        <Section
          isVisible={accordion === "headFirst"}
          setIsVisible={(value) => setAccordion(value ? "headFirst" : "")}
          heading={"The standard Lorem Ipsum passage, used since the 1500s"}
          desciption={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
        <Section
          isVisible={accordion === "headSecond"}
          setIsVisible={(value) => setAccordion(value ? "headSecond" : "")}
          heading={"1914 translation by H. Rackham"}
          desciption={
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          }
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
