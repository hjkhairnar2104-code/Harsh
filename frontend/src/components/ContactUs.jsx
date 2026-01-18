import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactUS = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4">
      
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl">
        
        <h1 className="mb-3 text-center text-4xl font-bold text-gray-900">
          Contact Us
        </h1>

        <p className="mb-6 text-center text-gray-600">
          We would love to hear from you! Please fill out the form below or contact us directly.
        </p>

        <form className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="
                mt-1 block w-full rounded-lg border border-gray-300
                px-4 py-2.5 text-sm
                outline-none transition
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="
                mt-1 block w-full rounded-lg border border-gray-300
                px-4 py-2.5 text-sm
                outline-none transition
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200
              "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              required
              placeholder="Write your message..."
              className="
                mt-1 block w-full rounded-lg border border-gray-300
                px-4 py-2.5 text-sm
                outline-none transition
                focus:border-blue-500 focus:ring-2 focus:ring-blue-200
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full rounded-lg bg-blue-600 py-2.5
              font-medium text-white
              transition hover:bg-blue-700 hover:shadow-md
            "
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 border-t pt-6 text-center">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Contact Information
          </h2>

          <div className="flex flex-col items-center space-y-3 text-sm text-gray-600">
            
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-500" />
              <span>+91 99602 51469</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>Abhishek@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-blue-500" />
              <span>Main Road, Pune, India</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUS;
