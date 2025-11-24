import React, { useState } from "react";

const RoomsList = ({ rooms, setRooms }) => {
  const [deleteRoomId, setDeleteRoomId] = useState(null);
  const [editRoomId, setEditRoomId] = useState(null);
  const [editRoomData, setEditRoomData] = useState({ name: "", date: "", description: "" });

  const handleDelete = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms.splice(index, 1);
    setRooms(updatedRooms);
    setDeleteRoomId(null);
  };

  const handleEdit = (index) => {
    const room = rooms[index];
    setEditRoomId(index);
    setEditRoomData({ name: room.name, date: room.date, description: room.description });
  };

  const saveEdit = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index] = { ...updatedRooms[index], ...editRoomData };
    setRooms(updatedRooms);
    setEditRoomId(null);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-dark mb-1">
          List of Hotel Rooms
        </h3>
        <p className="text-sm text-gray-medium opacity-40">
          Manage your hotel rooms
        </p>
      </div>

      <div className="border-b border-gray-200"></div>

      {rooms.map((room, index) => (
        <div key={index}>
          <div className="p-6 flex items-start space-x-6">
            <img
              src={room.image}
              alt={room.name}
              className="w-16 h-16 rounded-lg"
            />

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-dark">
                  {room.name}
                </h4>

                <div className="flex space-x-2">
                  {/* Edit Button */}
                  <button
                    className="w-9 h-9 border border-blue-400 text-blue-600 rounded flex items-center justify-center"
                    onClick={() => handleEdit(index)}
                  >
                    <img
                      src="https://static.codia.ai/image/2025-10-29/mKcaDbJgnS.png"
                      alt="Edit"
                      className="w-full h-full"
                    />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="w-9 h-9 border border-blue-400 text-red-600 rounded flex items-center justify-center"
                    onClick={() =>
                      setDeleteRoomId(deleteRoomId === index ? null : index)
                    }
                  >
                    <img
                      src="https://static.codia.ai/image/2025-10-29/0U69JU0S9U.png"
                      alt="Delete"
                      className="w-full h-full"
                    />
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-medium opacity-40 mb-2">
                {room.date} - {room.description}
              </p>

              {/* Inline Edit Form */}
              {editRoomId === index && (
                <div className="bg-blue-50 border border-blue-300 p-2 rounded text-blue-700 text-sm space-y-2">
                  <input
                    type="text"
                    value={editRoomData.name}
                    onChange={(e) => setEditRoomData({ ...editRoomData, name: e.target.value })}
                    className="w-full p-1 border rounded"
                    placeholder="Room Name"
                  />
                  <input
                    type="text"
                    value={editRoomData.date}
                    onChange={(e) => setEditRoomData({ ...editRoomData, date: e.target.value })}
                    className="w-full p-1 border rounded"
                    placeholder="Date"
                  />
                  <input
                    type="text"
                    value={editRoomData.description}
                    onChange={(e) => setEditRoomData({ ...editRoomData, description: e.target.value })}
                    className="w-full p-1 border rounded"
                    placeholder="Description"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => saveEdit(index)}
                      className="px-2 py-1 bg-blue-500 text-white rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditRoomId(null)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Inline Delete Confirmation */}
              {deleteRoomId === index && (
                <div className="bg-red-50 border border-red-300 p-2 rounded text-red-700 text-sm flex justify-between items-center mt-2">
                  <span>Are you sure you want to delete?</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setDeleteRoomId(null)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="h-px bg-gray-200 mx-6"></div>
        </div>
      ))}
    </div>
  );
};

export default RoomsList;

