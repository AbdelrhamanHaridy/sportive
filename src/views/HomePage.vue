<template>
  <!-- <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci temporibus eveniet saepe. Veniam, similique! Assumenda, at dolorum explicabo totam pariatur, architecto dicta suscipit accusamus corporis, tenetur distinctio. Libero, dolores non?</p>
    </ion-slide>
    <ion-slide>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci temporibus eveniet saepe. Veniam, similique! Assumenda, at dolorum explicabo totam pariatur, architecto dicta suscipit accusamus corporis, tenetur distinctio. Libero, dolores non?</p>
    </ion-slide>
    <ion-slide>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci temporibus eveniet saepe. Veniam, similique! Assumenda, at dolorum explicabo totam pariatur, architecto dicta suscipit accusamus corporis, tenetur distinctio. Libero, dolores non?</p>
    </ion-slide>
  </ion-slides> -->
  <ion-app>
    <ion-content>
      <div class="flex ion-margin-top">
        <h2>Hi, Deborah</h2>
        <ion-button color="none">
          <i class="fa-regular fa-bell"></i>
        </ion-button>
      </div>
      <ion-searchbar placeholder="Search Something"></ion-searchbar>
      <div class="cates ion-margin-top">
        <div class="flex">
          <h3>Category</h3>
          <a href="#">View All</a>
        </div>
        <ion-row class="cates-row ion-margin-top">
          <ion-col size="3">
            <ion-card class="cates-card" href="#">
              <div class="content">
                <i class="fa-solid fa-2x fa-person-falling"></i>
                <p>Cardio</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cates-card" href="#">
              <div class="content">
                <i class="fa-brands fa-2x fa-yoast"></i>
                <p>Yoga</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cates-card" href="#">
              <div class="content">
                <i class="fa-solid fa-2x fa-person-running"></i>
                <p>Stretch</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="3">
            <ion-card class="cates-card" href="#">
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
            <ion-button>Start Training</ion-button>
          </ion-col>
        </ion-row>
      </div>
      <div class="cards">
        <div class="popular-header">
          <div class="content">
            <h3>Popular Workouts</h3>
            <span>Workouts: 80</span>
          </div>
          <a href="#">View All</a>
        </div>
        <ion-slides :options="opation" class="ion-margin-top">
          <ion-slide>
            <ion-card>
              <ion-img src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/Tips+for+Coaching+Your+Own+Child/Dad+Coaching+Team-Article.jpg" alt=""></ion-img>
              <ion-card-header>
                <ion-card-title>Rapid Lower Body</ion-card-title>
                <ion-card-subtitle><span class="level">Beginner</span> <span class="time">42 min</span> </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card>
              <ion-img src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/Tips+for+Coaching+Your+Own+Child/Dad+Coaching+Team-Article.jpg" alt=""></ion-img>
              <ion-card-header>
                <ion-card-title>Rapid Lower Body</ion-card-title>
                <ion-card-subtitle><span class="level">Beginner</span> <span class="time">42 min</span> </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-slide>
          <ion-slide>
            <ion-card>
              <ion-img src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/Tips+for+Coaching+Your+Own+Child/Dad+Coaching+Team-Article.jpg" alt=""></ion-img>
              <ion-card-header>
                <ion-card-title>Rapid Lower Body</ion-card-title>
                <ion-card-subtitle><span class="level">Beginner</span> <span class="time">42 min</span> </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
  </ion-app>
</template>


<script lang="ts">
// import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  // components: { IonSlides, IonSlide },
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
<style>
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex h2, .flex h3 {
    margin: 0;
  }
  .flex ion-button {
    --border-radius: 5px !important;
  }
  .flex ion-button i.fa-bell {
    color: #663ab7 !important;
  }
  ion-searchbar {
    --border-radius: 5px !important;
    --background: #f1f4f8 !important;
  }
  ion-icon.searchbar-search-icon {
    color: #663ab7 !important;
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
    height: 100%;
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
  }
  .cates-card .content i {
    color: #663ab7;
  }
  .cates-card .content p {
    font-size: 0.9em;
    color: #232323;
    font-weight: 600;
    margin-bottom: 0;
  }
  .fit {
    background-image: url(../../public/assets/img/fit-girl.jpg);
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
    .fit  {
      height: 500px;
    }
  }
  @media (min-width: 1000px) {
    .fit  {
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
    --background: #663ab7;
    --border-radius: 25px;
    font-size: 1.3em;
    text-transform: capitalize;
    min-height: 45px;
  }
  .cards {
    padding: 16px;
  }
  .cards .popular-header h3 {
    margin: 0;
    margin-bottom: 5px;
  }
  .cards .popular-header {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  .cards .popular-header span {
    color: #727a7f;
  }
  .cards .popular-header a {
    margin-top: 3px;
    text-decoration: none;
    color: #959ba5;
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
    color: #461b93;
    font-size: 1.1em;
  }
  .cards ion-card ion-card-subtitle .time {
    font-size: 1em;
  }
  .cards ion-card ion-img {
    --border-radius: 12px;
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
</style>