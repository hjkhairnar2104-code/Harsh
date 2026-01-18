import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addEquipment } from "../store/equipmentSlice";
import { Form, useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);
  const locationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      pricePerDay: Number(priceRef.current.value),
      description: descRef.current.value,
      location: locationRef.current.value,
      available: true,
    };

    dispatch(addEquipment(formData));
    navigate("/Equipments");
  };

  return (
    <section className="bg-gray-50 pt-16 px-4 pb-16 min-h-screen">
      {/* ⬆ reduced pt-24 → pt-16 */}

      <div className="mx-auto max-w-md">
        <div
          class className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl border border-gray-100"
        >
          {/* Accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              Add New Equipment
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              List your equipment for farmers to rent
            </p>
          </div>

          <Form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-xs font-semibold text-gray-700">
                Equipment Name
              </label>
              <input
                ref={nameRef}
                required
                placeholder="Tractor"
                className="
                  mt-1 w-full rounded-xl border border-gray-300
                  px-4 py-2.5 text-sm
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                "
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-xs font-semibold text-gray-700">
                Description
              </label>
              <textarea
                ref={descRef}
                rows={3}
                placeholder="Short description about the equipment"
                className="
                  mt-1 w-full resize-none rounded-xl
                  border border-gray-300
                  px-4 py-2.5 text-sm
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                "
              />
            </div>

            {/* Price */}
            <div>
              <label className="text-xs font-semibold text-gray-700">
                Price per day (₹)
              </label>
              <input
                ref={priceRef}
                type="number"
                required
                placeholder="1500"
                className="
                  mt-1 w-full rounded-xl border border-gray-300
                  px-4 py-2.5 text-sm
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                "
              />
            </div>

            {/* Location */}
            <div>
              <label className="text-xs font-semibold text-gray-700">
                Location
              </label>
              <input
                ref={locationRef}
                required
                placeholder="Pune"
                className="
                  mt-1 w-full rounded-xl border border-gray-300
                  px-4 py-2.5 text-sm
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                "
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="
                  flex-1 rounded-xl
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  py-2.5 text-sm font-semibold text-white
                  transition-all
                  hover:from-blue-700 hover:to-indigo-700
                  hover:shadow-lg
                  active:scale-[0.97]
                "
              >
                Save Equipment
              </button>

              <button
                type="button"
                onClick={() => navigate("/Equipments")}
                className="
                  flex-1 rounded-xl border border-gray-300
                  py-2.5 text-sm font-semibold text-gray-700
                  transition hover:bg-gray-100
                "
              >
                Cancel
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AdminAddProduct;
