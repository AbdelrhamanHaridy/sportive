
<template>
  <ion-modal :is-open="isOpen" @onDidDismiss="handleDidDismiss(false)">
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Simple Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
        <ion-label>Title</ion-label>
        <ion-input v-model="formInfo.title"></ion-input>
        </ion-item>
        <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea v-model="formInfo.description" row="5"></ion-textarea>
        </ion-item>
        <ion-item>
        <ion-label position="stacked">Date</ion-label>
    
          <!-- Disabled -->
            <ion-datetime 
             display-format="MM DD YY" 
             v-model="formInfo.dueDate"
             ></ion-datetime>

        </ion-item>

        <ion-button @click="handleDidDismiss(true)" color="danger"
          >Save Date</ion-button>
           <ion-button @click="handleDidDismiss(false)" 
          >Close</ion-button>
      </ion-content>
    </ion-page>
  </ion-modal>
</template>

<script lang="ts">

import { defineComponent, ref, SetupContext} from "vue";

export default defineComponent({
  name:"SimpleModal",
    components: {
 
  },
   props: {
    isOpen: {
      default: false,
      required: true,
    },
    },
  setup(props: any , ctx:SetupContext) {
    const formInfo = ref<any>({
title:"",
description:"",
dueDate:"",
    });
    const handleDidDismiss = (isCancelled: boolean) => {

    if (!props.isOpen)return;

    console.log(isCancelled);
    ctx.emit("modal-closed",{isCancelled ,formInfo: formInfo.value});
    }
    return {

      handleDidDismiss,
    formInfo,
    };
  }
});

</script>
<style></style>
