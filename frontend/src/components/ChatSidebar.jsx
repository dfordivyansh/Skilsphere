import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function ChatSidebar({ activeChat, setActiveChat, profileImage, setProfileImage }) {
  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate image URL
      setProfileImage(imageUrl); // Update the profile image
    }
  };

  return (
    <div className="w-1/4 bg-gray-100 border-r p-4">
      {/* Logo/Profile Picture */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-16 h-16 rounded-full shadow-lg cursor-pointer"
          />
          <label
            htmlFor="profile-upload"
            className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-full text-white cursor-pointer"
          >
            <FaUserCircle size={16} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">
            {activeChat?.name || "No Active Chat"}
          </h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>

      {/* Chat List */}
      <ul>
        <li
          className={`p-3 rounded-lg ${activeChat?.name === "John Doe" ? "bg-green-100" : ""
            } cursor-pointer`}
          onClick={() => setActiveChat({ name: "John Doe" })}
        >
          John Doe
        </li>
        <li
          className={`p-3 rounded-lg ${activeChat?.name === "Jane Smith" ? "bg-green-100" : ""
            } cursor-pointer`}
          onClick={() => setActiveChat({ name: "Jane Smith" })}
        >
          Jane Smith
        </li>
      </ul>
    </div>
  );
}
