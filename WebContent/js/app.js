/**
 * Asthana Bookstore Modern - Core Application Engine v2.0
 * Architected & Engineered by Aditya Asthana
 */

// Modern Clean SVG Icons Library
const SvgIcons = {
    book: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    cart: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    heart: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    heartFilled: `<svg class="svg-icon" viewBox="0 0 24 24" fill="#ec4899" stroke="#ec4899"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    search: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    star: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    sun: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    moon: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    eye: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    tag: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
    download: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    printer: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`,
    plus: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    minus: `<svg class="svg-icon svg-icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    trash: `<svg class="svg-icon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    edit: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    check: `<svg class="svg-icon" viewBox="0 0 24 24" style="color: #10b981;"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    alert: `<svg class="svg-icon" viewBox="0 0 24 24" style="color: #ef4444;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    info: `<svg class="svg-icon" viewBox="0 0 24 24" style="color: #3b82f6;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    sparkles: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
    shield: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    user: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    history: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline><path d="M2 12A10 10 0 0 1 12 2"></path></svg>`,
    close: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    arrowRight: `<svg class="svg-icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,

    // High-Resolution Cover Art Vectors
    aiCover: `<svg class="svg-cover-icon" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path><circle cx="12" cy="12" r="4"></circle></svg>`,
    cloudCover: `<svg class="svg-cover-icon" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    cpuCover: `<svg class="svg-cover-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    dbCover: `<svg class="svg-cover-icon" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    codeCover: `<svg class="svg-cover-icon" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>`,
    layersCover: `<svg class="svg-cover-icon" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
};

// Modern Toast Notification Engine with Crisp SVGs
const Toast = {
    container: null,
    
    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            document.body.appendChild(this.container);
        }
    },
    
    show(message, type = 'info', duration = 3500) {
        this.init();
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconSvg = SvgIcons.info;
        if (type === 'success') iconSvg = SvgIcons.check;
        if (type === 'error') iconSvg = SvgIcons.alert;
        
        toast.innerHTML = `
            <span>${iconSvg}</span>
            <div style="flex: 1; font-size: 0.9rem; font-weight: 500;">${message}</div>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: var(--text-muted); cursor: pointer; display: flex; align-items: center;">${SvgIcons.close}</button>
        `;
        
        this.container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toastOut 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },
    
    success(msg) { this.show(msg, 'success'); },
    error(msg) { this.show(msg, 'error'); },
    info(msg) { this.show(msg, 'info'); }
};

// Theme Manager (Dark / Light Theme Toggle)
const ThemeManager = {
    init() {
        const saved = localStorage.getItem('asthana_theme') || 'dark';
        this.setTheme(saved);
    },
    
    setTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('asthana_theme', theme);
        this.updateButtons(theme);
    },
    
    toggle() {
        const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        this.setTheme(next);
        Toast.info(`Switched to ${next} theme`);
    },
    
    updateButtons(theme) {
        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            btn.innerHTML = theme === 'light' ? SvgIcons.moon : SvgIcons.sun;
            btn.title = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        });
    }
};

// Wishlist Manager (Local Storage backed)
const WishlistManager = {
    getKey() { return 'asthana_wishlist'; },
    
    getWishlist() {
        try {
            return JSON.parse(localStorage.getItem(this.getKey()) || '[]');
        } catch(e) {
            return [];
        }
    },
    
    isWishlisted(barcode) {
        return this.getWishlist().some(b => b.barcode === barcode);
    },
    
    toggle(book) {
        let list = this.getWishlist();
        const exists = list.some(b => b.barcode === book.barcode);
        
        if (exists) {
            list = list.filter(b => b.barcode !== book.barcode);
            Toast.info(`Removed "${book.name}" from Wishlist`);
        } else {
            list.push(book);
            Toast.success(`Added "${book.name}" to Wishlist!`);
        }
        
        localStorage.setItem(this.getKey(), JSON.stringify(list));
        this.updateBadges();
        
        // Update heart icon states on page
        document.querySelectorAll(`.btn-wishlist[data-barcode="${book.barcode}"]`).forEach(btn => {
            btn.classList.toggle('active', !exists);
            btn.innerHTML = !exists ? SvgIcons.heartFilled : SvgIcons.heart;
        });
    },
    
    updateBadges() {
        const count = this.getWishlist().length;
        document.querySelectorAll('.wishlist-badge-count').forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-block' : 'none';
        });
    },
    
    openModal() {
        let modal = document.getElementById('wishlistModal');
        if (!modal) {
            this.createModal();
            modal = document.getElementById('wishlistModal');
        }
        this.renderItems();
        modal.classList.add('active');
    },
    
    closeModal() {
        const modal = document.getElementById('wishlistModal');
        if (modal) modal.classList.remove('active');
    },
    
    createModal() {
        const div = document.createElement('div');
        div.id = 'wishlistModal';
        div.className = 'modal-overlay';
        div.innerHTML = `
            <div class="modal-box" style="max-width: 540px;">
                <div class="modal-header">
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <span style="color: #ec4899;">${SvgIcons.heartFilled}</span>
                        <h3 class="modal-title">Saved Wishlist</h3>
                    </div>
                    <button class="modal-close-btn" onclick="WishlistManager.closeModal()">${SvgIcons.close}</button>
                </div>
                <div class="modal-body" id="wishlistItemsContainer"></div>
            </div>
        `;
        document.body.appendChild(div);
    },
    
    renderItems() {
        const container = document.getElementById('wishlistItemsContainer');
        const list = this.getWishlist();
        
        if (list.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-secondary);">
                    <div style="margin-bottom: 1rem; color: var(--text-muted);">${SvgIcons.heart}</div>
                    <h4 style="font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">Your Wishlist is Empty</h4>
                    <p style="font-size: 0.88rem;">Click the heart icon on any book to save it for later.</p>
                </div>
            `;
            return;
        }
        
        let html = '<div style="display: flex; flex-direction: column; gap: 0.85rem;">';
        list.forEach(book => {
            const visuals = getBookVisuals(book.name, book.author);
            html += `
                <div style="display: flex; gap: 1rem; align-items: center; padding: 0.85rem 1rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md);">
                    <div style="width: 44px; height: 50px; border-radius: 8px; background: ${visuals.gradient}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: white;">
                        ${visuals.svgIcon}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                        <h4 style="font-size: 0.92rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-primary);">${book.name}</h4>
                        <div style="font-size: 0.8rem; color: var(--text-secondary);">${book.author}</div>
                        <div style="font-weight: 800; color: #34d399; font-size: 0.95rem; margin-top: 0.2rem;">₹${book.price}</div>
                    </div>
                    <div style="display: flex; gap: 0.4rem;">
                        <button class="btn btn-primary btn-sm" onclick="addWishlistItemToCart('${book.barcode}')" title="Move to Bag">
                            ${SvgIcons.cart}
                        </button>
                        <button class="btn btn-outline btn-sm" onclick="WishlistManager.toggle({barcode:'${book.barcode}', name:'${book.name.replace(/'/g, "\\'")}', author:'${book.author.replace(/'/g, "\\'")}', price:${book.price}})" title="Remove">
                            ${SvgIcons.trash}
                        </button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }
};

// Promo / Discount Engine
const PromoEngine = {
    appliedCode: null,
    discountRate: 0,
    
    codes: {
        'ADITYA10': { rate: 0.10, desc: '10% Architect Discount' },
        'WELCOME20': { rate: 0.20, desc: '20% Welcome Promo' },
        'FREESHIP': { rate: 0.00, desc: 'Free Priority Express Delivery' }
    },
    
    apply(code) {
        if (!code) return { success: false, message: 'Please enter a coupon code' };
        const clean = code.trim().toUpperCase();
        
        if (this.codes[clean]) {
            this.appliedCode = clean;
            this.discountRate = this.codes[clean].rate;
            return {
                success: true,
                message: `Coupon "${clean}" applied! (${this.codes[clean].desc})`,
                rate: this.discountRate,
                code: clean
            };
        } else {
            return { success: false, message: 'Invalid or expired coupon code. Try ADITYA10 or WELCOME20' };
        }
    },
    
    calculateDiscount(subtotal) {
        if (!this.appliedCode || this.discountRate <= 0) return 0;
        return Math.round(subtotal * this.discountRate);
    },
    
    reset() {
        this.appliedCode = null;
        this.discountRate = 0;
    }
};

// Book Quick View Modal
const QuickView = {
    open(book) {
        let modal = document.getElementById('quickViewModal');
        if (!modal) {
            this.createModal();
            modal = document.getElementById('quickViewModal');
        }
        
        const visuals = getBookVisuals(book.name, book.author);
        const modalBody = document.getElementById('quickViewBody');
        const isWish = WishlistManager.isWishlisted(book.barcode);
        
        modalBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 180px 1fr; gap: 1.5rem; align-items: start;">
                <div>
                    <div style="height: 220px; border-radius: var(--radius-md); background: ${visuals.gradient}; display: flex; align-items: center; justify-content: center; color: white; position: relative;">
                        ${visuals.svgIcon}
                        <span class="book-barcode-pill" style="bottom: 8px; right: 8px;">${book.barcode}</span>
                    </div>
                    <div class="book-rating-badge" style="margin-top: 0.75rem; justify-content: center; width: 100%;">
                        ${SvgIcons.star} 4.9 &nbsp;<span style="color: var(--text-muted); font-size: 0.78rem;">(140+ reviews)</span>
                    </div>
                </div>
                <div>
                    <span class="brand-badge" style="margin-bottom: 0.5rem; display: inline-block;">${visuals.genre}</span>
                    <h3 style="font-size: 1.4rem; font-weight: 800; line-height: 1.25; margin-bottom: 0.35rem; color: var(--text-primary);">${book.name}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Written by <strong style="color: var(--text-primary);">${book.author}</strong></p>
                    
                    <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.2rem; background: rgba(255,255,255,0.03); padding: 0.85rem; border-radius: 8px; border: 1px solid var(--border-glass);">
                        A foundational software engineering and computer science masterwork. Essential reference material curated for professional developers and enterprise architects.
                    </div>
                    
                    <div style="display: flex; gap: 1rem; align-items: baseline; margin-bottom: 1.2rem;">
                        <div style="font-size: 1.8rem; font-weight: 800; color: #34d399;">₹${book.price}</div>
                        <span class="stock-status-pill ${book.quantity > 5 ? 'stock-in' : (book.quantity > 0 ? 'stock-low' : 'stock-out')}">
                            ${book.quantity > 0 ? `${book.quantity} Available in Warehouse` : 'Out of Stock'}
                        </span>
                    </div>
                    
                    <div style="display: flex; gap: 0.75rem;">
                        <button class="btn btn-primary" style="flex: 1;" ${book.quantity <= 0 ? 'disabled' : ''} onclick="QuickView.addToCart('${book.barcode}')">
                            ${SvgIcons.cart} Add to Shopping Bag
                        </button>
                        <button class="btn btn-outline" onclick="WishlistManager.toggle({barcode:'${book.barcode}', name:'${book.name.replace(/'/g, "\\'")}', author:'${book.author.replace(/'/g, "\\'")}', price:${book.price}})">
                            ${isWish ? SvgIcons.heartFilled : SvgIcons.heart}
                        </button>
                    </div>
                </div>
            </div>
        `;
        modal.classList.add('active');
    },
    
    close() {
        const modal = document.getElementById('quickViewModal');
        if (modal) modal.classList.remove('active');
    },
    
    createModal() {
        const div = document.createElement('div');
        div.id = 'quickViewModal';
        div.className = 'modal-overlay';
        div.innerHTML = `
            <div class="modal-box" style="max-width: 650px;">
                <div class="modal-header">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: var(--accent-indigo);">${SvgIcons.eye}</span>
                        <h3 class="modal-title">Book Overview & Details</h3>
                    </div>
                    <button class="modal-close-btn" onclick="QuickView.close()">${SvgIcons.close}</button>
                </div>
                <div class="modal-body" id="quickViewBody"></div>
            </div>
        `;
        document.body.appendChild(div);
    },
    
    addToCart(barcode) {
        if (typeof addBookToCart === 'function') {
            addBookToCart(barcode);
            this.close();
        } else {
            window.location.href = 'login.html';
        }
    }
};

