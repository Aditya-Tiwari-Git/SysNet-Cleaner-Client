const products = [

    {
        name: "Smart Driver Update",
        description: "Automatic driver updates for optimal hardware performance",
        price: "$19.99",
        features: [
            "Automatic driver detection",
            "One-click updates",
            "Driver backup",
            "Schedule scanning",
            "Compatible with all major brands"
        ],
        icon: "refresh-cw", // Lucide icon name,
        Download_Link:"smart-pc-optimizer.html"
    }
];

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-lg shadow-lg p-6 flex flex-col';
        
        productCard.innerHTML = `
            <div class="flex items-center justify-center mb-4">
                <i data-feather="${product.icon}" class="w-12 h-12 text-green-500"></i>
            </div>
            <h3 class="text-xl font-bold text-center mb-4">${product.name}</h3>
            <p class="text-gray-600 text-center mb-4">${product.description}</p>
            <div class="text-2xl font-bold text-center text-green-500 mb-4">${product.price}</div>
            <ul class="feature-list mb-6 flex-grow">
                ${product.features.map(feature => `
                    <li>${feature}</li>
                `).join('')}
            </ul>
            <a href="${product.Download_Link}" class="download-button w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 text-center">                 Download Now             </a>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    // Initialize Feather icons
    feather.replace();
}

// Call this function when the document is loaded
document.addEventListener('DOMContentLoaded', renderProducts);