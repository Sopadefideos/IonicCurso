<template>
  <ion-page>
    <!--
    <ion-toolbar class="text-center">
      <router-link :to="{ name: 'Hombre' }">
        <ion-title>Hombre</ion-title>
      </router-link>
        <ion-title router-link="/hombre">Ir al home1</ion-title>
    </ion-toolbar>
    -->
    <ion-toolbar>
    </ion-toolbar>

    <ion-content>
      <FormCreateProduct/>
  </ion-content>
  <NavBar @click="reRender()"/>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import NavBar from './partials/NavBar.vue';
import FormCreateProduct from './partials/FormCreateProduct.vue';
import axios from 'axios'

export default defineComponent({

  name: 'HomePage',

  components: {
    IonPage,
    IonContent,
    NavBar,
    FormCreateProduct
  },

  mounted(){
    const config = {
        headers: { Authorization: `Bearer 1|PwNKEhKC0GDPVzdpOkSYdOvTg2oia1CpRCKClNoa` }
    };
    
    axios.get('https://sopadefideos.es/api/products/men', config).then((response) =>{
      this.products = response.data.data;
      console.log(this.products);
    });

  },
  
 methods: {
    reRender(){
      this.index++
    },

    async takePicture() {
      let image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Uri
      });
      console.log(image)
    },

    alert(){
      window.alert('Hola clase');
    },

    async getPosition() {
      let position = await Geolocation.getCurrentPosition();

      let point = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };

      this.point = point;
      console.log(this.point);
    }
  },

  data() {
    return {
      index: 1,
      contenidoBotonCamara: 'Camara',
      contenidoBotonUbicacion: 'Ubicacion',
      point: {
        lat: 0,
        lon: 0
      },
      products: []
    };
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
