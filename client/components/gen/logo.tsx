import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Image
      src="/client/assets/crefi-logo-2.png" // Update this to the actual image path
      alt="Cre8Fi Logo"
      width={150} // Set appropriate width for the logo
      height={40} // Set appropriate height for the logo
      className="h-10 w-auto" // Tailwind CSS for styling
    />
  );
};
