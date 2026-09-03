/* Ledger rendering + filtering. Data comes from data/materials.js (plain <script>,
   so the page also works when opened from the filesystem, not just GitHub Pages). */
(function () {
  var tbody = document.getElementById("ledger-body");
  if (!tbody || typeof MATERIALS === "undefined") return;

  var countEl = document.getElementById("ledger-count");
  var searchEl = document.getElementById("ledger-search");
  var buttons = Array.prototype.slice.call(
    document.querySelectorAll(".filters button[data-filter]")
  );

  var LABEL = {
    no: "Cannot buy",
    yes: "Buy it",
    poor: "Poor value",
    rotate: "Rotating",
    partial: "Partial"
  };
  var BASE_LABEL = { yes: "Automatable", partial: "Partial", no: "Go out" };

  function pill(status, label) {
    return '<span class="pill ' + status + '">' + label + "</span>";
  }

  function row(m) {
    return (
      "<tr>" +
      '<td class="mat">' + m.name + "</td>" +
      "<td>" + pill(m.buy.status, LABEL[m.buy.status]) + "</td>" +
      '<td class="detail">' + m.buy.detail + "</td>" +
      "<td>" + pill(m.base.status, BASE_LABEL[m.base.status]) + "</td>" +
      '<td class="detail">' + m.base.detail + "</td>" +
      '<td class="detail">' + m.world + "</td>" +
      '<td class="detail">' + m.party + "</td>" +
      '<td class="conf">' + m.conf + "</td>" +
      "</tr>"
    );
  }

  var active = "all";

  function matchesFilter(m) {
    if (active === "all") return true;
    if (active === "cannot-buy") return m.buy.status === "no";
    if (active === "base-ok") return m.base.status === "yes";
    if (active === "must-leave") return m.base.status !== "yes";
    return m.tags.indexOf(active) !== -1;
  }

  function render() {
    var q = (searchEl ? searchEl.value : "").trim().toLowerCase();
    var shown = MATERIALS.filter(function (m) {
      if (!matchesFilter(m)) return false;
      if (!q) return true;
      var hay = (
        m.name + " " + m.buy.detail + " " + m.base.detail + " " + m.world + " " + m.party
      )
        .replace(/<[^>]+>/g, "")
        .toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    tbody.innerHTML = shown.length
      ? shown.map(row).join("")
      : '<tr><td colspan="8" style="text-align:center;color:var(--text-faint);padding:30px">No materials match that filter.</td></tr>';

    if (countEl) {
      countEl.textContent =
        "Showing " + shown.length + " of " + MATERIALS.length + " materials";
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      buttons.forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      active = b.getAttribute("data-filter");
      render();
    });
  });

  if (searchEl) searchEl.addEventListener("input", render);

  /* headline counts, computed from the data so they can never drift */
  var stats = {
    total: MATERIALS.length,
    cannot: MATERIALS.filter(function (m) { return m.buy.status === "no"; }).length,
    auto: MATERIALS.filter(function (m) { return m.base.status === "yes"; }).length,
    leave: MATERIALS.filter(function (m) { return m.base.status !== "yes"; }).length
  };
  Object.keys(stats).forEach(function (k) {
    var el = document.querySelector('[data-stat="' + k + '"]');
    if (el) el.textContent = stats[k];
  });

  render();
})();
