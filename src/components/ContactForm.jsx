import React from 'react';
// Ikon untuk 'Connect'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulir terkirim! (Fungsi placeholder)');
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center">
          Ready to bring your ideas to life? Let's discuss your next project
          and create something amazing together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Connect With Me
            </h3>
            <p className="text-gray-600 mb-6">
              Follow me on my social media to stay updated with my latest projects,
              tech insights, and development journey.
            </p>
            <div className="space-y-4">
              <SocialLink
                icon={<FaLinkedin />}
                user="none"
                label="LinkedIn"
                url="#" 
              />
              <SocialLink
                icon={<FaGithub />}
                user="@Jordyee"
                label="GitHub"
                url="https://github.com/Jordyee"
              />
              <SocialLink
                icon={<FaInstagram />}
                user="@dj_gerungan"
                label="Instagram"
                url="https://www.instagram.com/dj_gerungan/"
              />
              <SocialLink
                icon={<FaTwitter />}
                user="None"
                label="Twitter"
                url="#"
              />
            </div>
          </div>

          {/* Kolom Kanan: Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your full name *
                </label>
                <input
                  type="text" id="name" name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your email *
                </label>
                <input
                  type="email" id="email" name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message" name="message" rows="4"
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
      </div>
    </section>
  );
};

// Komponen helper untuk link sosial
const SocialLink = ({ icon, label, user, url }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
  >
    <span className="text-blue-600 text-3xl">{icon}</span>
    <div className="ml-4">
      <p className="text-md font-semibold text-gray-800">{label}</p>
      <p className="text-sm text-gray-500">{user}</p>
    </div>
  </a>
);

export default ContactForm;