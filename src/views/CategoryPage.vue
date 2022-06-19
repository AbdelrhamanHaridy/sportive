<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="5">
          <a href="/tabs/tab1" class="rout-link">
          <i class="fa-solid fa-arrow-left-long"></i>
          </a>
        </ion-col>
        <ion-col size="6"> Category </ion-col>
      </ion-row>
    </ion-grid>

    <!-- Default Searchbar -->
    <ion-searchbar></ion-searchbar>
    <ion-list>
      <ion-radio-group>
        <ion-item lines="none">
          <i class="fa-solid padding-i fa-dumbbell"></i>
            <div class="content">
              <span>Gym</span>
              <p>06 empty place</p>
              </div>
          
          <ion-checkbox mode="ios" slot="end" value="gym"></ion-checkbox>
        </ion-item>

        <ion-item lines="none">
          <i class="fa-solid padding-i fa-person-swimming"></i>
          <div class="content">
            <span>Swimming</span>
            <p>13 empty place</p>
          </div>
          
          <ion-checkbox mode="ios" slot="end" value="swimming"></ion-checkbox>
        </ion-item> 

        <ion-item lines="none">
          <i class="fa-regular padding-i fa-futbol"></i>
          <div class="content">
            <span>Football</span>
            <p>05 empty place</p>
          </div>
          
          <ion-checkbox mode="ios" slot="end" value="football"></ion-checkbox>
        </ion-item>

        <ion-item lines="none">
          <i class="fa-solid padding-i fa-person-running"></i>
          <div class="content">
            <span>Running</span>
            <p>01 empty place</p>
          </div>
          
          <ion-checkbox mode="ios" slot="end" value="running"></ion-checkbox>
        </ion-item>

        <ion-item lines="none">
          <i class="fa-solid padding-i fa-table-tennis-paddle-ball"></i>
          <div class="content">
            <span>Tennis</span>
            <p>03 empty place</p>
          </div>
          
          <ion-checkbox mode="ios" slot="end" value="tennis"></ion-checkbox>
        </ion-item> 


        <ion-item lines="none">
          <i class="fa-solid padding-i fa-volleyball"></i>
          <div class="content">
            <span>Volleyball</span>
            <p>07 empty place</p>
          </div>
          
          <ion-checkbox mode="ios" slot="end" value="volleyball"></ion-checkbox>
        </ion-item> 

      </ion-radio-group>
      
    </ion-list>
    <TapComponent/>
  </ion-content>
</template>

<script lang="ts">
import {  IonItem,  IonList } from '@ionic/vue';
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { 
    IonCol, IonGrid, IonRow ,  IonItem,  IonList
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
<style scoped>
.content {
  padding: 0;
  font-size: 13px;
}
ion-item .padding-i {
  padding: 20px;
  font-size: 20px;
  background: #39bd8673;
  border-radius: 15px;
}
ion-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ion-radio-group {
  width: 100% !important;
}
ion-list ion-radio-group ion-item {
  border: 2px solid #e5e9ef;
  border-radius: 10px;
  margin: 10px auto;
  align-items: center;
  width: 95%;
}
ion-list ion-radio-group ion-item i {
  margin: 10px 10px 10px 0;
}
.item-checkbox-checked {
  border: 2px solid #39bd8673;
}
ion-searchbar {
  margin: 0 auto;
  padding: 2.5%;
  --background: #eee;
  --border: none;
  --box-shadow: none;
  --border-radius: 20px;
}
</style>