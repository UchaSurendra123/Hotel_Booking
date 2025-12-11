import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./UsersList";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("hotel");
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/owners/owners");

        if (res.data.owners) {
          const formattedOwners = res.data.owners.map((o) => ({
            hotel: o.hotelName,
            owner: o.name,
            role: "Owner",
            date: o.createdAt?.split("T")[0] || "",
          }));
          setUsers(formattedOwners);
        } else {
          setUsers([]);
        }
      } catch (err) {
        console.error("Failed to fetch owners:", err);
      }
    };
    fetchOwners();
  }, []);

  
  const filteredUsers = users
    .filter(
      (user) =>
        user.hotel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.owner.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "hotel") return a.hotel.localeCompare(b.hotel);
      if (sortOption === "owner") return a.owner.localeCompare(b.owner);
      if (sortOption === "date") return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-8">
      <h1 className="text-2xl font-bold text-primary mb-6">Admin Dashboard</h1>

      
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
        
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search hotels or owners"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600"
            />
          </div>

        
          <div className="flex items-center space-x-2">
            <label className="font-semibold text-gray-700">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1 text-gray-600"
            >
              <option value="hotel">Hotel Name</option>
              <option value="owner">Owner Name</option>
              <option value="date">Date</option>
            </select>
          </div>

        </div>
      </div>

     
      <h2 className="text-lg font-semibold text-gray-700 mb-4">List of Hotel Owners</h2>
      <UsersList users={filteredUsers} setUsers={setUsers} />
    </div>
  );
};

export default Dashboard;
