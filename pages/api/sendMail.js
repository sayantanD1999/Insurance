// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    console.log(req.body);
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Lead Contact",
        text: "Conatct form",
        html: `<h1> ${data.data.name} ${data.data.phone} ${data.data.email} ${data.data.message}</h1>`,
      });
      console.log(22);
      res.status(200).json(data);
      return res
        .status(200)
        .json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
