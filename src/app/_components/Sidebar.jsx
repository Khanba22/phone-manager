import React from 'react';

const ChatCard = ({ name, lastMessage, time }) => (
  <div className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
    <div className="flex-1">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
    </div>
    <span className="text-xs text-gray-500">{time}</span>
  </div>
);

const Sidebar = ({contacts,selectedContact,setSelectedContact}) => {
  const chats = [
    { name: "John Doe", lastMessage: "Hey, how are you?", time: "10:30 AM" },
    { name: "Jane Smith", lastMessage: "Can we meet tomorrow?", time: "Yesterday" },
    { name: "Bob Johnson", lastMessage: "Thanks for the info!", time: "Tuesday" },
  ];

  return (
    <div className="w-1/4 h-screen bg-white border-r border-gray-300">
      <div className="p-4 bg-gray-100 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Chats</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-64px)]">
        {chats.map((chat, index) => (
          <ChatCard key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

