// إنشاء النجوم المتحركة
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // مواقع عشوائية
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // حجم عشوائي
        const size = Math.random() * 3 + 1;
        
        // مدة وميض عشوائية
        const duration = Math.random() * 3 + 2;
        
        // شفافية عشوائية
        const opacity = Math.random() * 0.8 + 0.2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--opacity', opacity);
        
        container.appendChild(star);
    }
}

// العد التنازلي
function countdown() {
    const eventDate = new Date('December 15, 2026 18:00:00').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const gap = eventDate - now;
        
        if (gap > 0) {
            const days = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((gap % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// القائمة الجانبية للموبايل
function mobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // تحويل شكل الهامبرغر
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(45deg) translate(5px, 5px)' 
                : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(-45deg) translate(7px, -6px)' 
                : 'none';
        });
    }
}

// تأثيرات التمرير
function scrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر
    document.querySelectorAll('.info-card, .service-card, .partner-logo').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// تغيير خلفية navbar عند التمرير
function navbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(99, 102, 241, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        }
    });
}

// تحريك الأرقام في العداد
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// نموذج التسجيل
function handleRegistration() {
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // جمع البيانات
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // محاكاة الإرسال
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'جاري الإرسال...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('تم تسجيلك بنجاح! سنتواصل معك قريباً.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// نموذج الاتصال
function handleContact() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'جاري الإرسال...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// معرض الصور - Lightbox
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <img src="${item.src}" alt="${item.alt}">
                <span class="close-lightbox">&times;</span>
            `;
            
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', (e) => {
                if (e.target !== lightbox.querySelector('img')) {
                    lightbox.remove();
                }
            });
        });
    });
}

// تشغيل كل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    countdown();
    mobileMenu();
    scrollEffects();
    navbarScroll();
    handleRegistration();
    handleContact();
    initLightbox();
    
    console.log('🌠 مهرجان رصد شهب المنامة 2026 - الموقع الرسمي');
});

// إضافة أنماط للـ Lightbox
const style = document.createElement('style');
style.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
    }
    
    .lightbox img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
    }
    
    .close-lightbox {
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 3rem;
        color: white;
        cursor: pointer;
        transition: color 0.3s;
    }
    
    .close-lightbox:hover {
        color: var(--accent-color);
    }
`;
document.head.appendChild(style);
