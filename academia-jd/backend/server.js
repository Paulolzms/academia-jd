import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pauloluizsouza84@gmail.com",
        pass: "jxpkexqcqlhfhnf",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "pauloluizsouza84@gmail.com",
      subject: `Mensagem de ${name}`,
      text: message,
    });

    res.status(200).send({ sucess: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ sucess: false });
  }
});

app.listen(3001, () => console.log("Server is running on port 3001"));

