import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    // const [error, setError]=useState()
    // console.log(user)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))

    }
    const navOption = <>
        <li><Link className="py-4" to='/'>Home</Link></li>
        <li><Link className="py-4" to='/menu'>Menu</Link></li>
        <li><Link className="py-4" to='/Order/salad'>OUR Shop(Order)</Link></li>
        <li><Link className="py-4" to='/secret'>Secret</Link></li>
        <li><Link className="py-4" target="_blank" to='াৃতদাহdksf;ka'>Secret</Link></li>

        {
            user ? <>

                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>

            </>
                : <>
                    <li><Link className="py-4" to='/login'>Login</Link></li>
                    <li><Link className="py-4" to='/signUp'>SignUp</Link></li>
                </>}

        <li>
            <Link className="p-0" to='/dashboard'>
                <button className="btn bg-none flex gap-2">   <FaShoppingCart></FaShoppingCart> <span className="badge badge-secondary">+{cart?.length || 0}</span> </button>
            </Link>
        </li>




    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-20 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 text-black">
                            {navOption}
                        </ul>
                    </div>

                    <div className=" text-center">
                        <a className="btn btn-ghost normal-case text-2xl font-bold">Bistro Boss </a>
                        <p className='text-sm -mt-3'>R E S T A U R A N T</p>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 justify-center items-center gap-2">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">


                    <a className="btn">{user?.displayName}</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;