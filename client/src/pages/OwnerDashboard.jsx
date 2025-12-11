import React, { useState, useEffect } from "react";
import Sidebarss from "./Sidebarss";
import Headersss from "./Headersss";
import SearchBars from "./SearchBars";
import Refund from "./Refund";
import Message from "./Message";
import Help from "./Help";
import Setting from "./Setting";

const OwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/owners/owners");
        const data = await res.json();

        if (res.ok) {
          const formatted = data.owners.map((hotel) => ({
            id: hotel._id,
            name: hotel.hotelName || "Unnamed Hotel",
            owner: hotel.name || "Unknown Owner",
            email: hotel.email || "N/A",
            phoneNo: hotel.phoneNo || "N/A",
            country: hotel.country || "N/A",
            nic: hotel.nic || "N/A",
            registrationNo: hotel.registrationNo || "N/A",
            address: hotel.address || "No Address",
            facilities: hotel.facilities || "No Facilities",

            
            images: hotel.uploadImages
              ? hotel.uploadImages.map((img) =>
                  encodeURIComponent(img.replace(/\\/g, "/"))
                )
              : [],

           
            pdfs: hotel.uploadDocuments
              ? hotel.uploadDocuments.map((doc) =>
                  encodeURIComponent(doc.replace(/\\/g, "/"))
                )
              : [],

            date: hotel.createdAt,
          }));

          setHotels(formatted);
        }
      } catch (err) {
        console.error("Error fetching owners:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  
  const filteredHotels = hotels
    .filter((hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "date")
        return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebarss activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Headersss />

        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <>
              <SearchBars onSearch={setSearchQuery} onSort={setSortOption} />

              {loading ? (
                <p className="text-center text-gray-500 mt-10">
                  Loading hotels...
                </p>
              ) : filteredHotels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHotels.map((hotel) => (
                    <div
                      key={hotel.id}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <img
                        src={
                          hotel.images.length
                            ? `http://localhost:5000/uploads/${hotel.images[0]}`
                            : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
                        }
                        className="w-full h-48 object-cover rounded mb-3"
                        alt="hotel"
                      />

                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <p className="text-gray-600 text-sm">
                        Owner: {hotel.owner}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Address: {hotel.address}
                      </p>

                      <button
                        onClick={() => {
                          setSelectedHotel(hotel);
                          setModalOpen(true);
                        }}
                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded text-sm"
                      >
                        View Details
                      </button>

                      <p className="text-gray-400 text-xs mt-2">
                        Registered: {new Date(hotel.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 mt-10">
                  No hotels found.
                </p>
              )}
            </>
          )}

          {activeTab === "refunds" && <Refund />}
          {activeTab === "message" && <Message />}
          {activeTab === "help" && <Help />}
          {activeTab === "setting" && <Setting />}

          
          {modalOpen && selectedHotel && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
              <div className="bg-white rounded-lg w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-xl flex flex-col">

                
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-semibold">Hotel Details</h2>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="text-red-600 font-bold text-2xl"
                  >
                    ✕
                  </button>
                </div>

                
                <div className="p-4 space-y-4 overflow-y-auto flex-1">
                  <img
                    src={
                      selectedHotel.images.length
                        ? `http://localhost:5000/uploads/${selectedHotel.images[0]}`
                        : "https://static.codia.ai/image/2025-10-29/Pite8uBEBg.png"
                    }
                    className="w-full h-64 object-cover rounded"
                    alt="Hotel"
                  />

                  <div className="space-y-1">
                    <p><strong>Hotel Name:</strong> {selectedHotel.name}</p>
                    <p><strong>Owner:</strong> {selectedHotel.owner}</p>
                    <p><strong>Email:</strong> {selectedHotel.email}</p>
                    <p><strong>Phone:</strong> {selectedHotel.phoneNo}</p>
                    <p><strong>Country:</strong> {selectedHotel.country}</p>
                    <p><strong>NIC:</strong> {selectedHotel.nic}</p>
                    <p><strong>Registration No:</strong> {selectedHotel.registrationNo}</p>
                    <p><strong>Address:</strong> {selectedHotel.address}</p>
                    <p><strong>Facilities:</strong> {selectedHotel.facilities}</p>
                  </div>

                 
                  {selectedHotel.pdfs.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-semibold">Uploaded Documents</h3>

                      {selectedHotel.pdfs.map((pdf, index) => (
                        <iframe
                          key={index}
                          src={`http://localhost:5000/uploads/${pdf}`}
                          className="w-full h-[400px] border rounded"
                          title={`PDF ${index + 1}`}
                        ></iframe>
                      ))}
                    </div>
                  )}
                </div>

               
                <div className="p-4 border-t text-right">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="bg-gray-700 text-white px-4 py-2 rounded"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default OwnerDashboard;
