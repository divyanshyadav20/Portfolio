window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  const windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});
