<template>
  <ion-footer>
    <ion-toolbar>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="stacked">Nombre</ion-label>
              <ion-input type="text" v-model="form.name"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="stacked">Descripcion</ion-label>
              <ion-input type="text" v-model="form.description"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="stacked">Precio</ion-label>
              <ion-input type="text" v-model="form.price"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="stacked">Stock</ion-label>
              <ion-input type="text" v-model="form.stock"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label position="stacked">Genero</ion-label>
              <ion-select v-model="form.gender">
                <ion-select-option value="m">Hombre</ion-select-option>
                <ion-select-option value="w">Mujer</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <div id="updateComponentPhoto">
              <div id="componentPhoto">
                <ion-item>
                  <ion-label position="stacked" class="mb-2">Foto</ion-label>
                  <button v-if="foto == true" class="p-1 bg-primary rounded" style="width:100%" @click="takePicture()">
                    <ion-icon style="font-size:8vw" name="camera-outline"></ion-icon>
                  </button>
                  <button v-if="foto == false" class="p-1 bg-danger rounded" style="width:100%" @click="deletePicture()">
                    <ion-icon style="font-size:8vw" name="trash-outline"></ion-icon>
                  </button>
                </ion-item>
              </div>
            </div>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <div id="updateComponentSubmit">
              <div id="componentSubmit">
                <button type="submit" v-if="submit == true" class="p-1 bg-primary rounded" style="width:100%" @click="sendData()">
                  Enviar
                </button>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { IonFooter, IonToolbar, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineComponent } from 'vue';
import { nextTick } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'NavBar',
  components: {
    IonFooter,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption
  },

  methods:{
    async takePicture() {
      let image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.Base64
      });
      this.foto = false
      this.submit = true;
      console.log(image);
      this.form.img = String(image.base64String);
      console.log(this.form.img);
    },

    async deletePicture(){
      this.foto = true;
      console.log(this.form);
      this.forceRerenderPhoto();
      this.forceRerenderSubmit();
    },

    forceRerenderPhoto() {
        // Removing my-component from the DOM
        var component = document.getElementById('componentPhoto')!;
        document.getElementById('componentPhoto')!.remove();
        this.foto = false;

        nextTick(() => {
          var divComponent = document.getElementById('updateComponentPhoto');
          divComponent!.appendChild(component);
          console.log(divComponent);
          this.foto = true;
        });
    },

    forceRerenderSubmit() {
        // Removing my-component from the DOM
        var component = document.getElementById('componentSubmit')!;
        document.getElementById('componentSubmit')!.remove();
        this.submit = false;

        nextTick(() => {
          var divComponent = document.getElementById('updateComponentSubmit');
          divComponent!.appendChild(component);
          console.log(divComponent);
          this.submit = true;
        });
    },

    async sendData(){
      console.log(this.form.img);
      var data = new FormData
      data.append('name', this.form.name);
      data.append('description', this.form.description);
      data.append('price', this.form.price);
      data.append('stock', this.form.stock);
      data.append('gender', this.form.gender);
      //data.append('img', this.form.img);
      const config = {
        headers: { 
          Authorization: `Bearer 1|PwNKEhKC0GDPVzdpOkSYdOvTg2oia1CpRCKClNoa`,
          //'Content-Type': 'multipart/form-data',
          'enctype': 'multipart/form-data',
          }
      };
    
      axios.post('https://sopadefideos.es/api/products/create', this.form, config).then((response) =>{
        console.log(response);
      });
    }
  },

  data: function() {
    return {
      form: {
        name: "",
        description: "",
        price: "",
        stock: "",
        gender: "",
        img: ""
      },
      foto: true,
      submit: false
    };
  },

});
</script>
