"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Globe,
  MapPin,
  Phone,
  Facebook,
  MessageCircle,
  MessageSquare
} from "lucide-react";

import Success from "./success";

const ContactForm = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if required fields are filled
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

  const onAgreeClick = () => {
    showResult(false);
    console.log("Modal closed");
  };

  return (
    <>
      <div className="min-h-screen relative container mt-40 px-6 mx-auto font-body">
        <section>
          {/* <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${Home1})`,
              height: "300px",
              backgroundPosition: " 50%",
            }}
          ></div> */}
          <div className="container justify-center flex  text-gray-800 px-4 md:px-12">
            <div className="absolute backdrop-blur-sm bg-white/30  shadow-lg py-10 md:py-12 px-4 md:px-6  -mt-36">
              <div className="grid md:grid-cols-3  lg:grid-cols-3 gap-x-6 ">
                <div className="mb-6 lg:mb-0 text-center mx-auto ">
                  <Globe className="w-16 h-16 mx-auto mb-4 " />
                  <h2 className="font-medium text-lg ">Okla States</h2>
                </div>
                <div className="mb-6 lg:mb-0 text-center mx-auto">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h2 className="font-medium text-lg">Libreville, 94126</h2>
                </div>
                <div className="mb-6 md:mb-0 text-center mx-auto">
                  <Phone className="w-16 h-16 mx-auto mb-4" />
                  <h2 className="font-medium text-lg">+ 01 234 567 89</h2>
                </div>
              </div>
              <h1 className="mx-auto my-5 flex justify-center font-medium text-lg text-gray-800">
                Have a project to discuss, get in touch!
              </h1>
              <h2 className="mx-auto mt-10  flex justify-center">
                Chat or send email
              </h2>
              <div className=" flex flex-row justify-evenly my-5">
                <a
                  href="https://m.me/username"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="text-[#0099FF]  w-16 h-16" />
                </a>
                <a
                  href="https://wa.me/15697774223"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="text-[#25D366] w-16 h-16" />
                </a>
                <Facebook className="text-[#1877F2] w-16 h-16" />
              </div>
              <div className="max-w-[700px] mx-auto mt-10 ">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b border-gray-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                      name="from_name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding border-b border-gray-600 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                      name="from_number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b border-gray-600 transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                      name="from_email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border-b border-gray-600 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none "
                      name="message"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    value="Send"
                    type="submit"
                    className=" w-full px-6 py-2.5 bg-orange-500  text-white font-medium text-xs leading-tight uppercase hover:bg-orange-600 focus:bg-orange-600  focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Send
                  </button>
                  {error && <p className="text-red-600 mt-1">{error}</p>}

                  <div>
                    {result ? (
                      <Success
                        title="Message Sent 🎉"
                        content="Thanks for getting in touch! We will contact you shortly."
                        onAgreeLabel="Ok"
                        onAgreeClick={onAgreeClick}
                      />
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactForm;
