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
        </ion-col>
        <ion-col>
          <img class="h-100" :src=producto.img_url alt="">
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-card-content>
            <ion-card-subtitle>{{producto.description}}</ion-card-subtitle>
          </ion-card-content>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button color="primary" expand="block" @click="addCart()">Añadir <ion-icon name="cart-outline"></ion-icon></ion-button>
        </ion-col>
        <ion-col>
          <ion-button color="danger" expand="block" @click="deleteProduct()">Eliminar</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonCol, IonRow, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'
import { Dialog } from '@capacitor/dialog';

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
    IonRow,
    IonButton
  },

  props:[
    'producto'
  ],

  methods:{
    deleteProduct(){
      const config = {
        headers: { 
          'Authorization': `Bearer 1|PwNKEhKC0GDPVzdpOkSYdOvTg2oia1CpRCKClNoa`,
          'Content-Type': 'multipart/form-data',
          'enctype': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'applicatioon/json'
        }
      };
      axios.delete('https://sopadefideos.es/api/products/delete/'+this.producto.id, config).then((response) => {
        console.log(response);
        location.reload();
      })
    },

    addCart(){
      const value = Dialog.prompt({
        title: 'Hello',
        message: `¿Cuantos productos desea añadir?`,
        inputPlaceholder: '2',
        okButtonTitle: 'Añadir al carrito',
        cancelButtonTitle: 'Cancelar'
      });

      value.then((data) =>{
        console.log(data.value);
        if(data.value <= this.producto.stock){
          var cantidad = data.value
          var product = JSON.stringify(this.producto);
          var itererator = 1;
          this.$router.push({
            name: "Carrito", //use name for router push
            params: { cantidad, product, itererator }
          });
        }else{
          Dialog.alert({
            title: 'Error en el Stock',
            message: 'No disponemos de esa cantidad de producto para ofrecerle.',
          });
        }
      })
    }
  }


});
</script>
