<template lang="">
  <div
    class="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4"
  >
    <RouterView />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const token = localStorage.getItem("token");

const router = useRouter();
if (token !== "") {
  router.push({
    path: "/dashboard",
  });
}
</script>
