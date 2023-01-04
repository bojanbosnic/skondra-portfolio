import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Success from "./Success";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

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
      <div className="text-xl w-full contact-card mr-0  md:w-[40%] md:mr-16">
        <span className="block text-xl font-bold card-heading mb-1.5  leading-6 pt-6 md:pt-0 md:mb-5 text-left md:text-5xl  md:leading-[78px]">
          Contact
        </span>
        <span className="text-base max-w-[356px] leading-6 md:leading-8 block mb-4 md:mb-5">
          I usually work on several projects but I’ll be happy to discuss new
          opportunities. <b className="block">Let’s get in touch!</b>
        </span>
        {/* location */}
        <div className="bg-black px-0 py-0 md:py-5 border max-w-[210px] md:max-w-full border-white  mb-4 md:mb-0 rounded-xl">
          <div className="py-4">
            <span className="px-5 block text-xl leading-3 font-bold head-quarter md:text-4xl md:leading-normal ">
              Head Quarter
            </span>
            <span className="block text-grey text-fadeWhite px-5 mt-2.5 text-sm md:text-2xl">
              <span className="block">Banja Luka, BiH</span>
              <span className="block">Kosovke Devojke 10</span>
              <span className="block">78000</span>
            </span>
          </div>
        </div>
      </div>
      {/* forma-card */}

      <div
        className={`${
          success
            ? "relative flex items-center justify-center  md:px-7 md:py-2.5"
            : "px-7 py-2.5"
        } w-full h-[340px] md:w-[60%] p-10 contact-form-height bg-white rounded-md text-black`}
      >
        {success ? (
          <>
            <Success />
          </>
        ) : (
          <>
            <h5 className="hidden pt-10 lets-talk mb-2.5 mt-0 md:block">
              Let’s Talk
            </h5>
            <span className="hidden mb-4 text-lg lets-talk-paragraph md:block md:text-lg">
              Feel free to contact me at any time to talk about your awesome
              idea, and lets turn that into an amazing product.
            </span>
            {/* forma */}
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="w-full"
            >
              <div className="flex flex-wrap pt-2 md:pt-0 md:justify-between items-center w-full mb-1 md:mb-5 md:flex-nowrap">
                <div className="flex flex-col mb-2 contact-form-col">
                  <label className="text mb-1 md:mb-1.5">Full Name</label>
                  <input
                    onChange={(e) =>
                      setFields({ ...fields, user_name: e.target.value })
                    }
                    type="text"
                    className="placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
                    name="user_name"
                    placeholder="Marko Markovic"
                    {...register("user_name", { required: true })}
                  />
                  {/* {errors.user_name && (
              <div className="text-red text-xs">
                Please fill out this field.
              </div>
            )} */}
                </div>

                <div className="flex contact-form-col mb-2 flex-col ">
                  <label className="text mb-1 md:mb-1.5">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
                    placeholder="markovic@example.com"
                    {...register("user_email", { required: true })}
                  />
                  {/* {errors.user_email && (
              <div className="text-red text-xs">
                Please fill out this field.
              </div>
            )} */}
                </div>
              </div>

              <div className="flex w-full flex-col mb-2 md:mb-5">
                <label className=" mb-1 md:mb-1.5">Subject</label>
                <input
                  className="w-full placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base"
                  name="user_subject"
                  type="text"
                  placeholder="Information about potencial collaboration"
                  {...register("user_subject", { required: true })}
                />
                {/* {errors.user_subject && (
            <div className="text-red text-xs block">
              Please fill out this field.
            </div>
          )} */}
              </div>

              <div className="flex flex-col">
                <label className="text mb-1 md:mb-1.5">Message</label>
                <textarea
                  name="user_message"
                  className="text-area placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base text-area"
                  placeholder="Type some texte here..."
                  {...register("user_message", { required: true })}
                ></textarea>
                {/* {errors.user_message && (
            <span className="text-red text-xs">
              Please fill out this field.
            </span>
          )} */}
              </div>

              <div className="flex form-btn-parent mt-3 pb-0 justify-center md:justify-end md:mt-8 md:pb-8">
                <button
                  type="submit"
                  className="text-xs form-btn rounded md:rounded-lg py-2 px-10 bg-black text-white md:text-base md:py-5"
                >
                  Send <span className="hidden md:inline">Message</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
