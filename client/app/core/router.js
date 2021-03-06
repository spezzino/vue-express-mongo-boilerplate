import Vue from "vue";
import VueRouter from "vue-router";

import routes from "../routes";

module.exports = function() {

	Vue.use(VueRouter);

	let router = new VueRouter({
		linkActiveClass: "active"
	});

	router.map(routes);

	return router;
};