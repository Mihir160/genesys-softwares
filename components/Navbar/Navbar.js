import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div class="bg-[#171717]">
                <div class="px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div class="relative flex items-center justify-between">
                        <div>
                            <Image src='/image 2.png' width={158} height={50} alt=''></Image>
                        </div>
                        <ul class="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link href='#' className="text-[16px] font-[600] text-[#FFFFFF]">Our Story</Link>
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
                        <ul class="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <div className="loginSignup">
                                    <div className="mt-[5px] ml-[25px]">
                                        <Link className="text-[16px] text-[#FFFFFF]" href='/login'>Login</Link>
                                        <span className="text-[#FFFFFF]">/</span>
                                        <Link href='#' className="text-[16px] text-[#FFFFFF]" >Sign up</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div class="absolute top-0 left-0 w-full">
                                    <div class="p-5 bg-[#171717] border rounded shadow-sm">
                                        <div class="flex items-center justify-between mb-4">
                                            <div>
                                                <Image src='/image 2.png' width={158} height={50}></Image>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul class="space-y-4">
                                                <li>
                                                    <Link href='#' className="text-[16px] font-[600] text-[#FFFFFF]">Our Story</Link>
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
                                                <li>
                                                    <div className="loginSignup">
                                                        <div className="mt-[5px] ml-[10px]">
                                                            <div><Link className="text-[16px] text-[#FFFFFF]" href='/login'>Login</Link></div>
                                                            <span className="text-[#FFFFFF]">/</span>
                                                            <div><Link href='/register' className="text-[16px] text-[#FFFFFF]" >Sign up</Link></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;