<script setup>
import { onMounted } from "vue";
import { getContacts } from "../../lib/api/ContactApi";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

const contacts = ref([]);
const token = useLocalStorage("token", "");

const getAllContacs = async () => {
  try {
    const res = await getContacts(token.value);
    const resBody = await res.json();
    contacts.value = resBody.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getAllContacs();
});
</script>

<template>
  <div class="container mx-auto max-w-6xl">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h1 class="text-white font-bold text-xl">Contacts List</h1>
      </div>
      <RouterLink to="/dashboard/contacts/create">
        <button
          type="submit"
          class="px-3 py-2 md:px-4 md:py-3 bg-gradient text-white rounded-lg hover:opacity-90 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center"
        >
          <i class="fas fa-plus-circle mr-2"></i> Add Contact
        </button>
      </RouterLink>
    </div>
    <hr class="text-white my-3 opacity-50" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div
        v-for="contact in contacts"
        :key="contact.id"
        class="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      >
        <h2 class="text-lg font-semibold text-gray-800 mb-1">
          {{ contact.first_name }} {{ contact.last_name }}
        </h2>
        <p class="text-sm text-gray-600">📧 {{ contact.email }}</p>
        <p class="text-sm text-gray-600 mt-1">📞 {{ contact.phone }}</p>
      </div>
    </div>
  </div>
</template>
