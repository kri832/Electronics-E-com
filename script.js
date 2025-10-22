// Main javascript Functionality for electronics Store

class WattWise {
    constructor() {
        this.cart = [];
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.init();
    }

    init() {
        this.loadProducts();
        this.setupEventListners();
        this.startCountdown();
        this.updateCartCount();
        this.setupContactForm();
    }

    setupEventListners() {
        // search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.filterProducts();
            });
        }

        //Category filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                //remove active class
                filterButtons.forEach(b => b.classList.remove('active'));
                //add active class
                e.target.classList.add('active');

                this.currentFilter = e.target.dataset.filter;
                this.filterProducts();
            });
        });

        //CTA Buttons
        const ctaButtons = document.querySelectorAll('.cta-button, .shop-button, .shop-now-btn');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('products').scrollIntoView({behavior: 'smooth'});
            });
        });

        //smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth'});
                }
            });
        });

        // Terms and conditions popup functionality
        this.sertupPopupEventListners ();
        
        // About Us popup functionality
        this.setupAboutPopupEventListeners();
        
        // Category card click functionality
        this.setupCategoryClickHandlers();
    }

    sertupPopupEventListners() {
        // get popup elements
        const termsPopup = document.getElementById('termsPopup');
        const closeBtn = document.getElementById('closePopup');
        // Show popup when clicking on terms of service link
        const termsLinks = document.querySelectorAll('a[href="#"]');
        termsLinks.forEach(link => {
            if (link.textContent.toLowerCase().includes('terms') || 
                link.textContent.toLowerCase().includes('service')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showPopup();
                });
            }
        });

        //close popup when clicking close button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hidePopup();
            });
        }

        //close popup when clicking outside the popup content
        if (termsPopup) {
            termsPopup.addEventListener('click', (e) => {
                if (e.target === termsPopup) {
                    this.hidePopup();
                }
            });
        }
    }

    showPopup() {
        const termsPopup = document.getElementById('termsPopup');
        if (termsPopup) {
            termsPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hidePopup() {
        const termsPopup = document.getElementById('termsPopup');
        if (termsPopup) {
            termsPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    setupAboutPopupEventListeners() {
        // Get About Us popup elements
        const aboutPopup = document.getElementById('aboutPopup');
        const closeAboutBtn = document.getElementById('closeAboutPopup');
        const aboutLink = document.getElementById('aboutLink');

        // Show popup when clicking on About Us link
        if (aboutLink) {
            aboutLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAboutPopup();
            });
        }

        // Close popup when clicking close button
        if (closeAboutBtn) {
            closeAboutBtn.addEventListener('click', () => {
                this.hideAboutPopup();
            });
        }

        // Close popup when clicking outside the popup content
        if (aboutPopup) {
            aboutPopup.addEventListener('click', (e) => {
                if (e.target === aboutPopup) {
                    this.hideAboutPopup();
                }
            });
        }
    }

    showAboutPopup() {
        const aboutPopup = document.getElementById('aboutPopup');
        if (aboutPopup) {
            aboutPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hideAboutPopup() {
        const aboutPopup = document.getElementById('aboutPopup');
        if (aboutPopup) {
            aboutPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    setupCategoryClickHandlers() {
        // Get all category cards
        const categoryCards = document.querySelectorAll('.category-card');
        
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Get the category from data attribute
                const category = card.dataset.category;
                
                if (category) {
                    // Add visual feedback
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.transform = '';
                    }, 150);
                    
                    // Filter products by category
                    this.filterByCategory(category);
                    
                    // Scroll to products section
                    const productsSection = document.getElementById('products');
                    if (productsSection) {
                        productsSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    loadProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid || !window.products) return;

        productsGrid.innerHTML = this.renderproducts(window.products);
        this.setupProductEventListner();
    }

   renderproducts(productsToRender) {
        return productsToRender.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description"> ${product.description}</p>
                    <div class="product-rating">
                        ${this.renderStars(product.rating)}
                        <span>(${product.rating})</span>
                    </div>
                    <div class="product-price">
                        <div class="price-info">
                            <span class="price">₹${product.price}</span>
                            ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
                        </div>
                        <button class="add-to-cart" data-product-id="${product.id}">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

   renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHtml = '';

        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>'
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHtml += '<i class="far fa-star"></i>'
        }

        return `<div class="stars">${starsHtml}</div>`;
    }

   setupProductEventListner() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.productId);
                this.addToCart(productId);
            });
        });
    }

    filterProducts() {
        let filteredProducts = window.products;

        // Filter by category
        if (this.currentFilter !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.category === this.currentFilter
            );
        }

        //filter by search term
        if (this.searchTerm) {
            filteredProducts = filteredProducts.filter(product => 
                product.title.toLowerCase().includes(this.searchTerm) ||
                product.description.toLowerCase().includes(this.searchTerm)
            );
        }

        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
            productsGrid.innerHTML = this.renderproducts(filteredProducts);
            this.setupProductEventListner();
        }
    }

    filterByCategory(category) {
        // Set the current filter to the category
        this.currentFilter = category;

        // Update active filter button
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            }
        });

        // Apply the filter
        this.filterProducts();
    }

    addToCart(productId) {
        const product = window.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1});
        }

        this.updateCartCount();
        this.showAddToCartFeedback(product.title);
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    showAddToCartFeedback(productTitle) {
        // create temporary notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-check-circle"></i>
                <span>${productTitle} added to cart!</span>
            </div>
        `;

        // Add Style
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #da8497;
            color: black;
            padding: 1rem 1.5rem;
            border-radius: 9px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1001;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    startCountdown() {
        const countdownElements = {
            days: document.getElementById('days'),
            hours: document.getElementById('hours'),
            minutes: document.getElementById('minutes'),
            seconds: document.getElementById('seconds')
        };

        // set target date (7 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                //Reset countdown if expired
                targetDate.setDate(targetDate.getDate() + 7);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (countdownElements.days) countdownElements.days.textContent = days;
            if (countdownElements.hours) countdownElements.hours.textContent = hours;
            if (countdownElements.minutes) countdownElements.minutes.textContent = minutes;
            if (countdownElements.seconds) countdownElements.seconds.textContent = seconds;
        };

        //update countdown immediately and then every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactFormSubmit();
            });
        }
    }

    handleContactFormSubmit() {
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);

        // Get from values
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Basic Validation
        if (!name || !email || !message) {
            this.showNotification('Please fill all the required fields.' , 'error');
            return;
        }

        //Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showNotification('please enter a valid email address.', 'error');
            return;
        }

        //simulate form submission
        this.showNotification('Thank You for your message! we\'ll get back to you soon.', 'success');

        //Reset form
        form.reset();

        //In a real application you would send the data to the server
        console.log('contact form submitted: ', {
            name,
            email,
            phone,
            message,
            timestamp: new Date().toISOString()
        });
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 9px;
            box-shadow: 0 6px 11px rgba(0,0,0,0.9);
            z-index: 10000;
            animation: slideIn 0.35s ease-out;
            max-width: 400px;
            font-weight: 500;
            `;

        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
            </div>
            `;

        document.body.appendChild(notification);

        // Remove notification after 5 seconds 
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
}

// Add css animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
            
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
        
    .product-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
        
    .product-rating .stars {
        color: #fbbf24;
    }
        
    .product-rating span {
        color: #fff;
        font-size: 1rem;
    }
        
    .price-info {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }
    `;
    document.head.appendChild(style);

    //initialize the store when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        new WattWise()
    });

    //Add some interactive effects
    document.addEventListener('DOMContentLoaded', () => {
        //add paralax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // add intersection observer for animations
        const observationOptions = {
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
        }, observationOptions);

        // observe elements for animation
        const animatedElements = document.querySelectorAll('.category-card, .product-card, .testimonial-card, .insight-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    });
