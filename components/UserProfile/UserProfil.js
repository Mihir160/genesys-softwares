import { useEffect, useState } from "react";

const UserProfil = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://genesys-softwares-server-site.vercel.app/user/allusers`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    console.log(users)
    return (
        <div>
            <div>
                <h1 className="text-[#000000] text-center mt-[94px] font-[700] text-[40px] userProfile">User Profile</h1>
            </div>
            <div className="mt-[67px] max-w-[900px]   mx-auto p-4 lg:my-[90px]">
                <table className=" border-l-0 border-r-0 w-full h-full ">
                    <thead>
                        <tr className="text-black/50 text-[14px] ">
                            <th className="pl-0 font-normal pb-[16px]">First Name</th>
                            <th className="pl-0 font-normal pb-[16px]">Last name</th>
                            <th className="pl-0 font-normal pb-[16px]">Email</th>
                            <th className="pl-0 font-normal pb-[16px]">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <>
                                {
                                    <tr key={user._id} className="text-center">
                                        <td className="border-y-2 text-[13px] border-black/30 pt-[24px] pl-0 pb-[24px]">
                                            {user.firstname}
                                        </td>
                                        <td className="border-y-2 text-[13px] border-black/30 pl-0 pt-[24px] pb-[24px]">
                                            {user.lastname}
                                        </td>
                                        <td className="border-y-2 text-[13px] border-black/30 pl-0 pt-[24px] pb-[24px]">
                                            {user.email}
                                        </td>
                                        <td className="border-y-2 text-[13px] border-black/30 pl-0 pt-[24px] pb-[24px]">
                                            {user.password}
                                        </td>
                                    </tr>
                                }
                            </>
                        ))}
                    </tbody>
                </table>
                <div className="border-b-2 border-black/30">
                    <p className="py-[24px] text-[16px] text-black ml-[15px] md:ml-[50px] lg:ml-[66px]">
                        <span className="">{users.length}</span>
                        <span className="ml-[4px]">Users</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfil;