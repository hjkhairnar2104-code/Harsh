import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">
              Wrangle
            </h2>
            <p className="mt-4 max-w-sm mx-auto md:mx-0 text-sm text-gray-600">
              Rent and share agricultural equipment in a transparent and affordable way.
              Join farmers across the region in building a sustainable future.
            </p>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900">
              Products
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black">Harvester</Link></li>
              <li><Link to="#" className="hover:text-black">Seeding</Link></li>
              <li><Link to="#" className="hover:text-black">Tractors</Link></li>
              <li><Link to="#" className="hover:text-black">Sprayer</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black">About us</Link></li>
              <li><Link to="#" className="hover:text-black">Blog</Link></li>
              <li><Link to="#" className="hover:text-black">Careers</Link></li>
              <li><Link to="#" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800">
        <div
          className="
            mx-auto max-w-7xl px-6 py-4
            flex flex-col gap-3
            sm:flex-row sm:items-center sm:justify-between
            text-center sm:text-left
          "
        >
          <p className="text-xs text-gray-400">
            © 2024 Wrangle. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white text-lg">🐦</a>
            <a href="#" className="hover:text-white text-lg">💻</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
