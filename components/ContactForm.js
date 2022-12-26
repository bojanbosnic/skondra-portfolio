import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactForm = ({ setSuccess }) => {
  const initialValue = {
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
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
        "service_gaew1x4",
        "template_0tfvk4w",
        form.current,
        "aB0TJmTOhmbzu-ONG"
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
      <div className="text-2xl contact-card mr-0  md:w-[40%] md:mr-16">
        <span className="block text-2xl font-bold card-heading  leading-9 pt-6 md:pt-0  text-left md:text-5xl  md:leading-[78px]">
          Contact
        </span>
        <span className="text-base max-w-[356px] leading-8 block mb-5">
          I usually work on several projects but I’ll be happy to discuss new
          opportunities. <b>Let’s get in touch!</b>
        </span>
        <div className="bg-black  border border-white  mb-7 md:mb-0 rounded-xl">
          <div className="py-[38px]">
            <span className="px-5 block text-2xl font-bold head-quarter md:text-4xl md:leading-normal ">
              Head Quarter
            </span>
            <span className="block px-5 mt-2.5 text-sm md:text-2xl">
              <span className="block">Banja Luka, BiH</span>
              <span className="block">Kosovke Devojke 10</span>
              <span className="block">78000</span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-7 py-2.5 md:w-[60%] h-[450px] p-10 md:h-[780px]  contact-form-height bg-white rounded-md text-black">
        <h5 className="hidden pt-10 lets-talk mb-2.5 mt-0 md:block">
          Let’s Talk
        </h5>
        <span className="hidden mb-4 text-lg lets-talk-paragraph md:block md:text-lg">
          Feel free to contact me at any time to talk about your awesome idea,
          and lets turn that into an amazing product.
        </span>
        {/* forma */}
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="w-full">
          <div className="flex flex-wrap pt-4 md:justify-between items-center w-full mb-5 md:flex-nowrap">
            <div className="flex flex-col contact-form-col mb-5">
              <label className="text-xs mb-1.5 md:text-lg md:mb-2.5">
                Full Name
              </label>
              <input
                onChange={(e) =>
                  setFields({ ...fields, user_name: e.target.value })
                }
                type="text"
                className="placeholder:text-sm md:placeholder:text-base"
                name="user_name"
                placeholder="Marko Markovic"
                {...register("user_name", { required: true })}
              />
              {errors.user_name && (
                <div className="text-red">Please fill out this field.</div>
              )}
            </div>

            <div className="flex  contact-form-col flex-col mb-1.5">
              <label className="text-xs mb-1.5 md:text-lg md:mb-2.5">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="placeholder:text-sm md:placeholder:text-base"
                placeholder="markovic@example.com"
                {...register("user_email", { required: true })}
              />
              {errors.user_email && (
                <div className="text-red">Please fill out this field.</div>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col mb-5 md:mb-5">
            <label className="text-xs mb-1.5 md:text-lg md:mb-2.5 proba">
              Subject
            </label>
            <input
              className="w-full placeholder:text-sm md:placeholder:text-base"
              name="user_subject"
              type="text"
              placeholder="Information about potencial collaboration"
              {...register("user_subject", { required: true })}
            />
            {errors.user_subject && (
              <div style={{ color: "red" }} className="invalid-feedback block">
                Please fill out this field.
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-xs mb-1.5 md:text-lg md:mb-2.5">
              Message
            </label>
            <textarea
              name="user_message"
              className=" placeholder:text-sm md:placeholder:text-base text-area"
              placeholder="Type some texte here..."
              {...register("user_message", { required: true })}
            ></textarea>
            {errors.user_message && (
              <span className="text-red">Please fill out this field.</span>
            )}
          </div>

          <div className="flex mt-5 pb-0 justify-center md:justify-end md:mt-8 md:pb-8">
            <button
              type="submit"
              className="text-xs form-btn rounded-lg py-3 px-10 bg-black text-white md:text-base md:py-5"
            >
              Send <span className="hidden md:inline">Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
