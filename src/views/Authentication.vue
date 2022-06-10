<template>
  <ion-page style=" text-align: center">
    <ion-header>
      <ion-toolbar>
        <ion-title>Sign In/Up</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

        <ion-card-header>
          <ion-card-title> Welcome to Sportive </ion-card-title>
          <div class="parent-flex">
         <div class="mx-auto logo-div">
           <img src="/assets/img/logo.png">
         </div>
       </div>
          <ion-card-subtitle> Sign In/Up </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <form
            @submit.prevent="
              mode === AuthMode.SignIn
                ? signInWithEmailAndPassword(email, password)
                : signUpWithEmailAndPassword(name, email, password)
            "
          >
            <ion-item v-if="mode === AuthMode.SignUp">
              <ion-label position="floating">Name</ion-label>
              <ion-input v-model="name"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input v-model="password" type="password"></ion-input>
            </ion-item>
            <ion-button
              expand="block"
              color="primary"
              class="ion-margin-top"
              type="submit"
            >
              {{ mode === AuthMode.SignIn ? "Sign In" : "Sign Up" }}
            </ion-button>
            <ion-button
              expand="block"
              color="secondary"
              class="ion-margin-top"
              @click="mode = mode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn "
            >
              {{ mode === AuthMode.SignIn ? "Sign Up" : "Cancel" }}
            </ion-button>
          </form>
        </ion-card-content>
        <ion-card-content v-if="errorMsg" class="error-message">
            {{errorMsg}}
        </ion-card-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
} from "@ionic/vue";

import { auth, db } from "@/firebase";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

enum AuthMode {
  SignIn,
  SignUp,
}

export default {
  name: "AuthenicationPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonCardHeader
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      mode: AuthMode.SignIn,
      errorMsg: "",
    });

    const signInWithEmailAndPassword = async (
      email: string,
      password: string
    ) => {
      try {
        if (!email || !password) {
          state.errorMsg = "Email and password required!";
          return;
        }

        await auth.signInWithEmailAndPassword(email, password);
        router.push("/tabs/tab1");
      } catch (error) {
        state.errorMsg = error.message;
      }
    };

    const signUpWithEmailAndPassword = async (
      name: string,
      email: string,
      password: string
    ) => {
      try {
        if (!name || !email || !password) {
          state.errorMsg = "Name, email, and password required!";
          return;
        }

        const authRes = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        db.collection("users").doc(authRes.user?.uid).set({
          name,
          email,
        });

        router.push("/tabs/tab1");
      } catch (error) {
        state.errorMsg = error.message;
      }
    };

    return {
      ...toRefs(state),
      signInWithEmailAndPassword,
      signUpWithEmailAndPassword,
      AuthMode,
    };
  },
};
</script>

<style>
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
    background: #899c89;
    display: inline-flex;
    padding: 10px;
    border-radius: 10px;
  }
  .parent-flex {
    display: flex;
    justify-content: center;
  }
</style>