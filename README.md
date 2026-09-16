# 🛍️ TASUZ CLOTHES - E-Commerce Fashion Store

## 📝 Loyiha Haqida

**TASUZ CLOTHES** - bu zamonaviy, shikmatli va foydalanuvchi-markazli e-commerce veb-sayt. Sayt **glassmorphism** dizayn uslubidan foydalanib, yuqori sifatli kiyimlarni sotish uchun mo'ljallangan.

### ✨ Asosiy Xususiyatlari

- 🎨 **Glassmorphism Dizayn** - Shafoflik oyna stilida zamonaviy interfeys
- 📱 **Responsive Design** - Barcha cihazda to'g'ri ko'rinadi (mobil, planshet, kompyuter)
- 🛒 **Interaktiv Savat** - Mahsulotlarni qo'shish va o'chirish imkoni
- 🔍 **Qidiruv Funksiyasi** - Tez va oson qidiruv
- 🎯 **Filtr Tizimi** - Kategoriyalar bo'yicha filtr qilish
- ⭐ **Reyting Tizimi** - Mahsulotlarning baholash ko'rsatkichlarini ko'rish
- 💳 **To'lov Interfeysi** - Savat va to'lov bo'limi
- 🎭 **Animatsiyalar** - Yumshoq va chiroyli animatsiyalar

---

## 📂 Fayllar Strukturasi

```
tasuz-clothes/
├── index.html          # Asosiy HTML fayli
├── styles.css          # CSS uslublari (Glassmorphism)
├── script.js           # JavaScript funksionallikasi
└── README.md           # Bu fayl
```

---

## 🚀 Texnologiyalar

| Texnologiya | Tavsifi |
|---|---|
| **HTML5** | Semantik va struktur |
| **CSS3** | Glassmorphism, Gradient, Animatsiya |
| **JavaScript (Vanilla)** | Interaktivlik va dinamika |
| **Font Awesome** | Ikonkalar |
| **Google Fonts** | Shriftlar |

---

## 🎨 Dizayn Xususiyatlari

### Glassmorphism (Shafoflik Oyna)
- **Blur Effect** - Fon koeffitsiyenti 20px
- **Transparency** - 10-15% opasiteti
- **Border Gradient** - Gradiyent chegaralar
- **Box Shadow** - Soyalar va chuqurlik

### Ranglar
- 🔵 **Primary Color**: `#6366f1` (Indigo)
- 🌸 **Secondary Color**: `#ec4899` (Pink)
- 🟠 **Accent Color**: `#f59e0b` (Amber)
- 🌑 **Dark Background**: `#0f172a`

### Animatsiyalar
- Blob animatsiyalari
- Shimmer effekti
- Smooth transitions
- Hover effects

---

## 📋 Sahifalar va Bo'limlar

### 1. **Navbar (Bosh Navitsiya)**
- Logo va brend nomi
- Asosiy havolalar
- Qidiruv tugmasi
- Savat tugmasi
- Responsive menu

### 2. **Hero Section (Asosiy Bo'lim)**
- Bosh sarlavha va subtitle
- Call-to-action tugmasi
- Animated blob fon

### 3. **Categories (Kategoriyalar)**
- 4 ta asosiy kategoriya:
  - 👔 Erkaklar Kiyimi
  - 👗 Ayollar Kiyimi
  - 👶 Bolalar Kiyimi
  - 🏃 Sport Kiyimi

### 4. **Products (Mahsulotlar)**
- 20+ ta mahsulot
- Filtr tugmalari
- Har bir mahsulotda:
  - Emoji ikonkasi
  - Nomi va tavsifi
  - Narxi (UZS)
  - Reyting (⭐)
  - Savat'ga qo'shish tugmasi

### 5. **Special Offer (Maxsus Taklif)**
- 40% chegirma elon qilishi
- Glassmorphism karochkasi

### 6. **About (Biz Haqida)**
- 4 ta xususiyat:
  - 📦 Tez Yetkazish
  - 🔒 Xavfsiz Xarid
  - 🔄 Qaytarish Imkoni
  - 💬 24/7 Qo'llab-Quvvatlash

### 7. **Contact (Bog'lanish)**
- Forma (Ism, Email, Xabar)
- Bog'lanish ma'lumotlari
- Manzil, Telefon, Email

### 8. **Footer (Pastki Qismi)**
- Brend ma'lumoti
- Tezkor havolalar
- Ijtimoiy tarmoqlar
- Copyright

---

## 🛒 Mahsulotlar Katalogi

### Erkaklar Kiyimi (5 ta)
1. Premium Erkak Futbolkasi - 89,999 UZS
2. Klassik Erkak Shirtasi - 149,999 UZS
3. Erkak Zhaketi - 349,999 UZS
4. Erkak Shimlak Kostyumi - 599,999 UZS
5. Erkak Shorty - 59,999 UZS

### Ayollar Kiyimi (5 ta)
1. Ayol Futbolkasi - 79,999 UZS
2. Ayol Ko'ylagi - 199,999 UZS
3. Ayol Jinslar - 129,999 UZS
4. Ayol Zhaketi - 279,999 UZS
5. Ayol Kardigani - 139,999 UZS

### Bolalar Kiyimi (4 ta)
1. Bola Futbolkasi - 49,999 UZS
2. Bola Ko'ylagi - 69,999 UZS
3. Bola Jinslar - 59,999 UZS
4. Bola Hoodie - 89,999 UZS

### Sport Kiyimi (6 ta)
1. Sport Futbolkasi - 99,999 UZS
2. Sport Shorty - 69,999 UZS
3. Sport Leggings - 129,999 UZS
4. Sport Jaketasi - 219,999 UZS
5. Sport Shlyapasi - 39,999 UZS
6. Sport Ayakkabilari - 299,999 UZS

