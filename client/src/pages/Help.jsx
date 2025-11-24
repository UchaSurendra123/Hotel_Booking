import React from "react";

const Help = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-primary mb-8">
        Help & Support
      </h1>

      {/* Deccan Stay Support Card */}
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 max-w-2xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">
          💬 Deccan Stay Support
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions, issues, or need assistance managing hotel data,
          bookings, or payments, the Deccan Stay support team is here to help you.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>
            📧 <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:support@deccanstay.com"
              className="text-blue-600 hover:underline"
            >
              support@deccanstay.com
            </a>
          </p>
          <p>
            📞 <span className="font-medium">Phone:</span>{" "}
            <a href="tel:+919000012345" className="text-blue-600 hover:underline">
              +91 90000 12345
            </a>
          </p>
          <p>
            🕒 <span className="font-medium">Support Hours:</span> Mon – Sat, 9 AM – 6 PM
          </p>
        </div>

        <div className="mt-6 border-t pt-4 text-sm text-gray-500">
          Thank you for being part of <span className="text-blue-600 font-semibold">Deccan Stay</span>.
          We’re committed to giving you the best admin experience possible.
        </div>
      </div>
    </div>
  );
};

export default Help;

