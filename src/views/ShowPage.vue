<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
      </ion-header>

    <ion-content class="ion-padding">
      <simple-modal
       :is-opne="modalInfo.show"
       @modal-closed="handleModalClosed "/>
      <ion-button @click="showModal">Show Modal</ion-button>  
    </ion-content>
  </ion-page>
</template>

<script lang="ts">

import { defineComponent, reactive } from "vue";
import SimpleModal from "./SimpleModal.vue";

export default defineComponent({
  name: "ShowPage",

  components: {

    SimpleModal
  },

  setup() {
    const modalInfo = reactive<{ show: boolean; data: any }>({
      show: false,
      data: null,
    });
    const showModal = () => {
      modalInfo.show = true;
    };
    const handleModalClosed = (eventData:any) =>{
      modalInfo.show = false;
      alert(JSON.stringify(eventData))
    };
    return {
      showModal,
      handleModalClosed,
      modalInfo,
    };
  },
});
</script>

<style scoped>
.error {
  color: red;
  font-size: smaller;
  font-style: italic;
  font-weight: 500;
  margin-top: 4px;
}

ion-item {
  --padding-start: 0px;
}
</style>