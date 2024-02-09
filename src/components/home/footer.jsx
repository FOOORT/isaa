import React from "react";
import FooterList from "../services/footerList";
import { LeftDummy, Center, RightDummy } from "@/components/static/footer";

const Footer = () => {
  return (
    <div className="text-yellow-100 w-full px-12 lg:px-32 py-10 lg:py-16 flex flex-col relative z-40 gap-4 lg:gap-12">
      <h1 className="uppercase text-xl">Connect</h1>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-2">
        <div className="w-full flex flex-col gap-4 p-4">
          <FooterList datas={LeftDummy} />
        </div>
        <div className="w-full flex flex-col gap-4 p-4">
          <FooterList datas={Center} />
        </div>
        <div className="w-full flex flex-col gap-4 p-4">
          <FooterList datas={RightDummy} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
