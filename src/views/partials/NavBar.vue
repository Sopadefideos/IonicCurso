<template>
  <ion-footer>
    <ion-toolbar>
      <ion-grid>
        <ion-row>
          <ion-col id="hombre" router-link="/hombre" @click="changeColor(1)" class="text-center">
            <ion-icon style="font-size:8vw" name="male-outline"></ion-icon>
          </ion-col>
          <ion-col id="home" router-link="/home" @click="changeColor(2)" class="text-center">
            <ion-icon style="font-size:8vw" name="bag-add"></ion-icon>
          </ion-col>
          <ion-col id="mujer" router-link="/mujer" @click="changeColor(3)" class="text-center">
            <ion-icon style="font-size:8vw" name="female-outline"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { IonFooter, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/vue';

export default{
  name: 'FormCreateProduct',
  components: {
    IonFooter,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol
  },
  

  methods:{
    changeColor(component: number){
      var hombre = document.getElementById('hombre')!;
      var home = document.getElementById('home')!;
      var mujer = document.getElementById('mujer')!;

      if(hombre != null || home != null || mujer != null){
        hombre.style.color = "black";
        home.style.color = "black";
        mujer.style.color = "black";
        if(component == 1){
          hombre.style.color = "blue";
        }else if(component == 2){
          home.style.color = "blue";
        }else{
          mujer.style.color = "blue";
        }
      }
    }
  }

};
</script>
