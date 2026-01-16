


// import { FaBell, FaSearch, FaSignOutAlt } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      
//       {/* Title */}
//       <h1 className="title text-gray-800">
//         Dashboard
//       </h1>

//       {/* Right */}
//       <div className="flex items-center gap-5">
        
//         {/* Search */}
//         <div className="relative">
//           <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Recherche"
//             className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm outline-none"
//           />
//         </div>

//         {/* Notification */}
//         <div className="relative">
//           <FaBell className="text-gray-600 text-lg" />
//           <span className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//             3
//           </span>
//         </div>

//         {/* Avatar */}
//         <img
//           src="https://i.pravatar.cc/35"
//           alt="user"
//           className="w-9 h-9 rounded-full"
//         />

//         {/* Logout */}
//         <FaSignOutAlt className="text-gray-600 cursor-pointer" />
//       </div>
//     </header>
//   );
// };

// export default Header;
import { useState, useEffect } from "react";
import { FaBell, FaSearch, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = ({ userData, onLogout, sidebarOpen, toggleSidebar, notificationsData }) => {
  const location = useLocation();
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (notificationsData) setNotifications(notificationsData);
    else
      setNotifications([
        { id: 1, text: "Nouvelle réservation" },
        { id: 2, text: "Hôtel ajouté" },
        { id: 3, text: "Message reçu" },
      ]);
  }, [notificationsData]);

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/dashboard/hotels":
        return "Liste des hôtels";
      default:
        return "";
    }
  };

  const sidebarWidth = 322;
  const isDesktop = windowWidth >= 768;
  const headerStyle = isDesktop
    ? { marginLeft: `${sidebarWidth}px`, width: `calc(100% - ${sidebarWidth}px)` }
    : { marginLeft: 0, width: "100%" };

  return (
    <header
      className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6 shadow-sm fixed top-0 right-0 z-20"
      style={headerStyle}
    >
      {/* Hamburger mobile */}
      {!isDesktop && (
        <button
          className="text-gray-700 text-xl mr-2"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      )}

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800">{getTitle()}</h1>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-5">
        {/* Search */}
        {isDesktop && (
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Recherche"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        )}

        {/* Notification */}
        <div className="relative cursor-pointer">
          <FaBell
            className="text-gray-600 text-lg"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {notifications.length}
            </span>
          )}

          {/* Dropdown notifications */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg overflow-hidden z-50">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {n.text}
                </div>
              ))}
              {notifications.length === 0 && (
                <div className="px-4 py-2 text-sm text-gray-500">
                  Aucune notification
                </div>
              )}
            </div>
          )}
        </div>

        {/* Avatar */}
        <img
          src={userData?.avatar || "https://i.pravatar.cc/35"}
          alt="user"
          className="w-9 h-9 rounded-full"
        />

        {/* Logout */}
        <FaSignOutAlt
          className="text-gray-600 cursor-pointer hover:text-red-500 transition"
          onClick={onLogout}
          title="Déconnexion"
        />
      </div>
    </header>
  );
};

export default Header;


// import { FaBell, FaSearch, FaSignOutAlt } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// const Header = () => {
//   const location = useLocation();

//   const getTitle = () => {
//     switch (location.pathname) {
//       case "/dashboard":
//         return "Dashboard";
//       case "/dashboard/hotels":
//         return "Liste des hôtels";
//       default:
//         return "";
//     }
//   };

//   return (
//     <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      
//       {/* Title */}
//       <h1 className="text-xl font-semibold text-[#494C4F] title">
//         {getTitle()}
//       </h1>

//       {/* Right */}
//       <div className="flex items-center gap-5">
        
//         {/* Search */}
//         <div className="relative">
//           <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Recherche"
//             className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-gray-300"
//           />
//         </div>

//         {/* Notification */}
//         <div className="relative cursor-pointer">
//           <FaBell className="text-gray-600 text-lg" />
//           <span className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//             3
//           </span>
//         </div>

//         {/* Avatar */}
//         <img
//           src="https://i.pravatar.cc/35"
//           alt="user"
//           className="w-9 h-9 rounded-full"
//         />

//         {/* Logout */}
//         <FaSignOutAlt className="text-gray-600 cursor-pointer hover:text-red-500 transition" />
//       </div>
//     </header>
//   );
// };

// export default Header;
