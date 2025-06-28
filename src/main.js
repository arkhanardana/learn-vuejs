import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Layout from "./components/Layout.vue";
import UserRegister from "./components/User/UserRegister.vue";
import UserLogin from "./components/User/UserLogin.vue";
import DashboardLayout from "./components/DashboardLayout.vue";
import ContactList from "./components/Contact/ContactList.vue";
import ContactCreate from "./components/Contact/ContactCreate.vue";
import ContactDetail from "./components/Contact/ContactDetail.vue";
import UserProfile from "./components/User/UserProfile.vue";
import UserLogout from "./components/User/UserLogout.vue";
import ContactEdit from "./components/Contact/ContactEdit.vue";
import AddressCreate from "./components/Address/AddressCreate.vue";

const routes = [
  {
    component: Layout,
    children: [
      {
        path: "/register",
        component: UserRegister,
      },
      {
        path: "/login",
        component: UserLogin,
      },
    ],
  },
  {
    component: DashboardLayout,
    path: "/dashboard",
    children: [
      {
        path: "contacts",
        component: ContactList,
      },
      {
        path: "contacts/create",
        component: ContactCreate,
      },
      {
        path: "contacts/:id",
        component: ContactDetail,
      },
      {
        path: "contacts/:id/addresses/create",
        component: AddressCreate,
      },
      {
        path: "contacts/:id/edit",
        component: ContactEdit,
      },
      {
        path: "users/profile",
        component: UserProfile,
      },
      {
        path: "users/logout",
        component: UserLogout,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
