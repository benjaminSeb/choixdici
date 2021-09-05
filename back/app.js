const express = require("express");
const authRoutes = require("./routes/auth");
const structureRoutes = require("./routes/structure");
const eventRoutes = require("./routes/event");

const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
	next();
});

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/structure", structureRoutes);
app.use("/event", eventRoutes);

module.exports = app;
