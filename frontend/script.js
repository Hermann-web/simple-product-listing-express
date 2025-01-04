document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
      const productList = document.getElementById('product-list');
      const categories = [...new Set(products.map(product => product.category))];

      categories.forEach(category => {
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category;
        productList.appendChild(categoryHeader);

        const categoryButton = document.createElement('a');
        categoryButton.className = 'btn btn-secondary';
        categoryButton.href = 'http://localhost:3000/products';
        categoryButton.textContent = 'GET http://localhost:3000/products';
        productList.appendChild(categoryButton);

        const row = document.createElement('div');
        row.className = 'row';
        productList.appendChild(row);

        products.filter(product => product.category === category).forEach(product => {
          const col = document.createElement('div');
          col.className = 'col-md-3';
          row.appendChild(col);

          const card = document.createElement('div');
          card.className = 'card mb-4 shadow-sm';
          col.appendChild(card);

          const img = document.createElement('img');
          img.className = 'card-img-top';
          img.src = `http://localhost:3000/${product.img}`;
          img.alt = product.name;
          img.style = 'max-height: 150px; object-fit: cover;';

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

          const viewDetailsButton = document.createElement('a');
          viewDetailsButton.className = 'btn btn-primary';
          viewDetailsButton.href = `/product.html?id=${product.id}`;
          viewDetailsButton.textContent = 'View Details';
          cardBody.appendChild(viewDetailsButton);

          const apiDetailsButton = document.createElement('a');
          apiDetailsButton.className = 'btn btn-secondary';
          apiDetailsButton.href = `http://localhost:3000/products/${product.id}`;
          apiDetailsButton.textContent = `GET http://localhost:3000/products/${product.id}`;
          cardBody.appendChild(apiDetailsButton);
        });
      });
    });
});
