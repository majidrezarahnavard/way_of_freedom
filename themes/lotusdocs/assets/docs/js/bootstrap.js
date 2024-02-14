// Import the Bootstrap components we want to use.
// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
import Tab from "/js/bootstrap/src/tab";
import Collapse from "/js/bootstrap/src/collapse";
import Dropdown from "/js/bootstrap/src/dropdown";
import ScrollSpy from "js/bootstrap/src/scrollspy";
import Tooltip from "js/bootstrap/src/tooltip";

export default {
    Tab,
    Collapse,
    Dropdown,
    ScrollSpy,
    Tooltip
}

window.Collapse = Collapse;
window.Tooltip = Tooltip;