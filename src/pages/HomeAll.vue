<template>
<div ><!-- //INICIO -->
  <header id="header" class="header">
    <div class="container">
        <div class="row">
            <div class="four columns">
                <img src="../assets/img/logoCMJ.png" id="logo">
            </div>
            <div class="two columns u-pull-right">
                
                    <div class="submenu">
                            <img src="../assets/img/cartshop.png" id="img-carrito">
                            <div id="carrito">
                                    
                                    <table id="lista-carrito" class="u-full-width">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th>Total</th>
                                            </tr>
                                            
                                        </thead>
                                        <tbody></tbody>
                                        <thead style="font-weight: bolder">
                                           
                                        </thead>
                                        
                                    </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                            </div>
                          </div>
                
            </div>
        </div> 
    </div>
    </header>


    <!-- Lista de clases -->
    <div>
      <ul class="menu" >         
          <li><a href="#"> Colecciones </a></li>
          <li><a href="#"> Pijamas para niña </a></li>
          <li><a href="#"> Pijamas mujer </a></li>
      </ul>
  </div>
  <div>
    <SliderAll></SliderAll>
  </div>
    

    <div class="barra">
        <div class="container">
            <div class="row">
                    <div class="four columns icono icono1">
                        <p>¡Belleza también es <br>
                            comodidad!</p>
                    </div>
                    <div class="four columns icono icono2">
                        <p>Haz tus pedidos en linea<br>
                            ¡Ahora mismo!</p>
                    </div>
                    <div class="four columns icono icono3">
                        <p>Explora toda nuestra <br>
                        variedad de <br>
                        estilos</p>
                    </div>
            </div>
        </div>

    </div>
    <div>

      <!-- Slider de fotos -->
     <!--  <div class="slider">
        <SliderFotos @next="next"
         @prev="prev">
          <CarouselSlide v-for="slide in slides" :key="slide" class="carousel-slider">
            <img :src="slide" :alt="slide" />
          </CarouselSlide>
        </SliderFotos>
      </div> -->
    </div>


