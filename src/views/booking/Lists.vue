<template>
  
    <ion-page>
        <ion-content>
            
            <div class="flex w-full flex-col overflow-auto">
                <div class="mt-2">
                    <ion-row>
      <ion-col size="5">
        <a href="/club" class="rout-link">
          <i class="fa-solid fa-lg fa-arrow-left-long"></i>
        </a>
      </ion-col>
      <ion-col size="7" >All Sport</ion-col>
    </ion-row>
                </div>
    
                <div class="flex w-full flex-row flex-wrap justify-around mt-2">
    
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'All'}">
                            <ion-card-header>
    
                                <ion-icon :icon="clipboard" color="primary" size="large"></ion-icon>
    
                            </ion-card-header>
    
                            <ion-card-content>
                                <ion-card-title class="text-2xl">All</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfAllTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
    
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'Work'}">
                            <ion-card-header>
                            <i class="fa-solid fa-basketball fa-2x" style="color:peru"></i>
    
                            </ion-card-header>
    
                            <ion-card-content>
                                <ion-card-title class="text-2xl">Baskeball</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfWorkTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'Music'}">
                            <ion-card-header>
                    <i class="fa-solid fa-dumbbell fa-2x" style="color: #1f2937;"></i>
    
                            </ion-card-header>
    
                            <ion-card-content>

                                <ion-card-title class="text-2xl">Gym</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfMusicTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'Travel'}">
                            <ion-card-header>
    
                                <i class="fa-solid fa-table-tennis-paddle-ball fa-2x" style="color: #f87171;"></i>
                            </ion-card-header>
    
                            <ion-card-content>
                                <ion-card-title class="text-2xl">Bang Bong</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfTravelTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
    
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'Study'}">
                            <ion-card-header>
    
                                <i class="fa-solid fa-person-swimming fa-2x" style="color: #4c8dff;"></i>
                            </ion-card-header>
    
                            <ion-card-content>
                                <ion-card-title class="text-2xl">Swim</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfStudyTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
    
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'House'}">
                            <ion-card-header>
                            <i class="fa-solid fa-person-running fa-2x"  style="color:#2DD4BF"></i>
    
                            </ion-card-header>
    
                            <ion-card-content>
                                <ion-card-title class="text-2xl">Running</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfHouseTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
    
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'Sport'}">
                            <ion-card-header>
    
                                <ion-icon :icon="football" size="large" class="text-gray-900"></ion-icon>
    
                            </ion-card-header>
    
                            <ion-card-content>
                                <ion-card-title class="text-2xl">Sport</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfSportTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
    
                    <ion-card class="w-2/5">
                        <router-link :to="{name:'Shopping'}">
                            <ion-card-header>
                         <i class="fa-solid fa-volleyball fa-2x" style="color:#115E59"></i>
    
                            </ion-card-header>
    
                            <ion-card-content>
                                <ion-card-title class="text-2xl">Volleyball</ion-card-title>
                                <ion-card-subtitle>{{state.lengthOfShoppingTasks}} Appointment</ion-card-subtitle>
                            </ion-card-content>
    
                        </router-link>
                    </ion-card>
    
                </div>
    
                <div>
                    <ion-fab @click="isOpenNewTask = true" vertical="bottom" horizontal="end" slot="fixed">
                        <ion-fab-button>
                            <ion-icon :icon="add"></ion-icon>
                        </ion-fab-button>
                    </ion-fab>
    
                    <ion-modal 
                    :is-open="isOpenNewTask"
                    :backdrop-dismiss="false">
                            
                        <new-task @closeModal="isOpenNewTask = false"></new-task>    
                    </ion-modal>
                </div>
    
    
            </div>        
        </ion-content>
    </ion-page>

</template>

<script>

import {computed, defineComponent ,onMounted,ref,reactive} from 'vue';
import { IonPage,IonCard,IonCardHeader,IonIcon,IonCardContent,IonCardTitle,
IonCardSubtitle,IonFab,IonFabButton,IonModal} from '@ionic/vue';
import { clipboard,briefcase,headset,airplane,book,house,football,cart,add } from 'ionicons/icons'; 
import NewTask from '@/components/NewTask.vue';
import {useStore} from 'vuex';
export default defineComponent({

    components:{
       IonPage,IonCard,IonCardHeader,IonIcon,IonCardContent,
       IonCardTitle,IonCardSubtitle,IonFab,IonFabButton,IonModal,
        NewTask 
    },

    setup(){

        const isOpenNewTask = ref(false);
        const store = useStore();
        const state = reactive({
            lengthOfAllTasks: computed(() => {
                return store.state.tasks.length;
            }),
            lengthOfWorkTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Work');
            }),
            lengthOfMusicTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Music');
            }),
            lengthOfTravelTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Travel');
            }),
            lengthOfStudyTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Study');
            }),
            lengthOfHouseTasks: computed(() => {
                return store.getters.lengthTasksByCategory('House');
            }),
            lengthOfSportTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Sport');
            }),
            lengthOfShoppingTasks: computed(() => {
                return store.getters.lengthTasksByCategory('Shopping');
            }),


        })

        function getTasks(){
            store.commit('getTasks');
        }

        onMounted(() => {
            if (store.state.tasks.length == 0) {
                getTasks();
            }
        })
        return{
            isOpenNewTask,store,state,getTasks,
            clipboard,briefcase,headset,airplane,book,house,football,cart,add
        }
    }

})
</script>

<style>

</style>