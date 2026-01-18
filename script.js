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
        
        // Substituir/estender a lógica antiga de depoimentos por esta nova implementação de slider em grupos de 3.

document.addEventListener('DOMContentLoaded', () => {
    const depoimentos = Array.from(document.querySelectorAll('.depoimento'));
    if (depoimentos.length === 0) return;

    const perSlide = 3; // 3 depoimentos por página
    const slides = [];
    const sliderInner = document.querySelector('.slider-inner');
    const dotsContainer = document.querySelector('.carousel-dots');

    // Agrupa depoimentos em slides de 3
    for (let i = 0; i < depoimentos.length; i += perSlide) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        depoimentos.slice(i, i + perSlide).forEach(el => slide.appendChild(el));
        sliderInner.appendChild(slide);
        slides.push(slide);
    }

    // Cria 3 dots (um para cada página)
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            showSlide(i);
        });
        dotsContainer.appendChild(dot);
    });

    let currentSlide = 0;

    function updateDots() {
        Array.from(dotsContainer.children).forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function showSlide(n) {
        currentSlide = (n + slides.length) % slides.length;
        sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    // Setas de navegação
    document.querySelector('.slider-arrow.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.slider-arrow.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Inicializa o carrossel
    showSlide(0);
});