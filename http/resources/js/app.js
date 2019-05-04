
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import './bootstrap';
import Vuetify from 'vuetify';
import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';

// 라우트파일
import Routes from './routes/routes.js';

//컴포넌트 파일
import App from "./views/App";

Vue.use(Vuetify);

export const eventBus = new Vue({
    methods:{
        listUpdate(index, memo){
            this.$emit("listUpdate", index, memo);
        }
    }
});

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});