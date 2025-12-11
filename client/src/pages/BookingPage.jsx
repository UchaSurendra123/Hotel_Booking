import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingStepper from '../components/BookingStepper';
import { AuthContext } from "../context/AuthContext";


function LocalPropertyCard({ hotel }) {
  const displayPrice = hotel.price ?? hotel.basePrice ?? 0;
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-72 sm:h-96 md:h-[520px] object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 bottom-6 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{hotel.name}</h3>
          <p className="text-sm md:text-base opacity-90">{hotel.location}</p>
        </div>
        <div className="absolute right-4 top-4 bg-white/90 rounded-md px-3 py-2 shadow-sm">
          <div className="text-xs text-gray-600">From</div>
          <div className="font-semibold">
            ₹{displayPrice.toLocaleString('en-IN')}
            <span className="text-xs text-gray-500">/night</span>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Rating</div>
            <div className="font-semibold">{hotel.rating ?? '—'} ⭐</div>
          </div>
          
        </div>
        <p className="mt-4 text-sm text-gray-700 line-clamp-3">
          {hotel.shortDescription ?? hotel.description ?? ''}
        </p>
      </div>
    </div>
  );
}


function useClickOutside(ref, handler) {
  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [ref, handler]);
}


function DateRangePicker({ checkIn, checkOut, setCheckIn, setCheckOut }) {
  const today = new Date();
  const toISO = d => d.toISOString().split("T")[0];
  const wrapperRef = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(wrapperRef, () => setOpen(false));

  useEffect(() => {
    if (new Date(checkOut) <= new Date(checkIn)) {
      const ci = new Date(checkIn);
      ci.setDate(ci.getDate() + 1);
      setCheckOut(toISO(ci));
    }
  }, [checkIn, checkOut, setCheckOut]);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-3 p-3 rounded-lg border border-gray-200 bg-white shadow-sm"
      >
        <div className="text-left">
          <div className="text-xs text-gray-500">Dates</div>
          <div className="text-sm font-medium">
            {checkIn} → {checkOut}
          </div>
        </div>
        <span className="text-sm text-primary">Change</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white p-4 rounded-lg shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col">
              <span className="text-xs text-gray-500">Check-in</span>
              <input
                type="date"
                value={checkIn}
                min={toISO(today)}
                onChange={e => setCheckIn(e.target.value)}
                className="mt-1 p-2 rounded-lg border border-gray-200"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-gray-500">Check-out</span>
              <input
                type="date"
                value={checkOut}
                min={(() => {
                  const d = new Date(checkIn);
                  d.setDate(d.getDate() + 1);
                  return toISO(d);
                })()}
                onChange={e => setCheckOut(e.target.value)}
                className="mt-1 p-2 rounded-lg border border-gray-200"
              />
            </label>
          </div>

          <div className="mt-3 flex justify-end">
            <button type="button" onClick={() => setOpen(false)} className="px-3 py-1 rounded-md text-sm">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


function Counter({ label, value, setValue, min = 0, max = 10 }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="ml-auto inline-flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue(v => Math.max(min, v - 1))}
          className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center"
        >
          -
        </button>
        <div className="w-10 text-center font-medium">{value}</div>
        <button
          type="button"
          onClick={() => setValue(v => Math.min(max, v + 1))}
          className="w-8 h-8 rounded-md border border-gray-200 flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
}


function BookingForm({ hotel }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const today = new Date();
  const toISO = d => d.toISOString().split("T")[0];

  const categories = [
    { id: "standard", name: "Standard Room", price: hotel?.price ?? hotel?.basePrice ?? 0 },
    { id: "deluxe", name: "Deluxe Room", price: (hotel?.price ?? hotel?.basePrice ?? 0) + 1500 },
    { id: "suite", name: "Suite Room", price: (hotel?.price ?? hotel?.basePrice ?? 0) + 3000 },
    { id: "executive", name: "Executive Room", price: (hotel?.price ?? hotel?.basePrice ?? 0) + 2000 }
  ];

  const [checkIn, setCheckIn] = useState(toISO(today));
  const [checkOut, setCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return toISO(d);
  });

  const [nights, setNights] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState(categories[0].id);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ci = new Date(checkIn);
    const co = new Date(checkOut);
    const diff = Math.round((co - ci) / (24 * 60 * 60 * 1000));
    if (!isNaN(diff) && diff >= 1) {
      setNights(diff);
    }
  }, [checkIn, checkOut]);

  async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  const room = categories.find(r => r.id === roomType);
  const perNight = room.price;
  const totalPrice = perNight * nights;

  const payload = {
    name: user?.name ?? "Guest User",
    email: user?.email ?? "no-email",
    phone: user?.phone ?? "N/A",
    hotelName: hotel.name,

   
    city: hotel.location || hotel.city || hotel.address || "City Not Available",

    checkIn,
    checkOut,
    guests: adults + children,
    totalPrice,
    image: hotel.image
  };

  navigate("/payment", { state: { booking: payload } });
}


  const room = categories.find(r => r.id === roomType);
  const totalPrice = room.price * nights;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-2xl p-6 shadow-lg border border-gray-100">

      <h3 className="text-sm text-gray-600 font-bold">
  Booking Information — please fill up the blank fields below
</h3>

      <div className="space-y-3">
        <DateRangePicker
          checkIn={checkIn}
          checkOut={checkOut}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
        />

        <label className="block">
          <span className="text-xs text-gray-500">Room Type</span>
          <select
            value={roomType}
            onChange={e => setRoomType(e.target.value)}
            className="mt-1 w-full p-2 rounded-lg border border-gray-200"
          >
            {categories.map(c => (
              <option key={c.id} value={c.id}>
                {c.name} — ₹{c.price}/night
              </option>
            ))}
          </select>
        </label>

        <Counter label="Adults" value={adults} setValue={setAdults} min={1} />
        <Counter label="Children" value={children} setValue={setChildren} />
      </div>

      <div className="mt-5 bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-500">Total</div>
          <div className="text-lg font-semibold">
            ₹{totalPrice.toLocaleString()}{" "}
            <span className="text-sm text-gray-500">({nights} nights)</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 rounded-md font-medium ${loading ? "bg-gray-300 text-gray-700" : "bg-primary text-white"}`}
        >
          {loading ? "Processing…" : "Book Now"}
        </button>
      </div>
    </form>
  );
}


export default function BookingPage() {
  const location = useLocation();
  const hotel = location.state?.hotel;

  if (!hotel) {
    return (
      <main className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-red-500 text-lg mt-16">No hotel selected! Please go back and select a hotel.</p>
      </main>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-center mb-8">
        <BookingStepper />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div><LocalPropertyCard hotel={hotel} /></div>
        <div><BookingForm hotel={hotel} /></div>
      </div>
    </main>
  );
}
