/**
 * Created by michael on 4/29/15.
 */

var app = (function (rainbowify, dropdown) {
    var app = {};
    var COUNT_DOWN_DATE = new Date("2015-10-23T19:00:00.000Z");
    var COLOR_CODES_HEADLINE = ["#e83d29", "#64b84f", "#f5d015", "#15a7d9"];
    var HEADING_ID = 1;
    var timerId;

    var prepareText = function() {
        var heading = document.getElementsByClassName("headline")[0]

        if(heading) {
            rainbowify.rainbow(heading, COLOR_CODES_HEADLINE)
        }
    };

    app.start = function() {
        prepareText();
        dropdown.apply();
    };

    return app;
}(rainbowify, dropdown));

window.onload = function () {
    app.start();
};
