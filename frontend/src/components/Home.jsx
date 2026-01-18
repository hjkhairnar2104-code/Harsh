import { Link } from "react-router-dom";
import { GiPlantSeed } from "react-icons/gi";
import { HiOutlineSearch, HiOutlinePlus } from "react-icons/hi";
import { FaTractor } from "react-icons/fa";

const Home = () => {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-b from-green-50 via-emerald-50 to-cyan-50">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-green-200 blur-2xl" />
          <div className="absolute -bottom-10 left-20 h-56 w-56 rounded-full bg-emerald-200 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center md:px-6">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
            <GiPlantSeed className="text-base" />
            Agricultural Equipment Marketplace
          </span>

          <h1
            className="
              mb-4 text-4xl font-bold md:text-5xl
              bg-linear-to-r from-green-600 via-emerald-600 to-cyan-600
              bg-clip-text text-transparent
            "
          >
            Rent & Share Agricultural Equipment
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            A transparent and affordable platform for farmers to rent agricultural
            machinery and increase productivity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/Equipments"
              className="
                inline-flex items-center gap-2
                rounded-full bg-linear-to-r from-green-600 to-emerald-600
                px-5 py-2.5 text-sm font-semibold text-white
                transition-transform hover:scale-105 hover:shadow-md
              "
            >
              <HiOutlineSearch className="text-lg" />
              Find Equipment
            </Link>

            <Link
              to="/Add-Equipment"
              className="
                inline-flex items-center gap-2
                rounded-full border-2 border-green-600
                px-5 py-2.5 text-sm font-semibold text-green-600
                transition-transform hover:scale-105 hover:bg-green-50
              "
            >
              <HiOutlinePlus className="text-lg" />
              List Your Equipment
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2
              className="
                text-3xl font-bold
                bg-linear-to-r from-green-600 to-emerald-600
                bg-clip-text text-transparent
              "
            >
              How It Works
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Simple steps to get started
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Step title="Discover" text="Find equipment near your location" />
            <Step title="Book" text="Choose date and time slots" />
            <Step title="Use" text="Rent and use the equipment" />
            <Step title="Pay" text="Simple and transparent pricing" />
          </div>
        </div>
      </section>

      {/* POPULAR EQUIPMENT */}
      <section className="bg-linear-to-b from-gray-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2
              className="
                text-3xl font-bold
                bg-linear-to-r from-green-600 to-emerald-600
                bg-clip-text text-transparent
              "
            >
              Popular Equipment
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Most used farming tools
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            <EquipmentCard name="Tractor" />
            <EquipmentCard name="Harvester" />
            <EquipmentCard name="Seeder" />
            <EquipmentCard name="Sprayer" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2
              className="
                text-3xl font-bold
                bg-linear-to-r from-green-600 to-emerald-600
                bg-clip-text text-transparent
              "
            >
              Why Choose Our Platform
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              What makes us better
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Benefit text="Affordable rental prices" />
            <Benefit text="Equipment available nearby" />
            <Benefit text="Verified equipment owners" />
            <Benefit text="Flexible time-slot booking" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;

/* ---------- Components ---------- */

const Step = ({ title, text }) => (
  <div className="text-center">
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-xs text-gray-600">{text}</p>
  </div>
);

const EquipmentCard = ({ name }) => (
  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
    <FaTractor className="mx-auto mb-3 text-3xl text-green-600" />
    <h3 className="text-sm font-medium text-gray-900">{name}</h3>
  </div>
);

const Benefit = ({ text }) => (
  <div className="rounded-lg bg-gray-50 p-4 text-center">
    <p className="text-sm font-medium text-gray-900">{text}</p>
  </div>
);
