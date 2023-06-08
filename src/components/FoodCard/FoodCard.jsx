import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item || '';
    const { user } = useContext(AuthContext);
    const [, refetch]=useCart();
    const navigate = useNavigate();
    const location=useLocation();
    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const orderItem={menuItemId:_id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Foood Added on the carts.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch(); //refetch cart to update the number in the cart 
                })
        }
        else{
            Swal.fire({
                title: 'Please Login  then Order the foood',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login',{state: {from:location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 rounded bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col justify-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end mx-auto">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-200 text-black mb-4 border-0 border-b-4 border-orange-400">Add to crad</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;