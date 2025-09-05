// Animated roles text
      (function() {
        const roles = [
          "Web Development Specialist",
          "JavaScript Expert",
          "Python Developer",
          "Graphics Design Enthusiast",
          "Creative Problem Solver",
          "Team Player"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let typing = true;
        const roleText = document.getElementById('role-text');
        function typeRole() {
          if (!roleText) return;
          const currentRole = roles[roleIndex];
          if (typing) {
            if (charIndex < currentRole.length) {
              roleText.textContent += currentRole.charAt(charIndex++);
              setTimeout(typeRole, 60);
            } else {
              typing = false;
              setTimeout(typeRole, 1200);
            }
          } else {
            if (charIndex > 0) {
              roleText.textContent = currentRole.substring(0, --charIndex);
              setTimeout(typeRole, 30);
            } else {
              typing = true;
              roleIndex = (roleIndex + 1) % roles.length;
              setTimeout(typeRole, 400);
            }
          }
        }
        window.addEventListener('DOMContentLoaded', typeRole);
      })();


           // About section animation on reveal
      (function() {
        function animateAbout() {
          const aboutSection = document.getElementById('about');
          const img = document.getElementById('about-img-anim');
          const content = document.getElementById('about-content-anim');
          if (!aboutSection || !img || !content) return;
          const rect = aboutSection.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            content.style.opacity = 1;
            content.style.transform = 'translateY(0)';
            setTimeout(() => {
              document.querySelectorAll('.about-para').forEach(p => {
                p.style.opacity = 1;
                p.style.transform = 'translateX(0)';
              });
              document.querySelectorAll('.about-chip').forEach(chip => {
                chip.style.opacity = 1;
                chip.style.transform = 'scale(1)';
              });
            }, 200);
            window.removeEventListener('scroll', animateAbout);
          }
        }
        window.addEventListener('scroll', animateAbout);
        window.addEventListener('load', animateAbout);
      })();