// Helper script to add i18n support to all HTML files
// This script can be run manually or used as reference

const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'about.html',
    'services.html',
    'contact.html',
    'company-info.html'
];

// Common header pattern with i18n
const headerTemplate = `    <link rel="stylesheet" href="css/styles.css">
    <link rel="canonical" href="https://dongtienhotel.store/">
    <script src="js/i18n.js" defer></script>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-top">
                <div class="logo">
                    <a href="index.html" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
                        <img src="images/logo_header.svg" alt="DONG TIEN HOTEL" style="max-height: 60px; width: auto;">
                        <div class="logo-text">
                            <h1 data-i18n="common.logo">DONG TIEN HOTEL</h1>
                            <p class="tagline" data-i18n="common.tagline">Tận Tâm - Chất Lượng - Tiện Nghi</p>
                        </div>
                    </a>
                </div>
                <div class="header-contact">
                    <a href="tel:0917980188" class="phone-link">📞 <span data-i18n="common.phone">0917980188</span></a>
                    <a href="contact.html" class="btn btn-primary" data-i18n="common.contactNow">Đặt phòng ngay</a>
                </div>
            </div>
            <nav class="navbar">
                <ul class="nav-menu">
                    <li><a href="index.html" data-i18n="common.nav.home">Trang chủ</a></li>
                    <li><a href="about.html" data-i18n="common.nav.about">Giới thiệu</a></li>
                    <li><a href="services.html" data-i18n="common.nav.services">Dịch vụ</a></li>
                    <li><a href="contact.html" data-i18n="common.nav.contact">Liên hệ</a></li>
                </ul>
                <button class="mobile-menu-toggle" aria-label="Toggle menu" data-i18n-aria-label="common.nav.menu">☰</button>
            </nav>
        </div>
    </header>`;

console.log('Helper script created. Use this as reference to update HTML files manually.');
console.log('All HTML files need:');
console.log('1. Add <script src="js/i18n.js" defer></script> in <head>');
console.log('2. Add data-i18n attributes to translatable elements');
console.log('3. Update header/footer with i18n attributes');
