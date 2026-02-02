import React, { useState } from 'react';
import { FaPaperPlane, FaImage, FaVideo, FaMicrophone } from 'react-icons/fa';

const ChatInput = ({ onSend, setTyping }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend({ type: 'text', content: input });
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      onSend({ type, content: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="relative flex items-center p-4 bg-gray-100">
      <label className="cursor-pointer text-gray-700 p-2">
        <FaImage size={20} />
        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileUpload(e, 'image')} />
      </label>
      <label className="cursor-pointer text-gray-700 p-2">
        <FaVideo size={20} />
        <input type="file" accept="video/*" className="hidden" onChange={(e) => handleFileUpload(e, 'video')} />
      </label>
      <label className="cursor-pointer text-gray-700 p-2">
        <FaMicrophone size={20} />
        <input type="file" accept="audio/*" className="hidden" onChange={(e) => handleFileUpload(e, 'audio')} />
      </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
        className="flex-1 p-2 mx-2 border rounded-lg"
      />
      <button onClick={handleSend} className="bg-primary text-white p-2 rounded-lg shadow-md hover:bg-green-600 transition">
        <FaPaperPlane size={18} />
      </button>
    </div>
  );
};

export default ChatInput;
