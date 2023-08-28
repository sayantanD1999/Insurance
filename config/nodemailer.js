import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL_ID;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSSWORD;

export const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: 'sayantanduttasd1999@gmail.com',
    pass: 'kmnxhlmqnunglhvy',
  },
  secure: true,
});

export const mailOptions = {
  from: email,
  to: email,
};
