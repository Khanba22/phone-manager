"use client";
import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../_components/Sidebar";
import MainScreen from "../_components/MainScreen";
import UserContext from "../_contexts/UserContext";

const DashboardContent = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const { userDetails } = useContext(UserContext);

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchContacts = async () => {
    if (!userDetails._id) {
      console.log(userDetails);
      return;
    }
    try {
      const response = await fetch("/api/contacts/get-user-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userDetails?._id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }
      console.log(data);
      setContacts(data.contacts);
    } catch (error) {
      console.log("Error fetching contacts:", error);
    }
  };

  const handleAddContact = async (name, contactNo) => {
    if (!userDetails._id) {
      alert("User not logged in");
      return;
    }
    console.log(userDetails);
    try {
      const response = await fetch("/api/contacts/add-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userDetails?._id,
          name,
          contactNo,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add contact");
      }

      // Refresh the contacts list after adding a new contact
      fetchContacts();
    } catch (error) {
      console.log("Error adding contact:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        contacts={contacts}
        onAddContact={handleAddContact}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      <MainScreen selectedContact={selectedContact}/>
    </div>
  );
};

const Dashboard = () => {
  return <DashboardContent />;
};

export default Dashboard;
