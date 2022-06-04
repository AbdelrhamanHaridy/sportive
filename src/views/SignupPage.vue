<template>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="5">
          <i class="fa-solid fa-arrow-left-long"></i>
        </ion-col>
        <ion-col size="6"> Sign Up </ion-col>
      </ion-row>
    </ion-grid>
    <ion-row>
      <ion-col size="12">
        <div class="parent-flex">
          <div class="mx-auto logo-div">
            <img src="/assets/img/logo.png">
          </div>
        </div>
        <div class="mx-auto">
          <h4 class="ion-padding">Sign Up</h4>
        </div>
        <div class="mx-auto">
          <ion-input class="input ion-margin-bottom" type="text" placeholder="Full Name"></ion-input>
          <ion-input class="input ion-margin-bottom" type="email" placeholder="Email"></ion-input>
          <ion-input class="input ion-margin-bottom" type="phone" placeholder="Phone"></ion-input>
          <ion-input class="input" type="password" placeholder="password"></ion-input>
        </div>
     
   <ion-button color="primary" style=" margin-top: 56px;" expand="full" shape="round"
        ><a href="/datauser">Sign Up</a></ion-button
      >
      </ion-col>
      <ion-col size="12" class="mx-auto another-way">
        <span>OR</span>
        <h5><b>Sign in with</b> </h5>
        <ion-buttons class="buttons">
            <a href="#">
              <i class="fa-brands fa-google fa-2x"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
        </ion-buttons>
      </ion-col>
      <ion-col class="ion-margin-top mx-auto">
        <p> have an account? <a  href="/signin">Sign in</a></p>
      </ion-col>
    </ion-row>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'LoginPage',
    setup() {
       
        
        return {  }
    }
});
</script>
<style scoped>
  .mx-auto {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .item-save {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  }
  h3 {
    color: #0A0615;
    font-size: 2.5em;
    font-weight: bold;
  }
  .input {
    width: 99%;
    border-radius: 40px;
    text-indent: 20px;
    background: #F1F4F8;
    font-size: 1.25em;
    min-height: 50px;
    color: #5E686E;
  }
 
    ion-button {
    min-height: 40px;
    font-size: 1em;
    text-transform: capitalize;
  }
  ion-button a {
    color: #fff;
  }
  img {
    width: 130px;
  }

  .another-way h4 {
    font-size: 2em;
    color: #0a0615;
  }
  .buttons ion-button {
    height: 60px;
    margin-top: 56px;
  }
  a{
    color: #39bd86;
    text-decoration: none;
  }
  .buttons .fa-google {
    color: #ff4901 !important;
    padding: 5px;
  }
   .buttons .fa-facebook {
    color: #1877f2 !important;
    padding: 5px;

  }
  .item-accept {
    margin-block: 10px;
  }
  @media (max-height: 700px) {
    .another-way {
      margin-top: 0px;
    }
    .mx-auto img {
      width: 120px;
      height: 120px;
    }
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