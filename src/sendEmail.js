const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => console.log("The server started on port 3000!!!"));

app.get("/", (req, res) => {
  res.send("<h1 style='text-align: center'>Welcome</h1>");
  console.log("req", req);
  console.log("res", res);
});

app.post("/sendmail", (req, res) => {
  let formValue = req.body;
  console.log(formValue);
  sendEmail(formValue, (info) => {
    console.log("The email send!!!!");
    res.send(info);
  });
});

async function sendEmail(formValue, callback) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "leonenkovalera@gmail.com",
      pass: "ltftdvrtumhvwukr",
    },
  });

  let mailOptions = {
    from: `"Audi Center 👻" <leonenkovalera@gmail.com>`,
    to: formValue.email,
    subject: "Message from Audi Center",
    html: `<p>Здравствуйте ${formValue.userName}</p>
    <p>Ваша заявка находится на рассмотрении</p>
    <h2>Покупатель</h2>
    <p>Имя: ${formValue.userName}</p>
    <p>Контактный телефон: ${formValue.phoneNumber}</p>
    <p>Email: ${formValue.email}</p>
    <p>Город: ${formValue.city}</p>
    <p>Адрес доставки: ${formValue.deliveryAddress}</p>
    <h3>Заказанные товары</h3>
    <div style="border: 1px solid black; display: flex; border-bottom: none;">
      <div style="width: 30%">
        <div style="
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid black;
          height: 33px;
          font-size: large;"
          >Наименование товара
        </div>
        ${formValue.parts
          .map(
            (partsNaimenovanie) =>
              `<div style="border: 1px solid black; height: 30px;">${partsNaimenovanie.naimenovanie}</div>`
          )
          .join("")}
      </div>

      <div style="width: 50%">
        <div style="
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid black;
          height: 33px;
          font-size: large;"
          >Название
        </div>
        ${formValue.parts
          .map(
            (partsName) =>
              `<div style="border: 1px solid black; height: 30px;">${partsName.name}</div>`
          )
          .join("")}
      </div>

      <div style="width: 20%">
        <div style="
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid black;
          height: 33px;
          font-size: large;"
          >Цена
        </div>
        ${formValue.parts
          .map(
            (partsPrice) =>
              `<div style="border: 1px solid black; height: 30px;">${
                partsPrice.price + " " + "руб"
              }</div>`
          )
          .join("")}
      </div>
      </div>
      <div style="display: flex; justify-content: flex-end; border: 2px solid;">
        Общая сумма заказа:
        <div style="width: 20%; border-left: 2px solid; margin-left: 5px; margin-right: -1px; font-weight: 900; font-family: inherit;">${
          formValue.fullPrice + " " + "руб"
        }</div>
      </div>
      <p>В ближайшее время с Вами свяжется менеджер для оформления заказа.</p>
    `,
  };

  let info = await transporter.sendMail(mailOptions);

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  callback(info);
}
