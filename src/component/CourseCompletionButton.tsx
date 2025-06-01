import React, { useState } from 'react';
import CourseCompletionModal from './CourseCompletionModal';

const CourseCompletionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
      >
        View Course Completion
      </button>

      <CourseCompletionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CourseCompletionButton; 