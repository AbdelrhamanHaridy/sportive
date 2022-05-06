<template>
  <ion-content>
    <ion-row>
      <ion-col size="12">
        <div class="mx-auto">
          <img src="https://media-cdn.grubhub.com/image/upload/v1647377881/eerca5hzaal7iycls8u0.png">
        </div>
        <div class="mx-auto">
          <h3 class="ion-padding">Sign Up</h3>
        </div>
        <div class="mx-auto">
          <ion-input class="input ion-margin-bottom" type="text" placeholder="Full Name"></ion-input>
          <ion-input class="input ion-margin-bottom" type="email" placeholder="Email"></ion-input>
          <ion-input class="input ion-margin-bottom" type="phone" placeholder="Phone"></ion-input>
          <ion-input class="input" type="password" placeholder="password"></ion-input>
        </div>
        <ion-item lines="none" class="ion-margin-start item-accept">
          <ion-radio class="ion-margin-end"></ion-radio>
          <ion-label>By continuing you accept our Privacy Policy</ion-label>
        </ion-item>
        <div class="mx-auto">
          <ion-button class="main-btn">Sign Up</ion-button>
        </div>
      </ion-col>
      <ion-col size="12" class="mx-auto another-way">
        <h4>Sign in with</h4>
        <ion-buttons class="buttons">
          <ion-button>
            <a href="#">
              <i class="fa-brands fa-google fa-2x"></i>
            </a>
          </ion-button>
          <ion-button>
            <a href="#">
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
          </ion-button>
        </ion-buttons>
      </ion-col>
      <ion-col class="ion-margin-top mx-auto">
        have an account? <a style="color: #B22727; font-size: 1.25em;" href="/signin">Sign in</a>
      </ion-col>
    </ion-row>
  </ion-content>
</template>
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
    min-height: 60px;
    color: #5E686E;
  }
  .main-btn {
    width: 99%;
    --border-radius: 30px;
    min-height: 50px;
    font-size: 1.4em;
    --background: linear-gradient(to left, #B22727, #112B3C 100%);
    text-transform: capitalize;
  }
  ion-button a {
    color: #fff;
  }
  img {
    width: 160px;
    height: 160px;
  }
  a {
    color: #475259;
    text-decoration: none;
    font-size: 1.1em;
  }
  .another-way h4 {
    font-size: 2em;
    color: #0a0615;
  }
  .buttons ion-button {
    height: 60px;
  }
  .buttons a {
    color: #112B3C !important;
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
</style>