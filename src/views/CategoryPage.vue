<template>
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="5">
     <i class="fa-solid fa-arrow-left-long"></i>  
      </ion-col>
   <ion-col size="6">
       Category 
      </ion-col>
    </ion-row>
  </ion-grid>

   <!-- Default Searchbar -->

        <ion-list>
          <ion-item>Amsterdam <i class="fa-thin fa-dumbbell"></i></ion-item>
          <ion-item>Bogota</ion-item>
          <ion-item>Buenos Aires</ion-item>
          <ion-item>Cairo</ion-item>
          <ion-item>Dhaka</ion-item>
          <ion-item>Edinburgh</ion-item>
          <ion-item>Geneva</ion-item>
          <ion-item>Genoa</ion-item>
          <ion-item>Glasgow</ion-item>
          <ion-item>Hanoi</ion-item>
      
        </ion-list>
</ion-content>


</template>

<script>
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCol, IonGrid, IonRow }
});
</script>