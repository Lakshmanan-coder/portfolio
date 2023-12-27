"use client";

import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useForm } from 'react-hook-form';

export default function ContactForm() {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const onSubmit = async (formInfo) => {
    const { data, error } = await sendEmail(formInfo);

    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Email sent successfully!");
    reset()
  };

  return (
    <form
      className="mt-10 flex flex-col dark:text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
        {...register('senderEmail', { required: 'Name is required' })}
      />
      <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        placeholder="Your message"
        required
        maxLength={5000}
        {...register('message', { required: 'Message is required' })}
      />
      <SubmitBtn />
    </form>
  );
}
