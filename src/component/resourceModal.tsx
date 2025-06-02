import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ResourcesModal: React.FC<ModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Invisible backdrop to close dropdown when clicking outside */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Dropdown content */}
      <div className="absolute top-full right-5 mt-2 z-50 bg-[#090808] border border-white p-6 rounded-lg shadow-xl w-100">
        <h2 className="text-xl font-bold  text-white">Learning Resources </h2>
        <h6 className="text-white mb-5">
          Tools ,guides and  references  of Web3 learning{" "}
        </h6>

        <div className="pl-2">
          <div className="mb-5 hover:bg-[#444444] hover:border border-r-white p-3 rounded-md ">
            <strong className="text-xl font-bold  text-white">
              External Tools
            </strong>
            <p>
            Curated links to DEXes, DeFi Platforms ,wallets and Staking sites.
            </p>
          </div>

          <div className="hover:bg-[#444444] hover:border border-r-white p-3 rounded-md">
            <strong className="text-xl font-bold  text-white">
              Web Glossary
            </strong>
            <p>Comprehensive dictionary of blockchain and Web3 terms.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesModal;
