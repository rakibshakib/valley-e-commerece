import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)), url('./images/footerBg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#1B7FED] bg-opacity-30 h-full md:h-[100px] lg:h-[100px] pt-8 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center content-center layout-width">
          <div className="w-0 md:[w-100px]"></div>
          <div className="social-media-icon mt-3 mb-3">
            <div className="flex justify-between items-center text-white gap-4">
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaFacebook className="text-2xl" />
              <FaYoutube className="text-2xl" />
            </div>
          </div>

          <div className="flex-center text-white md:justify-self-end lg:justify-self-end">
            <FaPhoneAlt className="text-2xl" />
            <div className="ml-3 mt-2 md:mt-0 flex items-center md:flex-col lg:flex-col md:items-start lg:items-start">
              <p className="mr-3">Hotline</p>
              <p>01774747474</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black bg-opacity-65 h-full md:h-[300px] lg:h-[300px]  pb-5">
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-4 lg:grid-cols-4 text-white layout-width py-10">
          <div className="font-thin ">
            <Image
              src="/images/6vally-logo-1.png"
              width={160}
              height={80}
              alt="logo"
            />
            <p className="my-3">
              Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
              enim erat tortor ultricies{" "}
            </p>
            <p className="my-3">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            <p className="my-3">support@example.com</p>
            <div className="flex-center my-3">
              <Image
                src="/images/googlePay.png"
                width={160}
                height={80}
                alt="logo"
              />
              <Image
                src="/images/applePay.png"
                width={160}
                height={80}
                alt="logo"
              />
            </div>
          </div>
          <div className="justify-self-start md:justify-self-end lg:justify-self-end">
            <h4 className="text-xl font-bold">Accounts</h4>
            <ul className="flex flex-col gap-y-5 mt-5 font-thin">
              <li>Become & Delivary Man</li>
              <li>Open your store</li>
              <li>Profile</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className="justify-self-start md:justify-self-end lg:justify-self-end">
            <h4 className="text-xl font-bold">Quic Links</h4>
            <ul className="flex flex-col gap-y-5 mt-5 font-thin">
              <li>Become & Delivary Man</li>
              <li>Open your store</li>
              <li>Profile</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className="justify-self-start md:justify-self-end lg:justify-self-end">
            <h4 className="text-xl font-bold">Other</h4>
            <ul className="flex flex-col gap-y-5 mt-5 font-thin">
              <li>Become & Delivary Man</li>
              <li>Open your store</li>
              <li>Profile</li>
              <li>Help & Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1B7FED] bg-opacity-35 h-[50px] text-white text-center text-sm pt-5">
        2021 COPYRIGHT All Rights Reserved By 6amMart.com
      </div>
    </div>
  );
};

export default FooterBottom;
