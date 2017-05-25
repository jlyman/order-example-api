const express = require('express')
const app = express()
const bodyParser = require('body-parser')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.route('/customers')
	.get(function (req, res) {
		const cust1 = {
			name: "John Doe",
			address1: "123 Somewhere St",
			city: "Denver",
			state: "CO",
		};
		const cust2 = {
			name: "Jane Smith",
			address1: "456 Nowhere St",
			city: "Denver",
			state: "CO",
		};
		res.json([ cust1, cust2 ])
	})
	.post(function (req, res) {
		console.log('Customer details received: ', req.body);
		const newCustomer = req.body;
		newCustomer.id = getRandomInt(100, 1000);
		res.json(newCustomer);
	})

app.listen(3003, function () {
  console.log('Example API server listening on port 3003!')
})