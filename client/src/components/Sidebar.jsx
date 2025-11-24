import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    onLogout?.();
    navigate("/admin-login");
  };

  // 🧭 Main menu items
  const menuItems = [
    {
      icon: "https://static.codia.ai/image/2025-10-28/XHmSQYpDLw.png",
      label: "Dashboard",
      path: "/admin-dashboard",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/swvSpzKj3T.png",
      label: "Hotel Bookings",
      path: "/admin-dashboard/bookings",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/dRsSfCtpes.png",
      label: "Refund",
      path: "/admin-dashboard/refund",
    },
  ];

  // ⚙️ Secondary items
  const secondaryItems = [
    {
      icon: "https://static.codia.ai/image/2025-10-28/6Kr3KsHWXm.png",
      label: "Message",
      path: "/admin-dashboard/message",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/YJxkZ0cErv.png",
      label: "Help",
      path: "/admin-dashboard/help",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/DcPRoWYE5X.png",
      label: "Setting",
      path: "/admin-dashboard/setting",
    },
  ];

  return (
    <div className="w-64 bg-white flex flex-col shadow-md">
      <div className="p-8">
        <h1 className="font-poppins font-medium text-4xl text-dark">
          <span className="text-secondary">Deccan</span>Stay
        </h1>
      </div>

      <nav className="flex-1 px-8">
        <div className="space-y-8">
          {/* Main Menu */}
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="flex items-center space-x-4 cursor-pointer text-gray-600 hover:text-primary transition-colors"
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              <span className="text-base font-medium">{item.label}</span>
            </div>
          ))}

          {/* Secondary Menu */}
          <div className="space-y-8 pt-16">
            {secondaryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center space-x-4 cursor-pointer text-gray-600 hover:text-primary transition-colors"
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <span className="text-base font-medium">{item.label}</span>
              </div>
            ))}

            {/* 🚪 Logout */}
            <div
              onClick={handleLogout}
              className="flex items-center space-x-4 cursor-pointer text-red-500 font-semibold hover:text-red-600"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/fa314a/logout-rounded.png"
                alt="Logout"
                className="w-6 h-6"
              />
              <span className="text-base">Logout</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-0">
        <img
          src="https://static.codia.ai/image/2025-10-28/5QBjB6v9pu.png"
          alt="Get Pro"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Sidebar;
