/*jshint esversion: 6 */

const icons = [{
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];


const colors = [{
    category: "food",
    color: "yellow"
  },
  {
    category: "beverage",
    color: "blue"
  },
  {
    category: "animal",
    color: "red"
  }
];


//  mappo gli elementi icons e colors, quando la category del primo è uguale a quella del secondo, trasferisco il suo colore in una nuvoa variabile colorItem, infine returno il suo valore
const colorIcon = icons.map((icon) => {
  let colorItem;
  colors.forEach((item) => {
    if (icon.category == item.category) {
      colorItem = item.color;
    }
  });

  icon.color = colorItem;
  return icon;

});

// ciclo fra gli elementi icons, faccio destrutturazione e li ricompongo assegnandoli all'html
icons.forEach((item) => {
  const {
    name,
    family,
    prefix,
    color
  } = item;

  let html = `<div>
<i class="${family} ${prefix}${name}" style="color: ${color}"></i>
<div class="title">${name}</div>
</div>`;
  $(".icons").append(html);
});
