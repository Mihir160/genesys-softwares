import { useEffect, useState } from "react";

const UserProfil = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user/allusers`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    console.log(users)
    return (
        <div>
            <div>
                <h1 className="text-[#000000] text-center mt-[94px] font-[700] text-[40px] userProfile">User Profile</h1>
            </div>
            <div className="mt-[67px] max-w-[900px] mx-auto p-4 my-[90px]">
                <table className="table  border-l-0 border-r-0 w-full h-full ">
                    <thead className="bg-none">
                        <tr className="text-black/50 text-[14px] ">
                            <th className="pl-0 font-normal">First Name</th>
                            <th className="pl-0 font-normal">Last name</th>
                            <th className="pl-0 font-normal">Email</th>
                            <th className="pl-0 font-normal">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <>
                                {
                                    <tr key={user._id} className="">
                                        <td className="border-y-2 border-black/30 pl-0">
                                            {user.firstname}
                                        </td>
                                        <td className="border-y-2 border-black/30 pl-0">
                                            {user.lastname}
                                        </td>
                                        <td className="border-y-2 border-black/30 pl-0">
                                            {user.email}
                                        </td>
                                        <td className="border-y-2 border-black/30 pl-0">
                                            {user.password}
                                        </td>
                                    </tr>
                                }
                            </>
                        ))}
                    </tbody>
                </table>
                <div className="border-b-2 border-black/30">
                    <p className="py-[24px] ">
                        <span className="mr-[6px]">{users.length}</span>
                        <span>Users</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfil;