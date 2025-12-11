import React, { useState, useEffect } from "react";
import axios from "axios";

const OwnersList = ({ users, setUsers }) => {
  const [owners, setOwners] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [deletingIndex, setDeletingIndex] = useState(null);
  const [editData, setEditData] = useState({
    hotel: "",
    owner: "",
    role: "Owner",
  });

  
  useEffect(() => {
  const fetchOwners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/owners/owners");

      
      if (res.data.owners) {
        
        const formattedOwners = res.data.owners.map((o) => ({
          hotel: o.hotelName || "",
          owner: o.name || "",
          role: "Owner", 
          date: o.createdAt ? new Date(o.createdAt).toLocaleDateString() : "",
        }));
        setOwners(formattedOwners);
      } else {
        setOwners([]);
      }
    } catch (err) {
      console.error("Failed to fetch owners:", err);
      setOwners([]);
    }
  };

  fetchOwners();
}, []);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditData({
      hotel: users[index].hotel,
      owner: users[index].owner,
      role: users[index].role,
    });
  };

  const handleSave = (index) => {
    const updated = [...users];
    updated[index] = { ...updated[index], ...editData };
    setUsers(updated);
    setEditingIndex(null);
  };

  const handleDeleteClick = (index) => setDeletingIndex(index);

  const confirmDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
    setDeletingIndex(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      
      <div className="bg-gray-100 px-6 py-4 grid grid-cols-12 gap-4 text-sm font-semibold text-gray-500">
        <div className="col-span-4">Hotel Name</div>
        <div className="col-span-3">Owner Name</div>
        <div className="col-span-2">Role</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-1 text-center">Actions</div>
      </div>

      
      <div className="divide-y divide-gray-100">
        {users.map((user, index) => (
          <div
            key={index}
            className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition"
          >
            {editingIndex === index ? (
              <>
                <div className="col-span-4">
                  <input
                    value={editData.hotel}
                    onChange={(e) =>
                      setEditData({ ...editData, hotel: e.target.value })
                    }
                    className="border rounded-md px-2 py-1 w-full text-sm"
                  />
                </div>
                <div className="col-span-3">
                  <input
                    value={editData.owner}
                    onChange={(e) =>
                      setEditData({ ...editData, owner: e.target.value })
                    }
                    className="border rounded-md px-2 py-1 w-full text-sm"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    value={editData.role}
                    className="border rounded-md px-2 py-1 w-full text-sm"
                    disabled
                  />
                </div>
                <div className="col-span-2 text-gray-600 text-sm">{user.date}</div>
                <div className="col-span-1 flex justify-center gap-2">
                  <button
                    onClick={() => handleSave(index)}
                    className="text-green-600 text-sm hover:underline"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="text-gray-500 text-sm hover:underline"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : deletingIndex === index ? (
              <>
                <div className="col-span-11 text-sm text-red-600">
                  Are you sure you want to delete <b>{user.hotel}</b>?
                </div>
                <div className="col-span-1 flex justify-center gap-2">
                  <button
                    onClick={() => confirmDelete(index)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setDeletingIndex(null)}
                    className="text-gray-500 hover:underline text-sm"
                  >
                    No
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="col-span-4 font-medium text-gray-800">{user.hotel}</div>
                <div className="col-span-3 text-gray-700">{user.owner}</div>
                <div className="col-span-2">
                  <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm">
                    {user.role}
                  </span>
                </div>
                <div className="col-span-2 text-gray-600 text-sm">{user.date}</div>
                <div className="col-span-1 flex justify-center gap-3">
                  <img
                    src="https://static.codia.ai/image/2025-10-28/71q6BGj9ra.png"
                    alt="Edit"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleEditClick(index)}
                  />
                  <img
                    src="https://static.codia.ai/image/2025-10-28/S8r5ZKB0Fy.png"
                    alt="Delete"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleDeleteClick(index)}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnersList;