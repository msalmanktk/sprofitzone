// HAMBURGER MENU FUNCTIONALITY
// book button 
const bookbtn = document.querySelector('.btn-book');
const newsletterbtn=document.querySelector('.newsletter-btn');
const newsletterinput=document.querySelector('.newsletter-input');
const alertFn=function() {
    Swal.fire({
        title: '📞 We\'ll Call You!',
        text: 'Thank you for your interest. Our team will contact you shortly!',
        icon: 'success',
        confirmButtonColor: '#ff8c00',
        confirmButtonText: 'Great!',
        timer: 3000,
        showConfirmButton: true
    });
};
bookbtn.addEventListener('click',alertFn )
newsletterbtn.addEventListener('click',function(e){
    e.preventDefault()
newsletterinput.value='';
alertFn()
} )
// alert book ended 
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('menuOverlay');
    
    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Close menu function
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu when clicking on mobile join button
    const mobileJoinBtn = document.querySelector('.mobile-join-btn');
    if (mobileJoinBtn) {
        mobileJoinBtn.addEventListener('click', closeMenu);
    }
    
    // Handle window resize - close menu if open and screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});
// berger menu end 
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    
    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            aboutSection.classList.add('show');
        }
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
// Scroll animation for Join section
document.addEventListener('DOMContentLoaded', function() {
    const joinSection = document.querySelector('.join-section');
    
    function checkVisibility() {
        const rect = joinSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            joinSection.classList.add('show');
        }
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

// Scroll animation for Influencers section
document.addEventListener('DOMContentLoaded', function() {
    const influencersSection = document.querySelector('.influencers-section');
    
    function checkVisibility() {
        const rect = influencersSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Trigger when section is 100px from viewport
        if (rect.top <= windowHeight - 100) {
            influencersSection.classList.add('show');
        }
    }
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Check on load
    checkVisibility();
});

// Scroll animation for Membership section header and cards
document.addEventListener('DOMContentLoaded', function() {
    const membershipSection = document.querySelector('.membership-section');
    
    function checkMembershipVisibility() {
        const rect = membershipSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight - 100) {
            membershipSection.classList.add('show-header');
            membershipSection.classList.add('show-cards');
        }
    }
    
    window.addEventListener('scroll', checkMembershipVisibility);
    checkMembershipVisibility();
});
// Scroll animation for Expert Mentors section
document.addEventListener('DOMContentLoaded', function() {
    const mentorsSection = document.querySelector('.mentors-section');
    
    function checkMentorsVisibility() {
        const rect = mentorsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight - 100) {
            mentorsSection.classList.add('show');
        }
    }
    
    window.addEventListener('scroll', checkMentorsVisibility);
    checkMentorsVisibility();
});

