<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card-header>
            <ion-card-title>{{producto.name}}</ion-card-title>
            <ion-row>
              <ion-col size="5" class="pr-0">
                <ion-card-subtitle>{{producto.price}} €</ion-card-subtitle>
              </ion-col>
              <ion-col>
                <ion-card-subtitle>stock:{{producto.stock}}</ion-card-subtitle>
              </ion-col>
            </ion-row>
            
          </ion-card-header>

          <ion-card-content>
            <ion-card-subtitle>{{producto.description}}</ion-card-subtitle>
          </ion-card-content>
        </ion-col>
        <ion-col>
          <img class="h-100" :src=producto.img_url alt="">
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="primary" expand="block">Añadir <ion-icon name="cart-outline"></ion-icon></ion-button>
        </ion-col>
        <ion-col>
          <ion-button color="danger" expand="block" @click="deleteProduct()">Eliminar</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'ProductCard',
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonCol,
    IonRow
  },

  props:[
    'producto'
  ],

  methods:{
    deleteProduct(){
      const config = {
        headers: { Authorization: `Bearer 1|PwNKEhKC0GDPVzdpOkSYdOvTg2oia1CpRCKClNoa` }
      };
      axios.delete('https://sopadefideos.es/api/products/delete/'+this.producto.id, config).then((response) => {
        console.log(response);
        location.reload();
      })
    }
  }


});
</script>
