import nodemailer from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async ({ to, subject, text="",html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  await transporter.sendMail(mailOptions);
};
