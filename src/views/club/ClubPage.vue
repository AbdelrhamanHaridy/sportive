<template>
<ion-app>
 <ion-content>
    <ion-grid>
      <ion-row>

        <ion-col size="5">
          <a href="/Running" class="rout-link">
            <i class="fa-solid fa-lg fa-arrow-left-long"></i>
          </a>
        </ion-col>
        <ion-col size="7" >All Clubs </ion-col>

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
                
            <ion-button >
              <router-link to="/club/123">See Club</router-link>
              </ion-button>

          </ion-card-header>

        </ion-card>
         </ion-col>
      </ion-row>
      
    </ion-grid>

 </ion-content>
     </ion-app>

</template>

<script lang="ts">
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import JsonPosts from "../../../public/assets/club_posts.json";
export default defineComponent({
  components: { IonCol, IonGrid, IonRow  },
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