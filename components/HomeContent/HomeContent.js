import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HomeContent = () => {

    return (
        <div className="xl:mt-[120px] mt-[-300px]">
            <div>
                <h1 className="servingCustomer font-[700] lg:text-[48px] lg:leading-[48px] text-center lg:tracking-[0.02em] text-[#171717]">SERVING CUSTOMERS IN OVER 70 <br /> COUNTRIES</h1>
                <div className="mt-[16px]">
                    <h2 className="serving h-[64px] text-[18px] leading-[32px] text-center tracking-[0.02em] font-[400]">Since 1953, Malco has grown into a global manufacturing company with three world-<br />class production facilities in north east Ohio, producing multiple lines of business</h2>
                </div>
                <div className="lg:mt-[32px] mt-[100px]">
                    <div className="lg:flex-row  flex flex-col items-center lg:justify-center  gap-[16px]">
                        <div className="servingCard lg:w-[246.4px] lg:h-[250px]">
                            <Image className="pt-[64px] ml-[70px] lg:ml-[77px]" src='/image 13.png' width={92} height={60} alt=''></Image>
                            <h1 className="cardTitle mt-[52px]">AUTOMOTIVE DIVISION</h1>
                            <Image src='/Rectangle 14.png' width={246} height={10} className="mt-[40px]" alt=''></Image>
                        </div>
                        <div className="servingCard lg:w-[246.4px] lg:h-[250px]">
                            <Image className="pt-[64px] ml-[70px] lg:ml-[77px]" src='/image 14.png' width={92} height={60} alt=''></Image>
                            <h1 className="cardTitle mt-[52px]">PRODUCTS DIVISION</h1>
                            <Image src='/Rectangle 15.png' width={246} height={10} className="mt-[40px]" alt=''></Image>
                        </div>
                        <div className="servingCard lg:w-[246.4px] lg:h-[250px]">
                            <Image className="pt-[64px] ml-[75px] lg:ml-[77px]" src='/image 15.png' width={92} height={60} alt=''></Image>
                            <h1 className="cardTitle mt-[52px]">AUTO DRY WASH DIVISION</h1>
                            <Image src='/Rectangle 17.png' width={246} height={10} className="xl:mt-[40px] lg:mt-[18px]" alt=''></Image>
                        </div>
                        <div className="servingCard lg:w-[246.4px] lg:h-[250px]">
                            <Image className="pt-[77px] ml-[75px] lg:ml-[67px]" src='/image 16.png' width={112} height={28} alt=''></Image>
                            <h1 className="cardTitle mt-[71px]">AUTOMOTIVE CHEMICALS</h1>
                            <Image src='/Rectangle 18.png' width={246} height={10} className="xl:mt-[40px] lg:mt-[18px]" alt=''></Image>
                        </div>
                        <div className="servingCard lg:w-[246.4px] lg:h-[250px]">
                            <Image className="pt-[58px] ml-[80px] lg:ml-[92px]" src='/image 17.png' width={66} height={66} alt=''></Image>
                            <h1 className="cardTitle mt-[52px]">AUTOMOTIVE LUBRICANTS</h1>
                            <Image src='/Rectangle 19.png' width={246} height={10} className="xl:mt-[40px] lg:mt-[18px]" alt=''></Image>
                        </div>
                    </div>
                </div>
                <div className="mt-[120px]">
                    <div className="servingChoose lg:h-[647px] bg-[#F8F9FA] w-full">
                        <div className="flex flex-col lg:flex-row  lg:justify-center xl:gap-[77px]">
                            <div className="pt-[119px] text-center lg:text-left lg:pl-[0px]">
                                <h1 className="font-[700] lg:text-[48px] text-[#171717]">WHY CHOOSE US</h1>
                                <h3 className="chooseContent  lg:text-[18px] font-[400] lg:w-[583px] lg:h-[256px] lg:leading-[32px] lg:tracking-[0.02em] mt-[16px]">Malco Products, Inc. operates in the professional detailing and  automotive aftermarket under the Malco Automotive brand of  professional-grade cleaning and detailing products. Malco also  serves the automotive refinish industry with our line of Presta  Automotive paint correction and protection products, the marine  industry with the Presta Marine line of boat and RV detailing and  cleaning products, and the consumer household cleaning market  under legacy brands like Grease Relief, Jubilee, ZUD, and X-14.</h3>
                                <div className="lg:mt-[40px] mt-[30px] mb-[50px]">
                                    <button className="lg:w-[212px] w-[150px] h-[30px] lg:h-[48px]" style={{ backgroundImage: `url("/Rectangle 6.png")` }}><div className="flex items-center lg:gap-[35px] gap-[10px] justify-center">
                                        <span className="font-[600] text-[#FFFFFF] lg:text-[16px]">LEARN MORE</span><FaArrowRight className="text-[#FFFFFF]"></FaArrowRight>
                                    </div></button>
                                </div>
                            </div>
                            <div className="xl:mt-[131px] lg:mt-[50px]">
                                <div className="grid xl:grid-cols-3 grid-cols-2 lg:gap-[16px] gap-[8px]">
                                    <div className=" lg:w-[202px] h-[184px] bg-[#D2232A]">
                                        <h1 className="text-[#FFFFFF] text-center pt-[44px] lg:text-[30px] font-[700]">69 YEARS</h1>
                                        <h3 className="text-[#FFFFFF] text-center mt-[4px] lg:text-[16px] font-[600]">Of service and <br /> experience.</h3>
                                    </div>
                                    <div className="lg:w-[202px] h-[184px] bg-[#171717]">
                                        <h1 className="text-[#FFFFFF] text-center pt-[44px] lg:text-[30px] font-[700]">1.2 MILL.</h1>
                                        <h3 className="text-[#FFFFFF] text-center mt-[4px] lg:text-[16px] font-[600]">Cases produced <br /> per month</h3>
                                    </div>
                                    <div className="lg:w-[202px] h-[184px] bg-[#D2232A]">
                                        <h1 className="text-[#FFFFFF] text-center pt-[44px] lg:text-[30px] font-[700]">300+ EMPL</h1>
                                        <h3 className="text-[#FFFFFF] text-center mt-[4px] lg:text-[16px] font-[600]">Across locations in<br />north east Ohio</h3>
                                    </div>
                                    <div className="lg:w-[202px] h-[184px] bg-[#171717]">
                                        <h1 className="text-[#FFFFFF] text-center pt-[44px] lg:text-[30px] font-[700]">MT. 10</h1>
                                        <h3 className="text-[#FFFFFF] text-center mt-[4px] lg:text-[16px] font-[600]">Consumer Packaged<br /> Goods Partners</h3>
                                    </div>
                                    <div className="lg:w-[202px] h-[184px] bg-[#D2232A]">
                                        <h1 className="text-[#FFFFFF] text-center pt-[44px] lg:text-[30px] font-[700]">3</h1>
                                        <h3 className="text-[#FFFFFF] text-center mt-[4px] lg:text-[16px] font-[600]">Manudacturing<br />facilities</h3>
                                    </div>
                                    <div className="lg:w-[202px] h-[184px] bg-[#171717]">
                                        <h1 className="text-[#FFFFFF] text-center pt-[44px] lg:text-[30px] font-[700]">70+ CTRY</h1>
                                        <h3 className="text-[#FFFFFF] text-center mt-[4px] lg:text-[16px] font-[600]">Serving customers<br />in over 70 countries</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;