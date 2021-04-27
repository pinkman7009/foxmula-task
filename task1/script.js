const parallaxTitle = document.querySelector('.title'); // title to be made as parallax element on scroll

// Function to make the parallax effect on scroll
const scrollParallax = () => {
  let offset = window.scrollY;
  const speed = 0.1;

  parallaxTitle.style.transform =
    offset === 0
      ? `translate(-50%,-50%)`
      : `translate(-50%,${offset * speed}px)`;
};

// Event Listener
window.addEventListener('scroll', scrollParallax);
