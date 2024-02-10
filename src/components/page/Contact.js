import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex ml-6 pt-6 pb-6 gap-10 justify-around">
      <div m-4 p-6>
        <h5 className="text-[#252422] font-semibold">
          Who should I contact if I need help & support?
        </h5>
        <p className="text-[#252422] mt-2">
          You can connect with Partner Support on{" "}
          <span className="text-[#ff6b35] font-semibold">010-01123456789</span>{" "}
          or write to{" "}
          <span className="text-[#ff6b35] font-semibold">
            partnersuport@zaikahub.in
          </span>
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
