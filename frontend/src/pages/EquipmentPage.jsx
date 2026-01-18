import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEquipment,
  searchEquipmentByLocation,
} from "../store/equipmentSlice";
import EquipmentCard from "../components/EquipmentCard";

const EquipmentPage = () => {
  const dispatch = useDispatch();

  const equipment = useSelector((state) => state.equipment.list);
  const role = useSelector((state) => state.auth.role);

  const [location, setLocation] = useState("");

  useEffect(() => {
    dispatch(fetchEquipment());
  }, [dispatch]);

  const handleSearch = () => {
    if (location.trim()) {
      dispatch(searchEquipmentByLocation(location));
    } else {
      dispatch(fetchEquipment());
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-16 px-6">
      {/* ⬆️ pt-16 instead of pt-24 (FIXES GAP) */}

      <div className="mx-auto max-w-7xl">

        {/* ===== HEADER ===== */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            🚜 Equipment Marketplace
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Equipment List
          </h1>

          <p className="mt-2 max-w-xl text-gray-600">
            Discover and manage available agricultural equipment for rent
          </p>

          {/* SEARCH */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search by location (e.g. Satara)"
              className="
                w-72 rounded-xl border border-gray-300
                px-4 py-2.5 text-sm
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100
              "
            />

            <button
              onClick={handleSearch}
              className="
                rounded-xl bg-blue-600 px-6 py-2.5
                text-sm font-semibold text-white
                transition hover:bg-blue-700
              "
            >
              Search
            </button>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        {equipment.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow-sm">
            No equipment available
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {equipment.map((item) => (
              <EquipmentCard
                key={item.id}
                equipment={item}
                role={role}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default EquipmentPage;
