const galleryItems = document.querySelectorAll(".gallery-item");

const galleryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

galleryItems.forEach((item) => galleryObserver.observe(item));
