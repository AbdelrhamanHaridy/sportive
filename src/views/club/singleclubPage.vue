<template>
  <ion-content class="ion-margin-top">
    <div class="card">
      <ion-card>
        <ion-slides :options="opation">
          <ion-slide>
            <ion-img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg" alt=""></ion-img>
          </ion-slide>
          <ion-slide>
            <ion-img src="https://mediacache3.select-sport.com/d2/c1/76d9-e855-4a47-830e-1e3968ca46a9/thumbnail-maxi_grip.jpg" alt=""></ion-img>
          </ion-slide>
          <ion-slide>
            <ion-img src="https://cdn.dmcl.biz/media/image/233432/o/FIVB+volleyball.jpg" alt=""></ion-img>
          </ion-slide>
          <ion-slide>
            <ion-img src="https://swimswam.com/wp-content/uploads/2020/08/Pool-Stock-By-Jack-Spitser-CD8I9550-scaled.jpg" alt=""></ion-img>
          </ion-slide>
        </ion-slides>
        <ion-card-header>
          <ion-card-title>Sporting club</ion-card-title>
          <ion-card-subtitle>Youth</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia saepe facilis laboriosam necessitatibus illo totam impedit accusantium suscipit vel. Suscipit, reiciendis quaerat. Ducimus
        </ion-card-content>
      </ion-card>
    </div>
    <div class="sports">
      <ion-row>
        <ion-col size="4">
          <ion-card class="sport-card">
            <ion-img src="./assets/img/sports-1.png"></ion-img>
            <ion-label class="ion-margin-top">Football</ion-label>
          </ion-card>
        </ion-col>
        <ion-col size="4">
          <ion-card class="sport-card">
            <ion-img src="./assets/img/sports-2.png"></ion-img>
            <ion-label class="ion-margin-top">Handball</ion-label>
          </ion-card>
        </ion-col>
        <ion-col size="4">
          <ion-card class="sport-card">
            <ion-img src="./assets/img/sports-3.png"></ion-img>
            <ion-label class="ion-margin-top">Swimming</ion-label>
          </ion-card>
        </ion-col>
        <ion-col size="4">
          <ion-card class="sport-card">
            <ion-img src="./assets/img/sports-4.png"></ion-img>
            <ion-label class="ion-margin-top">volleyball</ion-label>
          </ion-card>
        </ion-col>
      </ion-row>
    </div>
    <ion-accordion-group>
      <ion-list-header>Informations</ion-list-header>
      <ion-accordion value="main">
        <ion-item lines="none" slot="header">
          <ion-label>Main</ion-label>
        </ion-item>
        <ion-item class="content" lines="none" slot="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptate totam sapiente nihil cum molestias quibusdam repellendus excepturi eaque iure sint dolor deserunt libero possimus harum quis distinctio eveniet eum.
        </ion-item>
      </ion-accordion>
      <ion-accordion value="sports">
        <ion-item lines="none" slot="header">
          <ion-label>Sports</ion-label>
        </ion-item>
        <ion-list slot="content">
          <ion-item>
            <ion-label>Football</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>handball</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-label>Swimming</ion-label>
          </ion-item>
      </ion-list>
      </ion-accordion>
    </ion-accordion-group>
    <ion-button class="sign" shape="block">
      <a href="#">Sign In This Club</a>
    </ion-button>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
  setup() {
    const opation = {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      spaceBetween: 0,
      speed: 500,
      autoplay: true
    }
    
    return { opation }
  }
});  
</script>

<style scoped>
  .card ion-card ion-slides ion-img {
    height: 300px !important;
    object-fit: cover;
    width: 100% !important;
  }
  .card ion-card ion-card-title {
    color: #39bd86;
  }
  .sport-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }
  .sport-card ion-img {
    width: 45px;
    height: 45px;
  }
  .sport-card ion-label {
    font-size: 1.1em;
    font-weight: 500;
    color: #39bd86;
  }
  ion-accordion-group {
    margin: 16px;
  }
  ion-accordion-group ion-list-header {
    font-size: 1.2em;
    font-weight: 500;
    border-radius: 10px;
    background: #707070;
    color: #fff;
  }
  ion-accordion-group ion-accordion {
    border: 3px solid #e5e9ef;
    margin-top: 10px;
    border-radius: 10px;
  }
  ion-accordion-group ion-accordion .content {
    padding-bottom: 10px;
    font-size: 14px;
  }
  .sign {
    margin: 20px;
    --background: #39bd86;
    min-height: 50px;
    font-size: 1.2em;
    text-transform: capitalize;
  }
  .sign a {
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 420px) {
    .sport-card ion-label {
      font-size: 0.8em;
    }
  }
  @media (min-width: 767px) {
    .card ion-card ion-slides ion-img {
      height: 400px !important;
    }
  }
</style>