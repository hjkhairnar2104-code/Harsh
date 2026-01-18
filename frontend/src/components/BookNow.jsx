import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createBooking } from "../store/bookingSlice";

const BookNow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const equipment = useSelector((state) =>
    state.equipment.list.find((e) => e.id === Number(id))
  );

  const [numberOfDays, setNumberOfDays] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  if (!equipment) {
    return (
      <div className="pt-24 text-center text-gray-600">
        Equipment not found
      </div>
    );
  }

  const pricePerDay = Number(equipment.pricePerDay);
  const totalAmount = numberOfDays * pricePerDay;

  const formatDate = (date) => date.toISOString().split("T")[0];

  const fromDateObj = new Date();
  const toDateObj = new Date(
    fromDateObj.getTime() + numberOfDays * 86400000
  );

  const handleBooking = () => {
    const bookingData = {
      equipmentId: Number(equipment.id),
      fromDate: formatDate(fromDateObj),
      toDate: formatDate(toDateObj),
      numberOfDays: Number(numberOfDays),
      location: equipment.location,
      pricePerDay,
      totalAmount: Number(totalAmount),
      paymentMethod,
    };

    dispatch(createBooking(bookingData));
    navigate("/payment-success");
  };

  return (
    <main className="pt-20 min-h-screen bg-gray-50 px-4">
      <div className="mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl">

          {/* Accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Book {equipment.name}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Review your rental details before payment
            </p>
          </div>

          {/* Info */}
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Price per day</span>
              <span className="font-semibold text-gray-900">
                ₹{pricePerDay}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Location</span>
              <span className="font-semibold text-gray-900">
                {equipment.location}
              </span>
            </div>
          </div>

          <div className="my-6 h-px bg-gray-200" />

          {/* Days */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Number of days
            </label>
            <input
              type="number"
              min="1"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(Number(e.target.value))}
              className="
                w-full rounded-xl border border-gray-300
                px-4 py-2.5 text-sm
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100
              "
            />
          </div>

          {/* Payment */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Payment Method
            </label>

            <div className="flex gap-3">
              {["UPI", "DEBIT", "CREDIT"].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`
                    flex-1 rounded-xl border py-2.5 text-sm font-semibold
                    transition
                    ${
                      paymentMethod === method
                        ? "border-blue-600 bg-blue-50 text-blue-600 shadow-sm"
                        : "border-gray-300 text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="mt-6 flex items-center justify-between rounded-2xl bg-blue-50 px-5 py-4">
            <span className="text-sm font-medium text-gray-700">
              Total Amount
            </span>
            <span className="text-2xl font-extrabold text-blue-600">
              ₹{totalAmount}
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={handleBooking}
            className="
              mt-8 w-full rounded-full
              bg-gradient-to-r from-blue-600 to-indigo-600
              py-3 text-sm font-semibold text-white
              transition-all duration-300
              hover:from-blue-700 hover:to-indigo-700
              hover:shadow-lg
              active:scale-[0.97]
            "
          >
            Pay & Book
          </button>

        </div>
      </div>
    </main>
  );
};

export default BookNow;
