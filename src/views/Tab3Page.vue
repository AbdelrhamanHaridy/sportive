<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    
 <div class="flex ion-margin-top ion-margin-bottom">
      <h2>Profile</h2>
      <ion-button>
        <i class="fa-solid fa-fire-flame-curved fa-lg ion-margin-end"></i>
        Premium
      </ion-button>
      </div>
      <div class="mx-auto">
        <ion-avatar>
          <ion-img src="https://i.ytimg.com/vi/majzo1hpiOc/hqdefault.jpg"></ion-img>
        </ion-avatar>
        <h4 class="ion-margin-bottom">Deborah Moore</h4>
      </div>
      <ion-row class="row">
        <ion-col size="4">
          <ion-card class="feat-card">
            <div class="content">
              <i class="fa-solid fa-2x fa-scale-balanced"></i>
              <p>55 Kg</p>
            </div>
          </ion-card>
        </ion-col>
        <ion-col size="4">
          <ion-card class="feat-card">
            <div class="content">
              <i class="fa-solid fa-2x fa-person"></i>
              <p>167 cm</p>
            </div>
          </ion-card>
        </ion-col>
        <ion-col size="4">
          <ion-card class="feat-card">
            <div class="content">
              <i class="fa-solid fa-2x fa-cake-candles"></i>
              <p>26 years</p>
            </div>
          </ion-card>
        </ion-col>
      </ion-row>
      <ion-button class="button-premium" color="primary" shape="round" expand="block">Go Premium</ion-button>
      <div class="accordion">
        <ion-accordion-group class="ion-margin-top">
          <ion-accordion value="account">
            <ion-item slot="header">
              <ion-label>Account</ion-label>
            </ion-item>
            <ion-list slot="content">
              <ion-item>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ut, aut voluptates commodi dolorem esse architecto? Numquam, nesciunt, vitae eum aut porro perspiciatis assumenda quia excepturi nemo, atque natus non.</p>
              </ion-item>
            </ion-list>
          </ion-accordion>
          <ion-accordion value="myWorksOut">
            <ion-item slot="header">
              <ion-label>My Workouts</ion-label>
            </ion-item>
            <ion-list slot="content">
              <ion-item>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ut, aut voluptates commodi dolorem esse architecto? Numquam, nesciunt, vitae eum aut porro perspiciatis assumenda quia excepturi nemo, atque natus non.</p>
              </ion-item>
            </ion-list>
          </ion-accordion>
          <ion-accordion value="myWorksOutReminds">
            <ion-item slot="header">
              <ion-label>Workout reminders</ion-label>
            </ion-item>
            <ion-list slot="content">
              <ion-item>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ut, aut voluptates commodi dolorem esse architecto? Numquam, nesciunt, vitae eum aut porro perspiciatis assumenda quia excepturi nemo, atque natus non.</p>
              </ion-item>
            </ion-list>
          </ion-accordion>
          <ion-accordion toggle-icon="none">
              <ion-item href="#" slot="header">
                <ion-label>Log out</ion-label>
              </ion-item>
          </ion-accordion>
        </ion-accordion-group>
      </div>

       </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>

<style scoped>
  .flex {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    flex-direction: row;
  }
  .flex h2 {
    margin: 0;
    padding: 0;
  }
  .flex ion-button {
    --background: #39bd86;
    --border-radius: 20px;
    text-transform: capitalize;
    /* ffde5d */
  }
  .flex ion-button i {
    color: #ffde5d;
  }
  .mx-auto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ion-avatar {
    width: 150px;
    height: 150px;
  }
  .mx-auto h4 {
    font-size: 1.5em;
  }
  .feat-card {
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 5px;
    border-radius: 6px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .feat-card .content {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .feat-card .content i {
    color: #39bd86;
  }
  .feat-card .content p {
    font-size: 1.1em;
    color: #232323;
    font-weight: 600;
    margin-bottom: 0;
  }
  ion-item a {
    color: #232323;
    text-decoration: none;
  }
  ion-item p {
    font-size: 14px;
  }
  .button-premium {
    margin: 32px 16px;
    text-transform: capitalize;
  }
  .accordion {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 32px 16px;
    border-radius: 6px;
  }
  h3 {
    margin: 0 16px;
  }
  ion-toggle {
    --background: #e9e9ea;
    --background-checked: #39bd86;
    --handle-background: #39bd86;
    --handle-background-checked: #fff;
  }
  .accordion .toggle ion-icon {
    display: none;
  }
  @media (max-width: 320px) {
    .feat-card .content p {
      font-size: 0.9em;
    }
  }
</style>