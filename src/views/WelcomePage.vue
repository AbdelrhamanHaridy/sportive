<template>
<ion-content>
  <div class="Welcome">
    <div class="img">
      <img src="/assets/img/football-player-removebg.png" alt="" />
    </div>
    <div class="Started">
      <ion-text>
        <div class="logo">
      <img src="/assets/img/logo.png" alt="" />
        </div>
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
        ><a href="/datauser">Get Started</a></ion-button
      >

      <p>Alleady have account <a href="/Singup">Singup </a></p>
    </div>
  </div>
</ion-content>
</template>


<script>
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>
<style scoped>
.Welcome {
  background: linear-gradient(to right, #caeeff, #ccc7fd);
  width: 100%;
  height: 100%;
}
.img {
  text-align: center;
}
img {
  width: 300px;
}
.logo img{
  width: 100px;

}
 

ion-button a{
      color: white;
    text-decoration: none;
}

.Started {
  background: #fff;
  padding: 50px;
  border-radius: 50px 50px 0 0;
  text-align: center;
}
.Started h2 {
  font-weight: 800;
  font-size: 30px;
}
.Started p {
  font-size: 12px;
}
</style>