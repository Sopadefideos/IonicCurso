<template>
  <ion-page>
    <ion-toolbar class="text-center">
      <ion-title router-link="/home">Home</ion-title>
    </ion-toolbar>

    <ion-content>
      <h1>Hombre</h1>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({

  name: 'HombrePage',

  components: {
    IonPage,
    IonToolbar,
    IonContent,
    IonTitle
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
