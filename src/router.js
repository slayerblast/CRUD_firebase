import {createWebHistory, createRouter} from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Home from "@/components/Home.vue";
import Player from "@/components/Player.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            name: 'home',
            component: Home,
        },
        {
            path: "/login",
            name: 'login',
            component: Login,
        },
        {
            path: "/register",
            name: 'register',
            component: Register,
        },
        {
            path: "/player",
            name: 'player',
            component: Player,
        },
    ]
})

export default router;