import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {

  const location = useLocation();
  const noDisplayNavFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
  return (
    <div>
      |<NavBar></NavBar>
      {/* {noDisplayNavFooter||<NavBar></NavBar>} */}
      <Outlet></Outlet>
      {noDisplayNavFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;