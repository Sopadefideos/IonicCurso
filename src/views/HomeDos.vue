<template>
  <ion-page>
    <ion-toolbar class="text-center">
      <router-link :to="{ name: 'Home' }">
        <ion-title>Ir al home1</ion-title>
      </router-link>
    </ion-toolbar>

    <ion-content>
      <ion-grid>
        <ion-row v-for="index in 2" :key="index">
          <ion-col size="2">

          </ion-col>
          <ion-col>
            <h1> HOLAAAA </h1>
          </ion-col>
          <ion-col size="2">
            
          </ion-col>
        </ion-row>
      </ion-grid>
      
      <div id="game-board">
        <canvas id="my-canvas"></canvas>
      </div>
      <h1>Main Content</h1>
      <div>
        <h1>Fixed Content</h1>
      </div>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonPage, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeDos',
  components: {
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
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
