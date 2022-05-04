<template>
  <ion-content>
    <ion-row>
      <ion-col class="mx-auto" size="12">
        <img src="https://media-cdn.grubhub.com/image/upload/v1647377881/eerca5hzaal7iycls8u0.png">
        <h3 class="ion-padding">Sign In</h3>
        <ion-input class="input ion-margin-bottom" placeholder="Phone / Email"></ion-input>
        <ion-input class="input ion-margin-bottom" type="password" placeholder="password"></ion-input>
        <ion-button class="main-btn">Sign In</ion-button>
        <a class="ion-margin-top" href="#">Forget password?</a>
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
        Don't have an account? <a style="color: #B22727; font-size: 1.25em;" href="signup">Sign up</a>
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
  .mx-auto h3 {
    color: #0A0615;
    font-size: 2.5em;
    font-weight: bold;
  }
  .mx-auto .input {
    width: 99%;
    border-radius: 40px;
    text-indent: 20px;
    background: #F1F4F8;
    font-size: 1.25em;
    min-height: 60px;
    color: #5E686E;
  }
  .mx-auto .main-btn {
    width: 99%;
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
    width: 160px;
    height: 160px;
  }
  .mx-auto a {
    color: #475259;
    text-decoration: none;
    font-size: 1.1em;
  }
  .another-way {
    margin-top: 170px;
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
  @media (max-height: 800px) {
    .another-way {
      margin-top: 0px;
    }
    .mx-auto img {
      width: 120px;
      height: 120px;
    }
  }
</style>