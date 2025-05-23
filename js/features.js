// Render features
function renderFeatures() {
    const featuresGrid = document.getElementById('features-grid');
    
    featuresData.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300';
        
        featureElement.innerHTML = `
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-white">
                ${feature.icon}
            </div>
            <h3 class="text-xl font-semibold mb-2">${feature.title}</h3>
            <p class="text-gray-600">${feature.description}</p>
        `;
        
        featuresGrid.appendChild(featureElement);
    });
}