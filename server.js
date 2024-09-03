import { readFileSync } from "node:fs";
import express from "express";
import { render } from "./src/entry-server.js";

const app = express();

const template = readFileSync("index.html", "utf-8");

app.use("*", async (req, res) => {
	try {
		const url = req.originalUrl || req.url;
		const renderRes = await render(url);

		const html = template.replace("<!--app-html-->", renderRes.html);

		res.status(200).set({ "Content-Type": "text/html" }).end(html);
	} catch (e) {
		console.error(e.stack);
		res.status(500).end(e.stack);
	}
});

app.listen(3000, () => {
	console.log("http://localhost:3000");
});
