import React from "react";

const AdminWelcome = () => {
  // Get current time to display appropriate greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="px-4 lg:px-[8rem] py-8 bg-gradient-to-r frohm-blue-50 to-blue-100">
      <div className="max-w-4xl bg-gradient-to-r from-blue-50 to-blue-100 p-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {getGreeting()}, Admin! 👋
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Welcome to admin dashboard to Monitor users registration.
        </p>
        <div className="flex gap-4 mt-4">
          {/* <div className="px-4 py-2 bg-green-100 rounded-lg">
            <span className="text-green-800 font-medium">System Status: All systems operational</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminWelcome;
