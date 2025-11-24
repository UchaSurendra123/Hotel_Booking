import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebarss = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate(); // ✅ useNavigate hook

  const menuItems = [
    { icon: 'https://static.codia.ai/image/2025-10-29/GODdQftYT8.png', label: 'Dashboard', key: 'dashboard' },
    { icon: 'https://static.codia.ai/image/2025-10-29/NM3nxLE3GC.png', label: 'Refunds', key: 'refunds' },
  ];

  const secondaryItems = [
    { icon: 'https://static.codia.ai/image/2025-10-29/LLxVKEKuMQ.png', label: 'Message', key: 'message' },
    { icon: 'https://static.codia.ai/image/2025-10-29/T0UaKc7zQD.png', label: 'Help', key: 'help' },
    { icon: 'https://static.codia.ai/image/2025-10-29/JeBCyDPtYi.png', label: 'Setting', key: 'setting' },
  ];

  const handleTabClick = (key) => {
    if (typeof setActiveTab === "function") {
      setActiveTab(key);
    }
  };

  const handleBack = () => {
    navigate("/verification-success"); // ✅ direct navigation
  };

  return (
    <aside className="w-64 bg-white h-screen flex flex-col justify-between">
      {/* Top menu */}
      <div>
        <div className="p-8 pb-14">
          <h1 className="font-poppins text-4xl font-medium text-dark">
            Deccan<span className="text-secondary">Stay</span>
          </h1>
        </div>

        <nav className="flex-1 px-8">
          <div className="space-y-8 mb-16">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className={`flex items-center space-x-4 cursor-pointer ${
                  activeTab === item.key ? "text-primary font-semibold" : "text-gray-medium"
                }`}
                onClick={() => handleTabClick(item.key)}
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {secondaryItems.map((item) => (
              <div
                key={item.key}
                className={`flex items-center space-x-4 cursor-pointer ${
                  activeTab === item.key ? "text-primary font-semibold" : "text-gray-medium"
                }`}
                onClick={() => handleTabClick(item.key)}
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Back button */}
      <div className="p-6">
        <button
          onClick={handleBack}
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded w-full"
        >
          ← Back
        </button>
      </div>
    </aside>
  );
};

export default Sidebarss;






















