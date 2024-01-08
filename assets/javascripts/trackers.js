window.dataLayer = window.dataLayer || [];

function gtag() {
	window.dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-Y1SW8E75MN");
gtag("config", "AW-11027142108");

!(function (f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function () {
		n.callMethod
			? n.callMethod.apply(n, arguments)
			: n.queue.push(arguments);
	};
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = "2.0";
	n.queue = [];
	t = b.createElement(e);
	t.async = !0;
	t.src = v;
	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s);
})(
	window,
	document,
	"script",
	"https://connect.facebook.net/en_US/fbevents.js"
);

fbq("init", "456914986604600");
fbq("track", "PageView");

(function (h, o, t, j, a, r) {
	h.hj =
		h.hj ||
		function () {
			(h.hj.q = h.hj.q || []).push(arguments);
		};
	h._hjSettings = { hjid: 3437941, hjsv: 6 };
	a = o.getElementsByTagName("head")[0];
	r = o.createElement("script");
	r.async = 1;
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
	a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
