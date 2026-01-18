import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonAni from "./ButtonAni";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutState } from "../store/authSlice";

const Navbar = () => {
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const signoutClicked = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    dispatch(logoutState());
    navigate("/");
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* ===== DESKTOP VIEW (UNCHANGED) ===== */}
        <div className="flex h-24 items-center justify-evenly">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Wrangle logo" className="h-16 w-auto" />
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold">Wrangle</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-base text-gray-700">
            <NavLink label="Home" path="/" />
            <NavLink label="Equipments" path="/Equipments" />
            <NavLink label="Bookings" path="/Bookings" />
            <NavLink label="Contact us" path="/Contactus" />
            {role==='ADMIN' && <NavLink label="Add Equipment" path="/Add-Equipment" />}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6 text-base">
            {(role === "ADMIN" || role === "FARMER") ? (
              <ButtonAni classes="bg-red-600 rounded-full px-6 py-3 text-white">
                <span onClick={signoutClicked}>Sign out</span>
              </ButtonAni>
            ) : (
              <ButtonAni classes="bg-blue-600 rounded-full px-6 py-3 text-white">
                <NavLink label="Log In" path="/login" />
              </ButtonAni>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ===== MOBILE VIEW (FIXED) ===== */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col gap-4 px-6 py-6 text-base text-gray-700">

            <MobileLink label="Home" path="/" setOpen={setMobileOpen} />
            <MobileLink label="Equipments" path="/Equipments" setOpen={setMobileOpen} />
            <MobileLink label="Bookings" path="/Bookings" setOpen={setMobileOpen} />
            <MobileLink label="Contact us" path="/Contactus" setOpen={setMobileOpen} />
            {role==='ADMIN' && <NavLink label="Add Equipment" path="/Add-Equipment" />}

            {(role === "ADMIN" || role === "FARMER") ? (
              <button
                onClick={signoutClicked}
                className="mt-2 rounded-xl bg-red-600 py-3 text-white font-medium"
              >
                Sign out
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-blue-600 py-3 text-center text-white font-medium"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/* ===== Sub Components ===== */

const NavLink = ({ label, path }) => (
  <Link to={path} className="hover:text-black transition-colors">
    {label}
  </Link>
);

const MobileLink = ({ label, path, setOpen }) => (
  <Link
    to={path}
    onClick={() => setOpen(false)}
    className="font-medium hover:text-black"
  >
    {label}
  </Link>
);
