<template>
  <div class="grid">
    <img src="/coupons-circlek.svg" alt="" class="w-1/2 m-auto py-6" />
    <p
      class="mx-auto w-4/5 pb-4 text-sm px-16"
      style="color: rgb(153, 153, 153); font-family: Gotham Light, sans-serif"
    >
      The coupons you’ve earned have been collected here for your convenience.
      Be sure to take note of the expiration date. <br /><br />

      You can save the link to this page by adding it to your homescreen or
      wallet. Any future prizes and offers will appear here so be sure to check
      back. Do not share this link with others unless using the gifting function
      for a specific prize. <br /><br />

      MAXIMUM 3 ACTIONS PER DAY: Includes redemptions in-store, sending a gift,
      and receiving a gift.
    </p>
    <div
      style="background-color: rgb(220, 41, 30); border-bottom: 1px solid white"
      class="grid justify-center items-center py-6"
    >
      <h1
        class="text-white text-5xl font-extrabold"
        style="font-family: Gotham Black"
      >
        PRIZES
      </h1>
    </div>
    <div
      style="
        /*background-color: rgb(245, 245, 245);*/
        background: linear-gradient(rgb(215, 39, 44), rgb(248, 180, 72)) 0% 0% /
          cover; /*background: linear-gradient(rgb(249, 56, 39), rgb(232, 193, 195)) 0% 0% / cover;*/
      "
    >
      <div v-for="item in items" :key="item.id">
        <Item
          :imageSrc="item.imageSrc"
          :title="item.title"
          :subTitle="item.subTitle"
          :description="item.description"
          :id="item.id"
          :location="item.location"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { productList } from "~/typings/index";

export default defineComponent({
  data() {
    return {
      items: productList,
    };
  },
  created() {
  
    axios.get("https://api.ipify.org?format=json")
      .then((response) => {
        const ipAddress = response.data.ip || "No IP address found.";
        console.log(`IP Address: ${ipAddress}`);


      })
      .catch((error) => {
        console.error("Failed to obtain IP address", error);
      });
  },
});
</script>

