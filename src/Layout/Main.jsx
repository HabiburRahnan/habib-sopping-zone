import { Outlet } from "react-router-dom";
import NavBar from "../Pages/shead/Navbar/Navbar";
import Footer from "../Pages/shead/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
