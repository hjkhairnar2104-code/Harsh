import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const booking = useSelector((state) => state.booking.list.at(-1));

  if (!booking) {
    return (
      <p className="pt-24 text-center text-gray-600">
        No booking found
      </p>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-linear-to-b from-green-50 to-white px-4">
      <div className="mx-auto max-w-md">

        <div className="rounded-2xl bg-white p-8 shadow-xl text-center">

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <span className="text-4xl">✅</span>
          </div>

          <h2 className="text-3xl font-bold text-green-700">
            Payment Successful
          </h2>

          <p className="mt-2 text-gray-600">
            Your booking has been confirmed
          </p>

          {/* Details */}
          <div className="mt-8 space-y-4 rounded-xl bg-gray-50 p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Booking ID</span>
              <span className="font-medium text-gray-900">
                #{booking.id}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Total Paid</span>
              <span className="font-semibold text-green-600">
                ₹{booking.totalPrice}
              </span>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/Bookings"
            className="
              mt-8 inline-flex w-full items-center justify-center
              rounded-full bg-linear-to-r from-green-600 to-emerald-600
              py-3 text-sm font-semibold text-white
              transition-all duration-300
              hover:from-green-700 hover:to-emerald-700
              hover:shadow-lg
              active:scale-[0.97]
            "
          >
            Go to Booking
          </Link>

        </div>
      </div>
    </main>
  );
};

export default PaymentSuccess;
