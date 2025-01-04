document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId) {
    fetch(`http://localhost:3000/products/${productId}`)
      .then(response => response.json())
      .then(product => {
        const productDetails = document.getElementById('product-details');

        const card = document.createElement('div');
        card.className = 'card mb-4 shadow-sm';
        productDetails.appendChild(card);

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = `http://localhost:3000/${product.img}`;
        img.alt = product.name;
        img.style = 'max-height: 500px; object-fit: cover;';
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = product.name;
        cardBody.appendChild(cardTitle);

        const price = document.createElement('p');
        price.className = 'card-text';
        price.textContent = `Price: ${product.price}`;
        cardBody.appendChild(price);

        const categoryText = document.createElement('p');
        categoryText.className = 'card-text';
        categoryText.textContent = `Category: ${product.category}`;
        cardBody.appendChild(categoryText);

        const footprint = document.createElement('p');
        footprint.className = 'card-text';
        footprint.textContent = `Total CO2 footprint: ${product.totalFootprint} kg`;
        cardBody.appendChild(footprint);

        const ingredients = document.createElement('p');
        ingredients.className = 'card-text';
        ingredients.textContent = 'Ingredients:';
        cardBody.appendChild(ingredients);

        const ingredientList = document.createElement('ul');
        product.ingredients.forEach(ingredient => {
          const ingredientItem = document.createElement('li');
          ingredientItem.textContent = `${ingredient.name} - CO2 footprint: ${ingredient.co2} kg`;
          ingredientList.appendChild(ingredientItem);
        });
        cardBody.appendChild(ingredientList);

        const apiDetailsButton = document.createElement('a');
        apiDetailsButton.className = 'btn btn-secondary';
        apiDetailsButton.href = `http://localhost:3000/products/${product.id}`;
        apiDetailsButton.textContent = `GET http://localhost:3000/products/${product.id}`;
        cardBody.appendChild(apiDetailsButton);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  } else {
    document.getElementById('product-details').textContent = 'Product ID not specified.';
  }
});
