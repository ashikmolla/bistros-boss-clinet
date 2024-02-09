import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";



const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    // 
    const Total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleSingleItemDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }

                    })
            }
        })
    }
    return (
        <div className='w-11/12 m-16 ms-4'>
            <Helmet>
                <title>Bistro | MY Cart</title>
            </Helmet>
            <div className="uppercase font-bold flex justify-evenly h-10">
                <h1 className=" text-3xl">Total Items <spen className='text-orange-300'> {cart.length}</spen></h1>
                <h1 className=" text-3xl">Total Price $ <spen className='text-orange-500'> {Total}</spen></h1>
                <button className="btn btn-warning btn-sm">Play </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] rounded uppercase">
                        <tr>
                            <th>
                                SL
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th className="text-end">Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            cart.map((item, index) =>

                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td> {item.name} </td>

                                    <td className="text-end">${item.price}</td>

                                    <td> <button onClick={() => handleSingleItemDelete(item)} className="btn btn-ghost btn:lg  bg-orange-500 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;