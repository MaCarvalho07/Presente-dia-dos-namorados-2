// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loadingScreen").style.opacity = "0"
      setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none"
      }, 500)
    }, 2000)
  })
  
  // Navigation
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav")
    if (window.scrollY > 100) {
      nav.classList.add("visible")
    } else {
      nav.classList.remove("visible")
    }
  })
  
  // Love Counter
  function updateLoveCounter() {
    const startDate = new Date("2024-01-10") // Substitua pela data do primeiro encontro
    const today = new Date()
    const diffTime = Math.abs(today - startDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
    document.getElementById("loveCounter").textContent = `${diffDays} dias`
  }
  
  updateLoveCounter()
  
  // Floating Elements
  function createFloatingElement() {
    const container = document.getElementById("floatingElements")
    const element = document.createElement("div")
    const isHeart = Math.random() > 0.5
  
    element.className = isHeart ? "floating-heart" : "floating-star"
    element.innerHTML = isHeart ? "💕" : "✨"
    element.style.left = Math.random() * 100 + "%"
    element.style.animationDuration = Math.random() * 4 + 4 + "s"
    element.style.fontSize = Math.random() * 1 + 1 + "rem"
  
    container.appendChild(element)
  
    setTimeout(() => {
      element.remove()
    }, 8000)
  }
  
  setInterval(createFloatingElement, 2000)
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)
  
  // Observe timeline items
  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item)
  })
  
  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  
  // Gallery lightbox effect (simple version)
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      // Aqui você pode adicionar um lightbox mais elaborado
      const img = item.querySelector("img")
      const overlay = item.querySelector(".gallery-text")
      alert(overlay.textContent) // Substitua por um modal mais bonito
    })
  })
  
  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    const rate = scrolled * -0.5
  
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`
    }
  })
  
  // Add some interactive effects
  document.querySelectorAll(".promise-card, .letter, .gallery-item").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)"
    })
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })
  
  // Easter egg: click on hearts
  let heartClickCount = 0
  document.addEventListener("click", (e) => {
    if (
      e.target.textContent.includes("💕") ||
      e.target.textContent.includes("❤️") ||
      e.target.textContent.includes("💖")
    ) {
      heartClickCount++
      if (heartClickCount === 5) {
        alert("Você encontrou o easter egg! 💕 Te amo muito!")
        heartClickCount = 0
      }
    }
  })
  