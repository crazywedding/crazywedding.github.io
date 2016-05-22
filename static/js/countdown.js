
var DATE_TO = new Date("2016-09-29T15:00:00+03:00");
var pnlDate = $("#pnlDate");
var countdownDay = $("#countdownDay");
var countdownHour = $("#countdownHour");
var countdownMin = $("#countdownMin");
var countdownSec = $("#countdownSec");


var timeDiff = function(dtFrom, dtTo) {
    var diff = (dtTo - dtFrom) / 1000;
    var days = Math.floor(diff / 86400);
    diff = diff - days * 86400;
    var hours = Math.floor(diff / 3600);
    diff = diff - hours * 3600;
    var minutes = Math.floor(diff / 60);
    var secs = Math.floor(diff - minutes * 60);
    return {d:days, h:hours, m:minutes, s:secs};
}

var countdownTimer = function() {
    var diff = timeDiff(new Date(), DATE_TO);
    countdownDay.html(diff.d);
    countdownHour.html(diff.h);
    countdownMin.html(diff.m);
    countdownSec.html(diff.s);
    //console.log(diff);
}

var dd = {
  y: DATE_TO.getFullYear(),
  m: DATE_TO.getMonth() + 1,
  d: DATE_TO.getDate()
}
if (dd.m < 10) {
  dd.m = "0" + dd.m;
}
if (dd.d < 10) {
  dd.d = "0" + dd.d;
}
pnlDate.html("" + dd.d + "." + dd.m + "." + dd.y);

countdownTimer();
setInterval(countdownTimer, 1000);