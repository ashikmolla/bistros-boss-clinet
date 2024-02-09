import {  NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaThList, FaCalendarAlt, FaShoppingBag, FaEnvelope } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart]=useCart();
    return (
        <>

            <Helmet>
                <title>Bistro | DashBord</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col items-center justify-center ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                

                
                <div className="drawer-side bg-[#D1A054] ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full gap-2 bg-[#D1A054] text-base-content pt-10">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to='dashboard/home'><FaHome></FaHome> User Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='dashboard/reservartion'><FaCalendarAlt></FaCalendarAlt>Reservartion</NavLink>
                        </li>
                        <li>
                            <NavLink to='dashboard/histroy'><FaWallet></FaWallet> payment History</NavLink>
                        </li>
                        <li>
                            <NavLink to='dashboard/myCart'><FaShoppingCart></FaShoppingCart> My Cart
                            <spen className="badge badge-secondary"> +{cart?.length || 0}</spen>
                            
                            </NavLink>
                        </li>


                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink>  </li>
                        <li><NavLink to='/menu'><FaThList></FaThList> MENU</NavLink>  </li>
                        <li><NavLink to='/order/:category'><FaShoppingBag></FaShoppingBag> SHOP</NavLink>  </li>
                        <li><NavLink to='/'><FaEnvelope></FaEnvelope>CONTACT</NavLink>  </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;