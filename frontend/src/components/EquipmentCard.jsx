import { useNavigate } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import {
 deleteEquipment
} from "../store/equipmentSlice";
import { useDispatch } from "react-redux";

const EquipmentCard = ({ equipment, role }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (role === "ADMIN") {
      dispatch(deleteEquipment(equipment.id));
    } else {
      navigate(`/book/${equipment.id}`);
    }
  };

  return (
    <div
      className="
        group relative h-full w-full
        overflow-hidden
        rounded-3xl border border-gray-200
        bg-white p-6
        shadow-md transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        flex flex-col
      "
    >
      {/* Top accent */}
      <div className={`absolute left-0 right-0 top-0 h-1 rounded-t-3xl bg-linear-to-r  ${(equipment.available && role !== "ADMIN")?"text-blue-700 bg-blue-100":"text-red-700 bg-red-700"}`} />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <FaTools className={`text-3xl text-blue-600 shrink-0 ${(equipment.available && role !== "ADMIN")?"text-blue-600":"text-red-600"}`} />
          <h3 className="text-lg font-bold text-gray-900 break-words">
            {equipment.name}
          </h3>
        </div>

        <span className={`
          shrink-0 rounded-full px-3 py-1
          text-xs font-semibold
          ${(equipment.available && role !== "ADMIN" )?"text-blue-700 bg-blue-100":"text-red-700 bg-red-100"}
        `}>
          {equipment.available ? "AVAILABLE" : "UNAVAILABLE"}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-500 line-clamp-2">
        {equipment.description}
      </p>

      {/* Location */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <MdLocationOn className={`text-2xl  shrink-0 ${(equipment.available && role !== "ADMIN" ) ?"text-blue-500":"text-red-500"}`}/>
        <span className="break-words">{equipment.location}</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Price */}
      <div className="mt-6 flex items-center gap-2 flex-wrap">
        <HiCurrencyRupee className={`text-3xl ${(equipment.available && role !== "ADMIN" ) ?"text-blue-600":"text-red-600"}`} />
        <span className={`text-3xl font-extrabold ${(equipment.available && role !== "ADMIN" ) ?"text-blue-600":"text-red-600"}`}>
          {equipment.pricePerDay}
        </span>
        <span className="text-sm text-gray-500">/ day</span>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      {/* CTA */}
      {equipment.available ?
      <button
        onClick={handleClick}
        className={`
          w-full rounded-2xl
          py-3 text-sm font-semibold text-white
          transition-all duration-300
          hover:shadow-lg
          active:scale-[0.96]
          ${role === "ADMIN" ? "bg-linear-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 " : "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 "}
        `}
      >
        {role === "ADMIN" ? "Delete Product" : "Book Now"}
      </button>
      :
      <button className="
          w-full rounded-2xl
          bg-linear-to-r from-red-600 to-red-600
          py-3 text-sm font-semibold text-white
          transition-all duration-300
          hover:from-red-700 hover:to-red-700
          hover:shadow-lg
          active:scale-[0.96]
        ">Booked</button>
}
    </div>
  );
};

export default EquipmentCard;
