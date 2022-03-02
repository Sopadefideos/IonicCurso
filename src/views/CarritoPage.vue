<template>
  <ion-page>
    <ion-toolbar>
    </ion-toolbar>
    <ion-content>
      <ProductCard v-for="(item) in productos" :key=item :producto=item />
  </ion-content>
  <NavBar @click="reRender()"/>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import NavBar from './partials/NavBar.vue'
import ProductCard from './partials/ProductCard.vue'
import axios from 'axios'

export default defineComponent({

  name: 'CarritoPage',

  components: {
    IonPage,
    IonContent,
    NavBar,
    ProductCard,
    IonToolbar,
  },

  data(){
    return {
      index: 1,
      productos: []
    };
    
  },

  beforeCreate(){
    if (typeof this.$route.params.product !== 'undefined'){
      var stringJson = String(this.$route.params.product);
      var productJson = JSON.parse(stringJson);

      var product = {
        'cantidad': this.$route.params.cantidad,
        'product' : productJson,
      }

      //this.productos.push(product);

      console.log(product);
    }
  },
  

});
</script>


<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
