import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Aura from "@primevue/themes/aura";
import InputText from "primevue/inputtext";
import InputOtp from "primevue/inputotp";
import Card from 'primevue/card';
import router from "./router";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.component("Card", Card);
app.component("InputOtp", InputOtp);
app.component("InputText", InputText);
app.component("Button", Button);

app.mount("#app");
