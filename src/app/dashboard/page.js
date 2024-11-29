"use client";
import React from "react";
import Sidebar from "../_components/Sidebar";
import MainScreen from "../_components/MainScreen";

const Dashboard = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar selectedContact = {selectedContact} handleContactSelect = {handleContactSelect} />
      <MainScreen />
    </div>
  );
};

export default Dashboard;
