import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-full max-w-[1280px] mx-auto">
      {/* dashboard side bar */}

      {/* my creation */}
      <div className="col-span-4 md:col-span-3 min-h-screen  bg-orange-900 md:font-bold text-white">
        <ul className="menu md:p-4 dashboardItem ">
          {/* {isAdmin ? */}
          <>
            <li>
              <NavLink
                className="hover:bg-orange-400"
                to="dashboard/addProduct">
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/updateProduct">Update Product</NavLink>
            </li>
            <li>
              <NavLink to="dashboard/Product">Product</NavLink>
            </li>
          </>

          {/* : <></>} */}

          {/* shard links  */}
          <div className="divider"></div>

          <>
            <li>
              <NavLink className="hover:bg-orange-400" to="/">
                Home
              </NavLink>
            </li>
          </>
        </ul>
      </div>
      {/*dashboard content  */}
      <div className="col-span-8 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
