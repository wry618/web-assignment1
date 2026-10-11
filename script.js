/* StressExterminators — sample interactions (demo only) */
(function () {
  "use strict";

  // 1) Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // 2) FAQ accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      // close siblings
      item.parentElement.querySelectorAll(".faq-item.open").forEach(function (s) {
        s.classList.remove("open");
      });
      if (!isOpen) item.classList.add("open");
    });
  });

  // 3) Tabs
  document.querySelectorAll(".tabs").forEach(function (tabs) {
    var buttons = tabs.querySelectorAll(".tab-btn");
    var panels = document.querySelectorAll(tabs.getAttribute("data-panels") || ".tab-panel");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var target = btn.getAttribute("data-tab");
        panels.forEach(function (p) {
          p.classList.toggle("active", p.id === target);
        });
      });
    });
  });

  // 4) Mood picker (demo interaction — not a diagnostic tool)
  var moods = [
    { key: "calm", emoji: "😌", label: "Calm", tip: "Take a slow breath in for 4, hold for 4, out for 6." },
    { key: "stressed", emoji: "😣", label: "Stressed", tip: "Try one small task first, then a 2-minute break." },
    { key: "tired", emoji: "😴", label: "Tired", tip: "A short walk and some water can help you reset." },
    { key: "good", emoji: "😄", label: "Good", tip: "Notice what's going well and write down one thing." }
  ];
  var picker = document.querySelector(".mood-picker");
  if (picker) {
    var result = document.querySelector(".mood-result");
    moods.forEach(function (m) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mood-btn";
      btn.setAttribute("aria-pressed", "false");
      btn.innerHTML = m.emoji + "<span>" + m.label + "</span>";
      btn.addEventListener("click", function () {
        picker.querySelectorAll(".mood-btn").forEach(function (b) {
          b.classList.remove("selected");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");
        if (result) {
          result.textContent = m.label + ": " + m.tip + " (Sample interaction — not a diagnostic tool.)";
          result.classList.add("visible");
        }
      });
      picker.appendChild(btn);
    });
  }

  // 5) Demo forms — prevent real submission
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-msg");
      if (msg) {
        msg.textContent = "This is a demo form — nothing was submitted.";
        msg.classList.add("visible");
      }
    });
  });

  // 6) Floating particles (soothing background)
  var particles = document.querySelector(".particles");
  if (particles) {
    for (var i = 0; i < 16; i++) {
      var s = document.createElement("span");
      var size = 6 + Math.random() * 14;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.animationDuration = 20 + Math.random() * 22 + "s";
      s.style.animationDelay = -Math.random() * 40 + "s";
      particles.appendChild(s);
    }
  }
})();
