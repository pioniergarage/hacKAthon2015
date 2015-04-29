/**
 * Created by michael on 4/29/15.
 */

var app = (function (countdown) {
    var app = {};
    var COUNT_DOWN_DATE = new Date("2015-06-12T19:00:00.000Z");
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