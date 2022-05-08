<template>
<ion-content>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit Odit,
        </p>
      </ion-text>
      <div class="date-time">
        <ion-item lines="none">
          Date
          <ion-label slot="end">
            19 Sep - 21 Sep
          </ion-label>
        </ion-item>
      </div>
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
            <a href="#">
              <img src="https://www.mastercard.com.eg/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="">
            </a>
            <a href="#">
              <img src="https://www.mastercard.com.eg/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="">
            </a>
            <a href="#">
              <img src="https://www.mastercard.com.eg/content/dam/mccom/global/logos/logo-mastercard-mobile.svg" alt="">
            </a>
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
          <ion-button shape="round" expand="block">Confirm</ion-button>
        </form>
      </div>
      <div class="checkout-paypal ion-margin-top">
        <ion-text>
          <h3>Or checkout by paypal</h3>
        </ion-text>
        <ion-text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Odit,</p>
        </ion-text>
        <ion-button shape="round">Paypal</ion-button>
      </div>
    </div>
  </div>
</ion-content>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
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
  color: #663ab7;
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
</style>