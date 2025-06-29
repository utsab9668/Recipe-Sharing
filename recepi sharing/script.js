const form = document.getElementById('recipe-form');
const cards = document.getElementById('cards');

let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

function renderRecipes() {
  cards.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
      <p><strong>Steps:</strong><br>${recipe.steps}</p>
    `;
    cards.appendChild(card);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const ingredients = document.getElementById('ingredients').value;
  const steps = document.getElementById('steps').value;

  const newRecipe = { name, ingredients, steps };
  recipes.push(newRecipe);
  localStorage.setItem('recipes', JSON.stringify(recipes));
  renderRecipes();

  form.reset();
});

// Initial render
renderRecipes();
