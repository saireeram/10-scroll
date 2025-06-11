const dateElement = document.getElementById("date");
if (dateElement) {
  dateElement.innerHTML = new Date().getFullYear().toString();
}

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

if (
  navToggle instanceof HTMLElement &&
  linksContainer instanceof HTMLElement &&
  links instanceof HTMLElement
) {
  navToggle.addEventListener("click", () => {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    linksContainer.style.height =
      containerHeight === 0 ? `${linksHeight}px` : "0";
  });
}

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  if (!(navbar instanceof HTMLElement && topLink instanceof HTMLElement)) return;

  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      !(link instanceof HTMLAnchorElement) ||
      !(navbar instanceof HTMLElement) ||
      !(linksContainer instanceof HTMLElement)
    ) {
      return;
    }

    const href = link.getAttribute("href");
    if (!href) return;

    const id = href.slice(1);
    const element = document.getElementById(id);
    if (!(element instanceof HTMLElement)) return;

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight;
    }

    if (navHeight > 82) {
      position += containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = "0";
  });
});