// Past Orders Manager (localStorage backed)
const OrderHistoryManager = {
    getKey() { return 'asthana_orders'; },
    
    saveOrder(orderData) {
        try {
            let orders = JSON.parse(localStorage.getItem(this.getKey()) || '[]');
            const record = {
                id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
                date: new Date().toISOString(),
                orders: orderData.orders || [],
                discount: orderData.discount || 0,
                totalPaid: orderData.totalPaid || 0,
                itemsCount: orderData.orders ? orderData.orders.length : 0
            };
            orders.unshift(record);
            localStorage.setItem(this.getKey(), JSON.stringify(orders.slice(0, 20)));
        } catch(e) {
            console.error(e);
        }
    },
    
    getOrders() {
        try {
            return JSON.parse(localStorage.getItem(this.getKey()) || '[]');
        } catch(e) {
            return [];
        }
    },
    
    openModal() {
        let modal = document.getElementById('orderHistoryModal');
        if (!modal) {
            this.createModal();
            modal = document.getElementById('orderHistoryModal');
        }
        this.renderHistory();
        modal.classList.add('active');
    },
    
    closeModal() {
        const modal = document.getElementById('orderHistoryModal');
        if (modal) modal.classList.remove('active');
    },
    
    createModal() {
        const div = document.createElement('div');
        div.id = 'orderHistoryModal';
        div.className = 'modal-overlay';
        div.innerHTML = `
            <div class="modal-box" style="max-width: 620px;">
                <div class="modal-header">
                    <div style="display: flex; align-items: center; gap: 0.6rem;">
                        <span style="color: var(--accent-indigo);">${SvgIcons.history}</span>
                        <h3 class="modal-title">Past Order History</h3>
                    </div>
                    <button class="modal-close-btn" onclick="OrderHistoryManager.closeModal()">${SvgIcons.close}</button>
                </div>
                <div class="modal-body" id="orderHistoryContainer"></div>
            </div>
        `;
        document.body.appendChild(div);
    },
    
    renderHistory() {
        const container = document.getElementById('orderHistoryContainer');
        const orders = this.getOrders();
        
        if (orders.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-secondary);">
                    <div style="margin-bottom: 1rem; color: var(--text-muted);">${SvgIcons.history}</div>
                    <h4 style="font-weight: 700; margin-bottom: 0.4rem; color: var(--text-primary);">No Orders Yet</h4>
                    <p style="font-size: 0.88rem;">Once you complete an order, your official receipts will appear here.</p>
                </div>
            `;
            return;
        }
        
        let html = '<div style="display: flex; flex-direction: column; gap: 1rem;">';
        orders.forEach(ord => {
            const dateStr = new Date(ord.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            html += `
                <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 1.2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.6rem;">
                        <div>
                            <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: #a5b4fc; font-weight: 700;">${ord.id}</span>
                            <span style="font-size: 0.78rem; color: var(--text-muted); margin-left: 0.5rem;">${dateStr}</span>
                        </div>
                        <span class="invoice-badge-success">${SvgIcons.check} COMPLETED</span>
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.6rem;">
                        Items: ${ord.orders.map(o => o.name).join(', ')}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.6rem; border-top: 1px solid var(--border-glass);">
                        <span style="font-size: 0.85rem; color: var(--text-secondary);">Total Paid:</span>
                        <strong style="color: #34d399; font-size: 1.1rem;">₹${ord.totalPaid}</strong>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }
};

