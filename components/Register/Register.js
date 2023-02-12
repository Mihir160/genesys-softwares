import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const router = useRouter()
    const [error, setError] = useState('')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstname.value
        const lastName = form.lastname.value
        const email = form.email.value;
        const password = form.password.value;
        const users = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            role: 'user'

        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                fetch('https://genesys-softwares-server-site.vercel.app/user/register', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                    })
                form.reset();
                toast.success('Successfully register')
                router.push('/login')
                setError('')
            })
            .catch(error => {
                setError(error.message)

            })
    }
    return (
        <div>
            <div>
                <h1 className="text-[#000000] text-[700] text-[40px] text-center mt-[123px]">Sign up</h1>
                <div className="flex justify-center mt-[40px]">
                    <form onSubmit={handleRegister} className=" ">
                        <div className="flex flex-col gap-[8px]">
                            <label className="text-[#000000] text-[16px] font-[600]">First name</label>
                            <input placeholder="Enter your first name" name='firstname' className="loginInput pl-[16px] lg:w-[500px] w-[250px] xl:w-[600px] placeholder:pl-[3px] md:w-[350px] h-[40px] lg:h-[48px]" type="text" />
                        </div>
                        <div className="flex flex-col lg:mt-[32px] gap-[8px]">
                            <label className="text-[#000000] text-[16px] font-[600]">Last name</label>
                            <input placeholder="Enter your last name" name='lastname' className="loginInput pl-[16px] lg:w-[500px] w-[250px] xl:w-[600px] placeholder:pl-[3px] md:w-[350px] h-[40px] lg:h-[48px]" type="text" />
                        </div>
                        <div className="flex flex-col lg:mt-[32px] gap-[8px]">
                            <label className="text-[#000000] text-[16px] font-[600]">Email</label>
                            <input placeholder="your@email.com" name='email' className="loginInput pl-[16px] lg:w-[500px] w-[250px] xl:w-[600px] placeholder:pl-[3px] md:w-[350px] h-[40px] lg:h-[48px]" type="text" />
                        </div>
                        <div className="flex flex-col lg:mt-[32px] mt-[10px] gap-[8px]">
                            <label className="text-[#000000] text-[16px] font-[600]">Password</label>
                            <input name="password" placeholder="***********" className="loginInput pl-[16px] lg:w-[500px] xl:w-[600px] w-[250px] placeholder:pl-[3px] md:w-[350px] h-[40px] lg:h-[48px]" type="password" />
                        </div>
                        <div className="mt-[4px]">
                            <p className="text-red-600">{error}</p>
                        </div>
                        <div className="mt-[40px] mb-[180px] flex items-center gap-[24px]">
                            <button type="submit" className="lg:w-[109px] w-[100px] h-[45px] lg:h-[60px] bg-[#D2232A] text-[#FFFFFF] font-[600]">REGISTER</button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;