import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Categorias from './views/Categorias.vue'
import Grid from './views/Grid.vue'
import Cadastro from './views/Cadastro.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        // {
        //     path: '/categoria',
        //     name: 'categoria',
        //     component: Categorias
        // },
        {
            path: '/grid',
            name: 'grid',
            component: Grid
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: Cadastro
        },
    ]
})
