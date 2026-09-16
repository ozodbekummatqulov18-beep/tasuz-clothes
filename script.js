// ============================================
// TASUZ CLOTHES - JavaScript Functionality
// ============================================

// Products Database
const products = [
    // Erkaklar Kiyimi
    {
        id: 1,
        name: "Premium Erkak Futbolkasi",
        category: "erkak",
        price: 89999,
        rating: 4.8,
        description: "Yumshoq va qulay premium material",
        emoji: "👕"
    },
    {
        id: 2,
        name: "Klassik Erkak Shirtasi",
        category: "erkak",
        price: 149999,
        rating: 4.9,
        description: "Ishchi va kichik aksessuarlar uchun",
        emoji: "👔"
    },
    {
        id: 3,
        name: "Erkak Zhaketi",
        category: "erkak",
        price: 349999,
        rating: 4.7,
        description: "Qish uchun isituvchi zhaketi",
        emoji: "🧥"
    },
    {
        id: 4,
        name: "Erkak Shimlak Kostyumi",
        category: "erkak",
        price: 599999,
        rating: 5.0,
        description: "Ijtimoiy tadbirlar uchun",
        emoji: "🎩"
    },
    {
        id: 5,
        name: "Erkak Shorty",
        category: "erkak",
        price: 59999,
        rating: 4.6,
        description: "Yozda uchun ideal",
        emoji: "🩳"
    },

    // Ayollar Kiyimi
    {
        id: 6,
        name: "Ayol Futbolkasi",
        category: "ayol",
        price: 79999,
        rating: 4.9,
        description: "Eng zamonaviy uslubda",
        emoji: "👚"
    },
    {
        id: 7,
        name: "Ayol Ko'ylagi",
        category: "ayol",
        price: 199999,
        rating: 4.8,
        description: "Shikmatli va dilimanli",
        emoji: "👗"
    },
    {
        id: 8,
        name: "Ayol Jinslar",
        category: "ayol",
        price: 129999,
        rating: 4.7,
        description: "Klassik va zamonaviy uslub",
        emoji: "👖"
    },
    {
        id: 9,
        name: "Ayol Zhaketi",
        category: "ayol",
        price: 279999,
        rating: 4.9,
        description: "Isituvchi va zamonaviy",
        emoji: "🧥"
    },
    {
        id: 10,
        name: "Ayol Kardigani",
        category: "ayol",
        price: 139999,
        rating: 4.8,
        description: "Yumshoq va qulay",
        emoji: "🧶"
    },

    // Bolalar Kiyimi
    {
        id: 11,
        name: "Bola Futbolkasi",
        category: "bola",
        price: 49999,
        rating: 4.9,
        description: "Bolalar uchun xavfsiz material",
        emoji: "👕"
    },
    {
        id: 12,
        name: "Bola Ko'ylagi",
        category: "bola",
        price: 69999,
        rating: 4.8,
        description: "Renkli va qiziqarli",
        emoji: "👗"
    },
    {
        id: 13,
        name: "Bola Jinslar",
        category: "bola",
        price: 59999,
        rating: 4.7,
        description: "Charchasiga chidamli",
        emoji: "👖"
    },
    {
        id: 14,
        name: "Bola Hoodie",
        category: "bola",
        price: 89999,
        rating: 4.9,
        description: "Iliq va qulay",
        emoji: "🧥"
    },

    // Sport Kiyimi
    {
        id: 15,
        name: "Sport Futbolkasi",
        category: "sport",
        price: 99999,
        rating: 4.8,
        description: "Teza quritoradi material",
        emoji: "👕"
    },
    {
        id: 16,
        name: "Sport Shorty",
        category: "sport",
        price: 69999,
        rating: 4.9,
        description: "Yugurish uchun optimal",
        emoji: "🩳"
    },
    {
        id: 17,
        name: "Sport Leggings",
        category: "sport",
        price: 129999,
        rating: 4.8,
        description: "Yoga va fitness uchun",
        emoji: "👖"
    },
    {
        id: 18,
        name: "Sport Jaketasi",
        category: "sport",
        price: 219999,
        rating: 4.9,
        description: "Shamoldan himoya",
        emoji: "🧥"
    },
    {
        id: 19,
        name: "Sport Shlyapasi",
        category: "sport",
        price: 39999,
        rating: 4.7,
        description: "Quyosh va yomg'ir uchun",
        emoji: "🧢"
    },
    {
        id: 20,
        name: "Sport Ayakkabilari",
        category: "sport",
        price: 299999,
        rating: 4.9,
        description: "Professional sport ayakkaabi",
        emoji: "👟"
    }
];

// Shopping Cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSection = document.getElementById('cart-section');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const closeSearch = document.getElementById('closeSearch');
const menuToggle = document.getElementById('menuToggle');

let currentFilter = 'all';

// Display Products
function displayProducts(filter = 'all') {
    productsGrid.innerHTML = '';
    
    let filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">${product.emoji}</div>
        <div class="product-content">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${formatPrice(product.price)} UZS</div>
            <div class="product-rating">
                ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating}
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Savat'ga qo'sh
            </button>
        </div>
    `;
    return card;
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        erkak: 'Erkaklar',
        ayol: 'Ayollar',
        bola: 'Bolalar',
        sport: 'Sport'
    };
    return names[category] || category;
}

// Format Price
function formatPrice(price) {
    return price.toLocaleString('uz-UZ');
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    displayProducts(category);
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} savat'ga qo'shildi! ✅`);
}

// Update Cart Display
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="color: rgba(255, 255, 255, 0.7); text-align: center; padding: 2rem;">Savat bo\'sh</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)} UZS</div>
                <div style="color: rgba(255, 255, 255, 0.6); margin-top: 0.5rem;">
                    Miqdor: ${item.quantity}
                </div>
                <button onclick="removeFromCart(${item.id})" style="
                    margin-top: 0.5rem;
                    padding: 0.5rem;
                    background: rgba(236, 72, 153, 0.5);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 0.8rem;
                    width: 100%;
                ">O'chirish</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total) + ' UZS';
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Toggle Cart
function toggleCart() {
    cartSection.classList.toggle('active');
}

// Search Functionality
searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    searchInput.focus();
});

closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
        displaySearchResults(filtered);
    }
});

function displaySearchResults(results) {
    productsGrid.innerHTML = '';
    if (results.length === 0) {
        productsGrid.innerHTML = '<p style="color: white; grid-column: 1/-1; text-align: center;">Natija topilmadi</p>';
        return;
    }
    
    results.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Cart Button
cartBtn.addEventListener('click', toggleCart);

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        padding: 1rem 2rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Close search modal on outside click
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('active');
    }
});

// Smooth scroll spy for nav links
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Initialize
displayProducts();
