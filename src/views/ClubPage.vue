<template>
    <ion-app>
 <ion-content>
    <ion-grid>
      <ion-row>

        <ion-col size="5">
          <i class="fa-solid fa-arrow-left-long"></i>
        </ion-col>
        <ion-col size="7" >All Clubs </ion-col>

      </ion-row>

          <ion-col  size="12"> 
              <ion-card  class="ion-card "	>
          <img class="img" src="/assets/img/ken-russo-IrWOJ1F5Tv4-unsplash.jpg" />
              </ion-card>
         </ion-col>
    <ion-row>
         <ion-col size="6"> 
         <ion-card>
          <img class="img-height" src="/assets/img/braden-collum-9HI8UJMSdZA-unsplash.jpg" />
          <ion-card-header>
            <ion-card-title>Running </ion-card-title>
            <ion-card-subtitle>
                <p>Wembley Stadium</p>
                </ion-card-subtitle>
          </ion-card-header>
   
        </ion-card>
         </ion-col>
        <ion-col size="6"> 
        <ion-card>
          <img class="img-height" src="/assets/img/cristina-anne-costello-rank-Px49iI-unsplash.jpg" />
          <ion-card-header>
            <ion-card-title>Madison, WI</ion-card-title>
            <ion-card-subtitle><p>Old Trafford</p></ion-card-subtitle>
          </ion-card-header>
   
        </ion-card>
         </ion-col>
               <ion-col size="6"> 
        <ion-card>
          <img class="img-height" src="/assets/img/gentrit-sylejmani-JjUyjE-oEbM-unsplash.jpg" />
          <ion-card-header>
            <ion-card-title>Madison, WI</ion-card-title>
            <ion-card-subtitle><p>Santiago Bernabéu Stadium</p></ion-card-subtitle>
          </ion-card-header>
   
        </ion-card>
         </ion-col>
        <ion-col size="6"> 
        <ion-card>
          <img class="img-height" src="/assets/img/miguel-teirlinck-VDkRsT649C0-unsplash.jpg" />
          <ion-card-header>
            <ion-card-title>Madison, WI</ion-card-title>
            <ion-card-subtitle><p>Maracanã Stadium</p></ion-card-subtitle>
          </ion-card-header>

        </ion-card>
         </ion-col>
              <ion-col size="6"> 
        <ion-card>
          <img class="img-height" src="/assets/img/victor-freitas-hOuJYX2K5DA-unsplash.jpg" />
          <ion-card-header>
            <ion-card-title>Madison, WI</ion-card-title>
            <ion-card-subtitle><p>Allianz Arena</p></ion-card-subtitle>
          </ion-card-header>
   
        </ion-card>
         </ion-col>
              <ion-col size="6"> 
        <ion-card>
          <img class="img-height" src="/assets/img/wesley-tingey-dKCKiC0BQtU-unsplash.jpg" />
          <ion-card-header>
            <ion-card-title>Madison, WI</ion-card-title>
            <ion-card-subtitle><p>San Siro Stadium</p></ion-card-subtitle>
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

export default defineComponent({
  components: { IonCol, IonGrid, IonRow  },

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
    font-size: 17px;
}
p{
    font-size: 12px;
    color: #39bd86;
    font-weight: 700;
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
</style>