// Feedback Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('feedbackTrack');
    const prevBtn = document.getElementById('prevFeedback');
    const nextBtn = document.getElementById('nextFeedback');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const cards = document.querySelectorAll('.feedback-card');
    
    let currentIndex = 0;
    let totalCards = cards.length;
    let cardsPerView = 3;
    let gap = 24; // 1.5rem in pixels
    
    // Update cards per view based on screen size
    function updateCardsPerView() {
        if (window.innerWidth <= 768) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }
        updateDots();
        updateSlider();
    }
    
    // Update dots based on total pages
    function updateDots() {
        const totalPages = Math.ceil(totalCards / cardsPerView);
        
        // Hide/show dots based on number of pages
        dots.forEach((dot, index) => {
            if (index < totalPages) {
                dot.style.display = 'block';
            } else {
                dot.style.display = 'none';
            }
        });
    }
    
    // Get slide width
    function getSlideWidth() {
        if (cards.length > 0) {
            return cards[0].offsetWidth + gap;
        }
        return 0;
    }
    
    // Update slider position
    function updateSlider() {
        const slideWidth = getSlideWidth();
        const translateX = -(currentIndex * slideWidth);
        track.style.transform = `translateX(${translateX}px)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        const maxIndex = Math.ceil(totalCards / cardsPerView) ;
        // const maxIndex = Math.ceil(totalCards / cardsPerView)-1 ; i removed - 1 to make it correct 
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }
    
    // Dot click navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;
            if (index <= maxIndex) {
                currentIndex = index;
                updateSlider();
            }
        });
    });
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Update on window resize
    window.addEventListener('resize', () => {
        setTimeout(() => {
            updateCardsPerView();
            updateSlider();
        }, 100);
    });
    
    // Initialize
    updateCardsPerView();
    
    // Scroll animation for feedback section
    const feedbackSection = document.querySelector('.feedback-section');
    
    function checkFeedbackVisibility() {
        if (feedbackSection) {
            const rect = feedbackSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 100) {
                feedbackSection.classList.add('show');
            }
        }
    }
    
    window.addEventListener('scroll', checkFeedbackVisibility);
    checkFeedbackVisibility();
});

//coming soon mentorship pop up 
const mentor=document.getElementById('mentor-nav');
const dialogOverlay = document.getElementById('dialogOverlay');
    const dialogCloseBtn = document.getElementById('dialogCloseBtn');   

mentor.addEventListener('click',function(){
dialogOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
})
dialogCloseBtn.addEventListener('click',function(){
      dialogOverlay.classList.remove('active');
        document.body.style.overflow = '';
})

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add click event to each FAQ question
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
        });
    });
    
    // Open first FAQ item by default (optional)
    // faqItems[0].classList.add('active');
    
    // Scroll animation for FAQ section
    const faqSection = document.querySelector('.faq-section');
    
    function checkFaqVisibility() {
        const rect = faqSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight - 100) {
            faqSection.classList.add('show');
        }
    }
    
    window.addEventListener('scroll', checkFaqVisibility);
    checkFaqVisibility();
});

// contact us form 
const contactbtn=document.querySelector('.contact-btn');
const contactModal = document.getElementById('contactModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const contactForm = document.getElementById('contactForm');
    // const formdata=document.getElementById('contactForm');

contactbtn.addEventListener('click',function(e){
    e.preventDefault()
 contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // formdata.reset()
})
closeModalBtn.addEventListener('click',function(){
     contactModal.classList.remove('active');
        document.body.style.overflow = '';
        
})
// orm pop when click on submit 
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Close modal first
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset form
    form.reset();
    
    // Show alert after modal is closed
    setTimeout(() => {
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully! We will get back to you soon.',
            icon: 'success',
            confirmButtonColor: '#ff8c00',
            confirmButtonText: 'Great!',
            timer: 3000
        });
    }, 100);
});
// PAYMENT MODAL FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentBtn = document.getElementById('closePaymentModal');
    const methodCards = document.querySelectorAll('.method-card');
    const paymentDetails = document.getElementById('paymentDetails');
    const selectedPlanName = document.getElementById('selectedPlanName');
    const selectedPlanPrice = document.getElementById('selectedPlanPrice');
    
    // Plan details mapping
    const planDetails = {
        '4 Days Pass': { price: '$4 / Pass' },
        'Short-Term Pass': { price: '$10 / Pass' },
        'Monthly Plan': { price: '$50 / Month' },
        'Quarterly Plan': { price: '$125 / Quarter' },
        '1 Year Premium': { price: '$299 / Year' },
        'Lifetime Plan': { price: '$499 / Lifetime' }
    };
    
    // Get all membership plan buttons
    const planButtons = document.querySelectorAll('.plan-btn');
    
    // Function to open modal with selected plan
    function openPaymentModal(planName) {
        if (selectedPlanName && selectedPlanPrice) {
            selectedPlanName.textContent = planName;
            const plan = planDetails[planName];
            if (plan) {
                selectedPlanPrice.textContent = plan.price;
            }
        }
        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close modal
    function closePaymentModal() {
        paymentModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Add click event to all membership plan buttons
    planButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Find the plan name from the card
            const card = this.closest('.membership-card');
            if (card) {
                const planNameElement = card.querySelector('.plan-name');
                if (planNameElement) {
                    const planName = planNameElement.textContent;
                    openPaymentModal(planName);
                }
            }
        });
    });
    
    // Payment method selection
    methodCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all methods
            methodCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked method
            this.classList.add('active');
            
            const method = this.getAttribute('data-method');
            
            // Update payment details based on method
            if (method === 'easypaisa' || method === 'jazzcash') {
                paymentDetails.innerHTML = `
                    <div class="details-card">
                        <div class="details-row">
                            <span class="details-label">Account Name:</span>
                            <span class="details-value">Muhammad Salman</span>
                        </div>
                        <div class="details-row">
                            <span class="details-label">${method === 'easypaisa' ? 'EasyPaisa' : 'JazzCash'} Number:</span>
                            <span class="details-value">03159957806</span>
                        </div>
                    </div>
                `;
            } else if (method === 'bank') {
                paymentDetails.innerHTML = `
                    <div class="details-card">
                        <div class="details-row">
                            <span class="details-label">Bank Name:</span>
                            <span class="details-value">Meezan Bank</span>
                        </div>
                        <div class="details-row">
                            <span class="details-label">Account Title:</span>
                            <span class="details-value">Muhammad Salman</span>
                        </div>
                        <div class="details-row">
                            <span class="details-label">Account Number:</span>
                            <span class="details-value">1234-5678901</span>
                        </div>
                        <div class="details-row">
                            <span class="details-label">IBAN:</span>
                            <span class="details-value">PK1234567890123456</span>
                        </div>
                    </div>
                `;
            } else if (method === 'crypto') {
                paymentDetails.innerHTML = `
                    <div class="details-card">
                        <div class="details-row">
                            <span class="details-label">USDT (TRC20):</span>
                            <span class="details-value">TXXXXXXXXXXXXXXX</span>
                        </div>
                        <div class="details-row">
                            <span class="details-label">Bitcoin (BTC):</span>
                            <span class="details-value">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span>
                        </div>
                        <div class="details-row">
                            <span class="details-label">Ethereum (ETH):</span>
                            <span class="details-value">0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</span>
                        </div>
                    </div>
                `;
            }
        });
    });
    
    // Close modal when clicking close button
    closePaymentBtn.addEventListener('click', closePaymentModal);
    
    // Close modal when clicking outside
    paymentModal.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && paymentModal.classList.contains('active')) {
            closePaymentModal();
        }
    });
    // whatsapp pop up 
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
    e.preventDefault();
     paymentModal.classList.remove('active');
        document.body.style.overflow = '';
    Swal.fire({
        title: '📱 WhatsApp Support',
        html: `
            <div style="text-align: left;">
                <p style="margin-bottom: 10px;">Please send your payment screenshot to:</p>
                <p style="background: #f0f0f0; padding: 10px; border-radius: 8px; font-weight: bold; color: #25D366;">
                    📞 WhatsApp Number: <span style="color: #1a2a3a;">+92 3159957806</span>
                </p>
                <p style="margin-top: 10px; font-size: 13px; color: #666;">
                    Our team will verify your payment and activate your account within 24 hours.
                </p>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#25D366',
        confirmButtonText: 'Got it!',
        background: '#ffffff'
    });
});
});

// Counter animation for 5+ years
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let count = 0;
            const counter = document.querySelector('.experience-years');
            const timer = setInterval(() => {
                count++;
                counter.textContent = count + '+';
                if (count === 5) clearInterval(timer);
            }, 400);
            observer.unobserve(entry.target);
        }
    });
});
observer.observe(document.querySelector('.experience-box'));