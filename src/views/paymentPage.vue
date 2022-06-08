<template>
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="5">
                <a href="/tabs/tab1" class="rout-link">
        <i class="fa-solid fa-arrow-left-long"></i>
        </a>
      </ion-col>
      <ion-col size="6"> Payment </ion-col>
    </ion-row>
  </ion-grid>
  <div class="payment">
    <div class="img">
      <img src="/assets/img/payments.jpg" alt="" />
    </div>
    <div class="blank">
      <ion-text>
        <h3>Accomodation Dtails</h3>
      </ion-text>
      <ion-text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Odit.
        </p>
      </ion-text>
      <ion-modal :is-open="isOpen" @onDidDismiss="modalClose(false)">
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Note Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label>Title</ion-label>
          <ion-input v-model="formInfo.title"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Body</ion-label>
          <ion-textarea v-model="formInfo.body" rows="5"></ion-textarea>
        </ion-item>
        <ion-button @click="modalClose(true)">SAVE DATA</ion-button>
        <ion-button @click="modalClose(false)" color="danger"
          >CANCEL</ion-button
        >
      </ion-content>
    </ion-page>
  </ion-modal>
      <div class="personal-details">
        <ion-text>
          <h3>Personal Details</h3>
        </ion-text>
        <ion-text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Odit,</p>
        </ion-text>
        <form>
          <ion-item>
            <ion-label position="floating">First Name</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Last Name</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Confirm Email</ion-label>
            <ion-input type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Phone</ion-label>
            <ion-input type="number"></ion-input>
          </ion-item>
        </form>
      </div>
      <div class="payment-information">
        <ion-text>
          <h3>Payment Details</h3>
        </ion-text>
        <ion-text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Odit,</p>
        </ion-text>
        <form>
            <ion-label>Name On Card</ion-label>
          <ion-item>
            <ion-input placeholder="John Doe"></ion-input>
          </ion-item>
            <ion-label>Card Number</ion-label>
          <ion-item>
            <ion-input type="number" placeholder="xxxx-xxxx-xxxx-xxxx"></ion-input>
          </ion-item>
          <div class="payment-card ion-margin-bottom">
            <img src="../../public/assets/img/mastercard.png" alt="">
            <img src="../../public/assets/img/visa.png" alt="">
          </div>
            <ion-label>Expiration Date</ion-label>
          <ion-item>
            <ion-input type="number" placeholder="MM-Year"></ion-input>
          </ion-item>
            <ion-label>Security Code</ion-label>
          <ion-item>
            <ion-input type="number" placeholder="CCV"></ion-input>
            <img src="https://www.mastercard.com.eg/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="">
          </ion-item>
          <ion-button href="/thanks" shape="round" expand="block">Payment</ion-button>
          
        </form>
      </div>

    </div>
  </div>
</ion-content>
</template>


<script lang="ts">
import {
  IonModal,
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonTextarea,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent, ref, SetupContext, watch } from "vue";


export type SimpleForm = {
  title?: string;
  body?: string;
};
export type SimpleModalResponse = {
  success: boolean;
  formData: SimpleForm | null;
};

const SimpleModal = defineComponent({
  name: "SimpleModal",
  props: {
    isOpen: {
      default: false,
      required: true,
    },
    initialData: {
      default: null,
      required: true,
    },
  },
  components: {
    IonModal,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonTextarea,
    IonInput,
    IonButton,
  },
  setup(props: any, ctx: SetupContext) {
    const formInfo = ref<SimpleForm>({
      title: "",
      body: "",
    });

    // if form is open, get the input properties
    // to update form with values
    watch(
      () => props.isOpen,
      (newVal: any) => {
        if (newVal) {
          formInfo.value.title = props.initialData?.title;
          formInfo.value.body = props.initialData?.body;
        }
      }
    );

    /**
     *
     */
    const modalClose = (saveFormData: boolean) => {

      // handle @onDidDismiss
      // this is here because if you close dialog by NOT
      // clicking the cancel, still have logic to execute -
      if ( !props.isOpen ) return;

      const formResponse: SimpleModalResponse = {
        success: saveFormData,
        formData: saveFormData ? { ...formInfo.value } : props.initialData,
      };
      // clear form
      formInfo.value = { title: "", body: "" };

      // emit event with response
      ctx.emit("close", formResponse);
    };

    return {
      formInfo,
      modalClose,
    };
  },
});
export default SimpleModal;
</script>
<style scoped>
.payment {
  background: linear-gradient(to right, #caeeff, #ccc7fd);
  width: 100%;
  height: 100%;
}
.img {
  text-align: center;
}
img {
  width: 100%;
  height: auto;
  max-height: 600px;
}
.blank {
  background: #fff;
  padding: 25px;
  border-radius: 50px 50px 0 0;
  /* height: 100%; */
  transform: translate(0, -150px);
  /* max-height: 700px; */
}
.blank h3 {
  font-weight: 800;
  font-size: 1.25em;
  color: #39bd86;
}
.blank p {
  font-size: 1em;
}
.date-time ion-item {
  border: 1px solid #e5e9ef;
  border-radius: 5px;
}
form {
  margin-top: 30px;
}
form ion-item {
  margin-bottom: 20px;
}
form img {
  width: 100px;
}
.checkout-paypal, .personal-details, .payment-information {
  margin-top: 40px;
}
.payment-card img {
  width: 50px !important;
  height: 50px;
  margin-inline-end: 15px;
}
ion-button a {
  color: #fff;
  text-decoration: none;
}
</style>