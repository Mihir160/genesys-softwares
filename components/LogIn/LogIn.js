import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {
    const { login } = useContext(AuthContext)
    const router = useRouter()
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState([]);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user
                fetch(`https://genesys-softwares-server-site.vercel.app/user/allusers/${email}`)
                    .then(res => res.json())
                    .then(data => setAdmin(data.role))
                toast.success('Successfully login')

                if (admin) {
                    router.push("/userProfile");
                } else {
                    router.push("/");
                }
                form.reset()

            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div>
            <div>
                <h1 className="text-[#000000] text-[700] text-[40px] text-center mt-[123px]">Log in</h1>
                <div className="flex justify-center mx-[25px]">
                    <div className="mt-[40px]">
                        <form onSubmit={handleLogin} className="">
                            <div className="flex flex-col gap-[8px]">
                                <label className="text-[#000000] text-[16px] font-[600]">Email</label>
                                <input required placeholder="your@email.com" name='email' className="loginInput pl-[16px] lg:w-[500px] w-[250px] xl:w-[600px] placeholder:pl-[3px] md:w-[350px] h-[40px] lg:h-[48px]" type="text" />
                            </div>
                            <div className="flex flex-col lg:mt-[32px] mt-[10px] gap-[8px]">
                                <label className="text-[#000000] text-[16px] font-[600]">Password</label>
                                <input required name="password" placeholder="***********" className="loginInput pl-[16px] lg:w-[500px] xl:w-[600px] w-[250px] placeholder:pl-[3px] md:w-[350px] h-[40px] lg:h-[48px]" type="password" />
                            </div>
                            <div className="mt-[4px]">
                                <p className="text-red-600">{error}</p>
                            </div>
                            <div className="mt-[40px] flex items-center gap-[24px]">
                                <button type="submit" className="lg:w-[109px] w-[100px] h-[45px] lg:h-[60px] bg-[#D2232A] text-[#FFFFFF] font-[600]">LOGIN</button>
                                <div>
                                    <Link href='/forgetPassword' className="font-[400] text-[13px] forgetColor">Forgot your password?</Link>
                                </div>
                            </div>

                        </form>

                        <div className="mt-[48px]">
                            <h1 className="text-[#000000] font-[700] text-[24px]">New Customer?</h1>
                            <p className="mt-[24px] font-[16px] forgetColor">Sign up for an account to take advantage of order tracking and <br /> history as well as pre-filled forms during checkout on  <br /> subsequent orders.</p>
                        </div>
                        <div className="mt-[24px] mb-[123px]">
                            <Link href='/register'>
                                <button className="lg:w-[132px] w-[100px] h-[45px] lg:h-[60px] text-[16px] font-[600] text-[#FFFFFF] bg-[#53D3D1]">
                                    REGISTER
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;