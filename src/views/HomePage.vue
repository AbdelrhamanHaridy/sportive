<template>
  <ion-slides pager="true" :options="slideOpts">
    <ion-slide>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci temporibus eveniet saepe. Veniam, similique! Assumenda, at dolorum explicabo totam pariatur, architecto dicta suscipit accusamus corporis, tenetur distinctio. Libero, dolores non?</p>
    </ion-slide>
    <ion-slide>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci temporibus eveniet saepe. Veniam, similique! Assumenda, at dolorum explicabo totam pariatur, architecto dicta suscipit accusamus corporis, tenetur distinctio. Libero, dolores non?</p>
    </ion-slide>
    <ion-slide>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci temporibus eveniet saepe. Veniam, similique! Assumenda, at dolorum explicabo totam pariatur, architecto dicta suscipit accusamus corporis, tenetur distinctio. Libero, dolores non?</p>
    </ion-slide>
  </ion-slides>
</template>


<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>