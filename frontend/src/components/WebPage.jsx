import React from "react";

const WebPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold">Skill Sphere</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow">
            Contact Us
          </button>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto py-12 px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          {/* Course Title */}
          <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
            Web Development Course
          </h1>

          {/* Ratings */}
          <div className="flex items-center space-x-3">
            <div className="text-yellow-400 text-3xl">★★★★★</div>
            <span className="text-gray-700 font-medium text-lg">120,432 Ratings</span>
          </div>

          {/* Highlights */}
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-blue-900">Top-Rated</strong> Web Development Course by {" "}
            <a href="#" className="text-blue-700 underline hover:text-blue-800">
              Skill Sphere
            </a>
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center space-x-3">
              <span className="text-blue-600">✔</span>
              <span>
                Learn HTML, CSS, JavaScript, React, Node.js, and more
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-600">✔</span>
              <span>
                Build real-world projects and responsive websites
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-600">✔</span>
              <span>
                Access live sessions with industry experts and mentors
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-600">✔</span>
              <span>
                Earn certifications from Skill Sphere and industry leaders
              </span>
            </li>
          </ul>

          {/* Requirements Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>No prior experience is required. Start from the basics</li>
              <li>A computer with internet access is needed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
            <ul className="list-disc list-inside text-gray-700">
              This course provides a comprehensive journey through the world of web development. From foundational coding skills to advanced frameworks, you’ll learn everything required to build and deploy professional-grade websites and applications.
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-6">
            {/* Additional buttons can go here if needed */}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-lg relative hover:shadow-2xl transition">
            <img
              src="/src/assets/Magento-Developer.jpg"
              alt="Course Introduction"
              className="rounded-lg"
            />
            
            <p className="text-center text-gray-600 mt-4 text-sm">
              Course Introduction
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebPage;
