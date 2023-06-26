document.addEventListener("DOMContentLoaded", function() {
    const scrollTopLink = document.getElementById("scroll-top");
  
    scrollTopLink.addEventListener("click", function(event) {
      event.preventDefault();
  
      // Hacer que la página se desplace al inicio
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      // Mostrar u ocultar el enlace según la posición del scroll
      if (scrollPosition > window.innerHeight) {
        scrollTopLink.style.display = "block";
      } else {
        scrollTopLink.style.display = "none";
      }
    });
  });