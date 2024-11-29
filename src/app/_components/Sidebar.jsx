import React, { useState } from "react";

const AddContactModal = ({ isOpen, onClose, onAddContact }) => {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, contactNo);
    setName("");
    setContactNo("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="tel"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="Contact Number"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ContactCard = ({
  name,
  contactNo,
  selected,
  contact,
  setSelectedContact,
}) => (
  <div
    onClick={() => {
      console.log(contact);
      setSelectedContact(contact);
    }}
    className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
  >
    <div
      className={`w-12 h-12 bg-gray-${
        selected ? "300" : "900"
      } rounded-full mr-3 flex items-center justify-center`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
    <div className="flex-1">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{contactNo}</p>
    </div>
  </div>
);

const Sidebar = ({
  contacts,
  onAddContact,
  selectedContact,
  setSelectedContact,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-1/4 h-screen bg-white border-r border-gray-300 flex flex-col">
      <div className="p-4 bg-gray-100 border-b border-gray-300 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Contacts</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add Contact
        </button>
      </div>
      <div className="overflow-y-auto flex-1">
        {contacts.map((contact) => (
          <ContactCard
            setSelectedContact={setSelectedContact}
            contact={contact}
            selected={selectedContact._id === contact._id}
            key={contact._id}
            {...contact}
          />
        ))}
      </div>
      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={onAddContact}
      />
    </div>
  );
};

export default Sidebar;
