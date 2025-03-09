import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';
import { MdSubject } from 'react-icons/md';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!emailRegex.test(formData.email)) tempErrors.email = 'Valid email is required';
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const formElement = e.target;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('https://getform.io/f/axowowxb', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <div name="Contact">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-2">Contact Me</h2>
          <p className="text-gray-600 dark:text-white">Have a question or want to work together? Send me a message.</p>
        </div>
        {isSubmitted ? (
          <div className="bg-green-200 p-6 rounded-lg text-center">
            <p className="text-green-600 font-semibold">Message sent successfully! I'll respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} method="POST" noValidate className="space-y-6 p-6 rounded-lg  bg-white  dark:bg-[#0b0f1a] dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="relative  ">
                <label className="block text-sm font-medium dark:text-white text-gray-700 mb-1">Name<span className="text-red-500">*</span></label>
                <div className="relative ">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full pl-10 pr-4 dark:bg-[#061231] dark:text-white py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`} placeholder="abc" />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="relative">
                <label className="block dark:text-white text-sm font-medium text-gray-700 mb-1">Email<span className="text-red-500">*</span></label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full dark:bg-[#061231] dark:text-white pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`} placeholder="abc@example.com" />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="relative">
              <label className="block dark:text-white text-sm font-medium text-gray-700 mb-1">Subject<span className="text-red-500">*</span></label>
              <div className="relative">
                <MdSubject className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={`w-full dark:bg-[#061231] dark:text-white pl-10 pr-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`} placeholder="Project Inquiry" />
              </div>
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div className="relative">
              <label className="block text-sm dark:text-white font-medium text-gray-700 mb-1">Message<span className="text-red-500">*</span></label>
              <div className="relative">
                <FaComment className="absolute left-3 top-4 transform -translate-y-1/2 text-gray-400" />
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className={`w-full dark:bg-[#061231] dark:text-white pl-10 pr-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`} placeholder="Write your message here..." />
              </div>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              {isSubmitting ? <span className="animate-spin">⏳</span> : <FaPaperPlane />} Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ContactForm;
