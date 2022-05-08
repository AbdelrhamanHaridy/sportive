<template>
  <ion-segment value="standard" v-model="segmant" @ionChange="segmentChanged($event)" color="secondary">
    <ion-segment-button value="standard">
      <ion-label>Standard</ion-label>
    </ion-segment-button>
    <ion-segment-button value="second">
      <ion-label>Hybrid</ion-label>
    </ion-segment-button>
    <ion-segment-button value="third">
      <ion-label>Satellite</ion-label>
    </ion-segment-button>
    <ion-segment-button value="fourth">
      <ion-label>Satellite</ion-label>
    </ion-segment-button>
  </ion-segment>

  <ion-content>
    
    <div class="step" v-show="segmant == 'standard'">
      <div class="content">
        <h3 class="ion-margin-bottom">Choose gender</h3>
        <ion-radio-group>
          <ion-item lines="none">
            <ion-img class="ion-margin-end" src="./assets/img/male.png"></ion-img>
            <ion-label>Male</ion-label>
            <ion-radio color="primary" value="male"></ion-radio>
          </ion-item>

          <ion-item lines="none">
            <ion-img class="ion-margin-end" src="./assets/img/female.png"></ion-img>
            <ion-label>Female</ion-label>
            <ion-radio color="primary" value="female"></ion-radio>
          </ion-item>

        </ion-radio-group>
      </div>
      <div class="first">
        <ion-button shape="round" v-on:click="second()">Next</ion-button>
      </div>
    </div>
    <div class="step" v-show="segmant == 'second'">
      <div class="content content-date">
        <h3 class="ion-margin-bottom">Select Birth Date</h3>
        <ion-datetime presentation="date">
          <div slot="title"></div>
        </ion-datetime>
      </div>
      <div class="buttons">
        <ion-button shape="round" v-on:click="first()">prev</ion-button>
        <ion-button shape="round" v-on:click="third()">Next</ion-button>
      </div>
    </div>
    <div class="step" v-show="segmant == 'third'">
      <div class="content content-weight">
        <h3 class="ion-margin-bottom">Select goal weight</h3>
        <div class="weight">
          <div class="weight-model">
            <ion-input class="ion-margin-end" type="number"></ion-input>
            <ion-label>Kg</ion-label>
          </div>
        </div>
      </div>
      <div class="buttons">
        <ion-button shape="round" v-on:click="second()">prev</ion-button>
        <ion-button shape="round" v-on:click="fourth()">Next</ion-button>
      </div>
    </div>
    <div class="step" v-show="segmant == 'fourth'">
      <div class="content content-height">
        <h3>Type Your Height</h3>
        <div class="height">
          <div class="height-model">
            <ion-input class="ion-margin-end" type="number"></ion-input>
            <ion-label>Cm</ion-label>
          </div>
        </div>
      </div>
      <div class="first">
        <ion-button shape="round" v-on:click="third()">prev</ion-button>
        <ion-button shape="round">Submit</ion-button>
      </div>
    </div>
  </ion-content>
  

</template>

<script lang="ts">
import { IonSegment, IonSegmentButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: { IonSegment, IonSegmentButton },
  methods: {
    segmentChanged(ev: CustomEvent) {
      this.segmant = ev.detail.value;
    },
    first() {
      this.segmant = 'standard';
    },
    second() {
      this.segmant = 'second';
    },
    third() {
      this.segmant = 'third';
    },
    fourth() {
      this.segmant = 'fourth';
    },
  },
  setup() {
    const segmant = ref("standard");
    return {
      segmant,
    }
  },
});
</script>

<style scoped>
  .step {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  ion-segment {
    display: none;
  }
  ion-button {
    width: 48%;
  }
  .first ion-button {
    width: 96%;
  }
  ion-button {
    --background: #39bd86 !important;
    font-size: 1em;
    text-transform: capitalize;
  }
  .content ion-radio-group ion-item {
    border: 2px solid #e5e9ef;
    margin: 20px 10px;
    border-radius: 10px;
    padding: 6px;
  }
  .item-radio-checked {
    border: 2px solid #39bd86 !important;
  }
  ion-item ion-img {
    width: 50px;
    height: 50px;
  }
  .content-date {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .content .ion-color-primary {
    --ion-color-base: #39bd86 !important;
  }
  .content-weight ion-segment, .content-height ion-segment {
    display: flex;
    width: 50%;
    margin: 20px auto;
  }
  .content-weight .weight .weight-model,
  .content-height .height .height-model {
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-weight .weight .weight-model ion-input,
  .content-height .height .height-model ion-input {
    border: 1px solid #e5e9ef;
    border-radius: 5px;
    max-width: 100px;
  }
  .content-weight .weight .weight-model ion-label,
  .content-height .height .height-model ion-label {
    color: #232323;
    font-size: 1.2em;
    font-weight: 600;
  }
</style>