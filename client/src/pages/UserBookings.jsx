import React, { useState, useEffect } from "react";
import axios from "axios";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    hotelName: "",
    totalPrice: "",
    guests: "",
    createdAt: "",
  });

  
  useEffect(() => {
    const fetchAllBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/bookings/all-bookings"
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Admin fetch error:", error);
      }
    };

    fetchAllBookings();
  }, []);

  const filteredBookings = bookings
    .filter(
      (b) =>
        b.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.hotelName?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });

  const toggleSort = () =>
    setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"));

 
  const handleEdit = (booking) => {
    setEditingId(booking._id);
    setDeletingId(null);
    setEditData({
      name: booking.name,
      hotelName: booking.hotelName,
      totalPrice: booking.totalPrice,
      guests: booking.guests,
      createdAt: booking.createdAt,
    });
  };

  const handleDeleteClick = (id) => {
    setDeletingId(id);
    setEditingId(null);
  };

  const confirmDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.error("❌ Error deleting booking:", err);
    }
    setDeletingId(null);
  };

  const cancelDelete = () => setDeletingId(null);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/bookings/${id}`,
        editData
      );

      if (res.data.success) {
        const updatedBookings = bookings.map((b) =>
          b._id === id ? res.data.booking : b
        );
        setBookings(updatedBookings);
        setEditingId(null);
      } else {
        console.error("⚠️ Error updating booking:", res.data.message);
      }
    } catch (err) {
      console.error("❌ Error saving booking:", err);
    }
  };

  const handleCancelEdit = () => setEditingId(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-primary mb-8">
          List of Hotel Bookings
        </h1>

        
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search by user or hotel"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              onClick={toggleSort}
              className="bg-gray-100 px-4 py-3 rounded-xl hover:bg-gray-200 transition"
            >
              Sort by:{" "}
              <span className="font-semibold">
                {sortOrder === "latest" ? "Latest" : "Oldest"}
              </span>
            </button>
          </div>
        </div>

      
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th className="py-3 px-6 rounded-l-xl">User Name</th>
                  <th className="py-3 px-6">Hotel Name</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6">No. of Persons</th>
                  <th className="py-3 px-6">Booked Date</th>
                  <th className="py-3 px-6 rounded-r-xl">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.map((booking) =>
                  editingId === booking._id ? (
                  
                    <tr key={booking._id} className="border-b bg-blue-50">
                      <td className="py-3 px-6">
                        <input
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="text"
                          name="hotelName"
                          value={editData.hotelName}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="number"
                          name="totalPrice"
                          value={editData.totalPrice}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="number"
                          name="guests"
                          value={editData.guests}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6">
                        <input
                          type="date"
                          name="createdAt"
                          value={editData.createdAt?.split("T")[0]}
                          onChange={handleChange}
                          className="w-full border rounded-lg px-2 py-1"
                        />
                      </td>

                      <td className="py-3 px-6 flex gap-3">
                        <button
                          onClick={() => handleSave(booking._id)}
                          className="text-green-600 font-semibold hover:underline"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-gray-500 hover:underline"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ) : deletingId === booking._id ? (
                   
                    <tr key={booking._id} className="bg-red-50 border-b">
                      <td colSpan="6" className="py-4 text-center">
                        <span className="font-semibold mr-4">
                          Confirm delete?
                        </span>
                        <button
                          onClick={() => confirmDelete(booking._id)}
                          className="text-red-600 font-bold mx-2"
                        >
                          Yes
                        </button>
                        <button
                          onClick={cancelDelete}
                          className="text-gray-600 mx-2"
                        >
                          No
                        </button>
                      </td>
                    </tr>
                  ) : (
                  
                    <tr
                      key={booking._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-6">{booking.name}</td>
                      <td className="py-3 px-6">{booking.hotelName}</td>
                      <td className="py-3 px-6">₹{booking.totalPrice}</td>
                      <td className="py-3 px-6">{booking.guests}</td>
                      <td className="py-3 px-6">
                        {new Date(booking.createdAt).toLocaleDateString(
                          "en-IN"
                        )}
                      </td>

                      <td className="py-3 px-6 flex gap-4">
                        <img
    src="https://static.codia.ai/image/2025-10-28/71q6BGj9ra.png"
    alt="Edit"
    className="w-6 h-6 cursor-pointer hover:scale-110 transition"
    onClick={() => handleEdit(booking)}
  />

                        <img
    src="https://static.codia.ai/image/2025-10-28/S8r5ZKB0Fy.png"
    alt="Delete"
    className="w-6 h-6 cursor-pointer hover:scale-110 transition"
    onClick={() => handleDeleteClick(booking._id)}
  />
                      </td>
                    </tr>
                  )
                )}

                {filteredBookings.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserBookings;
