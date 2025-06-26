<template>
  <div></div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getContact } from "../../lib/api/ContactApi";
import { useLocalStorage } from "@vueuse/core";
import { onBeforeMount } from "vue";

const route = useRoute();
const token = useLocalStorage("token", "");
const { id } = route.params;

const fetchContactDetail = async () => {
  try {
    const res = await getContact(token.value, id);
    const resBody = await res.json();
    console.log(resBody);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(async () => {
  await fetchContactDetail();
});
</script>
