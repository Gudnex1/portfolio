"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = link.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 1000;
        var startTimestamp = null;

        var easeInOutQuad = function easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        var step = function step(timestamp) {
          if (!startTimestamp) startTimestamp = timestamp;
          var elapsed = timestamp - startTimestamp;
          var progress = Math.min(elapsed / duration, 1);
          var easing = easeInOutQuad(progress);
          window.scrollTo(0, startPosition + distance * easing);

          if (elapsed < duration) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      }
    });
  });
});

function setElementStyles(el, styles) {
  var _i, _Object$entries, _Object$entries$_i, key, value;

  return regeneratorRuntime.async(function setElementStyles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          for (_i = 0, _Object$entries = Object.entries(styles); _i < _Object$entries.length; _i++) {
            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
            el.style[key] = value;
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

var mediaQueries = "\n@media (max-width: 850px) {\n  nav.nav_head {\n    padding-inline: 30px;\n    padding-block: 20px;\n    \n  }\n  header {\n    flex-wrap: wrap;\n    padding: 0px; \n  }\n}";
var style = document.createElement('style');
style.textContent = mediaQueries;
document.head.appendChild(style);
var data = {
  success: true
};