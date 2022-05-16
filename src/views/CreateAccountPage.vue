<template>
            <ion-page>
    <ion-content>
        <ion-header>
            <ion-toolbar>
                <ion-title>Create Account Page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="ion-padding">
              <ion-col size="12">
        <div class="parent-flex">
          <div class="mx-auto logo-div">
            <img src="/assets/img/logo.png">
          </div>
        </div>
              </ion-col>
        <div class="mx-auto">
          <h4 class="ion-padding">Sign Up</h4>
        </div>
            <div class="ion-padding">{{ store.error }}</div>
            <form class="login-form" autocomplete="off">
                <ion-item lines="full">
                    <ion-label position="floating">First Name</ion-label>
                    <ion-input  v-model="first" type="text" id="first" name="first"  autocomplete="off"></ion-input>
                </ion-item>
                <ion-item lines="full">
                    <ion-label position="floating">Last Name</ion-label>
                    <ion-input v-model="last" type="text" id="last"  name="last"  autocomplete="off"></ion-input>
                </ion-item>
                <ion-item lines="full">
                    <ion-label position="floating">Email</ion-label>
                    <ion-input v-model="email" type="email"  ></ion-input>
                </ion-item>
                <ion-item lines="full">
                    <ion-label position="floating">Password</ion-label>
                    <ion-input v-model="password" type="password"   autocomplete="new-password"></ion-input>
                </ion-item>
                <ion-button expand="block" @click="doCreateAccount">Create Account</ion-button>
            </form>
        </ion-content>
        </ion-content>
    </ion-page>  
  
</template>

<script lang="ts">
import { useAuthStore } from "@/store"
import { IonLabel, IonInput, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
export default defineComponent({
    name: 'LoginPage',
    components: { IonLabel, IonInput, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonPage },
    setup() {
        const store = useAuthStore()
        const router = useRouter()
        const email = ref('');
        const password = ref('');
        const first = ref('');
        const last = ref('');

        /**
         * 
         */
        const doCreateAccount = async () => {
            await store.createAccount(email.value, password.value, first.value, last.value);
            router.replace("/tabs/tab1");
        }
        return { email, password, doCreateAccount, store, first, last }
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