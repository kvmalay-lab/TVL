import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EarlyAccessModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset modal state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: '', email: '' });
        setErrors({ name: '', email: '' });
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 300);
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, isSubmitting, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = { name: '', email: '' };
    let isValid = true;

    // Name validation
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    } else if (trimmedName.length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
      isValid = false;
    }

    // Email validation
    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const checkDuplicateEmail = (email) => {
    try {
      const existingData = localStorage.getItem('tvl_waitlist');
      if (existingData) {
        const waitlist = JSON.parse(existingData);
        return waitlist.some((entry) => entry.email.toLowerCase() === email.toLowerCase());
      }
    } catch (error) {
      console.error('Error checking duplicate email:', error);
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Trim whitespace
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    // Check for duplicate email
    if (checkDuplicateEmail(trimmedEmail)) {
      setIsSuccess(true);
      setIsSubmitting(false);
      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
      return;
    }

    try {
      // Get existing waitlist or create new array
      let waitlist = [];
      const existingData = localStorage.getItem('tvl_waitlist');
      if (existingData) {
        waitlist = JSON.parse(existingData);
      }

      // Add new entry
      waitlist.push({
        name: trimmedName,
        email: trimmedEmail,
        timestamp: Date.now(),
      });

      // Save to localStorage
      localStorage.setItem('tvl_waitlist', JSON.stringify(waitlist));

      // Show success state
      setIsSuccess(true);

      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      setErrors({ ...errors, email: 'Unable to save. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-[20px] max-w-[500px] w-full p-12 shadow-2xl relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {!isSubmitting && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        )}

        {isSuccess ? (
          /* Success State */
          <div className="text-center">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">You're on the list!</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We'll email you at <strong>{formData.email}</strong> when pilot spots open.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-base hover:bg-indigo-700 transition-colors"
            >
              Got it
            </button>
          </div>
        ) : (
          /* Form State */
          <>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Join Early Access</h2>
              <p className="text-base text-gray-600">
                Get notified when we open pilot spots. No commitment required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  First Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Alex"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-sm transition-colors focus:outline-none focus:bg-white ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-indigo-600'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3.5 bg-gray-50 border-2 rounded-lg text-sm transition-colors focus:outline-none focus:bg-white ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-indigo-600'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-base transition-colors ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>

            {/* Footer Note */}
            <p className="text-[13px] text-gray-500 text-center mt-5 leading-relaxed">
              We'll email you when pilot spots open. We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EarlyAccessModal;
