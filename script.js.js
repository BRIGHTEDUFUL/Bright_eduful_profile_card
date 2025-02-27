document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  const lucide = window.lucide;
  lucide.createIcons();
  
  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".timeline-item, .expertise-item, .skill-tag, .skill-item");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initial animation setup
  const elements = document.querySelectorAll(".timeline-item, .expertise-item, .skill-tag, .skill-item");
  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = `all 0.5s ease ${index * 0.1}s`;
  });

  // Animate progress bars
  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  };

  // Add hover effects
  const addHoverEffects = () => {
    const buttons = document.querySelectorAll(".social-button, .website-button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
      });

      button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.95)";
      });

      button.addEventListener("mouseup", () => {
        button.style.transform = "scale(1.1)";
      });
    });
  };

  // Avatar hover effect
  const avatar = document.querySelector(".avatar");
  if (avatar) {
    avatar.addEventListener("mouseenter", () => {
      avatar.style.transform = "scale(1.05)";
      avatar.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
    });

    avatar.addEventListener("mouseleave", () => {
      avatar.style.transform = "scale(1)";
      avatar.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
    });
  }

  // Expertise and skill hover effects
  const addHoverZoom = (selector) => {
    document.querySelectorAll(selector).forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.05)";
        item.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
        item.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
      });
    });
  }

  addHoverZoom(".expertise-item");
  addHoverZoom(".skill-item");

  // Touch device support
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  if (isTouchDevice()) {
    document.body.classList.add("touch-device");

    const addTouchPress = (selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.addEventListener("touchstart", () => {
          element.style.transform = "scale(0.95)";
          element.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        });

        element.addEventListener("touchend", () => {
          element.style.transform = "scale(1)";
          element.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
        });
      });
    }

    addTouchPress(".expertise-item");
    addTouchPress(".skill-item");
    addTouchPress(".social-button");
  }

  // Initialize animations
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();
  animateProgressBars();
  addHoverEffects();

  // Autolink setup
  document.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href").startsWith("http")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Improve iOS experience
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.documentElement.style.webkitTouchCallout = "none";
  }

  // Header avatar click effect
  avatar.addEventListener("click", () => {
    avatar.style.animation = "pulse 1s ease";
    setTimeout(() => {
      avatar.style.animation = "";
    }, 1000);
  });

  // Card hover effects
  const profileCard = document.querySelector(".profile-card");
  profileCard.addEventListener("mouseenter", () => {
    profileCard.style.boxShadow = "0 35px 50px -15px rgba(0,0,0,0.35)";
  });

  profileCard.addEventListener("mouseleave", () => {
    profileCard.style.boxShadow = "0 25px 50px -12px rgba(0,0,0,0.25)";
  });

  profileCard.addEventListener("mousedown", () => {
    profileCard.style.transform = "scale(0.98)";
  });

  profileCard.addEventListener("mouseup", () => {
    profileCard.style.transform = "scale(1)";
  });

  // CSS animation definitions
  const timelineIcons = document.querySelectorAll(".timeline-icon i");
  timelineIcons.forEach((icon) => {
    icon.style.animation = "spin 20s linear infinite";
  });

  // Scroll progress bar
  const scrollProgressBar = document.querySelector(".scroll-progress");
  if (scrollProgressBar) {
    scrollProgressBar.style.height = "3px";
    scrollProgressBar.style.position = "fixed";
    scrollProgressBar.style.top = "0";
    scrollProgressBar.style.left = "0";
    scrollProgressBar.style.width = "100%";
    scrollProgressBar.style.backgroundColor = "var(--color-blue-400)";
    scrollProgressBar.style.zIndex = "1000";

    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / totalScroll;
      scrollProgressBar.style.width = `${scrollPercentage * 100}%`;
    });
  }
});