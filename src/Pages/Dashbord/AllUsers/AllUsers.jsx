import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserAltSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const { data: user = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name}:-Make Addmin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    const handleSingleItemDelete = user => {

    }
    return (
        <div className=" w-full">
            <Helmet>
                <title>Bistro | user</title>
            </Helmet>
            <h1 className="text-3xl font-semibold">{user.length}</h1>
            <div className="overflow-x-auto border">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            user.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.role === 'admin' ? 'Admin' :

                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn:lg  bg-orange-500 text-white">
                                                <FaUserAltSlash></FaUserAltSlash></button>

                                    }</td>
                                    <td>
                                        <button onClick={() => handleSingleItemDelete(user)} className="btn btn-ghost btn:lg  bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;