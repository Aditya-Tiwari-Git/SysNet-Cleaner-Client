// Render pricing plans
function renderPricing() {
  const pricingGrid = document.getElementById("pricing-grid");

  pricingData.forEach((plan) => {
    const planElement = document.createElement("div");
    planElement.className = `bg-white rounded-lg shadow-lg p-8 ${
      plan.highlighted ? "transform scale-105 border-2 border-green-500" : ""
    }`;

    planElement.innerHTML = `
            <h3 class="text-2xl font-bold mb-4">${plan.name}</h3>
            <p class="text-4xl font-bold mb-6">${plan.price}</p>
            <ul class="mb-8 space-y-4">
                ${plan.features
                  .map(
                    (feature) => `
                    <li class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>${feature}</span>
                    </li>
                `
                  )
                  .join("")}
            </ul>
            <a href="${plan.buttonLink}" class="w-full px-4 py-2 rounded-full ${
      plan.highlighted
        ? "bg-green-500 text-white hover:bg-green-600"
        : "bg-gray-800 text-white hover:bg-gray-700"
    }">
                ${plan.buttonText}
            </a>
        `;

    pricingGrid.appendChild(planElement);
  });
}
