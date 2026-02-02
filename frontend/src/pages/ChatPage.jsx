import React, { useState } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';

const ChatPage = () => {
  const [activeChat, setActiveChat] = useState({
    name: 'John Doe',
    role: 'applicant', // 'applicant' or 'employer'
    jobId: '12345', // Example job ID
  });

  const [profileImage, setProfileImage] = useState('src/assets/image-1.avif'); // Default profile image

  return (
    <div className="flex h-screen">
      {/* Chat Sidebar */}
      <ChatSidebar
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        profileImage={profileImage}
        setProfileImage={setProfileImage} // Pass the state updater to change the profile picture
      />
      {/* Chat Window */}
      <ChatWindow activeChat={activeChat} profileImage={profileImage} />
    </div>
  );
};

export default ChatPage;
