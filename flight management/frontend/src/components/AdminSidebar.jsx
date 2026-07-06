import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {

  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin"
    },
    {
      name: "Create Flight",
      path: "/admin/create"
    },
    {
      name: "Bookings",
      path: "/admin/bookings"
    }
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-3xl font-bold">
          SkyBook
        </h1>

        <p className="text-sm text-slate-400">
          Admin Panel
        </p>

      </div>

      <div className="p-4">

        {
          menu.map(item => (

            <Link
              key={item.path}
              to={item.path}
              className={`
                block
                p-4
                rounded-xl
                mb-2
                transition
                ${
                  location.pathname === item.path
                  ?
                  "bg-blue-600"
                  :
                  "hover:bg-slate-800"
                }
              `}
            >
              {item.name}
            </Link>

          ))
        }

      </div>

    </div>
  );
}