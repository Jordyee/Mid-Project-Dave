import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulir terkirim! (Fungsi placeholder)');
    onClose();
  };

  return (
    <div 
      onClick={onClose} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-xl shadow-lg p-8"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FaTimes size={20} />
        </button>

        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Let's Work Together
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text" id="modal-name" name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required 
            />
          </div>
          <div>
            <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email" id="modal-email" name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">
              Tell me about your project... *
            </label>
            <textarea
              id="modal-message" name="message" rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;     