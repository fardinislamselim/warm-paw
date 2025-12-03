import React from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.032646736444!2d90.395679!3d23.750529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85a7304561b%3A0xc49b71f92e276f7!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1701633600000!5m2!1sen!2sbd";

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get In Touch"
          subtitle="We're here to answer your pet care questions and schedule services."
          className="mb-10"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text dark:text-gray-300">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered input-primary w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text dark:text-gray-300">
                    Your Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="input input-bordered input-primary w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text dark:text-gray-300">Subject</span>
                </label>
                <select className="select select-bordered select-primary w-full">
                  <option disabled selected>
                    Select an Inquiry Type
                  </option>
                  <option>Service Booking</option>
                  <option>General Question</option>
                  <option>Emergency/Urgent Care</option>
                  <option>Partnership Inquiry</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text dark:text-gray-300">
                    Your Message
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered textarea-primary h-24 w-full"
                  placeholder="Tell us how we can help your furry friend..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-lg font-bold"
                >
                  Send Message 🐾
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary mb-4">
                Contact Details
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p className="flex items-center gap-3">
                  <span className="text-primary text-xl">📞</span>
                  Phone: (123) 456-7890
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-primary text-xl">📧</span>
                  Email: info@petcarehub.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-primary text-xl">📍</span>
                  Address: 123 Pet Lane, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary mb-4">
                Service Hours
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p className="flex justify-between">
                  Mon - Fri:{" "}
                  <span className="font-semibold text-success">
                    9:00 AM - 6:00 PM
                  </span>
                </p>
                <p className="flex justify-between">
                  Saturday:{" "}
                  <span className="font-semibold text-warning">
                    10:00 AM - 4:00 PM
                  </span>
                </p>
                <p className="flex justify-between">
                  Sunday:{" "}
                  <span className="font-semibold text-error">Closed</span>
                </p>
                <p className="text-sm pt-2 text-primary-content bg-primary p-2 rounded-lg text-center font-medium">
                  Emergency services available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Find Our Location
          </h3>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow-xl border-4 border-primary/50">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pet Care Service Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
