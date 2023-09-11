const nodeMailer = require("nodemailer");

const sendMail = async (to, subject, content) => {
  const transporter = await nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject,
    html: `<div>${content}</div>`,
  });

  return info;
};

module.exports = sendMail;
