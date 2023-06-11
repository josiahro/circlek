// @ts-nocheck
import { defineStore } from "pinia";
import dayjs from "dayjs";

export const useProductStore = defineStore("product", {
  state: () => ({
    redeemedProducts: {} as { [key: string]: string[] },
  }),

  actions: {
    redeemProduct(id: string, currentTime: string): void {
      if (!this.redeemedProducts[id]) {
        this.redeemedProducts[id] = [];
      }

      this.redeemedProducts[id].push(currentTime);
    },
    getTotalRedemptionsToday(): number {
      const currentDate = dayjs().format("YYYY-MM-DD");
      let totalRedemptions = 0;

      for (const productId in this.redeemedProducts) {
        const redeemedToday = this.redeemedProducts[productId].filter(
          (date) => dayjs(date).isSame(currentDate, "day")
        );

        totalRedemptions += redeemedToday.length;
      }

      return totalRedemptions;
    },
  },
  persist: true,
});
