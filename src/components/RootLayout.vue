<script setup>
import { useLocalStorage } from "@vueuse/core";
import { useRouter } from "vue-router";

const token = useLocalStorage("token", "");
const router = useRouter();

if (!token.value || token.value === "") {
  router.push({
    path: "/login",
  });
} else {
  router.push({
    path: "/dashboard",
  });
}
</script>
<template>
  <div>
    <RouterView />
  </div>
</template>
