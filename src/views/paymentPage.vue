<template>
<ion-content>
  <div class="payment">
    <div class="img">
      <img src="/assets/img/payments.jpg" alt="" />
    </div>
    <div class="Started">
      <ion-text>
        <h2>Sportive</h2>
      </ion-text>
      <ion-text>
        <h5>Welcome to Sportive</h5>
      </ion-text>
      <ion-text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Odit,
          excepturi maxime laboriosam eos voluptatum
        </p>
      </ion-text>

      <ion-button color="tertiary" expand="full" shape="round"
        >Get Started</ion-button
      >

      <p>Alleady have account <a href="">Singup </a></p>
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
.Started {
  background: #fff;
  padding: 50px;
  border-radius: 50px 50px 0 0;
  text-align: center;
  /* height: 100%; */
  transform: translate(0, -150px);
  /* max-height: 700px; */
}
.Started h2 {
  font-weight: 800;
  font-size: 30px;
}
.Started p {
  font-size: 12px;
}
</style>