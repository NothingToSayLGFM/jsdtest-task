<template>
  <Header />
  <main class="main">
    <SearchBar />
    <DataTable />
    <v-pagination
      v-if="Number(store.calcTotal) > 10"
      :total-visible="5"
      :length="Number(store.calcTotal)"
      v-model="store.currentPage"
      @update:modelValue="store.getDataList"
    ></v-pagination>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import SearchBar from "./components/Search/SerachBar.vue";
import DataTable from "./components/Table/DataTable.vue";
import Footer from "./components/Footer/Footer.vue";

import { useJsdelivrData } from "./stores/api";

const store = useJsdelivrData();
</script>

<style scoped lang="scss">
.main {
  height: 100%;
}
</style>
