/**
 * Created by michael on 9/8/15.
 */
var rainbowify = function() {
    return {
        rainbow: function (element, colors) {
            var text = element.innerText || element.textContent;

            var formatted = text.split("").map(function(c) {
                var random = (Math.random() * (colors.length)) | 0;
                var color = colors[random]

                return "<span style='color: " + color + "'>" + c + "</span>";
            });

            element.innerHTML = formatted.join("");
        }
    }
}();