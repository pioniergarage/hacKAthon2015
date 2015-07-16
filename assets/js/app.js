/**
 * Created by michael on 4/29/15.
 */

var app = (function (countdown) {
    var app = {};
    var COUNT_DOWN_DATE = new Date("2015-10-23T19:00:00.000Z");
    var COLOR_CODES_HEADLINE = ["#e83d29", "#64b84f", "#f5d015", "#15a7d9"];
    var timerId;

    app.startCountDown = function () {
        timerId = countdown(
            COUNT_DOWN_DATE,
            function(ts) {
                console.log(ts.start);
                document.getElementById("days").innerHTML = ts.days;
                document.getElementById("hours").innerHTML = ts.hours;
            }, countdown.DAYS | countdown.HOURS);
    };

    app.stopCountDown = function() {
        window.clearInterval(timerId);
    };

    return app;
}(countdown));

window.onload = function () {
    app.startCountDown();
};
