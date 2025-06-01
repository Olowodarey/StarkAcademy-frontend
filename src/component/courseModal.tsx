
import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const CoursesModal: React.FC<ModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Invisible backdrop to close dropdown when clicking outside */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown content */}
      <div className="absolute top-full left-0 mt-2 z-50 bg-[#090808] border border-white p-6 rounded-lg shadow-xl w-100">
        <h2 className="text-xl font-bold  text-white">Learning Paths</h2>
        <h6 className="text-white mb-5">Structured courses to master Web3 and Blockchain </h6>

        <div className="pl-2">

          <div className="mb-5 hover:bg-[#444444] hover:border border-r-white p-3 rounded-md ">
            <strong className="text-xl font-bold  text-white">Official courses</strong>
            <p>
              Expert created courses on blockchain, DeFi and Web3 Development.
            </p>
          </div>

          <div className="hover:bg-[#444444] hover:border border-r-white p-3 rounded-md">
            <strong className="text-xl font-bold  text-white">Community courses</strong>
            <p>User-generated content and community-driven learning.</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default CoursesModal;