import React, { useState } from "react";
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

const Program = () => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      fullName: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "08123439433",
      address: "12 Agege, Lagos",
      expectation: "to grow",
      gender: "Female",
      verified: true,
      balance: {
        skillToken: 400,
        mainBalance: 200,
      },
      identification: [
        {
          type: "Driver's License",
          id: "DL-98765432",
          expires: "12/2025",
        },
        {
          type: "National ID",
          id: "NIN-123456789",
          issued: "01/2020",
        },
        {
          type: "Passport",
          id: "PP-987654321",
          expires: "06/2027",
        },
        {
          type: "State ID",
          id: "SID-456789123",
          issued: "03/2022",
        },
      ],
    },
    {
      id: 2,
      fullName: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "08123439433",
      address: "12 Agege, Lagos",
      expectation: "to grow",
      gender: "Female",
      verified: true,
      balance: {
        skillToken: 400,
        mainBalance: 200,
      },
      identification: [
        {
          type: "Driver's License",
          id: "DL-98765432",
          expires: "12/2025",
        },
        {
          type: "National ID",
          id: "NIN-123456789",
          issued: "01/2020",
        },
        {
          type: "Passport",
          id: "PP-987654321",
          expires: "06/2027",
        },
        {
          type: "State ID",
          id: "SID-456789123",
          issued: "03/2022",
        },
      ],
    },
    {
      id: 3,
      fullName: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "08123439433",
      address: "12 Agege, Lagos",
      expectation: "to grow",
      gender: "Female",
      verified: true,
      balance: {
        skillToken: 400,
        mainBalance: 200,
      },
      identification: [
        {
          type: "Driver's License",
          id: "DL-98765432",
          expires: "12/2025",
        },
        {
          type: "National ID",
          id: "NIN-123456789",
          issued: "01/2020",
        },
        {
          type: "Passport",
          id: "PP-987654321",
          expires: "06/2027",
        },
        {
          type: "State ID",
          id: "SID-456789123",
          issued: "03/2022",
        },
      ],
    },
    {
      id: 4,
      fullName: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "08123439433",
      address: "12 Agege, Lagos",
      expectation: "to grow",
      gender: "Female",
      verified: true,
      balance: {
        skillToken: 400,
        mainBalance: 200,
      },
      identification: [
        {
          type: "Driver's License",
          id: "DL-98765432",
          expires: "12/2025",
        },
        {
          type: "National ID",
          id: "NIN-123456789",
          issued: "01/2020",
        },
        {
          type: "Passport",
          id: "PP-987654321",
          expires: "06/2027",
        },
        {
          type: "State ID",
          id: "SID-456789123",
          issued: "03/2022",
        },
      ],
    },
  ];

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

  return (
    <Layout>
      <div className="w-full px-3 lg:px-[8rem]">
        <div className="px-4 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800">
            All program registration
          </h1>
          <p className="text-gray-600 mt-1">
            View and manage all registered users for all program
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

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name/Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Other
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  More
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
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {user.fullName}
                    </div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.phone}</div>
                    <div className="text-sm text-gray-500">{user.address}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Expectation: {user.expectation}
                    </div>
                    <div className="text-sm text-gray-900">
                      How good are you: {user.address}
                    </div>
                    <div className="text-sm text-gray-900">
                      Confidence level: {user.address}
                    </div>
                    <div className="text-sm text-gray-900">
                      Skill: {user.address}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {user.verified ? (
                      <CheckCircle className="inline-block w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="inline-block w-5 h-5 text-red-500" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center relative">
                    <button
                      onClick={() =>
                        setOpenDropdownId(
                          openDropdownId === user.id ? null : user.id
                        )
                      }
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {openDropdownId === user.id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1" role="menu">
                          <button
                            onClick={() => handleAction("view", user)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <LuView className="w-4 h-4 mr-2" /> View User
                          </button>
                          <button
                            onClick={() => handleAction("edit", user)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <Edit className="w-4 h-4 mr-2" /> Edit User
                          </button>
                          <button
                            onClick={() => handleAction("email", user)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <Mail className="w-4 h-4 mr-2" /> Send Email
                          </button>

                          <button
                            onClick={() => handleAction("delete", user)}
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
    </Layout>
  );
};

export default Program;
