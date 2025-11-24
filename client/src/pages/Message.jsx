import React from "react";

const Message = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-primary mb-8">
        Messages from Deccan Stay
      </h1>

      {/* Message Info Card */}
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 max-w-3xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">
          🏨 Latest Hotel Offers & Updates
        </h2>

        <p className="text-gray-600 mb-4">
          Dear Hotel Partners,  
          Here are the latest updates and offers from <strong>Deccan Stay</strong> to help boost your bookings and maximize room occupancy.
        </p>

        {/* Example messages */}
        <div className="space-y-4 text-gray-700">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-lg text-gray-800">💸 Winter Special Discount</h3>
            <p>
              Offer a <strong>20% discount</strong> on deluxe and premium rooms from 
              <strong> November 10 – December 31, 2025</strong>.  
              Hotels that opt in will be featured on the Deccan Stay homepage under “Winter Getaways.”
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-lg text-gray-800">🏷️ Flash Special Offers </h3>
            <p>
              Deccan Stay is hosting a <strong>48-hour Flash Special Offer</strong> for partner hotels.  
              You can list limited rooms at discounted prices to attract instant bookings.  
              Register for the Offers before <strong>December 31, 2025</strong>.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg text-gray-800">🛏️ Room Vacancy Notifications</h3>
            <p>
              If your property has more than <strong>30% unsold rooms</strong>,  
              Deccan Stay will automatically promote your listing under the “Hot Deals” section to increase visibility.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-lg text-gray-800">🎁 Partner Loyalty Bonus</h3>
            <p>
              Hotels with consistent 90%+ guest satisfaction ratings will receive a 
              <strong>bonus listing credit</strong> and highlighted position for one week on the search results page.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-lg text-gray-800">⚠️ Booking Cancellation Policy Reminder</h3>
            <p>
              Please ensure your cancellation and refund policies are up-to-date to avoid guest disputes.  
              Deccan Stay’s support team will assist with necessary updates upon request.
            </p>
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-8 border-t pt-4 text-sm text-gray-500">
          Message from <span className="text-blue-600 font-semibold">Deccan Stay</span>:  
          <br />
          “We’re excited to help our hotel partners increase bookings through exciting offers,  
          seasonal discounts, and room promotions. Keep your listings active and updated for best results.”
        </div>
      </div>
    </div>
  );
};

export default Message;

