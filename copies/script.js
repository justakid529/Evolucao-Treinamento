// Navbar scroll effect
const navbar = document.getElementById("navbar")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]")

function updateActiveNavLink() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"))
      if (navLink) {
        navLink.classList.add("active")
      }
    }
  })
}

window.addEventListener("scroll", updateActiveNavLink)

// Hero Carousel
const slides = document.querySelectorAll(".carousel-slide")
const indicators = document.querySelectorAll(".indicator")
const prevBtn = document.getElementById("carouselPrev")
const nextBtn = document.getElementById("carouselNext")

let currentSlide = 0
let autoplayInterval

function showSlide(index) {
  // Remove active class from all slides and indicators
  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))

  // Add active class to current slide and indicator
  slides[index].classList.add("active")
  indicators[index].classList.add("active")

  currentSlide = index
}

function nextSlide() {
  let next = currentSlide + 1
  if (next >= slides.length) {
    next = 0
  }
  showSlide(next)
}

function prevSlide() {
  let prev = currentSlide - 1
  if (prev < 0) {
    prev = slides.length - 1
  }
  showSlide(prev)
}

// Autoplay
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000)
}

function stopAutoplay() {
  clearInterval(autoplayInterval)
}

// Event listeners for carousel
prevBtn.addEventListener("click", () => {
  prevSlide()
  stopAutoplay()
  startAutoplay()
})

nextBtn.addEventListener("click", () => {
  nextSlide()
  stopAutoplay()
  startAutoplay()
})

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index)
    stopAutoplay()
    startAutoplay()
  })
})

// Start autoplay on page load
startAutoplay()

// Pause autoplay when user hovers over carousel
const carouselContainer = document.querySelector(".hero-carousel")
carouselContainer.addEventListener("mouseenter", stopAutoplay)
carouselContainer.addEventListener("mouseleave", startAutoplay)

// Back to top button
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }
})

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Contact form handling


  // Here you would typically send the data to a server
  // For now, we'll just show an alert and reset the form
 
// ===========================
// Envio de formulário via AJAX com toast
// ===========================
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede recarregar a página

    const formData = new FormData(form);

    fetch('./assets/php/salvar_contato.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // mostra o resultado do PHP
        form.reset(); // limpa o formulário
    })
    .catch(error => {
        alert('Erro ao enviar o formulário!');
        console.error(error);
    });
});


  // In a real application, you would do something like:
  // fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // })


// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Add animation on scroll for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
const animatedElements = document.querySelectorAll(".training-card, .benefit-category, .instructor-card, .stat-card")
animatedElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})
