import { useSelector } from "react-redux";

const Bookings = () => {
  const { list, loading, error } = useSelector((state) => state.booking);

  if (loading) {
    return (
      <div className="pt-24 flex justify-center text-gray-600 text-lg font-medium">
        Loading bookings...
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24 flex justify-center text-red-500 text-lg font-medium">
        {error}
      </div>
    );
  }

  return (
    <main className="pt-24 bg-gray-50 min-h-screen px-4">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            My Bookings
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            View and manage your equipment rentals
          </p>
        </div>

        {/* Empty State */}
        {list.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-md">
            <p className="text-gray-500 text-lg font-medium">
              No bookings found
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {list.map((booking, index) => (
              <div
                key={index}
                className="
                  rounded-2xl bg-white p-6 shadow-md
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                "
              >
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Equipment ID: #{booking.equipmentId}
                </h3>

                {/* Info */}
                <div className="space-y-3 text-gray-700 text-sm">
                  <p>
                    <span className="font-medium">Location:</span>{" "}
                    {booking.location}
                  </p>

                  <p>
                    <span className="font-medium">From:</span>{" "}
                    {new Date(booking.fromDate).toLocaleDateString()}
                  </p>

                  <p>
                    <span className="font-medium">To:</span>{" "}
                    {new Date(booking.toDate).toLocaleDateString()}
                  </p>

                  <p>
                    <span className="font-medium">Days:</span>{" "}
                    {booking.numberOfDays}
                  </p>

                  <p>
                    <span className="font-medium">Price / Day:</span>{" "}
                    ₹{booking.pricePerDay}
                  </p>

                  <p>
                    <span className="font-medium">Payment:</span>{" "}
                    <span className="uppercase">
                      {booking.paymentMethod}
                    </span>
                  </p>

                  <div className="mt-4 flex justify-between items-center rounded-xl bg-blue-50 px-4 py-2">
                    <span className="font-medium text-gray-700">
                      Total Amount
                    </span>
                    <span className="text-lg font-bold text-blue-600">
                      ₹{booking.totalAmount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default Bookings;
