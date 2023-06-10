<template>
  <div class="grid grid-cols-2 items-center py-2">
    <img class="h-52 m-auto" :src="imageSrc" alt="" />
    <div class="grid">
      <h1 class="text-5xl font-black h-10" style="color: #fff">{{ title }}</h1>
      <p class="font-black text-xl pt-2" style="color: #fff; line-height: 115%">
        {{ subTitle }}
      </p>
      <p class="font-extralight pb-2" style="color: #fff">{{ description }}</p>
      <NuxtLink :to="`/redeem/${id}`">
        <button
          :id="id"
          class="rounded-xl grid items-center justify-center mb-2 font-extralight text-xl coupon-view"
          style="
            border: 1px solid rgb(44, 44, 44);
            height: 45px;
            width: 200px;
            color: rgb(44, 44, 44);
          "
        >
          VIEW
        </button>
      </NuxtLink>
      <p style="color: #fff" class="redeemed-by text-xs pb-2">
        {{ redeemedByDate }}
      </p>
    </div>
    <h1
      style="color: rgb(220, 41, 30); background-color: #fff"
      class="font-black text-xl text-center col-span-2 py-1 mx-8"
    >
      {{ location }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  computed: {
    redeemedByDate(): string {
      const currentDate = new Date();
      const redeemByDate = new Date(
        currentDate.getTime() + 10 * 24 * 60 * 60 * 1000
      );
      const options: any = {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "America/New_York",
      };
      return `Must be redeemed by ${redeemByDate.toLocaleString(
        "en-US",
        options
      )}`;
    },
  },
});
</script>
