/**
 * Created by michael on 9/10/15.
 */

var dropdown = function() {
    var DISPLAY_NONE = "none";

    var toggle = function(element) {
        if (element.style.display !== "none") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    };

    return {
        apply: function() {
            var dropdownList = document.getElementById("dropdown");
            var dropdownToggle = document.getElementById("dropdown-toggle");

            dropdownToggle.onclick = function(e) {
                toggle(dropdownList);
                e.preventDefault();
            };

            document.onmouseup = function() {
                if (dropdownList.style.display !== DISPLAY_NONE) {
                    dropdownList.style.display = DISPLAY_NONE;
                }
            };
        }
    };
}();