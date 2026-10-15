/**
 * OnlineBookStore Modern - Core Application Engine
 * Architected & Engineered by Aditya Asthana
 */

// Modern Toast Notification Engine
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
        
        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'error') icon = '⚠️';
        if (type === 'info') icon = '💡';
        
        toast.innerHTML = `
            <span style="font-size: 1.1rem;">${icon}</span>
            <div style="flex: 1; font-size: 0.9rem; font-weight: 500;">${message}</div>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: #94a3b8; font-size: 1.1rem; cursor: pointer;">&times;</button>
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

// Formatting utilities
function formatPrice(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Visual Book Cover Generator (picks stylish icons & gradients based on book title/author)
function getBookVisuals(name = '', author = '') {
    const text = (name + ' ' + author).toLowerCase();
    
    if (text.includes('java') || text.includes('spring')) {
        return { icon: '☕', gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', genre: 'Java Core' };
    } else if (text.includes('rust')) {
        return { icon: '🦀', gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)', genre: 'Systems' };
    } else if (text.includes('python')) {
        return { icon: '🐍', gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', genre: 'Python' };
    } else if (text.includes('react') || text.includes('web') || text.includes('javascript')) {
        return { icon: '⚛️', gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', genre: 'Frontend' };
    } else if (text.includes('c++') || text.includes('c programming')) {
        return { icon: '⚡', gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)', genre: 'Native C++' };
    } else if (text.includes('go ') || text.includes('golang')) {
        return { icon: '🐹', gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)', genre: 'Cloud & Go' };
    } else if (text.includes('clean') || text.includes('design') || text.includes('architecture')) {
        return { icon: '📐', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', genre: 'Software Architecture' };
    } else if (text.includes('science') || text.includes('algorithm')) {
        return { icon: '🧠', gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', genre: 'Computer Science' };
    }
    return { icon: '📖', gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', genre: 'Engineering' };
}

// Global Form Submission Handler with Async Fetch
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

// Slide-Over Cart Drawer Controller
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
        
        if (!data.cartItems || data.cartItems.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem 1rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🛒</div>
                    <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Your Cart is Empty</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Explore our catalog and add books you love!</p>
                </div>
            `;
            if (totalEl) totalEl.textContent = '₹0';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            return;
        }
        
        let html = '';
        data.cartItems.forEach(item => {
            const book = item.book;
            const visuals = getBookVisuals(book.name, book.author);
            
            html += `
                <div style="display: flex; gap: 1rem; align-items: center; padding: 1rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md);">
                    <div style="width: 48px; height: 54px; border-radius: var(--radius-sm); background: ${visuals.gradient}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0;">
                        ${visuals.icon}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                        <h4 style="font-size: 0.92rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${book.name}</h4>
                        <p style="font-size: 0.8rem; color: var(--text-secondary);">${book.author}</p>
                        <div style="font-weight: 700; color: #34d399; font-size: 0.95rem; margin-top: 0.25rem;">
                            ₹${book.price} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: normal;">x ${item.quantity}</span>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                        <div class="quantity-control" style="transform: scale(0.9);">
                            <button class="qty-btn" onclick="CartDrawer.updateItem('${book.barcode}', 'minus')">-</button>
                            <span class="qty-input" style="line-height: 34px;">${item.quantity}</span>
                            <button class="qty-btn" onclick="CartDrawer.updateItem('${book.barcode}', 'plus')">+</button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
        if (totalEl) totalEl.textContent = formatPrice(data.amountToPay);
        if (checkoutBtn) checkoutBtn.style.display = 'block';
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
            badge.style.display = total > 0 ? 'inline-block' : 'inline-block';
        });
    }
};

// Auto sync cart badge on page load
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await fetch('cart');
        const data = await res.json();
        if (data.success && data.cartItems) {
            CartDrawer.updateBadge(data.cartItems);
        }
    } catch(e) {
        // Guest mode or not logged in
    }
});
