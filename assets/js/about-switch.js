// About opening: short / long version switch. Both versions are already in the
// page; this only shows one and hides the other. No storage, no cookies: every
// visit starts on the short version.
(function () {
  var root = document.getElementById("about-switch");
  if (!root) return;

  var bar = root.querySelector(".as-bar");
  var toggle = root.querySelector(".as-switch");
  var labels = root.querySelectorAll(".as-label");
  var versions = {
    short: root.querySelector('.as-version[data-version="short"]'),
    long: root.querySelector('.as-version[data-version="long"]')
  };
  if (!bar || !toggle || !versions.short || !versions.long) return;

  function show(name) {
    var isLong = name === "long";
    toggle.setAttribute("aria-checked", isLong ? "true" : "false");
    root.classList.toggle("is-long", isLong);
    Object.keys(versions).forEach(function (key) {
      var on = key === name;
      versions[key].hidden = !on;
      versions[key].classList.toggle("is-on", on);
    });
  }

  toggle.addEventListener("click", function () {
    show(toggle.getAttribute("aria-checked") === "true" ? "short" : "long");
  });

  // A click on a label picks that side, which flips the switch when it is the
  // inactive one. Mouse and touch only: the button is the keyboard control.
  labels.forEach(function (label) {
    label.addEventListener("click", function () {
      show(label.getAttribute("data-version"));
    });
  });

  show("short");
  bar.hidden = false;
})();
