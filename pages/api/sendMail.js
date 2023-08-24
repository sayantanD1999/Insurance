// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    res.status(200).json(data);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Lead Contact",
        text: "Conatct form",
        html: `<h1> ${data.first_name} ${data.last_name} ${data.phone} ${data.email} ${data.message}</h1>`,
      });

      return res
        .status(200)
        .json({ message: "Contact form submitted successfully" });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}
