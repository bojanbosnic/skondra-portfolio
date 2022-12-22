import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactForm = ({ setSuccess }) => {
  const initialValue = {
    fullName: "",
    user_email: "",
    user_subject: "",
    message: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValue,
  });
  const form = useRef();
  const sendEmail = (formData) => {
    console.log(formData);
    emailjs
      .sendForm(
        "service_anzz42b",
        "template_gydwf0d",
        form.current,
        "xFHtG-tU0bU8-q9uf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("Error from emailJS", error.text);
        }
      );
    setSuccess(true);
    reset();
    console.log("PROSLO JE ZADNJEG DOSLO!");
  };

  return (
    <div className="flex flex-wrap md:justify-between md:flex-nowrap">
      <div className=" text-2xl contact-card mr-0  md:w-[30%] md:mr-16">
        <span className="block text-2xl font-bold card-heading  leading-9 pt-6 md:pt-0  text-left  md:leading-[78px]">
          Contact
        </span>
        <span className="text-base leading-8 block mb-5">
          I usually work on several projects but I’ll be happy to discuss new
          opportunities. <b>Let’s get in touch!</b>
        </span>
        <div className="bg-black w-52 mb-7 md:mb-0 rounded-xl">
          <div className="py-[38px]">
            <span className="px-5 block text-2xl font-bold head-quarter">
              Head Quarter
            </span>
            <span className="block px-5 mt-2.5 text-sm location">
              Banja Luka, BiH Kosovke Devojke 10 78000
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-7 py-5 md:w-[70%] h-[442px]   contact-form-height bg-white rounded-md text-black  overflow-y-scroll">
        <h5 className="hidden pt-5 lets-talk mb-2.5 mt-0 md:block">
          Let’s Talk
        </h5>
        <span className="hidden mb-4 lets-talk-paragraph md:block">
          Feel free to contact me at any time to talk about your awesome idea,
          and lets turn that into an amazing product.
        </span>
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="w-full">
          <div className="flex flex-wrap md:justify-between items-center w-full mb-5 md:flex-nowrap">
            <div className="flex flex-col contact-form-col mb-5">
              <label className="text-sm leading-8 mb-1.5 md:mb-2.5">
                Full Name
              </label>
              <input
                onChange={(e) =>
                  setFields({ ...fields, fullName: e.target.value })
                }
                type="text"
                name="user_name"
                placeholder="Marko Markovic"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <div
                  style={{ color: "red" }}
                  className="invalid-feedback d-block"
                >
                  Please fill out this field.
                </div>
              )}
            </div>

            <div className="flex  contact-form-col flex-col mb-1.5">
              <label className="text-sm leading-8 mb-1.5 md:mb-2.5">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="markovic@example.com"
                {...register("user_email", { required: true })}
              />
              {errors.user_email && (
                <div
                  style={{ color: "red" }}
                  className="invalid-feedback d-block"
                >
                  Please fill out this field.
                </div>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col mb-5 md:mb-5">
            <label className="text-sm leading-8 mb-1.5 md:mb-2.5">
              Subject
            </label>
            <input
              className="w-full"
              name="user_subject"
              type="text"
              placeholder="Information about potencial collaboration"
              {...register("user_subject", { required: true })}
            />
            {errors.user_subject && (
              <div
                style={{ color: "red" }}
                className="invalid-feedback d-block"
              >
                Please fill out this field.
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm leading-8 mb-1.5 md:mb-2.5">
              Message
            </label>
            <textarea
              rows="3"
              className="h-24"
              name="user_message"
              placeholder="Type some texte here..."
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <div
                style={{ color: "red" }}
                className="invalid-feedback d-block"
              >
                Please fill out this field.
              </div>
            )}
          </div>

          <div className="flex justify-center md:justify-end mt-7 pb-7">
            <button
              type="submit"
              className="text-base rounded-lg py-5 px-10 bg-black text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
