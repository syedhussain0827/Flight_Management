import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          ✈ SkyBook
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          {user && (
            <Link
              to="/flights"
              className="hover:text-blue-600 transition"
            >
              Flights
            </Link>
          )}

          {user && (
            <Link
              to="/bookings"
              className="hover:text-blue-600 transition"
            >
              My Bookings
            </Link>
          )}

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="hover:text-blue-600 transition font-semibold"
            >
              Admin Panel
            </Link>
          )}

          {!user ? (
            <>
              <Link
                to="/login"
                className="
                px-4
                py-2
                border
                border-blue-600
                text-blue-600
                rounded-lg
                hover:bg-blue-50
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                px-4
                py-2
                bg-blue-600
                text-white
                rounded-lg
                hover:bg-blue-700
                "
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div
                className="
                bg-blue-100
                text-blue-700
                px-4
                py-2
                rounded-full
                font-medium
                "
              >
                👤 {user.name}
              </div>

              <button
                onClick={logout}
                className="
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-red-600
                "
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}