import React from "react";

const Refund = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-primary mb-8">
        Refund
      </h1>

      {/* Refund Info Card */}
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 max-w-2xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">
          💰 Deccan Stay Refund Policy
        </h2>

        <p className="text-gray-600 mb-4">
          Manage and review user refund requests on the Deccan Stay Admin Dashboard. 
          Ensure all refund claims are verified and processed securely.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>✅ <span className="font-medium">Refund Requests:</span> Review pending and completed refund cases.</p>
          <p>🕒 <span className="font-medium">Processing Time:</span> Refunds are typically processed within 5–7 business days.</p>
          <p>💳 <span className="font-medium">Payment Method:</span> Refunds will be credited to the user’s original payment mode.</p>
        </div>

        <div className="mt-6 border-t pt-4 text-sm text-gray-500">
          Message from <span className="text-blue-600 font-semibold">Deccan Stay</span>:  
          <br />
          “Please ensure that all refunds are handled promptly and fairly to maintain guest trust and satisfaction.”
        </div>
      </div>
    </div>
  );
};

export default Refund;
