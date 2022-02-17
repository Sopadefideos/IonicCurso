<template>
  <ion-page>
    <ion-toolbar class="text-center">
      <router-link :to="{ name: 'Hombre' }">
        <ion-title>Hombre</ion-title>
      </router-link>
        <!--<ion-title router-link="/hombre">Ir al home1</ion-title>-->
    </ion-toolbar>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="2">
          </ion-col>
          <ion-col>
            <ion-button style="width:100%">
              {{ contenidoBotonCamara }}
            </ion-button>
          </ion-col>
          <ion-col size="2">
            
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="2">
          </ion-col>
          <ion-col>
            <ion-button style="width:100%" @click="getPosition()">
              {{ contenidoBotonUbicacion }}
            </ion-button>
          </ion-col>
          <ion-col size="2">
            
          </ion-col>
        </ion-row>

        <ion-row v-if="point.lat != 0">
          <ion-col size="1">
            
          </ion-col>
          <ion-col>
            {{ point.lat }}
          </ion-col>
          <ion-col>
            {{ point.lon }}
          </ion-col>
          <ion-col size="1">
            
          </ion-col>
        </ion-row>

      </ion-grid> 
      
      <div id="game-board">
        <canvas id="my-canvas"></canvas>
      </div>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

export default defineComponent({

  name: 'HomePage',

  components: {
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
  },
  
 methods: {
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
      contenidoBotonCamara: 'Camara',
      contenidoBotonUbicacion: 'Ubicacion',
      point: {
        lat: 0,
        lon: 0
      }
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
