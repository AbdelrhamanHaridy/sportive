<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <div class="flex ion-margin-top">
        <h2>Hi, Deborah</h2>
        <ion-button color="none">
          <i class="fa-regular fa-xl fa-bell"></i>
          <ion-badge color="primary">9</ion-badge>
        </ion-button>
      </div>
      <div class="cates ion-margin-top">
        <div class="flex">
          <h3>Category</h3>
          <a href="/lists">View All</a>
        </div>
        <ion-row class="cates-row ion-margin-top">
          <ion-col size="3">
            <ion-card class="cates-card" href="/lists">
              <div class="content">
                <i class="fa-solid fa-2x fa-person-falling"></i>
                <p>Cardio</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cates-card" href="/lists">
              <div class="content">
                <i class="fa-brands fa-2x fa-yoast"></i>
                <p>Yoga</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cates-card" href="/lists">
              <div class="content">
                <i class="fa-solid fa-2x fa-person-running"></i>
                <p>Stretch</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cates-card" href="/lists">
              <div class="content">
                <i class="fa-solid fa-2x fa-dumbbell"></i>
                <p>Gym</p>
              </div>
            </ion-card>
          </ion-col>
        </ion-row>
      </div>
      <div class="fit" style="margin: 32px 16px">
        <ion-row>
          <ion-col size="10" size-md="12">
            <h4>Full Body Toning Workout</h4>
            <p>Includes circuits to work every muscels</p>
            <ion-button href="/club">Start Training</ion-button>
          </ion-col>
        </ion-row>
      </div>

      <div class="exercises">
        <div class="center-header">
          <div class="content">
            <h3>Exercises</h3>
            <span>Exercises: 210</span>
          </div>
          <a href="#">View All</a>
        </div>

        <ion-item-group class="items">
          <ion-item lines="none">
            <img src="assets/img/braden-collum-9HI8UJMSdZA-unsplash.jpg">
            <ion-label class="ion-margin-start">Running</ion-label>
            <a href="/payment">
             <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </a>
          </ion-item>
          <ion-item lines="none">
            <img src="assets/img/cristina-anne-costello-rank-Px49iI-unsplash.jpg">
            <ion-label class="ion-margin-start">Tenise</ion-label>
            <a href="/payment">
             <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </a>
          </ion-item>
          <ion-item lines="none">
            <img src="assets/img/miguel-teirlinck-VDkRsT649C0-unsplash.jpg">
            <ion-label class="ion-margin-start">Vollyboll</ion-label>
            <a href="/payment">
             <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </a>
          </ion-item>
          <ion-item lines="none">
            <img src="assets/img/gentrit-sylejmani-JjUyjE-oEbM-unsplash.jpg">
            <ion-label class="ion-margin-start">Swimming</ion-label>
            <a href="/payment">
             <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </a>
          </ion-item>
        </ion-item-group>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    const opation = {
      slidesPerView: 1.5,
      centeredSlides: false,
      loop: true,
      spaceBetween: 10,
      // autoplay: true
    }

    return { slideOpts, opation }
  }
});
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}

.flex h2,
.flex h3 {
  margin: 0;
}

.flex ion-button {
  --border-radius: 5px !important;
}

.flex ion-button i.fa-bell {
  color: #39bd86 !important;
}

ion-searchbar {
  margin: 0 auto;
  --background: #eee;
  --border: none;
  --box-shadow: none;
  --border-radius: 20px;
}

ion-icon.searchbar-search-icon {
  color: #39bd86 !important;
}

.cates a {
  color: #959ba5;
  text-decoration: none;
}

.cates .cates-row {
  justify-content: center;
}

.cates-card {
  display: flex;
  justify-content: center;
  height: 60px;
  width: 60px;
  align-items: center;
  border-radius: 10px;
  box-shadow: none;
  border: 1px solid #dae0e8;
}

.cates-card .content {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.cates-card .content i {
  color: #39bd86;
}

.cates-card .content p {
  font-size: 0.9em;
  color: #232323;
  font-weight: 600;
  margin-bottom: 0;
}

.fit {
  background-image: url("/public/assets/img/front-view-fit-man-posing-while-wearing-tank-top-holding-water-bottle.jpg");
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 0 0 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0%;
}

@media (min-width: 767px) {
  .fit {
    height: 500px;
  }
}

@media (min-width: 1000px) {
  .fit {
    height: 700px;
  }
}

.fit ion-row h4 {
  font-size: 1.8em;
}

.fit ion-row p {
  font-size: 1em;
  color: #232323;
}

.fit ion-row ion-button {
  --background: #39bd86;
  --border-radius: 25px;
  font-size: 1.3em;
  text-transform: capitalize;
  min-height: 45px;
}

.cards {
  padding: 16px;
}

.center-header h3 {
  margin: 0;
  margin-bottom: 5px;
}

.center-header {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.center-header span {
  color: #727a7f;
}

.center-header a {
  margin-top: 3px;
  text-decoration: none;
  color: #959ba5;
}

.center-header .content {
  padding: 0;
}

.cards ion-card {
  width: 100%;
  box-shadow: none;
}

.cards ion-card ion-card-header {
  margin: 0;
  text-align: left;
  padding: 10px 0;
}

.cards ion-card ion-card-title {
  font-size: 1.2em;
  margin-bottom: 6px;
}

.cards ion-card ion-card-subtitle .level {
  color: #39bd86;
  font-size: 1.1em;
}

.cards ion-card ion-card-subtitle .time {
  font-size: 1em;
}

.cards ion-card ion-img {
  --border-radius: 50px !important;
  height: 160px;
  object-fit: cover;
  width: 100%;
  transform: scale(1.1, 1.1) rotate(1deg);
  transition: 600ms all ease-in-out;
}

.cards .swiper-slide-active {
  transform: scale(1.05, 1.05);
}

.swiper-slide {
  transition: 400ms all ease-in-out;
}

@media (max-width: 380px) {
  .cates-card .content p {
    font-size: 0.9em;
  }
}

@media (min-width: 767px) {
  .cards ion-card ion-card-header {
    padding: 10px;
  }
}

@media (min-width: 1200px) {
  .cards ion-card ion-card-header {
    padding: 20px;
  }
}

.exercises {
  padding: 16px;
}

.items {
  padding: 0;
  margin: 0;
}

.items ion-item {
  border: 1px solid #e5e9ef;
  margin-top: 16px;
  border-radius: 10px;
  padding: 6px;
}

.items ion-item img {
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
  object-fit: cover !important;
}

.items ion-item i {
  color: #39bd86;
}

ion-badge {
  position: absolute;
  right: 10px;
  top: 2px;
  height: 18px;
}
</style>