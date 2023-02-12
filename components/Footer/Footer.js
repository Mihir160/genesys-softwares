import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-[500px] bg-[#171717]">
            <div className="flex flex-col items-center">
                <div className="lg:py-[59px] py-[30px]">
                    <Image src='/image 2.png' width={210} height={66}></Image>
                </div>
                <div className="lg:mt-[35px]">
                    <ul className=" items-center  space-x-8 lg:flex">
                        <li>
                            <Link href='#' className="text-[16px] pl-[30px] font-[600] text-[#FFFFFF]">Our Story</Link>
                        </li>
                        <li>

                            <Link href='#' className="text-[16px] font-[400] text-[#FFFFFF]">Community Involvement</Link>

                        </li>
                        <li>

                            <Link href='#' className="text-[16px] font-[400] text-[#FFFFFF]">Our Brands</Link>

                        </li>
                        <li>

                            <Link href='#' className="text-[16px] font-[400] text-[#FFFFFF]">Careers</Link>

                        </li>
                    </ul>
                </div>
                <div className="lg:mt-[59px] mt-[40px]">
                    <ul className="lg:flex gap-[12px] flex">
                        <li>
                            <div className="socialIcon flex items-center justify-center">
                                <FaLinkedinIn className='text-[#FFFFFF] my-[2px] mx-[2px]'></FaLinkedinIn>
                            </div>
                        </li>
                        <li>
                            <div className="socialIcon flex items-center justify-center">
                                <FaFacebookF className='text-[#FFFFFF] my-[2px] mx-[2px]'></FaFacebookF>
                            </div>
                        </li>
                        <li>
                            <div className="socialIcon flex items-center justify-center">
                                <FaYoutube className='text-[#FFFFFF] my-[2px] mx-[2px]'></FaYoutube>
                            </div>
                        </li>
                        <li>
                            <div className="socialIcon flex items-center justify-center">
                                <FaInstagram className='text-[#FFFFFF] my-[2px] mx-[2px]'></FaInstagram>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="lg:flex mt-[18px] gap-[39px]">
                    <h1 className="text-[12px] text-[#FFFFFF]">Privacy Policy</h1>
                    <h1 className="text-[12px] text-[#FFFFFF]">Terms and Conditions</h1>
                </div>
                <div className="mt-[21px]">
                    <h1 className="text-[12px]  text-[#FFFFFF]">© 2022 Malco Products Inc. All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;