// Formatting utilities
function formatPrice(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Visual Book Cover Generator with Rich SVGs & Distinct Gradients
function getBookVisuals(name = '', author = '') {
    const text = (name + ' ' + author).toLowerCase();
    
    if (text.includes('learning') || text.includes('machine') || text.includes('ai') || text.includes('intelligence')) {
        return {
            svgIcon: SvgIcons.aiCover,
            gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
            genre: 'AI & Data Science'
        };
    } else if (text.includes('cloud') || text.includes('kubernetes') || text.includes('reliability') || text.includes('sre') || text.includes('microservices')) {
        return {
            svgIcon: SvgIcons.cloudCover,
            gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
            genre: 'Cloud & DevOps'
        };
    } else if (text.includes('sql') || text.includes('data-intensive') || text.includes('database')) {
        return {
            svgIcon: SvgIcons.dbCover,
            gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
            genre: 'Data & Databases'
        };
    } else if (text.includes('rust') || text.includes('c++') || text.includes('c programming') || text.includes('systems')) {
        return {
            svgIcon: SvgIcons.cpuCover,
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
            genre: 'Systems & Core'
        };
    } else if (text.includes('java') || text.includes('spring')) {
        return {
            svgIcon: SvgIcons.codeCover,
            gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            genre: 'Java Enterprise'
        };
    } else if (text.includes('architecture') || text.includes('clean') || text.includes('design') || text.includes('domain')) {
        return {
            svgIcon: SvgIcons.layersCover,
            gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
            genre: 'Architecture'
        };
    } else if (text.includes('react') || text.includes('javascript') || text.includes('web') || text.includes('python')) {
        return {
            svgIcon: SvgIcons.codeCover,
            gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            genre: 'Full Stack & Web'
        };
    }
    return {
        svgIcon: SvgIcons.codeCover,
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        genre: 'Computer Science'
    };
}

// Global Form Submission Handler with Async Fetch & SVG feedback
async function handleFormSubmit(event, endpoint, redirectUrl = null, successCallback = null) {
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span style="display:inline-block; animation: spin 1s infinite linear;">⏳</span> Processing...';
    }

    const formData = new FormData(form);
    const data = new URLSearchParams();
    for (const [key, value] of formData) {
        data.append(key, value);
    }

    try {
        const response = await fetch(`${endpoint}`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const result = await response.json();
        
        if (result.success) {
            Toast.success(result.message || "Operation successful!");
            if (successCallback) successCallback(result);
            if (redirectUrl) {
                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, 800);
            }
        } else {
            Toast.error(result.message || "Operation failed.");
        }
    } catch (error) {
        console.error("Form submit error:", error);
        Toast.error("Network error. Please verify server connection.");
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }
}

