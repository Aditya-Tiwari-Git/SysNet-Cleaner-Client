// Render testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    
    testimonialsData.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'bg-gray-800 p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 <boltAction type="file" filePath="js/testimonials.js">hover:transform hover:scale-105 transition-transform duration-300';
        
        testimonialElement.innerHTML = `
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4">
                    <h4 class="font-semibold">${testimonial.name}</h4>
                    <p class="text-green-500">${testimonial.role}</p>
                </div>
            </div>
            <p class="text-gray-300">${testimonial.text}</p>
        `;
        
        testimonialsGrid.appendChild(testimonialElement);
    });
}