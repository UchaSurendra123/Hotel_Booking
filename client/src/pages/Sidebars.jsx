import React from "react"

const Sidebars = ({ activePage, setActivePage }) => {
  const menuItems = [
    {
      icon: "https://static.codia.ai/image/2025-10-28/ueP3kyqN1D.png",
      label: "Dashboard",
      key: "dashboard",
    },
    
    
    {
      icon: "https://static.codia.ai/image/2025-10-28/oQ31oYDaf8.png",
      label: "Refunds",
      key: "refunds",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/Y6kOvWn5KB.png",
      label: "Messages",
      key: "messages",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/Xsfj5zyzaB.png",
      label: "Help",
      key: "help",
    },
    {
      icon: "https://static.codia.ai/image/2025-10-28/cuopThxdCh.png",
      label: "Settings",
      key: "settings",
    },
  ]

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col py-6">
      {/* ✅ Logo / Title */}
      <h2 className="text-2xl font-semibold text-primary text-center mb-8">
        Deccan<span className="text-secondary">Stay</span>
      </h2>

      {/* ✅ Sidebar Menu */}
      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActivePage(item.key)}
            className={`flex items-center w-full px-6 py-3 text-lg transition-colors ${
              activePage === item.key
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-6 h-6 object-contain"
            />
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebars
