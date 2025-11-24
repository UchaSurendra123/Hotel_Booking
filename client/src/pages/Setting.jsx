import React from "react";

const Setting = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-primary mb-8">
        Settings
      </h1>

      {/* Settings Info Card */}
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 max-w-2xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">
          ⚙️ Deccan Stay Settings
        </h2>
        <p className="text-gray-600 mb-4">
          Manage your admin preferences and account settings for Deccan Stay. 
          You can update your profile, and configure system preferences here.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>✅ <span className="font-medium">Account:</span> Manage your profile.</p>
          <p>🏨 <span className="font-medium">Hotel Management:</span> Control property visibility and information.</p>
          <p>🔔 <span className="font-medium">Notifications:</span> Configure alerts and updates from Deccan Stay.</p>
        </div>

        <div className="mt-6 border-t pt-4 text-sm text-gray-500">
          Message from <span className="text-blue-600 font-semibold">Deccan Stay</span>:  
          <br />
          “Keep your settings up-to-date to ensure a smooth and secure experience on the Deccan Stay Admin Dashboard.”
        </div>
      </div>
    </div>
  );
};

export default Setting;
