<template>
  <ion-app>
    <ion-router-outlet />
    
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style>
:root {
  --ion-color-primary: #39bd86 !important;
}
</style>