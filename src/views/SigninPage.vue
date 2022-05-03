<template>
  <ion-content>
    <div class="mx-auto">
      <img src="https://media-cdn.grubhub.com/image/upload/v1647377881/eerca5hzaal7iycls8u0.png">
      <h3 class="ion-padding">Sign In</h3>
      <ion-input class="ion-margin-bottom" placeholder="Phone / Email"></ion-input>
      <ion-input class="ion-margin-bottom" type="password" placeholder="password"></ion-input>
      <ion-button class="main-btn">Sign In</ion-button>
      <a class="ion-margin-top" href="#">Forget password?</a>
      <div class="another-way">
        <h4>Sign in with</h4>
        <ion-buttons>
          <ion-button>Hi</ion-button>
          <ion-button>Hi</ion-button>
        </ion-buttons>
      </div>
    </div>
  </ion-content>
</template>
<style scoped>
  .mx-auto {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .mx-auto h3 {
    color: #0A0615;
    font-size: 2.5em;
    font-weight: bold;
  }
  .mx-auto ion-input {
    width: 95%;
    border-radius: 40px;
    text-indent: 20px;
    background: #F1F4F8;
    font-size: 1.25em;
    min-height: 60px;
    color: #5E686E;
  }
  .mx-auto .main-btn {
    width: 95%;
    --border-radius: 30px;
    min-height: 50px;
    font-size: 1.4em;
    --background: linear-gradient(to left, #B22727, #112B3C 100%);
    text-transform: capitalize;
  }
  .mx-auto ion-button a {
    color: #fff;
  }
  .mx-auto img {
    width: 220px;
    height: 220px;
  }
  .mx-auto a {
    color: #475259;
    text-decoration: none;
    font-size: 1.1em;
  }
  .another-way {
    margin-top: 100px;
  }
  .another-way h4 {
    font-size: 2em;
    color: #0a0615;
  }
</style>