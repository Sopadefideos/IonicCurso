<template>
  <ion-page>
    <FabButtonCart/>
    <ion-toolbar>
    </ion-toolbar>
    <ion-content>
      <ProductCard v-for="(item) in productos" :key=item :producto=item />
  </ion-content>
  <NavBar @click="reRender()"/>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonToolbar, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import NavBar from './partials/NavBar.vue'
import ProductCard from './partials/ProductCard.vue'
import FabButtonCart from './partials/FabButtonCart.vue'
import axios from 'axios'

export default defineComponent({

  name: 'MujerPage',

  components: {
    IonPage,
    IonContent,
    NavBar,
    ProductCard,
    IonToolbar,
    FabButtonCart
  },

  data(){
    return {
      index: 1,
      productos : []
    };
    
  },

  beforeCreate(){
    const config = {
        headers: { Authorization: `Bearer 1|PwNKEhKC0GDPVzdpOkSYdOvTg2oia1CpRCKClNoa` }
    };
    axios.get('https://sopadefideos.es/api/products/women', config).then((response) => {
      this.productos = response.data.data;
      console.log(this.productos);
    });
  }
  

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
