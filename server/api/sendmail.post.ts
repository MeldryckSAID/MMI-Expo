import nodemailer from "nodemailer";

const runtimeConfig = useRuntimeConfig();
const mail = runtimeConfig.mail;
const psw = runtimeConfig.psw;

const transporter = nodemailer.createTransport({
  host: "mail.infomaniak.com",
  port: 465,
  secure: true,
  auth: { user: mail, pass: psw },
});

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const options = {
    from: mail,
    to: mail,
    subject:
      "[exposition] : " +
      data.name +
      " " +
      data.surname +
      " with : " +
      data.email,
    text: data.message,
  };
  await transporter.sendMail(options);
  return { options };
});