<div id="lista-cursos" class="container">
  <h1 id="encabezado" class="encabezado">Catálogo</h1>
  <div class="row">
      <div class="four columns">
          <div class="card">
              <img src="../assets/img/popular4.jpg" class="imagen-curso u-full-width">
              <div class="info-card">
                  <h4>UFO Drivers - Mujer</h4>
                  <p>Pijama</p>
                  <img src="../assets/img/estrellas.png">
                  <p class="precio">$55000 COP  <span class="u-pull-right ">$49900 COP</span></p>
                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
              </div>
          </div> <!--.card-->
      </div>
      <div class="four columns">
              <div class="card">
                  <img src="../assets/img/pijamaniña.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Erizo - Niña</h4>
                      <p>Pijama</p>
                      <img src="../assets/img/estrellas.png">
                      <p class="precio">$45000 COP  <span class="u-pull-right ">$39900 COP</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
                  </div>
              </div>
      </div>
      <div class="four columns">
              <div class="card">
                  <img src="../assets/img/magiashort.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Magia Short - Mujer</h4>
                      <p>Multiusos</p>
                      <img src="../assets/img/estrellas.png">
                      <p class="precio">$50000 COP<span class="u-pull-right ">$44900 COP</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
      </div>

  </div> <!--.row-->
  <div class="row">
      <div class="four columns">
          <div class="card">
              <img src="../assets/img/masvendida1 copy.jpg" class="imagen-curso u-full-width">
              <div class="info-card">
                  <h4>Come Galletas - Mujer</h4>
                  <p>Pijama</p>
                  <img src="../assets/img/estrellas.png">
                  <p class="precio">$55000 COP<span class="u-pull-right ">$49900 COP</span></p>
                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
              </div>
          </div> <!--.card-->
      </div>
      <div class="four columns">
              <div class="card">
                  <img src="../assets/img/popular3.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Unicornio - Mujer</h4>
                      <p>Pijama</p>
                      <img src="../assets/img/estrellas.png">
                      <p class="precio">$55000 COP<span class="u-pull-right ">$49900 COP</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
      </div>
      <div class="four columns">
              <div class="card">
                  <img src="../assets/img/popular6.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Mistica - Mujer</h4>
                      <p>Pijama</p>
                      <img src="../assets/img/estrellas.png">
                      <p class="precio">$65000 COP<span class="u-pull-right ">$59900 COP</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
      </div>
  </div> <!--.row-->
  <div class="row">
      <div class="four columns">
          <div class="card">
              <img src="../assets/img/pijama estampada.jpg" class="imagen-curso u-full-width">
              <div class="info-card">
                  <h4>Aguacates Short - Mujer</h4>
                  <p>Multiusos</p>
                  <img src="../assets/img/estrellas.png">
                  <p class="precio">$50000 COP<span class="u-pull-right ">$45900 COP</span></p>
                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
              </div>
          </div> <!--.card-->
      </div>
      <div class="four columns">
              <div class="card">
                  <img src="../assets/img/comegalletas.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Come Galletas - Niña/o</h4>
                      <p>Pijama</p>
                      <img src="../assets/img/estrellas.png">
                      <p class="precio">$45900 COP<span class="u-pull-right ">$39900 COP</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
      </div>
      <div class="four columns">
              <div class="card">
                  <img src="../assets/img/dino_niña.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Dino - Niño/a</h4>
                      <p>Pijama</p>
                      <img src="../assets/img/estrellas.png">
                      <p class="precio">$55900 COP<span class="u-pull-right ">$49900 COP</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="9">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
      </div>
  </div> <!--.row-->
  <div class="row">
          <div class="four columns">
              <div class="card">
                  <img src="../assets/img/pijamauni.jpg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Unicornio Short - Mujer</h4>
                      <p>Multiusos</p>
                      <img src="../assets/img/estrellas.png">
                      <p class="precio">$50000 COP<span class="u-pull-right ">$45900 COP</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="../assets/img/cartoon.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Cartoon - Mujer</h4>
                          <p>Pijama</p>
                          <img src="../assets/img/estrellas.png">
                          <p class="precio">$45000 COP<span class="u-pull-right ">$39900 COP</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="11">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
          </div>
          <div class="four columns">
                  <div class="card">
                      <img src="../assets/img/oants.jpg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Alien Pants - Mujer</h4>
                          <p>Pantalon</p>
                          <img src="../assets/img/estrellas.png">
                          <p class="precio">$35000 COP<span class="u-pull-right ">$29900 COP</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
          </div>

          
      </div>
      </div> <!--.row-->

     <div>
      <FooterAll></FooterAll>
     </div> 
</div>  


</template>
  

<script>
import FooterAll from '../components/FooterAll.vue'
import SliderAll from '../components/SliderAll.vue'

/* import SliderFotos from '../components/SliderFotos.vue';
import CarouselSlide from '../components/CarouselSlide.vue'; */

  export default {
    data() {
        return {
            slides: [
                'https://nerako.co/wp-content/uploads/2022/10/AGOSTO-PANOLETAS-OCTUBRE-2.webp',
                'https://picsum.photos/id/236/600/350',
                'https://picsum.photos/id/235/600/350',
                'https://picsum.photos/id/234/600/350',
                'https://picsum.photos/id/233/600/350',
                'https://picsum.photos/id/232/600/350',
            ],
            visibleSlide: 0,
        }
    },

  components: {
    /* SliderFotos,
    CarouselSlide, */
    FooterAll,
    SliderAll
  },
    mounted(){
      const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const totalCarrito = document.querySelectorAll('#lista-carrito thead');
const vaciarCarritoBoton = document.querySelector('#vaciar-carrito');
const liProductos = document.querySelector('#lista-cursos ');
//esto es un array
console.log(totalCarrito);
let articuloCarrito = [];
let totalPedido= 0;
cargarEvento();

function cargarEvento(){
    liProductos.addEventListener('click',agregarProductos);
    //para vaciar carrito
    vaciarCarritoBoton.addEventListener('click',vaciarProductos);
    function vaciarProductos(){
        console.log("boton funciona");
        articuloCarrito=[];
        limpiarHtml();
        limpiarHtmlTotal();
    }
    carrito.addEventListener('click', eliminarProducto)
}

function agregarProductos(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement
        leerDatos(productoSeleccionado)

    }
}

function leerDatos(productos){
    const infoProductos={
        imagen: productos.querySelector('img').src,
        titulo: productos.querySelector('h4').textContent,
        precio: productos.querySelector('.precio span').textContent,
        cantidad: 1,
        total: parseInt (productos.querySelector('.precio span').textContent.substr(1,productos.querySelector('.precio span').textContent.length)),
        id: productos.querySelector('a').getAttribute('data-id')
    }
    console.log(infoProductos)
    const existe = articuloCarrito.some(producto => producto.id === infoProductos.id);
    console.log("existe", existe)
    //validar si existe
    if(existe){
        articuloCarrito.map(producto =>{
            if(producto.id === infoProductos.id){
                console.log("cantidad de texto", producto.precio.length);
                producto.cantidad++;
                producto.total = + producto.cantidad *  parseInt(producto.precio.substr(1,producto.precio.length));
            
                return producto;
            }else{
                
                return producto;
            }
        })
           
    }else{
        articuloCarrito = [...articuloCarrito,infoProductos];
    } 
    
    llenarCarritoHTML()
}

function eliminarProducto(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        articuloCarrito = articuloCarrito.filter(curso => curso.id !== cursoId)
        llenarCarritoHTML();
    }
}

