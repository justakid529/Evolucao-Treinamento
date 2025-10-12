// Consolidated site JS: navbar, mobile menu, carousel, contact form, back-to-top, animations
document.addEventListener('DOMContentLoaded', () => {
	// Navbar scroll effect
	const navbar = document.getElementById('navbar')
	if (navbar) {
		window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset
			if (currentScroll > 100) {
				navbar.classList.add('scrolled')
			} else {
				navbar.classList.remove('scrolled')
			}
		})
	}

	// Mobile menu toggle
	const mobileMenuBtn = document.getElementById('mobileMenuBtn')
	const navMenu = document.getElementById('navMenu')
	if (mobileMenuBtn && navMenu) {
		mobileMenuBtn.addEventListener('click', () => {
			mobileMenuBtn.classList.toggle('active')
			navMenu.classList.toggle('active')
		})

		// Close mobile menu when clicking on a link
		const navLinks = document.querySelectorAll('.nav-link')
		navLinks.forEach((link) => {
			link.addEventListener('click', () => {
				mobileMenuBtn.classList.remove('active')
				navMenu.classList.remove('active')
			})
		})
	}

	// Active nav link on scroll
	const sections = document.querySelectorAll('section[id]')
	const navLinksAll = document.querySelectorAll('.nav-link')
	function updateActiveNavLink() {
		const scrollY = window.pageYOffset
		sections.forEach((section) => {
			const sectionHeight = section.offsetHeight
			const sectionTop = section.offsetTop - 120
			const sectionId = section.getAttribute('id')
			const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				navLinksAll.forEach((link) => link.classList.remove('active'))
				if (navLink) navLink.classList.add('active')
			}
		})
	}
	window.addEventListener('scroll', updateActiveNavLink)

	// Hero Carousel
	const slides = document.querySelectorAll('.carousel-slide')
	const indicators = document.querySelectorAll('.indicator')
	const prevBtn = document.getElementById('carouselPrev')
	const nextBtn = document.getElementById('carouselNext')
	let currentSlide = 0
	let autoplayInterval

	function showSlide(index) {
		if (!slides.length) return
		slides.forEach((slide) => slide.classList.remove('active'))
		indicators.forEach((indicator) => indicator.classList.remove('active'))
		const idx = ((index % slides.length) + slides.length) % slides.length
		slides[idx].classList.add('active')
		if (indicators[idx]) indicators[idx].classList.add('active')
		currentSlide = idx
	}

	function nextSlide() { showSlide(currentSlide + 1) }
	function prevSlide() { showSlide(currentSlide - 1) }

	function startAutoplay() {
		stopAutoplay()
		autoplayInterval = setInterval(nextSlide, 5000)
	}
	function stopAutoplay() { if (autoplayInterval) clearInterval(autoplayInterval) }

	if (prevBtn) {
		prevBtn.addEventListener('click', () => { prevSlide(); stopAutoplay(); startAutoplay() })
	}
	if (nextBtn) {
		nextBtn.addEventListener('click', () => { nextSlide(); stopAutoplay(); startAutoplay() })
	}

	indicators.forEach((indicator, index) => {
		indicator.addEventListener('click', () => { showSlide(index); stopAutoplay(); startAutoplay() })
	})

	if (slides.length) startAutoplay()

	// Pause autoplay on hover
	const carouselContainer = document.querySelector('.hero-carousel')
	if (carouselContainer) {
		carouselContainer.addEventListener('mouseenter', stopAutoplay)
		carouselContainer.addEventListener('mouseleave', startAutoplay)
	}

	// Back to top button
	const backToTopBtn = document.getElementById('backToTop')
	if (backToTopBtn) {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 500) backToTopBtn.classList.add('visible')
			else backToTopBtn.classList.remove('visible')
		})
		backToTopBtn.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		})
	}

	// Contact form handling
	const contactForm = document.getElementById('contactForm')
	if (contactForm) {
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault()
			const formData = {
				name: document.getElementById('name')?.value || '',
				email: document.getElementById('email')?.value || '',
				phone: document.getElementById('phone')?.value || '',
				message: document.getElementById('message')?.value || '',
			}
			// Temporary UX: show simple success message and reset
			alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
			
		})
	}

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href')
			if (!href || href === '#') return
			const target = document.querySelector(href)
			if (target) {
				e.preventDefault()
				const offsetTop = target.offsetTop - 80
				window.scrollTo({ top: offsetTop, behavior: 'smooth' })
			}
		})
	})

	// Add animation on scroll for elements
	const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1'
				entry.target.style.transform = 'translateY(0)'
			}
		})
	}, observerOptions)

	const animatedElements = document.querySelectorAll('.training-card, .benefit-category, .instructor-card, .stat-card')
	animatedElements.forEach((el) => {
		el.style.opacity = '0'
		el.style.transform = 'translateY(20px)'
		el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
		observer.observe(el)
	})
})
