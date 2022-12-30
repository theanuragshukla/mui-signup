const express = require("express");
const webpush = require("web-push");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

let sub = {};

app.use(cors());
app.use(express.static(__dirname + "/static"));

app.use(express.static(path.join(__dirname, "client")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const publicVapidKey =
  "BB1hwvVLRa3fx56npRsQghzXs4gq9nMmEJHKtSoPSdlU98QD7CQL_6r9lGWlP_04bBes6Ef7OXy7sGoBMu0PPZc";

const privateVapidKey = "QIna-gxRSFrqhgyIc6guABhQ60485M2waty-iGEHzK8";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("https://pwa-push-server.onrender.com/subscribe", (req, res) => {
  const subscription = req.body;
  sub = subscription;
  console.log(subscription);
  res.status(201).json({});

  const payload = JSON.stringify({ title: "Node Js Push Notification" });

  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

app.get("/push", (req, res) => {
  const payload = JSON.stringify({ title: "Node Js Push Notification" });

  webpush.sendNotification(sub, payload).catch((err) => console.error(err));
  res.end("done");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
