require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

window.Vue = require('vue');

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.use(VueAxios, axios);

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    }
];

const router = new VueRouter({mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({router}, App)).$mount('#app');
