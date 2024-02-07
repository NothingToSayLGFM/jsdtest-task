<template>
  <v-form @submit.prevent="store.getDataList">
    <v-container>
      <v-row>
        <v-col xs="12" sm="12" md="12" lg="11">
          <v-text-field
            label="search"
            variant="solo-filled"
            hide-details="auto"
            v-model="store.searchVal"
          />
        </v-col>
        <v-col xs="12" sm="12" md="12" lg="1">
          <v-btn
            class="form-btn"
            color="primary"
            type="submit"
            size="large"
            :loading="store.isLoading"
            >Submit</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { useJsdelivrData } from "../../stores/api";

const store = useJsdelivrData();
</script>

<style lang="scss" scoped>
.v-form {
  :deep(.form-btn) {
    width: 100%;
    height: 100%;
  }
}
</style>
