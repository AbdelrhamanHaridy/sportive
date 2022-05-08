<template>
<ion-content>
  <div class="Welcome">
    <div class="img">
      <img src="/assets/img/football-player-removebg.png" alt="" />
    </div>
    <div class="Started">
      <ion-text>
        <div class="parent-flex">
          <div class="mx-auto logo logo-div">
            <img src="/assets/img/logo.png">
          </div>
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

      <ion-button color="primary" expand="full" shape="round"
        ><a href="/datauser">Get Started</a></ion-button
      >

      <p>Alleady have account <a href="/signup">Singup </a></p>
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
.Welcome {
  background: linear-gradient(to right, #39bd867a, #1876f26c);
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
  width: 100px !important;
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
.logo-div {
    background: #1877f2;
    display: inline-flex;
    padding: 10px;
    border-radius: 10px;
  }
  .parent-flex {
    display: flex;
    justify-content: center;
  }
</style>