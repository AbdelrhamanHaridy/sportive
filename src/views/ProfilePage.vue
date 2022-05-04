<template>
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
  
</template>

<script>
export default {

}
</script>

<style>
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
    --background: #663ab7;
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
  }
  .feat-card .content {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .feat-card .content i {
    color: #663ab7;
  }
  .feat-card .content p {
    font-size: 1.1em;
    color: #232323;
    font-weight: 600;
    margin-bottom: 0;
  }
</style>