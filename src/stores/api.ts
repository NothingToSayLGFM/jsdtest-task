import { computed, ref } from "vue";
import { defineStore } from "pinia";

import api from "../api/index";

export const useJsdelivrData = defineStore("api", () => {
  const searchVal = ref<string>("");

  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const dataList = ref<Array<any>>([]);

  const isModalError = ref<boolean>(false);
  const isModalLoading = ref<boolean>(false);
  const detail = ref<any>(null);

  const currentPage = ref<number>(1);
  const total = ref<number>(0);

  const getDataList = async (): Promise<void> => {
    try {
      isError.value = false;
      isLoading.value = true;
      const list = await api.searchData(searchVal.value, 10, currentPage.value);
      dataList.value = list.data;
      total.value = list.total;
    } catch {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };
  const getDetails = async (name: string): Promise<void> => {
    try {
      isModalError.value = false;
      isModalLoading.value = true;
      const data = await api.getDetails(name);
      detail.value = data;
    } catch {
      isModalError.value = true;
    } finally {
      isModalLoading.value = false;
    }
  };

  const calcTotal = computed(() => {
    if (total.value > 10) {
      return Math.floor(total.value / 10);
    }
    return total;
  });

  return {
    isLoading,
    isError,
    dataList,
    getDataList,
    getDetails,
    isModalError,
    isModalLoading,
    detail,
    currentPage,
    searchVal,
    total,
    calcTotal,
  };
});
