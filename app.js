const menu = [
  {
    id: 1,
    title: "panquecas de leitelho",
    category: "café",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Servidas quentes e geralmente acompanhadas de xarope de bordo ou frutas frescas, essas panquecas são uma escolha clássica para começar o dia com um sabor incrível. `,
  },
  {
    id: 2,
    title: "refeição dupla",
    category: "lanche",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Esse tipo de lanche permite que casais ou amigos desfrutem de uma variedade de sabores e pratos, escolhendo entradas, pratos principais e sobremesas que complementam um ao outro.  `,
  },
  {
    id: 3,
    title: "milkshake do godzilla",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `é uma combinação de sorvete de baunilha ou chocolate, misturado com leite, resultando em uma textura cremosa e suave. O toque especial desse milkshake é a inclusão de pedaços generosos de brownie ou bolo de chocolate`,
  },
  {
    id: 4,
    title: "delícia do campo",
    category: "café",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `consiste em uma mistura de ingredientes frescos e naturais, como legumes, ervas, queijos e, às vezes, carnes ou proteínas vegetais. Esses ingredientes são frequentemente colhidos diretamente da horta ou produzidos localmente `,
  },
  {
    id: 5,
    title: "ovo estrela",
    category: "lanche",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `montado em um pão macio, ovo frito ou cozido num pão de hambúrguer ou baguete, e pode ser personalizado com diversos acompanhamentos, como queijo derretido, bacon crocante, alface fresca, tomate e molhos saborosos `,
  },
  {
    id: 6,
    title: "oreo dos sonhos",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `é uma sobremesa irresistível que incorpora os famosos biscoitos Oreo de uma maneira indulgente e deliciosa. Geralmente, consiste em várias camadas ou componentes que incluem biscoitos Oreo esmagados, creme de Oreo (preparado a partir do recheio dos biscoitos), e pedaços inteiros ou pedaços de biscoito Oreo.`,
  },
  {
    id: 7,
    title: "bacon estrela",
    category: "café",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Essa iguaria consiste em uma generosa porção de bacon cozido até a perfeição, muitas vezes frito até ficar crocante e dourado.  `,
  },
  {
    id: 8,
    title: "americano",
    category: "lanche",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: ` hambúrguer com queijo, onde um hambúrguer de carne é grelhado e servido em um pão de hambúrguer, geralmente com uma fatia de queijo derretido por cima, alface, tomate, cebola e condimentos como ketchup e mostarda `,
  },
  {
    id: 9,
    title: "amigo da quarentena",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `começa com uma base de sorvete cremoso, seja de baunilha ou chocolate. Em seguida, são adicionados ingredientes que evocam a sensação de indulgência e conforto, como pedaços de bolo, biscoitos ou brownies, além de coberturas, como chantilly, calda de chocolate ou caramelo.`,
  },
  {
    id: 10,
    title: "steak do jantar",
    category: "jantar",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `inclui um corte de carne bovina de qualidade, como filé-mignon, contrafilé ou entrecôte, que é grelhado, assado ou cozido`,
  }
];

const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu)
  displayMenuButtons()
})



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    //console.log(item)

    return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title} />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}
        </p>
      </div>
    </article>`
  })
  displayMenu = displayMenu.join("")

  sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['all']
  )
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("")
  container.innerHTML = categoryBtns
  const filterBtns = container.querySelectorAll(".filter-btn")
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category)
        if (menuItem.category === category) {
          return menuItem
        }

      })
      // console.log(menuCategory)
      if (category === "all") {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(menuCategory)
      }
    })
  })
}