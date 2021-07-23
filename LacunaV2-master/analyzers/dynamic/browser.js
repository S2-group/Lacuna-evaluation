/*
	Wrapper for headless browser.
	Niels Groot Obbink
*/

'use strict';

const puppeteer = require('puppeteer');
const path = require("path");

const logger = require("../../_logger");

const express = require('express');
var app = express();
const port = 8012;

module.exports = function()
{
	this.browser = null;
	this.page = null;
	this.server = null;

	this.min_required_time = 3000;


	this.load = function(dir, entry, timeout)
	{
		// var urlDir = path.basename(dir);
		// app.use("/" + urlDir, express.static(dir));
		if (app && app._router){
			var routes = app._router.stack;
			routes.forEach((route, i, routes) => {
				if (route.name == 'serveStatic') {
					routes.splice(i, 1);
				}
			});
		}
		app.use(express.static(dir));
		
		
		this.server = app.listen(port, () => {
			logger.info(`Analyzer[dynamic] localhost:${port}`)
			logger.debug(`Hosting: ${dir}/${entry}`);
		});
		var url = "http://localhost:" + port + "/" + entry; //"/" + urlDir +
		
		return new Promise(async (resolve, reject) => {
			this.browser = await puppeteer.launch({headless: false}); // await
			this.page = await this.browser.newPage();
			
			var consoleLogs = [];
			this.page.on('console', msg => consoleLogs.push(msg.text()));

			await this.page.goto(url);

			if (!timeout) { timeout = 0; }
			// Wait at least min_required_time (browser startup time) seconds, more if we have a longer timeout.
			setTimeout(() => {
				try {
					this.browser.close();
					this.server.close(function () {
						resolve(consoleLogs);
					});
				} catch (e) { console.log(e); }
			}, Math.max(timeout, this.min_required_time));
		});
	};
};
