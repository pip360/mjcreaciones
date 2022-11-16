<template>
<div ><!-- //INICIO -->


  <header id="header" class="header">
    <div class="container">
        <div class="row">
            <div class="four columns">
                <img src="../assets/img/logo.jpg.png" id="logo">
            </div>
            <div class="two columns u-pull-right">
                <ul>
                    <li class="submenu">
                            <img src="../assets/img/cart.png" id="img-carrito">
                            <div id="carrito">
                                    <table id="lista-carrito" class="u-full-width">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                        <thead>
                                            <tr>
                                                <th>Precio Total</th>
                                            </tr>
                                        </thead>
                                    </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                            </div>
                    </li>
                </ul>
            </div>
        </div> 
    </div>
    </header>

  <div id="hero">
    <div class="container">
        <div class="row">
                <div class="six columns">
                    <div class="contenido-hero">
                            <h2>¿Que estas buscando?</h2>
                            <form action="#" id="busqueda" method="post" class="formulario">
                                <input class="u-full-width" type="text" placeholder="¿Calido o fresco?, busca aquí tu prenda..." id="buscador">
                                <input type="submit" id="submit-buscador" class="submit-buscador">
                            </form>
                    </div>
                </div>
        </div> 
    </div>
</div>


  <div class="barra">
    <div class="container">
        <div class="row">
                <div class="four columns icono icono1">
                    <p>1.000 tipos de prendas femeninas <br>
                    Explora  los temas más recientes</p>
                </div>
                <div class="four columns icono icono2">
                    <p>Has tu propia prenda<br>
                    Aprende con distintos estilos</p>
                </div>
                <div class="four columns icono icono3">
                    <p>Acceso de por vida <br>
                    Realiza tus pedidos sin limite y a buen precio</p>
                </div>
        </div>
    </div>

</div>

  <div id="lista-cursos" class="container">
    <h1 id="encabezado" class="encabezado">CATALOGO</h1>
    <h2 id="edicion">EDICIÓN NAVIDEÑA 2022</h2>
    <div class="row">
        <div class="four columns">
            <div class="card">
                <img src="../assets/img/christmas-kid.jpg" class="imagen-curso u-full-width">
                <div class="info-card">
                    <h4>Merry Christmas</h4>
                    <p>Two Babies</p>
                    <img src="../assets/img/estrellas.png">
                    <p class="precio">$90  <span class="u-pull-right ">$30</span></p>
                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                </div>
            </div> <!--.card-->
        </div>
        <div class="four columns">
                <div class="card">
                    <img src="../assets/img/dino_niña.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Merry Christmas</h4>
                        <p>Leñadora</p>
                        <img src="../assets/img/estrellas.png">
                        <p class="precio">$120  <span class="u-pull-right ">$40</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
                    </div>
                </div>
        </div>
        <div class="four columns">
                <div class="card">
                    <img src="../assets/img/comegalletas.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Merry Christmas</h4>
                        <p>Red gift</p>
                        <img src="../assets/img/estrellas.png">
                        <p class="precio">$100  <span class="u-pull-right ">$30</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
        </div>

    </div> <!--.row-->

    <h2 id="edicion">DESTACADOS</h2>
    <div class="row">
        <div class="four columns">
            <div class="card">
                <img src="../assets/img/fnddes.jpg" class="imagen-curso u-full-width">
                <div class="info-card">
                    <h4>4 Estaciones</h4>
                    <p>Primavera</p>
                    <img src="../assets/img/estrellas.png">
                    <p class="precio">$90 <span class="u-pull-right ">$75</span></p>
                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
                </div>
            </div> <!--.card-->
        </div>
        <div class="four columns">
                <div class="card">
                    <img src="../assets/img/fndpijama.webp" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>4 Estaciones</h4>
                        <p>Otoño</p>
                        <img src="../assets/img/estrellas.png">
                        <p class="precio">$80 <span class="u-pull-right ">$55</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
        </div>
        <div class="four columns">
                <div class="card">
                    <img src="../assets/img/fond.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>4 Estaciones</h4>
                        <p>Verano</p> 
                        <img src="../assets/img/estrellas.png">
                        <p class="precio">$100  <span class="u-pull-right ">90</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
        </div>
    </div> <!--.row-->
    <h2 id="edicion">MÁS VENDIDOS</h2>
    <div class="row">
        <div class="four columns">
            <div class="card">
                <img src="../assets/img/fond2.jpg" class="imagen-curso u-full-width">
                <div class="info-card">
                    <h4>Community</h4>
                    <p>Pink Cream</p>
                    <img src="../assets/img/estrellas.png">
                    <p class="precio">$45  <span class="u-pull-right ">$30</span></p>
                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
                </div>
            </div> <!--.card-->
        </div>
        <div class="four columns">
                <div class="card">
                    <img src="../assets/img/fond3.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Deep</h4>
                        <p>Blue fresh</p>
                        <img src="../assets/img/estrellas.png">
                        <p class="precio">$100 <span class="u-pull-right ">$80</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
        </div>
        <div class="four columns">
                <div class="card">
                    <img src="../assets/img/fondmj.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Aquamarine</h4>
                        <p>Lapizlazuli</p>
                        <img src="../assets/img/estrellas.png">
                        <p class="precio">$90 <span class="u-pull-right ">$75</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="9">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
        </div>
    </div> <!--.row-->
    <h2 id="edicion">MES PASADO</h2>
    <div class="row">
            <div class="four columns">
                <div class="card">
                    <img src="../assets/img/sandias_mujer.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Julio</h4>
                            <p>Leñadora</p>
                        <img src="../assets/img/estrellas.png">
                        <p class="precio">$200  <span class="u-pull-right ">$100</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/img/popular6.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Agosto</h4>
                            <p>Young girl</p>
                            <img src="../assets/img/estrellas.png">
                            <p class="precio">$90  <span class="u-pull-right ">$50</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="11">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/img/fondo_pijamas.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Septiembre</h4>
                            <p>Black Starts</p>
                            <img src="../assets/img/estrellas.png">
                            <p class="precio">$200  <span class="u-pull-right ">$50</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
        </div> <!--.row-->
