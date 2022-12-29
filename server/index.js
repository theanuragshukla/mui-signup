const express = require("express");
const webpush = require("web-push");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.static(__dirname + "/static"));
//set the static path
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
//subscribe route
app.post("/subscribe", (req, res) => {
  //get push subscription object
  const subscription = req.body;
  console.log(subscription);
  //send status 201
  res.status(201).json({});

  //create paylod
  const payload = JSON.stringify({ title: "Node Js Push Notification" });

  //pass the object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});
const sub = {
  endpoint:
    "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABjrIQWBG32mF4HZJUadCSycgsueLxv7I1rNxAaxSWZgx-payOcKq6mc8WJo8U-CvVcd09efet3xTEHJDtaw958EBfPvElR3Ljzr4W047Stj9Suhd-FZNIFawSE2ZPkKiZ7CiISQ_2cF4bOjMMyOcztM8dYXAy17z-_Zle2kuYiY_zsKlk",
  expirationTime: null,
  keys: {
    auth: "xpyUdPeMvicaGjQRkkO-pQ",
    p256dh:
      "BP4uwcYCW9p_TpmBhzO2q_7V-sC52EO2KIU4XDHVRYFhl495bI3ljYRUZJKp7ITzVD0upK_QjBREf4N4ahYcbc8",
  },
};

app.get("/push", (req, res) => {
  const payload = JSON.stringify({ title: "Node Js Push Notification" });

  //pass the object into sendNotification
  webpush.sendNotification(sub, payload).catch((err) => console.error(err));
  res.end("done");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
