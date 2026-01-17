        
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
        
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, observerOptions);
        document.querySelectorAll('.animate-on-scroll, .card, .servico-card, .step').forEach(el => observer.observe(el));
        
        const painPoints = document.querySelectorAll('.pain-points p');
        setTimeout(() => {
            painPoints.forEach((p, i) => setTimeout(() => p.classList.add('visible'), i * 300));
        }, 500);
        
        let currentSlide = 0;
        const slides = document.querySelectorAll('.depoimento');
        const dots = document.querySelectorAll('.dot');
        function showSlide(n) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            if (n >= slides.length) currentSlide = 0;
            if (n < 0) currentSlide = slides.length - 1;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        dots.forEach((dot, i) => dot.addEventListener('click', () => { currentSlide = i; showSlide(currentSlide); }));
        setInterval(() => { currentSlide++; showSlide(currentSlide); }, 6000);