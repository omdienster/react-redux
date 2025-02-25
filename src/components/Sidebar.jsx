import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { SiMaterialformkdocs } from "react-icons/si";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    // { name: "User", link: "/users", icon: AiOutlineUser },
    // { name: "messages", link: "/", icon: FiMessageSquare },
    // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    // { name: "Kategori", link: "/barangs", icon: TbCategory },
    { name: "Barang", link: "/products", icon: SiMaterialformkdocs },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  // const logout = () => {
  //     dispatch(LogOut());
  //     dispatch(reset());
  //     navigate("/");
  // };
  return (
    <div
      className={`bg-orange-400 min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-between">
        <h1
          style={{ transitionDelay: `${3}00ms` }}
          className={`whitespace-pre duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          } font-bold ps-2 `}
        >
          REACT+REDUX
        </h1>
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu, index) => (
          <Link
            to={menu.link}
            key={index}
            className={`${
              menu.margin && "mt-5"
            } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu.icon, { size: 20 })}</div>
            <h2
              style={{ transitionDelay: `${index + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              } `}
            >
              {menu.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
        {/* <Link
                    to={"/"}
                    className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                    <div>
                        <AiOutlineLogout size={20} />
                    </div>
                    <h2
                        style={{ transitionDelay: `${3 + 3}00ms`, }}
                        className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} `}>
                        <button className="button">
                            Logout
                        </button>
                    </h2>
                    <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                        Logout
                    </h2>
                </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
