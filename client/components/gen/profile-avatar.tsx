"use client"

import { useState } from "react";
import { Trash2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProfileAvatar = () => {
  const [profileImage, setProfileImage] = useState("/assets/Avatar.png");

  // Function to handle file input change
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the uploaded file
      setProfileImage(imageUrl);
    }
  };

  // Function to reset to default profile image
  const handleImageDelete = () => {
    setProfileImage("/assets/Avatar.png");
  };

  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-end items-center gap-4">
      <div className="relative w-32 h-32 mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />

        {/* Trash Button for Deleting Profile Image */}
        <Button
          onClick={handleImageDelete}
          className="absolute size-6 bottom-0 right-0 p-1 rounded-full group bg-white"
        >
          <Trash2 className="text-gray-800 hover:text-slate-50" />
        </Button>
      </div>
      <div className="space-y-2 w-max">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 rounded-full bg-gray-800 border-gray-700"
          onClick={() => document.getElementById("fileInput")?.click()} // Trigger file input on click
        >
          <UploadCloud className="h-4 w-4" />
          <span>Upload photo</span>
        </Button>

        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={handleImageUpload}
        />

        <p className="text-center text-sm text-gray-400">
          At least 256 x 256px PNG or JPG file
        </p>
      </div>
    </div>
  );
};
