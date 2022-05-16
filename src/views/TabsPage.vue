<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
         <i class="fa-solid fa-house-chimney fa-2x"></i>
          <ion-label>Home</ion-label>
        </ion-tab-button>

           <ion-tab-button tab="tab2" href="/tabs/tab2">
           <i class="fa-solid fa-basketball fa-2x"></i>
          <ion-label>Club</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab3">
         <i class="fa-solid fa-sliders fa-2x"></i>
          <ion-label>Settings</ion-label>
        </ion-tab-button>
        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage, IonRouterOutlet },
  setup() {
    return {
   
    }
  }
});
</script>