import React from 'react';

const MainScreen = () => {
  return (
    <div className="flex-1 flex flex-col h-screen bg-gray-100">
      <div className="p-4 bg-gray-200 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Selected Contact</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Chat messages would go here */}
        
      </div>
      <div className="p-4 bg-white border-t border-gray-300">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;

