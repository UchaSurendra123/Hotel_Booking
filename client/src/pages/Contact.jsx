import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: wire this to your API / email service.
    setStatus({ type: "loading", text: "Sending..." });
    setTimeout(() => {
      setStatus({ type: "success", text: "Message sent. We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", message: "", phone: "" });
    }, 900);
  }

  const offices = [
    {
      id: "madhapur",
      title: "Head Office — Madhapur",
      lines: [
        "Deccan Stay",
        "401, Deccan Heights Building",
        "Madhapur, Hyderabad – 500081",
        "Telangana, India",
      ],
      phone: "+919876543210",
      mapQuery: "Deccan Heights Building, Madhapur, Hyderabad",
    },
    {
      id: "banjara",
      title: "Branch — Banjara Hills",
      lines: ["Deccan Stay", "2nd Floor, Sai Enclave", "Road No. 12, Banjara Hills", "Hyderabad – 500034"],
      phone: "+919123456789",
      mapQuery: "Sai Enclave, Road No. 12, Banjara Hills, Hyderabad",
    },
    {
      id: "gachibowli",
      title: "Branch — Gachibowli",
      lines: ["Deccan Stay", "Plot No. 45, Tech Park Avenue", "Near Wipro Circle, Gachibowli", "Hyderabad – 500032"],
      phone: "+919876543210",
      mapQuery: "Wipro Circle, Gachibowli, Hyderabad",
    },
    {
      id: "kukatpally",
      title: "Branch — Kukatpally",
      lines: ["Deccan Stay", "5th Floor, Fortune Plaza", "Opp. Manjeera Mall, Kukatpally", "Hyderabad – 500072"],
      phone: "+919123456789",
      mapQuery: "Manjeera Mall, Kukatpally, Hyderabad",
    },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question or need help with booking? We’re happy to assist —
          reach any of our Hyderabad offices or drop us a message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact card + form column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-gray-700">Phone</p>
                <a href="tel:+919876543210" className="block font-medium text-primary">+91 98765 43210</a>
                <a href="tel:+919123456789" className="block font-medium text-primary">+91 91234 56789</a>
              </div>

              <div>
                <p className="text-gray-700">Email</p>
                <a href="mailto:support@deccanstay.com" className="block font-medium text-primary">support@deccanstay.com</a>
              </div>

              <div>
                <p className="text-gray-700">Website</p>
                <a href="https://www.deccanstay.com" target="_blank" rel="noreferrer" className="block font-medium text-primary">www.deccanstay.com</a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Office Hours</h3>
              <p className="text-gray-700">Mon–Sat: 9:00 AM – 8:00 PM • Sun: Closed</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-600">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="Your full name"
                  aria-label="Name"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-600">Email</span>
                <input
                  name="email"
                  value={form.email}
                  type="email"
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="you@domain.com"
                  aria-label="Email"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-sm font-medium text-gray-600">Phone (optional)</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  placeholder="+91 9xxxxxxxxx"
                  aria-label="Phone"
                />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-sm font-medium text-gray-600">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-y"
                  placeholder="Tell us what you need help with..."
                  aria-label="Message"
                />
              </label>
            </div>

            <div className="flex items-center justify-between mt-4">
              <small className="text-gray-500">We'll never share your contact details.</small>

              <div className="flex items-center gap-3">
                {status?.type === "loading" ? (
                  <span className="text-sm text-gray-600">{status.text}</span>
                ) : status?.type === "success" ? (
                  <span className="text-sm text-green-600">{status.text}</span>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Offices list column */}
        <aside className="space-y-4">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5">
            <h2 className="text-xl font-semibold mb-3">Our Hyderabad offices</h2>

            <ul className="space-y-3">
              {offices.map((o) => (
                <li key={o.id} className="p-3 rounded-lg hover:bg-gray-50">
                  <h4 className="font-semibold text-sm text-primary">{o.title}</h4>
                  <address className="not-italic text-sm text-gray-700 leading-relaxed mt-1">
                    {o.lines.map((l, i) => (
                      <div key={i}>{l}</div>
                    ))}
                  </address>

                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href={`tel:${o.phone.replace(/\s+/g, "")}`}
                      className="text-sm underline"
                    >
                      Call
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm underline"
                    >
                      View on map
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact card */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Quick help</h3>
            <p className="text-sm text-gray-700">For urgent bookings call our 24/7 hotline:</p>
            <a href="tel:+919876543210" className="block mt-3 font-medium text-primary">+91 98765 43210</a>
          </div>
        </aside>
      </div>
    </section>
  );
}