$(window).load(function() {

    $(".fx-tooltip-pointer").click(function() {
        var txt = $(this).parent().children(".fx-tooltip-text");
        var ttl = $(this).parent().children(".fx-tooltip-title");
        var ot = Math.abs(txt.css("opacity") - 1);
        if (ot == 1) {
            txt.css("opacity", 1);
            txt.css("pointer-events", "auto");
            ttl.css("opacity", 0);
        } else {
            txt.css("opacity", 0);
            txt.css("pointer-events", "none");
            ttl.css("opacity", 1);
        }
    });

    var l = location.href.split("#");
    if (l.length == 2) {
        if (l[1] == "open") {
            $(".fx-tooltip-pointer").click();
        }
    }
});