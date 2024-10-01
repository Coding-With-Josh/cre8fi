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
        className="grid grid-cols-1 md:grid-cols-2 gap-[7px] h-[265px] left-[310px] top-[348px]  space-y-4 md:space-y-0"
      >
        {/* First Name */}
        <div className=" h-[72px] gap-[6px] opacity-[80%]">
          <label className="block  text-sm font-medium h-[21px] pb-3">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-[339px]  text-sm text-customGray p-3 border border-customGray bg-transparent rounded-full   "
          />
        </div>

        {/* Last Name */}
        <div className=" h-[72px] gap-[6px] opacity-[80%]">
          <label className="block  text-sm font-medium h-[21px] pb-3">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-[339px]  text-sm text-customGray p-3 border border-customGray bg-transparent rounded-full "
          />
        </div>

        {/* Phone Number */}
        <div className=" h-[72px] gap-[6px] opacity-[80%]">
          <label className="block  text-sm font-medium h-[21px] pb-3">
            Phone Number
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+1 (xxx) xxxxxxx"
            className="w-[339px]  text-sm text-customGray p-3 border border-customGray bg-transparent rounded-full"
          />
        </div>

        {/* Email Address */}
        <div className=" h-[72px] gap-[6px] opacity-[80%]">
          <label className="block  text-sm font-medium h-[21px] pb-3">
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Johndoe@gmail.com"
            className="w-[339px]  text-sm text-customGray p-3 border border-customGray bg-transparent rounded-full"
          />
        </div>

        {/* Bio */}
        <div className="md:col-span-2 h-[72px] gap-[6px] opacity-[80%]">
          <label className="block  text-sm font-medium h-[21px] pb-3">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us something about yourself"
            className="w-full  text-sm text-customGray p-3 border border-customGray bg-transparent rounded-full"
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            className="px-6 py-12 text-customBlue text-sm font-medium  h-[15px] top-[629px] left-[1381px]   "
          >
            Edit bio
          </button>
        </div>

        {/* Password Fields */}
        <h1 className="block text-xl font-bold w-[177px] h-[24px] top-[698px] left-[333px]  pb-12">
          Change Password
        </h1>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-4 gap-4 pb-4">
          {/* Password Fields */}
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
              className="w-[226px] py-[16px] pr-[54px] pl-[16px] gap-[5px] text-customLightGray border border-customLightGray bg-transparent rounded-full "
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
              className="w-[226px] py-[16px] pr-[54px] pl-[16px] gap-[5px] text-customLightGray border border-customLightGray bg-transparent rounded-full"
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
              className="w-[226px] py-[16px] pr-[54px] pl-[16px] gap-[5px] text-customLightGray border border-customLightGray bg-transparent rounded-full"
            />
          </div>

          {/* Cancel and Change Password Buttons */}
          <div className="flex items-end justify-end space-x-4  ">
            <button
              type="button"
              className="px-6 py-3 text-customBlue font-medium text-sm ] "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-3  font-semibold text-sm bg-customBlue text-white rounded-full  "
            >
              Change password
            </button>
          </div>
        </div>

        <div className=" md:col-span-2 w-1/2 flex items-center justify-center bg-customBlue rounded-full  py-[21px]">
          <button
            type="submit"
            className="  text-sm font-medium  text-white  "
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
