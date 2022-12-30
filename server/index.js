require('dotenv').config()
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static(__dirname+'/static'))
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json())

const publicVapidKey = process.env.PUBLIC_VAPID_KEY
const privateVapidKey = process.env.PRIVATE_VAPID_KEY

let sub = {}

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey,privateVapidKey);
app.get('/', (req, res)=>{
	res.end("alive!")
})

app.post('/subscribe', (req, res)=>{
	const subscription = req.body;
	console.log(subscription)
	res.status(201).json({})
	sub = subscription
	const payload = JSON.stringify({title: 'Node Js Push Notification' });
	webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
})

app.get('/push', (req, res)=>{
	const payload = JSON.stringify({title: 'Node Js Push Notification' });
	webpush.sendNotification(sub, payload).catch(err=> console.error(err));
	res.end("done")
})

const port = 3000;
app.listen(port, ()=>{
	console.log(`server started on ${port}`)
});
