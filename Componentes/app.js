const { createApp } = Vue;

const Header = {
  props: {
    titulo: String
  },
  template: `
    <div class="titulo">
      <img class="" src="./burger.png">
      <h1>{{titulo}}</h1>
      <img class="" src="./espatula.png">
    </div>
      `
} 

const Footer = {
  props: {
    subtitulo: String
  },
  template: `
  <div class="foot">
    <h2>{{subtitulo}}</h2>
  </div>
  `
} 

const cart = {
  template: `
    <button class="btnFltante"><i class="fa-solid fa-cart-shopping"></i></button>
  `
}

const Contador = {
  template:`
    <div class="boton">
        <button v-on:click="restando" value="Click" class="menos"><i class="fa-solid fa-minus fa-2x"></i></button>
        <p>0</p>
        <button v-on:click="sumando" value="Click" class="mas"><i class="fa-solid fa-plus fa-2x"></i></button>
    </div>
  `
}

const Card = {
  components: {
    'card-count': Contador,
  },
  props: {
    titulo: String,
    portada: String,
    peso: Number,
    calorias: Number,
    costo: Number,
    ingredientes: String
  },
  template: `
  <div class="card">
    <div class="img-bur">
      <img class="" :src="portada" :title="titulo">
      <div class="texto-encima">{{ingredientes}}</div>
    </div>
      <br><br>
      <p class="tittle">{{ titulo }}</p>
      <table>
        <tr>
          <td>Peso</td>
          <td>{{peso}}gr</td>
        </tr>
        <tr>
          <td>Calorias</td>
          <td>{{calorias}}Kcal</td>
        </tr>
      </table>
      <p class="infor">Precio: $ {{ costo }}</p>
      <card-count/>
  </div>
  `
}

const MainCards = {
  components: {
    'card-component': Card,
  },
  props: {
    burgers: Array,
  },
  template: `
  <div class="card-cont">
    <card-component v-for="(burger, index) of burgers"
    :titulo="burger.titulo"
    :portada="burger.portada"
    :peso="burger.peso"
    :calorias="burger.calorias"
    :costo="burger.costo"
    :ingredientes="burger.ingredientes"
    class="cont-cards"
    ></card-component>
  </div>
  `
}


createApp({
  components: {
    'header-component': Header,
    'main-cards': MainCards,
    'footer-component': Footer,
    'cart-component': cart
  },
  data() {
    return {
      burgers: [
        {
          id: 1,
          titulo: "Bomba",
          costo: 2100.00,
          peso: 700,
          calorias: 200,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Bomba-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 2,
          titulo: "Especial",
          costo: 2100.00,
          peso: 700,
          calorias: 280,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Especial-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 3,
          titulo: "Big",
          costo: 2000.00,
          peso: 800,
          calorias: 600,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Big-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 4,
          titulo: "Barbacoa",
          costo: 1800.00,
          peso: 700,
          calorias: 500,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Barbacoa-33.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 5,
          titulo: "Doble cheese",
          costo: 1750.00,
          peso: 500,
          calorias: 350,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Doble-cheese.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 6,
          titulo: "Doble cuarto",
          costo: 1850.00,
          peso: 600,
          calorias: 6500,
          portada: "https://punto33.com/wp-content/uploads/2022/12/cuartodelibra-1024x1024.png",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 7,
          titulo: "Blue cheese",
          costo: 1900.00,
          peso: 700,
          calorias: 1000,
          portada: "https://punto33.com/wp-content/uploads/2022/12/bluecheese33-1024x1024.png",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        },
        {
          id: 8,
          titulo: "Ahumada",
          costo: 2000.00,
          peso: 600,
          calorias: 400,
          portada: "https://punto33.com/wp-content/uploads/2022/12/Mildis-Ahumada.jpg",
          ingredientes: "INGREDIENTES QUE VA A LLEVAR LA HAMBURGUESA"
        }
      ]

    }
  }
}).mount("#app")