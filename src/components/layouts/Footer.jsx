import React from "react";

export default function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="p-10 bg-gray-700 footer text-primary footer-center">
      <p className="text-gray-200">Copywright &copy; {footerYear}</p>
    </footer>
  );
}
