"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value;
    const phoneNumber = form.current.from_number.value;
    const email = form.current.from_email.value;
    const message = form.current.message.value;

    if (!name || !phoneNumber || !email || !message) {
      setError("Please fill in all required fields!");
      return;
    }

    emailjs
      .sendForm(
        "service_f1xpdqn",
        "template_zwz1loo",
        form.current,
        "Ax8_AHmExefd5PM7Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          showResult(true);
          setError("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions about our products or services? We&apos;re here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            

            <div className="flex items-start space-x-4">
              <div className="bg-primary p-3 rounded-lg text-white">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                <p className="text-gray-600">+44 751 6523 050</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary p-3 rounded-lg text-white">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                <p className="text-gray-600">info@greenrootstrading.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="from_number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary "
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {error && <p className="text-red-600">{error}</p>}
              

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;