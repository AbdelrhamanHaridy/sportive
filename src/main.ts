import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import TapComponent from './Components/TapComponent.vue';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2O4ail29Z7iFqJbM6pUx7AL6IYVQmaMo",
  authDomain: "sportive-1d980.firebaseapp.com",
  projectId: "sportive-1d980",
  storageBucket: "sportive-1d980.appspot.com",
  messagingSenderId: "667807316246",
  appId: "1:667807316246:web:5f1f14427ce8cc5050f837",
  measurementId: "G-9MRSG2SEGE"
};


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});