import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <div className="w-full h-[720px]">
            <div className="headerImage" style={{ backgroundImage: `url("/Rectangle 2.png")` }}>
                <div className="flex justify-between">
                    <div className="xl:pt-[168px] pt-[100px] pl-[15px] lg:pl-[70px]">
                        <h1 className="header-content xl:text-[38px] lg:text-[20px] text-[10px] lg:font-[700] lg:w-[696px] text-[#FFFFFF]">A GLOBAl LEADER IN AUTOMOTIVE AND CLEANING PRODUCTS</h1>
                        <div className="w-[88px] h-[4px] bg-[#D2232A] mt-[16px]"></div>
                        <h2 className="header-text lg:w-[700px] xl:h-[128px] font-[400] lg:text-[14px] xl:text-[18px] xl:leading-8 tracking-[0.02em] text-[10px] mt-[16px]">Malco Products, Inc., was founded in 1953 in Barberton, Ohio by Murray <br /> Glauberman as a manufacturer of professional automotive and specialty <br /> cleaning products. Today, the company is still owned and operated by the same <br /> family.</h2>
                        <div className="xl:mt-[40px] lg:mt-[10px] mb-[50px]">
                            <button className="lg:w-[212px] w-[150px] h-[30px] lg:h-[48px]" style={{ backgroundImage: `url("/Rectangle 6.png")` }}><div className="flex items-center lg:gap-[35px] gap-[10px] justify-center">
                                <span className="font-[600] text-[#FFFFFF] lg:text-[16px]">LEARN MORE</span><FaArrowRight className="text-[#FFFFFF]"></FaArrowRight>
                            </div></button>
                        </div>
                    </div>
                    <div className="hidden md:hidden lg:block xl:block">
                        <div className="flex  items-center gap-0 ">

                            <Image className="relative lg:left-[-45px] lg:top-[55px]  xl:left-[130px] xl:top-[103px] 2xl:left-[138px]
                             2xl:top-[114px]" src='/Rectangle 16.png' width={225} height={200} alt=''></Image>
                            <Image className="relative lg:left-[-114px] xl:left-[1px]" src='/Union.png' width={516} height={800} alt=''></Image>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;