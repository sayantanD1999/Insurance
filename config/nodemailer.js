import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL_ID;
const pswd = process.env.NEXT_PUBLIC_EMAIL_PASSSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pswd,
  },
});

export const mailOptions = {
  from: email,
  to: pswd,
};
