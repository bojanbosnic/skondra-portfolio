import React from "react";

const ContactForm = ({ setSuccess }) => {
  return (
    <div className="cotaniner mx-auto">
      <div className="flex justify-between ">
        <div className="w-[30%]">
          <span className="block text-xl text-center font-normal leading-9  md:text-left md:text-5xl md:leading-[78px]">
            Contact
          </span>
          <small>
            I usually work on several projects but I’ll be happy to discuss new
            opportunities. <b>Let’s get in touch!</b>
          </small>
          <div>Head Qouter</div>
        </div>
        <div className="w-[70%] bg-white rounded-md text-black p-12 overflow-y-scroll">
          <h5>Let’s Talk</h5>
          <span className="block text-lg">
            Feel free to contact me at any time to talk about your awesome idea,
            and lets turn that into an amazing product.
          </span>
          <form className="w-full">
            <div className="flex justify-between items-center w-full mb-5">
              <div className="flex flex-col">
                <label>Full Name</label>
                <input type="text" placeholder="Marko Markovic" />
              </div>
              <div className="flex flex-col">
                <label>Email</label>
                <input type="email" placeholder="markovic@example.com" />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label>Subject</label>
              <input
                className="w-full"
                type="text"
                placeholder="Information about potencial collaboration"
              />
            </div>

            <div className="mb-5">
              <label>Message</label>
              <textarea placeholder="Type some texte here..."></textarea>
            </div>

            <button
              onClick={(e) => setSuccess(true)}
              className="text-base py-5 px-10 bg-black text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