</div>  

</div><!-- //CIERRE -->
</template>
  

<script>
  export default {
    data(){
        
    }
  }
</script>


<style>
html {
  font-size: 62.5%;
}
body {
  background-color: #00c5f1;
  font-family: 'Times New Roman', Times, serif;
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
  background: rgb(201, 86, 255);
  text-align: center;
}
@media (min-width: 750px) {
  header {
      text-align: left;
  }
}
.borrar-curso {
  background-color: red;
  border-radius: 50%;
  padding: 5px 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

ul {
  list-style: none;
}
#hero {
  background-image:url(../assets/img/guitar-2886886.jpg);
  background-size: cover;
  height: 30rem;
}
#encabezado {
  margin: 30px 0;
}
#edicion{
  text-align: center;
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
.contenido-hero {
  margin-top: 80px;
  color: black;
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
  background-image: url(../assets/img/lupa.png);
  background-position: right center;
  background-repeat: no-repeat;
  border:none;
}


.barra {
  padding: 20px 0;
  background: #ff049b; /* Old browsers */
  background: -moz-linear-gradient(left, #ff0099 0%, #00c5f1 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #ff0099 0%,#00c5f1 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #ff0099 0%,#00c5f1 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
.icono1 {
  background-image: url(../assets/img/pijama.png);
}
.icono2 {
  background-image: url(../assets/img/maniqui.png);
}
.icono3 {
  background-image: url(../assets/img/orden.png);
}
.imagen-curso {
  height: 250px;
  width: 300px;
}
#lista-cursos .row {
  margin-bottom:20px;
}
.agregar-carrito {
  margin:10px 0;
}

.card {
  text-align: center;
  border: 1px solid #e1e1e1;
  background: white;
  transition: transform .5s;
  width: 100%;
  max-width: 400px;
  margin: 1rem;
  padding: 30px;
  display:inline-block;
  margin: 2rem auto ;
  text-decoration:none;
}


.menu li{
 
  display:inline-block;
  text-align: center;
}

.card:hover{
  transform: scale(1.12);
  
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



</style>