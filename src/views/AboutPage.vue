<template>
  <ion-list>
    <ion-list-header>
      <ion-label>
        Single Selection
      </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Gender</ion-label>
      <ion-select placeholder="Select One">
        <ion-select-option value="f">Female</ion-select-option>
        <ion-select-option value="m">Male</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>Hair Color</ion-label>
      <ion-select value="brown" ok-text="Okay" cancel-text="Dismiss">
        <ion-select-option value="brown">Brown</ion-select-option>
        <ion-select-option value="blonde">Blonde</ion-select-option>
        <ion-select-option value="black">Black</ion-select-option>
        <ion-select-option value="red">Red</ion-select-option>
      </ion-select>
    </ion-item>

  </ion-list>
</template>

<script>
import { 
  IonItem, 
  IonLabel, 
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonItem, 
    IonLabel, 
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption
  }
});
</script>