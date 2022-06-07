<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        
        <ion-title>Club</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-grid>
      <ion-row>


        <ion-searchbar></ion-searchbar>

      </ion-row>

          <ion-col  size="12"> 
              <ion-card  class="ion-card">
          <img class="img" src="/assets/img/ken-russo-IrWOJ1F5Tv4-unsplash.jpg" />
              </ion-card>
         </ion-col>
    <ion-row>
         <ion-col size="6"
         v-for="posts in data" :key="posts.id"
         > 
         <ion-card>
          <img class="img-height" :src="posts.url" />
          <ion-card-header>
            <ion-card-title>{{posts.id}} </ion-card-title>
            <ion-card-title>{{posts.title}} </ion-card-title>
            <ion-card-subtitle>
                <p>{{posts.des}}</p>
                </ion-card-subtitle>
                
   <ion-button >See Club</ion-button>
          </ion-card-header>

        </ion-card>
         </ion-col>
      </ion-row>
      
    </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import JsonPosts from "../../public/assets/club_posts.json";

export default defineComponent({
  name: 'Tab2Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data(){
  return{
    data:JsonPosts
  }
}
});
</script>
<style scoped>
.ion-card{
box-shadow:none
}
.img{
border-radius: 15px;
}
ion-card-title{
    font-size: 12px;
    padding: 0 0 10px;
}
p{
  font-size: 8px;
    color: #39bd86;
    width: 125px;
    height: 105px;
    overflow: hidden;
    }
ion-button{
  font-size: 14px;
}
.img-height {
  height: 500px;
  width: 100%;
}
@media (max-width:1200px) {
  .img-height {
    height: 400px;
  }
}
@media (max-width:900px) {
  .img-height {
    height: 300px;
  }
}
@media (max-width:720px) {
  .img-height {
    height: 180px;
  }
}
@media (max-width:600px) {
  .img-height {
    height: 140px;
  }
}
ion-searchbar {
  margin: 0 auto;
  --background: #eee;
  --border: none;
  --box-shadow: none;
  --border-radius: 20px;
}
.rout-link {
  color: #232323;
}
</style>