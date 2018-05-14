//TODO: increse the size of the input when item is focused & returns to normal on blur
// On the click of the input, make the input larger. Then when clicking anywhere else it goes back to it's normal size.

"use strict";
{
    const expandOnFocus = () => {
        return { 
            link: ($scope, $element, $attrs) => {
                $element.on("focus", () => {
                    $element.css("width", "500px");
                });

                $element.on("blur", () => {
                    $element.css("width", "");
                });
            }
        }           
    }

    angular
    .module("thoughts-app")
    .directive("expandOnFocus", expandOnFocus);
}