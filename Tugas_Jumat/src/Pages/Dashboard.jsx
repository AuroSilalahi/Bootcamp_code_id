import React from "react";
import { Outlet } from "react-router-dom";
import { doSignoutRequest } from "../Redux/Action/UserAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const navigate = [
  {
    name: "Dashboard",
    href: "/",
    current: true,
  },
  {
    name: "Product Category",
    href: "prodcat",
    current: false,
  },
];
export default function Dashboard() {
  const dispatch = useDispatch();
  const logout = useNavigate();
  const onLogout = async () => {
    dispatch(doSignoutRequest());
    logout("/");
  };

  return (
    <>
      <nav className="flex dark:bg-slate-900 items-center relative justify-between bg-white px-5 py-6 w-full">
        <div className="text-white">
          <p>STORE</p>
        </div>
        <div>
          <ul
            id="drawer"
            role="menu"
            className="sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900  "
          >
            {navigate.map((item) => {
              return (
                <li
                  key={item.name}
                  className="font-medium text-sm p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary"
                >
                  <a href={item.href} className="dark:text-white">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-3">
          <div>
            <ul className="sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900  ">
              {!window.sessionStorage.getItem("access_token") ? (
                <>
                  <li>
                    <a href="signin" className="text-white p-3">
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      href="signup"
                      className="text-slate-900 bg-white p-3 rounded-md"
                    >
                      Register
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <button
                    className="text-slate-900 bg-white px-3 py-2 rounded-md"
                    onClick={() => onLogout()}
                  >
                    Logout
                  </button>
                </>
              )}
            </ul>
          </div>
          <div className="sm:hidden cursor-pointer" id="mobile-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="dark:stroke-white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
