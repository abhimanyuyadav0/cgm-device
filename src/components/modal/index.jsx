import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, size = 'md' }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-xl',
    fullwidth: 'max-w-full w-full',
  };

  const selectedSizeClass = sizeClasses[size] || sizeClasses.md;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);

    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-[#00000050] bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
      onClick={onClose} 
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-white rounded-lg shadow-lg ${selectedSizeClass} relative`}
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
