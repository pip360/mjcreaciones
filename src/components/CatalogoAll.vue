<template>
  <div><!-- //INICIO -->
    <h1 id="encabezado" class="encabezado">CATALOGO</h1>
    <div class="row">
      <div class="four columns">
          <div class="card">
              <img src="img/christmas-kid.jpg" class="imagen-curso u-full-width">
              <div class="info-card">
                  <h4>Merry Christmas</h4>
                  <p>Two Babies</p>
                  <img src="img/estrellas.png">
                  <p class="precio">$90  <span class="u-pull-right ">$30</span></p>
                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
              </div>
          </div>
      </div>
      <div class="four columns">
        <div class="card">
            <img src="img/descarga.jpg" class="imagen-curso u-full-width">
            <div class="info-card">
                <h4>Merry Christmas</h4>
                <p>Leñadora</p>
                <img src="img/estrellas.png">
                <p class="precio">$120  <span class="u-pull-right ">$40</span></p>
                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
            </div>
        </div>
    </div>
        <div class="four columns">
          <div class="card">
              <img src="img/b167eab17fa2627c688554ebc9bf74f6.jpg" class="imagen-curso u-full-width">
              <div class="info-card">
                  <h4>Merry Christmas</h4>
                  <p>Red gift</p>
                  <img src="img/estrellas.png">
                  <p class="precio">$100  <span class="u-pull-right ">$30</span></p>
                  <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
              </div>
          </div> 
      </div>
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
.card {
  text-align: center;
  border: 1px solid #e1e1e1;
  background: white;
  width: 300px;
  transition: transform .5s;

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