---

## ⚙️ JavaScript Funksionallikasi

### 1. **Mahsulotlarni Ko'rsatish**
```javascript
displayProducts(category)
```
Kategoriya bo'yicha mahsulotlarni ko'rsatadi.

### 2. **Savatga Qo'shish**
```javascript
addToCart(productId)
```
Tanlangan mahsulotni savatga qo'shadi va bildirishnoma ko'rsatadi.

### 3. **Savatni Yangilash**
```javascript
updateCart()
```
Savatni yangilaydi va jami narxni hisoblaydi.

### 4. **Qidiruv**
```javascript
displaySearchResults(results)
```
Qidiruv natijalari bo'yicha mahsulotlarni filtrlaydi.

### 5. **Savat Ochish/Yopish**
```javascript
toggleCart()
```
Savat panelingini ochadi yoki yopadi.

---

## 📱 Responsive Breakpoints

| Cihaz | Kenglik | Tavsifi |
|---|---|---|
| **Mobil** | < 480px | Telefon |
| **Kichik Planshet** | 480px - 768px | Kichik qo'lga o'rin aparati |
| **Planshet** | 768px - 1024px | O'rta o'lchamdagi cihaz |
| **Kompyuter** | > 1024px | Stol va katta ekranlar |

---

## 🚀 Foydalanish

### 1. **Fayllarni Yuklab Olish**
```bash
git clone https://github.com/ozodbekummatqulov18-beep/tasuz-clothes.git
cd tasuz-clothes
```

### 2. **Saytni Ochish**
`index.html` faylini brauzverda ochish yetarli. Qo'shimcha server kerak emas.

### 3. **GitHub Pages'da Joylashtirish**
Repositoriy [GitHub Pages](https://pages.github.com/) bilan avtomatik ravishda joylanadi:
```
https://ozodbekummatqulov18-beep.github.io/tasuz-clothes/
```

---

## 🎯 Asosiy Funksiyalar

### ✅ Tugallangan
- ✔️ Glassmorphism dizayn
- ✔️ Responsive layout
- ✔️ Mahsulotlar katalogi (20+ ta)
- ✔️ Savat tizimi
- ✔️ Qidiruv funksiyasi
- ✔️ Kategoriya filteri
- ✔️ Animatsiyalar
- ✔️ Mobile-friendly interfeys

### 🔄 Kelasi versiyalarda (V2.0)
- 🔐 Foydalanuvchi autentifikatsiyasi
- 💳 Haqiqiy to'lov tizimi (Stripe, PayMe)
- 📦 Buyurtmalarni kuzatish
- 💬 Foydalanuvchi sharhlar va reyting
- 📊 Admin paneli
- 🗄️ Backend baza (Database)
- 📧 Email xabarlari
- 🎁 Promokodlar va chegirmalar

---

## 🎨 Customization (Shaxsiylashtirish)

### Ranglarni O'zgartirish
`styles.css` ning boshida `:root` bo'limida ranglarni o'zgartirishingiz mumkin:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #f59e0b;
    /* ... boshqa ranglar ... */
}
```

### Mahsulotlarni Qo'shish
`script.js` ning `products` massiviga yangi mahsulot qo'shing:
```javascript
{
    id: 21,
    name: "Yangi Mahsulot",
    category: "erkak",
    price: 99999,
    rating: 4.8,
    description: "Tavsifi",
    emoji: "👕"
}
```

---

## 🐛 Bug Report va Taklif

Agar saytda muammo bo'lsa yoki taklif bo'lsa:
1. [Issues](https://github.com/ozodbekummatqulov18-beep/tasuz-clothes/issues) bo'limini ochring
2. Muammoni batafsil ta'riflab yozing
3. Screenshots yoki video qo'shing

---

## 📞 Bog'lanish

- **GitHub**: [@ozodbekummatqulov18-beep](https://github.com/ozodbekummatqulov18-beep)
- **Email**: ozodbekummatqulov18@gmail.com
- **Lokatsiya**: Tashkent, O'zbekiston

---

## 📄 Litsenziya

Bu loyiha **MIT Litsenziyasi** ostida tarqatiladi. Batafsil ma'lumot uchun [LICENSE](LICENSE) faylini ko'ring.

---

## 🙏 Foydalanilgan Resurslar

- [Font Awesome Icons](https://fontawesome.com) - Ikonkalar
- [Google Fonts](https://fonts.google.com) - Shriftlar
- [CSS Gradients](https://www.colorgradient.io) - Gradient generatori
- [Glassmorphism CSS](https://glassmorphism.com) - Glassmorphism UI Kit

---

## 🎓 O'rganish Maqsadi

Bu loyiha quyidagilarni o'rganish uchun mo'ljallangan:
- 🎨 Modern CSS texnikalar
- ⚡ Vanilla JavaScript
- 📱 Responsive Web Design
- 🎭 CSS Animatsiyalari
- 🔄 DOM Manipulatsiya
- 💾 Local Storage (Kelasi versiyada)

---

## 🌟 Ochko'zlik

Agar sizga sayt yoqqan bo'lsa, ⭐ bering va [fork](https://github.com/ozodbekummatqulov18-beep/tasuz-clothes/fork) qiling!

```
Created with ❤️ by @ozodbekummatqulov18-beep
2024 | TASUZ CLOTHES - Your Fashion Store
```

---

**Saytni ochish uchun**: [GitHub Pages](https://ozodbekummatqulov18-beep.github.io/tasuz-clothes/)

**Repositoriyni ko'rish**: [GitHub Repo](https://github.com/ozodbekummatqulov18-beep/tasuz-clothes)

**Version**: 1.0.0  
**Oxirgi yangilanish**: 2024-yil  
**Holati**: ✅ Tayyor va foydalanishga tayyar!
