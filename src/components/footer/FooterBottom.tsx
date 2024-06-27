import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div
      style={{
        backgroundImage: "url('./images/footerBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#1B7FED] bg-opacity-45  h-[65px] pt-2">
        <div className="grid grid-cols-3 justify-items-center content-center">
          <div className="w-[100px] "></div>
          <div className="social-media-icon mt-3 ">
            <div className="flex justify-between items-center text-white gap-4">
              <FaTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaFacebook className="text-2xl" />
              <FaYoutube className="text-2xl" />
            </div>
          </div>

          <div className="flex items-center text-white  ">
            <FaPhoneAlt className="text-2xl" />
            <div className="ml-3">
              <p>Hotline</p>
              <p>01774747474</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-70  h-[300px]">
        <div className="grid grid-cols-4 text-white w-[80%] mx-auto">
          <div>Social media</div>
          <div>
            <h4>Accounts</h4>
            <ul>
              <li>Become & Delivary Man</li>
              <li>Open your store</li>
              <li>Profile</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div>
            <h4>Quic Links</h4>
            <ul>
              <li>Become & Delivary Man</li>
              <li>Open your store</li>
              <li>Profile</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div>
            <h4>Other</h4>
            <ul>
              <li>Become & Delivary Man</li>
              <li>Open your store</li>
              <li>Profile</li>
              <li>Help & Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1B7FED] bg-opacity-35   h-[30px] text-white text-center text-sm">
        All rights reserved by © 2021
      </div>
    </div>
  );
};

export default FooterBottom;
