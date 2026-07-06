const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const activeItem = document.querySelector(".faq-item.active");

    if (activeItem && activeItem !== item) {
      activeItem.classList.remove("active");
    }

    item.classList.toggle("active");
  });
});
