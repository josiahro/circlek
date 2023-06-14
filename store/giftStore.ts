import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

interface Gift {
  slug: string;
  redeemed: boolean;
  createdAt: string;
}

export const useGiftStore = defineStore('gift', {
  state: () => ({
    gifts: [] as Gift[],
  }),
  actions: {
    createGift(): Gift {
      const gift: Gift = {
        slug: nanoid(),
        redeemed: false,
        createdAt: dayjs().toISOString(),
      };
      this.gifts.push(gift);
      return gift;
    },
    deleteGift(slug: string): void {
      const index = this.gifts.findIndex((gift) => gift.slug === slug);
      if (index !== -1) {
        this.gifts.splice(index, 1);
      }
    },
    isGiftSlugValid(slug: string): boolean {
      const gift = this.gifts.find((gift) => gift.slug === slug);
      if (gift && !gift.redeemed) {
        const now = dayjs();
        const createdAt = dayjs(gift.createdAt);
        const cooldownPeriod = 2; // Cooldown period in days
        return now.diff(createdAt, 'day') >= cooldownPeriod;
      }
      return false;
    },
    redeemGift(slug: string): boolean {
      const gift = this.gifts.find((gift) => gift.slug === slug);
      if (gift && !gift.redeemed) {
        gift.redeemed = true;
        return true;
      }
      return false;
    },
  },
});
