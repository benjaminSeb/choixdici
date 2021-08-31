const express = require("express");
const firestoreRoutes = require("./routes/firestore");
const authRoutes = require("./routes/auth");

const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

app.use(express.json());

app.use("/firestore", firestoreRoutes);
app.use("/auth", authRoutes);

module.exports = app;
