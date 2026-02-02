import React, { useState } from "react";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import ChatInput from "./ChatInput";
import { useNavigate } from "react-router-dom";

const ChatWindow = ({ activeChat }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { name = "User", role = "Unknown", jobId } = activeChat || {};

  const sendMessage = async (message) => {
    if (!message.content.trim()) return;

    let receiverId;

    try {
      setLoading(true);
      setError(null);

      if (role === "applicant") {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/applicant/getapplicants`,
          {
            params: { jobId },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        receiverId = data.userId; // Ensure `data.userId` exists
      } else if (role === "employer") {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/applicant/getapplies`,
          {
            params: { jobId },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        receiverId = data.employerId; // Ensure `data.employerId` exists
      }

      // Show the message in the UI immediately
      const newMessage = { ...message, sender: "self", time: "Now" };
      setMessages((prev) => [...prev, newMessage]);

      // Send the message to the backend
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/conversation/send-message`,
        { message, receiver: receiverId, jobId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.error("API call failed:", err.response || err.message);
      setError("Failed to send message. Please check the API or try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="w-full flex flex-col h-full bg-gradient-to-br from-green-50 via-white to-blue-50 shadow-lg rounded-lg">
      <header className="p-4 border-b flex items-center bg-gradient-to-r from-green-600 to-teal-500 text-white relative">
        <img src="src/assets/image-1.avif" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{name || "Unknown"}</h2>
          <p className="text-sm text-gray-200">{role === "applicant" ? "Applicant" : "Employer"} • Online</p>
        </div>
        <button
          onClick={() => navigate("/")}
          className="absolute right-4 top-4 bg-white text-teal-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 flex items-center transition"
        >
          <FaHome className="mr-2" />
          Home
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-scroll">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start mb-4 ${msg.sender === "self" ? "flex-row-reverse" : ""}`}>
            <img
              src={msg.sender === "self" ? "src/assets/image-2.avif" : "src/assets/image-1.avif"}
              alt="Profile"
              className="w-10 h-10 rounded-full mx-2"
            />
            <div
              className={`max-w-sm p-3 rounded-2xl shadow-md ${msg.sender === "self" ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" : "bg-gradient-to-r from-blue-200 to-purple-300 text-gray-900"
                }`}
            >
              <p className="whitespace-pre-wrap">{typeof msg.content === "object" ? JSON.stringify(msg.content) : msg.content}</p>
              <span className="block mt-1 text-xs text-gray-300">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        {loading ? (
          <p className="text-gray-500 text-sm">Sending message...</p>
        ) : (
          <ChatInput onSend={sendMessage} setTyping={setTyping} />
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
