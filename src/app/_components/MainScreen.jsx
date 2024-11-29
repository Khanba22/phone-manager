import React, { useState } from 'react';

const MainScreen = ({ selectedContact, onUpdateContact, onDeleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(selectedContact);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdateContact(editedContact);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      onDeleteContact(selectedContact.id);
    }
  };

  if (!selectedContact) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-500">Select a contact to view details</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Contact Details</h2>
          <div className="space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedContact.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 text-lg text-gray-900">{selectedContact.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedContact.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 text-lg text-gray-900">{selectedContact.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            {isEditing ? (
              <input
                type="tel"
                name="contactNo"
                value={editedContact.contactNo}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 text-lg text-gray-900">{selectedContact.contactNo}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

