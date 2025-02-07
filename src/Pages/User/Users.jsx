import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  MoreVertical,
  Edit,
  Trash,
  Mail,
  UserPlus,
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";
import { LuView } from "react-icons/lu";
import Layout from "../../Components/Layout/Layout";

const UserTable = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [fingers, setFingers] = useState([]);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL; // Correct way in Vite

  const handleAction = (action, user) => {
    setOpenDropdownId(null);

    switch (action) {
      case "view":
        navigate(`/user/${user.id}`);
        break;
      case "edit":
        console.log("Edit user:", user);
        break;
      case "delete":
        console.log("Delete user:", user);
        break;
      case "email":
        console.log("Email user:", user);
        break;
      case "promote":
        console.log("Promote user:", user);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const fetchFingers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/fingers`);
        const data = await response.json();
        setFingers(data);
      } catch (error) {
        console.error("Error fetching fingerprint data:", error);
      }
    };

    fetchFingers();
  }, []);
  return (
    <Layout>
      <div className="w-full px-3 lg:px-[8rem]">
        <div className="px-4 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Finger print registration
          </h1>
          <p className="text-gray-600 mt-1">
            View and manage all registered users for fingerprint academy
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name / Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {fingers.map((finger) => (
                <tr key={finger._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {finger.fullname}
                    </div>
                    <div className="text-sm text-gray-500">{finger.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{finger.phone}</div>
                    <div className="text-sm text-gray-500">
                      {finger.country}, {finger.state}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Denomination: {finger.denomination}
                    </div>
                    <div className="text-sm text-gray-900">
                      Position: {finger.position}
                    </div>
                    <div className="text-sm text-gray-900">
                      Referred: {finger.referred}{" "}
                      {finger.referred === "yes" && `(${finger.who})`}
                    </div>
                    <div className="text-sm text-gray-900">
                      Yourself: {finger.yourself}
                    </div>
                    <div className="text-sm text-gray-900">
                      Received: {finger.received}
                    </div>
                    <div className="text-sm text-gray-900">
                      When: {finger.when}
                    </div>
                    <div className="text-sm text-gray-900">
                      Enough: {finger.enough}
                    </div>
                    <div className="text-sm text-gray-900">
                      Done: {finger.done}
                    </div>
                    <div className="text-sm text-gray-900">
                      Area: {finger.area}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <CheckCircle className="inline-block w-5 h-5 text-green-500" />

                    <XCircle className="inline-block w-5 h-5 text-red-500" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center relative">
                    <button
                      onClick={() =>
                        setOpenDropdownId(
                          openDropdownId === finger._id ? null : finger._id
                        )
                      }
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {openDropdownId === finger._id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu">
                          <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                            <Mail className="w-4 h-4 mr-2" /> Send Email
                          </button>
                          <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                            <Trash className="w-4 h-4 mr-2" /> Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UserTable;