function llenarCarritoHTML(){
    //borrar el html del contenedor
    limpiarHtml();
    limpiarHtmlTotal();
    totalPedido = 0;
    articuloCarrito.forEach(producto =>{
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td> <img src=${producto.imagen} width="90" </td>
        <td> ${producto.titulo} </td>
        <td> ${producto.precio} </td>
        <td> ${producto.cantidad} </td>
        <td> ${producto.total} </td>
        <td> <a href= "#" class="borrar-curso" data-id=${producto.id}> x </a> </td>
        `;
        console.log('producto.total',producto.total)
        totalPedido = totalPedido + parseInt(producto.total);
        const filatotal = document.createElement('tr');
        filatotal.innerHTML = `
        <td>Total Pedido:  $${totalPedido}</td>
        `;

        contenedorCarrito.appendChild(fila);
        limpiarHtmlTotal();
        totalCarrito[1].appendChild(filatotal);
    })
   
}


function limpiarHtml(){
    contenedorCarrito.innerHTML='';
}

function limpiarHtmlTotal(){
    totalCarrito[1].innerHTML='';
}
    }
  }
</script>


<style>
html {
  font-size: 62.5%;
}
body {
  background-color: #f5f3f3;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}  
h1 {
  text-align: center;
}
h2 {
  font-size: 3rem;
}
h4 {
  font-size: 16px;
  font-weight: 700;
}
header {
  padding: 20px 0 0 0;
  background: white;
  text-align: center;
}
@media (min-width: 750px) {
  header {
      text-align: left;
  }
}

/* Lista */
.menu{
  text-align: center;
  list-style: none;
  padding: 0;
  background: white;
  width: 90%;
  max-width: 1000px;
  margin: auto;
}
.menu li a{

  text-decoration:none;
  color: black;
  padding: 10px 30px ;
  display: block;
}
.menu li{
 
  display:inline-block;
  text-align: center;
}
.menu li a:hover{
  
  background: lightpink;
}


.borrar-curso {
  background-color: lightblue;
  border-radius: 50%;
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}


.borrar-curso {
  background-color: #e69ded;
  border-radius: 50%;
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

#img-carrito{
  height: 40px;
  width: 40px;
 }

 ul {
  list-style: none;
}
#hero {
  background-image:url(../assets/img/rosa.jpg);

  height: 350px;
  background-size: cover;
}
#encabezado {
  margin: 30px 0;
}
.submenu {
  position: relative;
}

.submenu #carrito{
  display: none;
}
.submenu:hover #carrito{
  display: block;
  position: absolute;
  right:0;

  top:100%;
  z-index: 1;
  background-color: white;
  padding: 20px;
  min-height: 400px;
  min-width: 300px;
}

.vacio {
  padding: 10px;
  background-color: crimson;
  text-align: center;
  border-radius: 10px;
  color: white;
}

.contenido-hero h2{
  font-size: 50px;
}
.contenido-hero {
  margin-top: 80px;
  color: white;
  text-align: center;
  text-shadow: 2px 2px #EC8EF5;

}

.contenido-hero form {
  position: relative;
  margin-bottom: 0;
}
.contenido-hero form #buscador {
  height: 50px;
  margin-bottom: 0;
  
}

.contenido-hero form .submit-buscador {
  position: absolute;
  right:0;
  top:0;
  height: 100%;
  padding: 0;
  display: block;
  text-indent: -9999px;
  width: 50px;
  background-image: url(../assets/img/lupinha.png);
  background-position: right center;
  background-repeat: no-repeat;
  border:none;
}

.contenido-hero form {
  color: black;
  

}

.six-columns { 
  display: flex;
  justify-content: center;
}


.barra {
  padding: 20px 0;
  background: #741d51; /* Old browsers */
  background: -moz-linear-gradient(left, #741d51 0%, #e44e52 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #741d51 0%,#e44e52 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #e69ded 0%,#ebc0ef 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#741d51', endColorstr='#e44e52',GradientType=1 ); /* IE6-9 */
}

.barra p {
  margin:0;
  color: white;
}
.icono {
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 60px;
  background-size: 30px;
  margin-bottom: 40px;
  text-align: center;
}
@media (min-width: 750px) {
  .icono {
      margin-bottom:0;
  }
}

#lista-cursos h1{
  
  color: #e69ded;
}

.icono1 {
  background-image: url(../assets/img/women.png);    
}
.icono2 {
  background-image: url(../assets/img/inter2.png);

}
.icono3 {
  background-image: url(../assets/img/minipijama.png);
}

#lista-cursos .row {
  margin-bottom:20px;
}
.agregar-carrito {
  margin:10px 0;
}
.card{
  transition: transform .5s;
}

.card:hover{
  transform: scale(1.12)
}
.card {
  text-align: center;
  border: 1px solid #e1e1e1;
  background: white;
}

@media (min-width: 550px) {
  .card {
      text-align: left;
  }
}
.info-card  {
  padding: 10px 20px;
}

.info-card p, 
.card h4 {
  margin-bottom: 5px;
}
.info-card .precio {
  text-decoration: line-through;
  font-size: 18px;
  margin-top: 10px;
}
.info-card .precio span {
  font-weight: 700;
  font-size: 22px;
}


.footer {
  margin-top: 40px;
  border-top:1px solid #e69ded;
  padding-top: 40px; 
  padding: 20px 0;
  background: #741d51; /* Old browsers */
  background: -moz-linear-gradient(left, #741d51 0%, #e44e52 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #741d51 0%,#e44e52 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #e69ded 0%,#ebc0ef 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#741d51', endColorstr='#e44e52',GradientType=1 ); /* IE6-9 */  
}
.footer .menu a{
display: block;
margin-bottom: 10px;
text-decoration: none;
}

.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box; }
.column,
.columns {
  width: 100%;
  float: left;
  box-sizing: border-box; }

/* For devices larger than 400px */
@media (min-width: 400px) {
  .container {
    width: 85%;
    padding: 0; }
}

/* For devices larger than 550px */
@media (min-width: 550px) {
  .container {
    width: 80%; }
  .column,
  .columns {
    margin-left: 4%; }
  .column:first-child,
  .columns:first-child {
    margin-left: 0; }

  .one.column,
  .one.columns                    { width: 4.66666666667%; }
  .two.columns                    { width: 13.3333333333%; }
  .three.columns                  { width: 22%;            }
  .four.columns                   { width: 30.6666666667%; }
  .five.columns                   { width: 39.3333333333%; }
  .six.columns                    { width: 48%;            }
  .seven.columns                  { width: 56.6666666667%; }
  .eight.columns                  { width: 65.3333333333%; }
  .nine.columns                   { width: 74.0%;          }
  .ten.columns                    { width: 82.6666666667%; }
  .eleven.columns                 { width: 91.3333333333%; }
  .twelve.columns                 { width: 100%; margin-left: 0; }

  .one-third.column               { width: 30.6666666667%; }
  .two-thirds.column              { width: 65.3333333333%; }

  .one-half.column                { width: 48%; }

  /* Offsets */
  .offset-by-one.column,
  .offset-by-one.columns          { margin-left: 8.66666666667%; }
  .offset-by-two.column,
  .offset-by-two.columns          { margin-left: 17.3333333333%; }
  .offset-by-three.column,
  .offset-by-three.columns        { margin-left: 26%;            }
  .offset-by-four.column,
  .offset-by-four.columns         { margin-left: 34.6666666667%; }
  .offset-by-five.column,
  .offset-by-five.columns         { margin-left: 43.3333333333%; }
  .offset-by-six.column,
  .offset-by-six.columns          { margin-left: 52%;            }
  .offset-by-seven.column,
  .offset-by-seven.columns        { margin-left: 60.6666666667%; }
  .offset-by-eight.column,
  .offset-by-eight.columns        { margin-left: 69.3333333333%; }
  .offset-by-nine.column,
  .offset-by-nine.columns         { margin-left: 78.0%;          }
  .offset-by-ten.column,
  .offset-by-ten.columns          { margin-left: 86.6666666667%; }
  .offset-by-eleven.column,
  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }

  .offset-by-one-third.column,
  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }
  .offset-by-two-thirds.column,
  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }

  .offset-by-one-half.column,
  .offset-by-one-half.columns     { margin-left: 52%; }

}


/* Base Styles
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* NOTE
html is set to 62.5% so that all the REM measurements throughout Skeleton
are based on 10px sizing. So basically 1.5rem = 15px :) */
html {
  font-size: 62.5%; }
body {
  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */
  line-height: 1.6;
  font-weight: 400;
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #222; }


/* Typography
–––––––––––––––––––––––––––––––––––––––––––––––––– */
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 300; }
h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

/* Larger than phablet */
@media (min-width: 550px) {
  h1 { font-size: 5.0rem; }
  h2 { font-size: 4.2rem; }
  h3 { font-size: 3.6rem; }
  h4 { font-size: 3.0rem; }
  h5 { font-size: 2.4rem; }
  h6 { font-size: 1.5rem; }
}

p {
  margin-top: 0; }


/* Links
–––––––––––––––––––––––––––––––––––––––––––––––––– */
a {
  color: white
  ; }
a:hover {
  color: #CB11DD; }


/* Buttons
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.button,
button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box; }
.button:hover,
button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:focus,
button:focus,
input[type="submit"]:focus,
input[type="reset"]:focus,
input[type="button"]:focus {
  color: #333;
  border-color: #888;
  outline: 0; }
.button.button-primary,
button.button-primary,
input[type="submit"].button-primary,
input[type="reset"].button-primary,
input[type="button"].button-primary {
  color: #FFF;
  background-color: #e69ded;
  border-color: #e69ded; }
.button.button-primary:hover,
button.button-primary:hover,
input[type="submit"].button-primary:hover,
input[type="reset"].button-primary:hover,
input[type="button"].button-primary:hover,
.button.button-primary:focus,
button.button-primary:focus,
input[type="submit"].button-primary:focus,
input[type="reset"].button-primary:focus,
input[type="button"].button-primary:focus {
  color: #FFF;
  background-color: #E87DF2;
  border-color: #E87DF2; }


/* Forms
–––––––––––––––––––––––––––––––––––––––––––––––––– */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #fff;
  border: 1px solid #D1D1D1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box; }
/* Removes awkward default styles on some inputs for iOS */
input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none; }
textarea {
  min-height: 65px;
  padding-top: 6px;
  padding-bottom: 6px; }
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="text"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus {
  border: 1px solid #33C3F0;
  outline: 0; }
label,
legend {
  display: block;
  margin-bottom: .5rem;
  font-weight: 600; }
fieldset {
  padding: 0;
  border-width: 0; }
input[type="checkbox"],
input[type="radio"] {
  display: inline; }
label > .label-body {
  display: inline-block;
  margin-left: .5rem;
  font-weight: normal; }


/* Lists
–––––––––––––––––––––––––––––––––––––––––––––––––– */
ul {
  list-style: circle inside; }
ol {
  list-style: decimal inside; }
ol, ul {
  padding-left: 0;
  margin-top: 0; }
ul ul,
ul ol,
ol ol,
ol ul {
  margin: 1.5rem 0 1.5rem 3rem;
  font-size: 90%; }
li {
  margin-bottom: 1rem; }


/* Code
–––––––––––––––––––––––––––––––––––––––––––––––––– */
code {
  padding: .2rem .5rem;
  margin: 0 .2rem;
  font-size: 90%;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 4px; }
pre > code {
  display: block;
  padding: 1rem 1.5rem;
  white-space: pre; }


/* Tables
–––––––––––––––––––––––––––––––––––––––––––––––––– */
th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1; }
th:first-child,
td:first-child {
  padding-left: 0; }
th:last-child,
td:last-child {
  padding-right: 0; }


/* Spacing
–––––––––––––––––––––––––––––––––––––––––––––––––– */
button,
.button {
  margin-bottom: 1rem; }
input,
textarea,
select,
fieldset {
  margin-bottom: 1.5rem; }
pre,
blockquote,
dl,
figure,
table,
p,
ul,
ol,
form {
  margin-bottom: 2.5rem; }


/* Utilities
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.u-full-width {
  width: 100%;
  box-sizing: border-box; }
.u-max-full-width {
  max-width: 100%;
  box-sizing: border-box; }
.u-pull-right {
  float: right; }
.u-pull-left {
  float: left; }


/* Misc
–––––––––––––––––––––––––––––––––––––––––––––––––– */
hr {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  border-width: 0;
  border-top: 1px solid #E1E1E1; }


/* Clearing
–––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Self Clearing Goodness */
.container:after,
.row:after,
.u-cf {
  content: "";
  display: table;
  clear: both; }


/* Media Queries
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/*
Note: The best way to structure the use of media queries is to create the queries
near the relevant code. For example, if you wanted to change the styles for buttons
on small devices, paste the mobile query code up in the buttons section and style it
there.
*/


/* Larger than mobile */
@media (min-width: 400px) {}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {}

/* Larger than tablet */
@media (min-width: 750px) {}

/* Larger than desktop */
@media (min-width: 1000px) {}

/* Larger than Desktop HD */
@media (min-width: 1200px) {}

/*! normalize.css v3.0.2 | MIT License | git.io/normalize */

/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */

 html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove default margin.
 */

body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */

/**
 * Correct `block` display not defined for any HTML5 element in IE 8/9.
 * Correct `block` display not defined for `details` or `summary` in IE 10/11
 * and Firefox.
 * Correct `block` display not defined for `main` in IE 11.
 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

/**
 * 1. Correct `inline-block` display not defined in IE 8/9.
 * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
 */

audio,
canvas,
progress,
video {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address `[hidden]` styling not present in IE 8/9/10.
 * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.
 */

[hidden],
template {
  display: none;
}

/* Links
   ========================================================================== */

/**
 * Remove the gray background color from active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */

abbr[title] {
  border-bottom: 1px dotted;
}

/**
 * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
 */

b,
strong {
  font-weight: bold;
}

/**
 * Address styling not present in Safari and Chrome.
 */

dfn {
  font-style: italic;
}

/**
 * Address variable `h1` font-size and margin within `section` and `article`
 * contexts in Firefox 4+, Safari, and Chrome.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Address styling not present in IE 8/9.
 */

mark {
  background: #ff0;
  color: #000;
}

/**
 * Address inconsistent and variable font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove border when inside `a` element in IE 8/9/10.
 */

img {
  border: 0;
}

/**
 * Correct overflow not hidden in IE 9/10/11.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */

/**
 * Address margin not present in IE 8/9 and Safari.
 */

figure {
  margin: 1em 40px;
}

/**
 * Address differences between Firefox and other browsers.
 */

hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

/**
 * Contain overflow in all browsers.
 */

pre {
  overflow: auto;
}

/**
 * Address odd `em`-unit font size rendering in all browsers.
 */

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
   ========================================================================== */

/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of `select`, unless a `border` property is set.
 */

/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */

button,
input,
optgroup,
select,
textarea {
  color: inherit; /* 1 */
  font: inherit; /* 2 */
  margin: 0; /* 3 */
}

/**
 * Address `overflow` set to `hidden` in IE 8/9/10/11.
 */

button {
  overflow: visible;
}

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct `select` style inheritance in Firefox.
 */

button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */

input {
  line-height: normal;
}

/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to `content-box` in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * `font-size` values of the `input`, it causes the cursor style of the
 * decrement button to change from `default` to `text`.
 */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Address `appearance` set to `searchfield` in Safari and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari and Chrome
 *    (include `-moz` to future-proof).
 */

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and `textfield` appearance).
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct `color` not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */

legend {
  border: 0; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */

textarea {
  overflow: auto;
}

/**
 * Don't inherit the `font-weight` (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */

optgroup {
  font-weight: bold;
}

/* Tables
   ========================================================================== */

/**
 * Remove most spacing between table cells.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

</style>