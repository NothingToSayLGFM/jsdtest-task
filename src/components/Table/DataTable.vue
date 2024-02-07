<template>
  <v-container>
    <v-table theme="dark" v-if="store.dataList.length && !store.isLoading">
      <thead>
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in store.dataList" :key="`${item}-${index}`">
          <td class="text-center">{{ item }}</td>
          <td class="text-center">
            <v-btn color="success" @click="showDetails(item)">Details</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div v-else-if="store.isLoading" class="text-center bg-black white">
      Loading...
    </div>
    <div v-else-if="store.isError" class="text-center bg-black white">
      Something went wrong, try again
    </div>
    <div v-else class="text-center bg-black white">Nothing found</div>
  </v-container>
  <v-dialog width="500" v-model="dialog">
    <v-card>
      <v-card-text v-if="store.detail && !store.isModalLoading">
        <p>link: {{ store.detail.links.stats }}</p>
        <p>name: {{ store.detail.name }}</p>
        <p>type: {{ store.detail.type }}</p>
        <p>last version: {{ store.detail.tags.latest }}</p>
      </v-card-text>
      <v-card-text v-else-if="store.isModalLoading">
        <p>Loading...</p>
      </v-card-text>
      <v-card-text v-else>
        <p>Something went wrong, try again</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useJsdelivrData } from "../../stores/api";

const store = useJsdelivrData();

const dialog = ref<boolean>(false);

const showDetails = async (val: string) => {
  dialog.value = true;
  await store.getDetails(val);
};
</script>

<style scoped lang="scss"></style>
