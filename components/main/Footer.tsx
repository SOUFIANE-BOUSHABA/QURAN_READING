import React from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent mt-[100px] text-gray-200 shadow-lg p-[15px] z-[20]">
      <div className="w-full flex flex-col items-center justify-center m-auto z-[20]">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-[20]">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] z-[20]">المجتمع</div>
            <Link
              href="https://github.com/SOUFIANE-BOUSHABA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </Link>
            <Link
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">SOUF!ANE BOUSHABA</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">وسائل التواصل الاجتماعي</div>
            <Link
              href="https://x.com/i/flow/login?redirect_after_login=%2FSoufianBoushab3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/soufian-boushaba-265600201/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">حول</div>
            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">التعرف علي</span>
            </div>
            <div className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                soufianboushaba12@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; soufian boushaba, All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
