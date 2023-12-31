"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { renderAsync } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

interface formInfo {
  senderEmail: string;
  message: string;
}

export const sendEmail = async (formInfo: formInfo) => {
  const{ senderEmail, message} = formInfo

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const html = await renderAsync(React.createElement(ContactFormEmail, {
      message: message,
      senderEmail: senderEmail,
    }))
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "lakshvj21@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      html,
    });   
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
