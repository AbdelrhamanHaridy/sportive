<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="5">
          <i class="fa-solid fa-arrow-left-long"></i>
        </ion-col>
        <ion-col size="6"> Category </ion-col>
      </ion-row>
    </ion-grid>

    <!-- Default Searchbar -->

    <ion-list>
      <ion-item lines="none">
       <i class="fa-solid fa-dumbbell"></i>
        <div class="content">
          <span>Gym</span>
          <p>06 empty place</p>

          </div>
      <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </ion-item
      > 
      <ion-item lines="none">
        <i class="fa-solid fa-person-swimming"></i>
        <div class="content">
          <span>Swimming</span>
          <p>13 empty place</p>
          </div>
      <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </ion-item
      > 
      <ion-item lines="none">
        <i class="fa-regular fa-futbol"></i>
        <div class="content">
          <span>Football</span>
          <p>05 empty place</p>
          </div>
      <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </ion-item
      > 
      <ion-item lines="none">
        <i class="fa-solid fa-person-running"></i>
        <div class="content">
          <span>Running</span>
          <p>01 empty place</p>
          </div>
      <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </ion-item
      > 
      <ion-item lines="none">
        <i class="fa-solid fa-table-tennis-paddle-ball"></i>
        <div class="content">
          <span>Tennis</span>
          <p>03 empty place</p>
          </div>
      <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </ion-item
      > 
      <ion-item lines="none"
        ><i class="fa-solid fa-volleyball"></i>
            <div class="content">
          <span>Volleyball</span>
          <p>07 empty place</p>
        </div>
      <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </ion-item
      > 
    </ion-list>
    <TapComponent/>
  </ion-content>
</template>

<script>
import {  IonItem,  IonList } from '@ionic/vue';
import TapComponent from '../Components/TapComponent.vue';
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { 
    IonCol, IonGrid, IonRow ,  IonItem,  IonList, TapComponent
    },
   setup() {
    const form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
       return { form };
   }
});
</script>
<style >
ion-item {
  padding: 20px 0;
}
.content {
  padding: 0 50px;
  font-size: 13px;
}
ion-item i {
  padding: 20px;
  font-size: 20px;
  background: #e7d3ff;
  border-radius: 15px;
}
.fa-arrow-right-to-bracket{
    padding: 20px;
  font-size: 20px;
  background: none;
  border-radius: 15px;
}
</style>