<template>
    <div class="w-4/5 m-auto rounded-lg bg-white" style="border: 0.1rem solid rgb(220, 41, 30); position: fixed; left: 10vw; top: 15vh;">
      <h1 style="font-weight: Gotham Black;/*rgb(220, 41, 30)*/ color: rgb(220, 41, 30);" class="text-3xl mx-auto text-center font-extrabold rounded p-4">REDEEM COUPON</h1>
      <div class="grid bg-white m-3">
        <p class="font-extralight text-sm" style="color: rgb(44, 44, 44);">Must be redeemed in front of cashier.</p>
        <br>
        <p class="font-extralight text-sm" style="color: rgb(44, 44, 44)">Pushing the Redeem button will begin a 5 minute timer and reveal the coupon code for the cashier to use.</p>
        <br>
        <p class="font-extralight text-sm" style="color: rgb(44, 44, 44)">Once the 5-minute timer is up, the coupon will expire and cannot be reused. In order to be valid, the countdown timer must be counting down with the current date and time when scanned.</p>
      </div>
  
      <div class="mb-3 bg-white">
        <button @click="redeem" :id="product" class="rounded-lg grid items-center justify-center mb-2 font-extralight text-xl coupon-view mx-auto mt-5 redeem-btn" style="height: 40px; width: 200px; color: white; font-family: Gotham Black; background-color: rgb(220, 41, 30);">
          REDEEM
        </button>
        <button id="cancel" class="rounded-lg grid items-center justify-center mb-2 font-extralight text-xl coupon-view mx-auto mt-2" style="border: 1px solid rgb(153, 153, 153); height: 40px; width: 200px; color: rgb(220, 41, 30); font-family: Gotham Black; background-color: rgb(220, 41, 30)">
          CANCEL
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: String,
        required: true,
      },
    },
    methods: {
      redeem() {
        this.$emit('redeem-coupon', this.product);
      },
    },
  };
  </script>
  