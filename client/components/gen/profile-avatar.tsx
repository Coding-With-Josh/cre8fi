import { Trash2, UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ProfileAvatar = () => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-end items-center gap-4">
      <div className="relative w-32 h-32 mb-4">
        <img
          src="/assets/test-image.jpeg"
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />

        <Button className="absolute size-6 bottom-0 right-0 p-1  rounded-full group bg-white">
          <Trash2 className="text-gray-800 hover:text-slate-50" />
        </Button>
      </div>
      <div className="space-y-2 w-max">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 rounded-full bg-gray-800 border-gray-700"
        >
          <UploadCloud className="h-4 w-4" />
          <span>Upload photo</span>
        </Button>
        <p className="text-center text-sm text-gray-400">
          At least 256 x 256px PNG or JPG file
        </p>
      </div>
    </div>
  );
};
