import axios from "axios";

import type { IApiSchema } from "../types/api";

const npmRegistryUrl = "https://registry.npmjs.com/-/v1";
const jsDelivrUrl = "https://data.jsdelivr.com/v1/packages/npm";

const api = <IApiSchema>{
  searchData: async (text, size, from) => {
    const result = { data: [], total: 0 };
    const { data } = await axios.get(
      `${npmRegistryUrl}/search?text=${text}&size=${size}&from=${from}`
    );
    if ("objects" in data) {
      result.data = data.objects.map((el: any) => el.package.name);
    }
    if ("total" in data) {
      result.total = data.total;
    }
    return result;
  },
  getDetails: async (name) => {
    const { data } = await axios.get(`${jsDelivrUrl}/${name}`);
    return data;
  },
};

export default api;