// Global Logout
async function logout() {
    try {
        const res = await fetch('logout');
        const data = await res.json();
        if (data.success) {
            Toast.info("Logged out successfully");
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 500);
        }
    } catch(err) {
        console.error("Logout failed:", err);
        window.location.href = 'login.html';
    }
}

// Slide-Over Cart Drawer Controller with Promo Discounts
const CartDrawer = {
    overlay: null,
    drawer: null,
    
    init() {
        this.overlay = document.getElementById('cartDrawerOverlay');
        this.drawer = document.getElementById('cartDrawer');
    },
    
    open() {
        if (!this.overlay) this.init();
        if (this.overlay && this.drawer) {
            this.overlay.classList.add('active');
            this.drawer.classList.add('active');
            this.fetchDrawerCart();
        }
    },
    
    close() {
        if (this.overlay && this.drawer) {
            this.drawer.classList.remove('active');
            setTimeout(() => {
                this.overlay.classList.remove('active');
            }, 250);
        }
    },
    
    async fetchDrawerCart() {
        const container = document.getElementById('drawerCartItems');
        if (!container) return;
        
        container.innerHTML = '<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">Loading your cart...</div>';
        
        try {
            const res = await fetch('cart');
            const data = await res.json();
            
            if (data.success) {
                this.renderDrawerItems(data);
                this.updateBadge(data.cartItems);
            } else {
                container.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">${data.message || 'Please login to view cart.'}</div>`;
            }
        } catch(err) {
            console.error("Drawer cart load error:", err);
            container.innerHTML = '<div style="text-align: center; color: var(--danger); padding: 2rem;">Error loading cart.</div>';
        }
    },
    
    renderDrawerItems(data) {
        const container = document.getElementById('drawerCartItems');
        const totalEl = document.getElementById('drawerTotalAmount');
        const checkoutBtn = document.getElementById('drawerCheckoutBtn');
        const promoWrap = document.getElementById('drawerPromoSection');
        
        if (!data.cartItems || data.cartItems.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem;">
                    <div style="margin-bottom: 1rem; color: var(--text-muted);">${SvgIcons.cart}</div>
                    <h4 style="font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Your Cart is Empty</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Explore our curated catalog and add books you love!</p>
                </div>
            `;
            if (totalEl) totalEl.textContent = '₹0';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            if (promoWrap) promoWrap.style.display = 'none';
            return;
        }
        
        let html = '';
        data.cartItems.forEach(item => {
            const book = item.book;
            const visuals = getBookVisuals(book.name, book.author);
            
            html += `
                <div style="display: flex; gap: 1rem; align-items: center; padding: 1rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md);">
                    <div style="width: 48px; height: 54px; border-radius: var(--radius-sm); background: ${visuals.gradient}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: white;">
                        ${visuals.svgIcon}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                        <h4 style="font-size: 0.92rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-primary);">${book.name}</h4>
                        <p style="font-size: 0.8rem; color: var(--text-secondary);">${book.author}</p>
                        <div style="font-weight: 700; color: #34d399; font-size: 0.95rem; margin-top: 0.25rem;">
                            ₹${book.price} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">x ${item.quantity}</span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                        <div class="quantity-control" style="transform: scale(0.9);">
                            <button class="qty-btn" onclick="CartDrawer.updateItem('${book.barcode}', 'minus')">${SvgIcons.minus}</button>
                            <span class="qty-input" style="line-height: 34px;">${item.quantity}</span>
                            <button class="qty-btn" onclick="CartDrawer.updateItem('${book.barcode}', 'plus')">${SvgIcons.plus}</button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
        if (checkoutBtn) checkoutBtn.style.display = 'inline-flex';
        if (promoWrap) promoWrap.style.display = 'block';
        
        // Calculate with promo
        const discount = PromoEngine.calculateDiscount(data.amountToPay);
        const finalPayable = Math.max(0, data.amountToPay - discount);
        
        const discountInfoEl = document.getElementById('drawerDiscountLine');
        if (discountInfoEl) {
            if (discount > 0) {
                discountInfoEl.innerHTML = `<span style="color: #34d399; font-size: 0.82rem; font-weight: 600;">Promo Discount (${PromoEngine.appliedCode}): -₹${discount}</span>`;
            } else {
                discountInfoEl.innerHTML = '';
            }
        }
        
        if (totalEl) totalEl.textContent = formatPrice(finalPayable);
    },
    
    async updateItem(bookId, action) {
        const formData = new URLSearchParams();
        if (action === 'plus') {
            formData.append('addToCart', 'Add To Cart');
            formData.append('selectedBookId', bookId);
            formData.append(`qty_${bookId}`, '1');
        } else {
            formData.append('removeFromCart', '-');
            formData.append('selectedBookId', bookId);
        }
        
        try {
            const res = await fetch('cart', {
                method: 'POST',
                body: formData,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            const data = await res.json();
            if (data.success) {
                this.renderDrawerItems(data);
                this.updateBadge(data.cartItems);
                if (typeof fetchBooks === 'function') fetchBooks(); // if on dashboard
            }
        } catch(err) {
            console.error(err);
        }
    },
    
    updateBadge(cartItems) {
        let total = 0;
        if (cartItems) {
            cartItems.forEach(i => total += i.quantity);
        }
        document.querySelectorAll('.cart-badge-count').forEach(badge => {
            badge.textContent = total;
            badge.style.display = total > 0 ? 'inline-block' : 'none';
        });
    }
};

// Admin CSV Export Utility
function exportInventoryToCsv(books) {
    if (!books || books.length === 0) {
        Toast.error("No books available to export");
        return;
    }
    
    const headers = ["Barcode / ISBN", "Book Name", "Author", "Price (INR)", "Quantity", "Stock Status"];
    const rows = books.map(b => [
        `"${b.barcode}"`,
        `"${b.name.replace(/"/g, '""')}"`,
        `"${b.author.replace(/"/g, '""')}"`,
        b.price,
        b.quantity,
        b.quantity > 5 ? "In Stock" : (b.quantity > 0 ? "Low Stock" : "Out of Stock")
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `asthana_bookstore_inventory_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    Toast.success("Inventory exported successfully to CSV!");
}

// Auto sync Theme, Wishlist, and Cart badge on page load
document.addEventListener('DOMContentLoaded', async () => {
    ThemeManager.init();
    WishlistManager.updateBadges();
    
    try {
        const res = await fetch('cart');
        const data = await res.json();
        if (data.success && data.cartItems) {
            CartDrawer.updateBadge(data.cartItems);
        }
    } catch(e) {
        // Guest mode
    }
});
