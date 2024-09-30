"use client";

import { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    bio: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 md:space-y-0"
      >
        {/* First Name */}
        <div>
          <label className="block text-sm font-normal pb-3">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-normal pb-3">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-normal pb-3">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+1 (xxx) xxxxxxx"
            className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-normal pb-3">
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Johndoe@gmail.com"
            className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Bio */}
        <div className="md:col-span-2">
          <label className="block text-sm font-normal pb-3">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us something about yourself"
            className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            className="px-6 py-3 text-blue-500 rounded-full hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
          >
            Edit bio
          </button>
        </div>

        {/* Password Fields */}
        <h1 className="block text-lg font-semibold pb-4">Change Password</h1>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
          <div>
            <label className="block text-sm font-normal pb-3">
              Current password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="wordpass"
              className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-normal pb-3">
              New password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="wordpassage"
              className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-normal pb-3">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="wordpassage"
              className="w-full p-3 border border-gray-300 bg-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className=" w-[40%] p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
