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
  const navigate = useNavigate();
  const [applys, setApplys] = useState([]);

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
    const fetchApply = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/get-all`);
        const data = await response.json();
        setApplys(data);
      } catch (error) {
        console.error("Error fetching fingerprint data:", error);
      }
    };

    fetchApply();
  }, []);
  return (
    <div className="w-full px-3 lg:px-[8rem]">
      {/* Search and Filter Section */}

      <div className="px-4 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-800">
          All Program Applicant
        </h1>
        <p className="text-gray-600 mt-1">
          View and manage all registered users for all programs
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6"></div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name/Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Program
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Other
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
            {applys.map((apply) => (
              <tr key={apply.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {apply.fullName}
                  </div>
                  <div className="text-sm text-gray-500">{apply.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{apply.phone}</div>
                  <div className="text-sm text-gray-500">{apply.address}</div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Expectation: {apply.expectation}
                  </div>
                  <div className="text-sm text-gray-900">
                    How good are you: {apply.address}
                  </div>
                  <div className="text-sm text-gray-900">
                    Confidence level: {apply.address}
                  </div>
                  <div className="text-sm text-gray-900">
                    Skill: {apply.address}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {apply.verified ? (
                    <CheckCircle className="inline-block w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="inline-block w-5 h-5 text-red-500" />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center relative">
                  <button
                    onClick={() =>
                      setOpenDropdownId(
                        openDropdownId === apply.id ? null : apply.id
                      )
                    }
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {openDropdownId === apply.id && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1" role="menu">
                        <button
                          onClick={() => handleAction("view", apply)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          <LuView className="w-4 h-4 mr-2" /> View User
                        </button>
                        <button
                          onClick={() => handleAction("edit", apply)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          <Edit className="w-4 h-4 mr-2" /> Edit User
                        </button>
                        <button
                          onClick={() => handleAction("email", apply)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          <Mail className="w-4 h-4 mr-2" /> Send Email
                        </button>

                        <button
                          onClick={() => handleAction("delete", apply)}
                          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                        >
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
  );
};

export default UserTable;
