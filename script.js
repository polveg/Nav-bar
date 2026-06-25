(function () {
  const links = [
    { page: "Home", link: "https://sap.sharepoint.com/sites/211849" },
    { page: "SAP App Development & Clean Core", link: "https://sap.sharepoint.com/sites/211849/SitePages/Build-&-Clean-Core.aspx?csf=1&web=1&share=EVpwRNkllX1MstTlh6mwDz4BTQ51bb8D-teFOSR9POypGg&e=FRPuev" },
    { page: "SAP BTP Workflow", link: "https://sap.sharepoint.com/sites/211849/SitePages/BTP-Workflow.aspx" },
    { page: "Transformation Preparation Service", link: "https://sap.sharepoint.com/sites/211849/SitePages/Transformation-Preparation-Service.aspx" },
    { page: "SAP Integration Suite", link: "https://sap.sharepoint.com/sites/211849/SitePages/SAP-Integration-Suite.aspx" },
    { page: "PI/PO Elevation", link: "https://sap.sharepoint.com/sites/211849/SitePages/PI-Elevation.aspx" },
    { page: "B2B Integration Factory", link: "https://sap.sharepoint.com/sites/211849/SitePages/B2B-Integration-Factory.aspx" },
    { page: "MAYA", link: "https://sap.sharepoint.com/sites/211849/SitePages/MAYA.aspx" },
    { page: "SAP Advanced Event Mesh Expert Team", link: "https://sap.sharepoint.com/sites/211849/SitePages/Advanced-Event-Mesh.aspx" },
    { page: "SAP Integration Modernization", link: "https://events.sap.com/eur-sap-integration-modernization/en_us/home.html" },
    { page: "Service Portfolio for BTP Integration", link: "https://servicescatalog.cvdp3eof-dbsservic1-p1-public.model-t.cc.commerce.ondemand.com/c/Service-Portfolio-for-BTP-Integration/p/BTP_Integration" },
    { page: "SAP BTP AI", link: "https://sap.sharepoint.com/sites/211849/SitePages/SAP-BTP-AI.aspx" },
    { page: "AI Best Practices", link: "https://sap.sharepoint.com/sites/211849/SitePages/AI-Best-Practices.aspx" },
    { page: "BTP AI Micro Apps", link: "https://sap.sharepoint.com/sites/211849/SitePages/BTP-AI-Micro-Apps.aspx" },
    { page: "Joule Adoption Program", link: "https://sap.sharepoint.com/sites/211849/SitePages/Joule-Adoption-Program.aspx" },
    { page: "SAP Cloud Identity Services for Business AI", link: "https://sap.sharepoint.com/sites/211849/SitePages/SAP-Cloud-Identity-Services-for-Business-AI.aspx" },
    { page: "Mobile Start", link: "https://sap.sharepoint.com/sites/211849/SitePages/Mobile-Start.aspx" },
    { page: "RISE Migration", link: "https://sap.sharepoint.com/sites/211849/SitePages/RISE-Migration.aspx" },
    { page: "BTP Japan", link: "https://sap.sharepoint.com/sites/211849/SitePages/Japan.aspx" },
  ];

  const input = document.getElementById("sapSearchInput");
  const clearBtn = document.getElementById("sapClearBtn");
  const dropdown = document.getElementById("sapDropdown");
  const iconSVG =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  let activeIdx = -1;

  function render(filter) {
    const q = (filter || "").toLowerCase();
    const matches = q
      ? links.filter((l) => l.page.toLowerCase().includes(q))
      : links;

    if (!q) {
      dropdown.classList.remove("open");
      return;
    }

    if (matches.length === 0) {
      dropdown.innerHTML = '<div class="no-match">No matching topics</div>';
    } else {
      const regex = new RegExp(
        "(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
        "gi"
      );
      dropdown.innerHTML = matches
        .map((item) => {
          const title = item.page.replace(
            regex,
            '<span class="highlight">$1</span>'
          );
          return `<a href="${item.link}" target="_blank" rel="noopener"><span class="link-icon">${iconSVG}</span><span class="link-title">${title}</span></a>`;
        })
        .join("");
    }
    dropdown.classList.add("open");
    activeIdx = -1;
  }

  input.addEventListener("input", function () {
    clearBtn.style.display = this.value ? "block" : "none";
    render(this.value);
  });

  input.addEventListener("focus", function () {
    if (this.value) render(this.value);
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    clearBtn.style.display = "none";
    dropdown.classList.remove("open");
    input.focus();
  });

  input.addEventListener("keydown", function (e) {
    const items = dropdown.querySelectorAll("a");
    if (!items.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      updateActive(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      updateActive(items);
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      items[activeIdx].click();
    } else if (e.key === "Escape") {
      dropdown.classList.remove("open");
    }
  });

  function updateActive(items) {
    items.forEach((el, i) => el.classList.toggle("active", i === activeIdx));
    if (items[activeIdx])
      items[activeIdx].scrollIntoView({ block: "nearest" });
  }

  document.addEventListener("click", function (e) {
    if (!document.getElementById("sapSearchWrapper").contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
})();
