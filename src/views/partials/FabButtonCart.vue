<template>
  <ion-fab vertical="top" horizontal="start">
      <ion-fab-button>
        <ion-icon name="cart"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="end">
        <ion-fab-button router-link="/carrito"><ion-icon name="cart"></ion-icon></ion-fab-button>
      </ion-fab-list>
    </ion-fab>
</template>

<script lang="ts">
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/vue';

export default{
  name: 'FabButtonCart',
  components: {
    IonFab, IonFabButton, IonFabList, IonIcon
  },
};
</script>
