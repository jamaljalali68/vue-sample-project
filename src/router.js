import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue';

import TemplateUser from './components/pages/users/Template.vue';
import IndexUser from './components/pages/users/Index.vue';
import ShowUser from './components/pages/users/Show.vue';

import TemplatePost from './components/pages/posts/Template.vue';
import IndexPost from './components/pages/posts/Index.vue';
import ShowPost from './components/pages/posts/Show.vue';
import CreatePost from './components/pages/posts/Create.vue';
import EditPost from './components/pages/posts/Edit.vue';

const routes = [
    { path: "/", name: "home", component: Home },
    {
        path: "/users",component: TemplateUser, children: [
            { path: "", name: "users", component: IndexUser },
            { path: ":id", name: "userId", component: ShowUser }
        ]
    },
    {
        path: "/posts", component: TemplatePost, children: [
            { path: "", name: "posts", component: IndexPost },
            { path: ":id", name: "postId", component: ShowPost },
            { path: "create", name: "createPost", component: CreatePost },
            { path: "edit/:id", name: "editPost", component: EditPost }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;