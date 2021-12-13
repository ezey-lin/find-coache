import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/coaches",
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/coaches",
    name: "coaches",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/coaches/CoachesList.vue"
      ),
  },
  {
    path: "/coaches/:id",
    name: "coach",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/coaches/CoachDetail.vue" //coaches/c1/contact
      ),
    children: [
      //coaches/c1/contact
      {
        path: "contact",
        name: "contact",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../pages/requests/ContactCoach.vue"
          ),
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/coaches/CoachRegister.vue"
      ),
  },
  {
    path: "/requests",
    name: "requests",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../pages/requests/RequestsReceive.vue"
      ),
  },
  {
    path: "/:notFound(.*)",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
