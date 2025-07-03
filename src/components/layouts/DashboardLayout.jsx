import { useState } from "react";
import { NavLink } from "react-router-dom";
import { appRoutes } from "../../routers";
import {
  FaChevronDown,
  FaUserCircle,
  FaCog,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const SidebarNavItem = ({ route, activeRoute, setActiveRoute }) => {
  const hasOptions = route.options?.length > 0;

  return (
    <div key={route.id} className="relative group">
      {route.path ? (
        <NavLink
          to={route.path}
          onClick={() => setActiveRoute(route.id)}
          className={({ isActive }) =>
            `flex items-center justify-between px-3 py-2 mx-1 my-0.5 rounded-md text-xs font-medium transition-all duration-300 ease-in-out ${
              isActive || activeRoute === route.id
                ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold shadow-sm"
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`
          }
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm">{route.icon.sidebar}</span>
            <span>{route.title}</span>
          </div>
          {hasOptions && (
            <FaChevronDown
              className={`text-[10px] text-gray-400 group-hover:rotate-180 transform transition-transform duration-200 ${
                activeRoute === route.id ? "rotate-180" : ""
              }`}
            />
          )}
        </NavLink>
      ) : (
        <div
          onClick={() => setActiveRoute(route.id)}
          className="flex items-center justify-between px-3 py-2 mx-1 my-0.5 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm">{route.icon.sidebar}</span>
            <span>{route.title}</span>
          </div>
          {hasOptions && (
            <FaChevronDown className="text-[10px] text-gray-400 group-hover:rotate-180 transform transition-transform duration-200" />
          )}
        </div>
      )}

      {hasOptions && (
        <div className="hidden group-hover:block absolute left-full top-0 w-52 bg-white border border-gray-100 rounded-md shadow-lg z-20 transition-all duration-200 ease-in-out">
          {route.options.map((sub) => (
            <SidebarNavItem
              key={sub.id}
              route={sub}
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const HeaderNavItem = ({ route }) => {
  const hasOptions = route.options?.length > 0;

  return (
    <div className="relative group/header">
      {route.path ? (
        <NavLink
          to={route.path}
          className={({ isActive }) =>
            `flex items-center space-x-1 text-xs font-medium py-1.5 px-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold shadow-sm"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            }`
          }
        >
          <span className="text-sm">{route.icon.header}</span>
          <span>{route.title}</span>
          {hasOptions && (
            <FaChevronDown className="text-[10px] text-gray-400 group-hover/header:rotate-180 transform transition-transform duration-200" />
          )}
        </NavLink>
      ) : (
        <div
          className="flex items-center space-x-1 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-1.5 px-2 rounded-md hover:bg-gray-50 cursor-default"
        >
          <span className="text-sm">{route.icon.header}</span>
          <span>{route.title}</span>
          {hasOptions && (
            <FaChevronDown className="text-[10px] text-gray-400 group-hover/header:rotate-180 transform transition-transform duration-200" />
          )}
        </div>
      )}

      {hasOptions && (
        <div className="hidden group-hover/header:block absolute top-full left-0 w-52 bg-white border border-gray-100 rounded-md shadow-lg z-30 transition-all duration-200 ease-in-out">
          {route.options.map((sub) => (
            <HeaderSubMenu key={sub.id} subRoute={sub} />
          ))}
        </div>
      )}
    </div>
  );
};

const HeaderSubMenu = ({ subRoute }) => {
  const hasOptions = subRoute.options?.length > 0;

  return (
    <div className="relative group/sub">
      <NavLink
        to={subRoute.path}
        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
      >
        <div className="flex items-center space-x-2">
          {subRoute.icon.header && (
            <span className="text-sm">{subRoute.icon.header}</span>
          )}
          <span>{subRoute.title}</span>
        </div>
        {hasOptions && (
          <FaChevronDown className="text-[10px] text-gray-400 group-hover/sub:rotate-180 transform transition-transform duration-200" />
        )}
      </NavLink>

      {hasOptions && (
        <div className="hidden group-hover/sub:block absolute right-full top-0 w-52 bg-white border border-gray-100 rounded-md shadow-lg z-40 transition-all duration-200 ease-in-out">
          {subRoute.options.map((nested) => (
            <HeaderSubMenu key={nested.id} subRoute={nested} />
          ))}
        </div>
      )}
    </div>
  );
};

const DashboardLayout = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState(appRoutes[0]?.id || 1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRoutes = appRoutes.filter((route) =>
    route.types.includes("header")
  );
  const sidebarRoutes = appRoutes.filter((route) =>
    route.types.includes("sidebar")
  );

  const logo = "https://i.pravatar.cc/300?u=jane";
  const userName = "Jane Doe";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-56 bg-white shadow-md border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-bold text-gray-800 tracking-tight">
            Healthcare Dashboard
          </h2>
        </div>

        <nav className="mt-2 px-1">
          {sidebarRoutes.map((route) => (
            <SidebarNavItem
              key={route.id}
              route={route}
              activeRoute={activeRoute}
              setActiveRoute={setActiveRoute}
            />
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-3 flex items-center justify-between border-b border-gray-200">
          {/* Left Section with Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover border-2 border-blue-100"
            />
            <h1 className="text-lg font-bold text-gray-800 tracking-tight">
              HealthSync
            </h1>
          </div>

          {/* Middle Section - Header Routes */}
          {headerRoutes.length > 0 && (
            <div className="flex items-center">
              {headerRoutes.map((route) => (
                <HeaderNavItem key={route.id} route={route} />
              ))}
            </div>
          )}

          {/* Right Section - User Profile */}
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <FaUserCircle size={24} className="text-gray-500" />
              <span className="text-xs font-semibold">{userName}</span>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <NavLink
                  to="/profile"
                  className="flex items-center px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="mr-1.5" size={12} />
                  Profile
                </NavLink>
                <NavLink
                  to="/settings"
                  className="flex items-center px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaCog className="mr-1.5" size={12} />
                  Settings
                </NavLink>
                <button
                  className="flex items-center w-full px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log("Logout clicked");
                  }}
                >
                  <FaSignOutAlt className="mr-1.5" size={12} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
