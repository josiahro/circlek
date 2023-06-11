<template>
  <div
    class="grid"
    style="
      /*background-color: rgb(245, 245, 245);*/
      background: linear-gradient(rgb(215, 39, 44), rgb(248, 180, 72)) 0% 0% /
        cover; /*background: linear-gradient(rgb(249, 56, 39), rgb(232, 193, 195)) 0% 0% / cover;*/
    "
  >
    <NuxtLink to="/">
      <img
        src="/ck-logo-white-no-box.svg"
        style="height: 60px"
        class="ml-8 mb-8"
        alt=""
      />
    </NuxtLink>
    <img
      id="product-image"
      :src="getProductImagePath(id)"
      class="w-4/6 mx-auto"
      alt=""
    />
    <h1
      id="free"
      class="text-6xl font-extrabold mx-auto pt-3"
      style="color: #fff"
    >
      FREE
    </h1>
    <p
      id="item"
      class="mx-auto text-center text-white text-4xl font-bold uppercase w-4/5"
    >
      {{ getItemTitle(id) }}
    </p>

    <p id="desc" class="pt-3 text-md text-center text-gray-200">
      {{ getDesc(id) ? getDesc(id) : "" }}
    </p>

    <p
      id="redeemed-by"
      class="w-5/6 mx-auto text-center pt-3 font-light uppercase mt-3"
      style="color: #fff"
    >
      {{ redeemedByDate }}
    </p>

    <p
      style="color: #fff; font-size: 0.6rem"
      class="text-xs mx-auto w-5/6 font-light mt-4"
    >
      Each coupon can be used once, only three coupons can be redeemed per
      customer per day. No cash value. Cannot be combined with any other offer.
    </p>

    <h1
      style="color: rgb(220, 41, 30); background-color: #fff"
      class="font-black text-xl text-center mx-8 mt-5"
    >
      FOR USE IN ONTARIO
    </h1>
    <div class="grid grid-cols-2 justify-end mx-4">
      <button
        id="itemid"
        v-if="canRedeem(id)"
        @click="redeemItem(id)"
        class="rounded-xl grid items-center justify-center mb-2 font-light text-xl coupon-view mx-auto mt-5 w-5/6"
        style="
          border: 1px solid rgb(153, 153, 153);
          height: 45px;
          color: rgb(153, 153, 153);
        "
      >
        REDEEM
      </button>

      <button
      
        v-else
        class="rounded-xl grid items-center justify-center mb-2 font-light text-xl coupon-view mx-auto mt-5 w-5/6"
        style="
          border: 1px solid rgb(153, 153, 153);
          height: 45px;
          color: rgb(153, 020, 153);
        "
      >
        REDEEMED
      </button>

      <button
        id="itemid"
        class="rounded-xl grid items-center justify-center mb-2 font-light text-xl coupon-view mx-auto mt-5 w-5/6"
        style="
          border: 1px solid rgb(153, 153, 153);
          height: 45px;
          color: rgb(153, 153, 153);
        "
      >
        GIFT
      </button>
    </div>

    <p class="w-4/5 mx-auto mt-3 text-xs pb-5 font-medium" style="color: #fff">
      Want to gift your coupon to someone else instead of using it yourself?
      Just press "gift" to reveal a secret link that you can send to someone
      else. Make sure they have a mobile phone number with access to data.
      Please note, a maximum of (3) three Instant Win prizes can be redeemed per
      day.

      <br />
      <br />
      Must be redeemed in front of cashier. Pushing the Redeem button will begin
      a 5-minute timer and reveal the coupon code for the cashier to use. Once
      the 5-minute timer is up, this coupon will expire and cannot be reused. In
      order to be valid, the countdown timer must be counting down. Valid only
      at participating Circle K and Mac’s stores in Canada.
    </p>
    <div
      style="background-color: rgb(237, 140, 88); /*rgb(99, 203, 180)*/"
      class="w-full grid grid-cols-2 items-center p-5"
    >
      <p class="text-white font-extrabold text-xs">
        Contact | Circle K Privacy Policy
      </p>
      <img
        class="h-10 flex justify-self-end"
        src="/ck-logo-white-no-box.svg"
        alt=""
      />
    </div>
    <CouponModal
      v-if="showModal"
      :product="modalProduct"
      @redeem-coupon="handleRedeemCoupon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "~/store/productStore.js";
import dayjs from "dayjs";

const router = useRouter();

export default defineComponent({
  setup() {
    const store = useProductStore();

    const redeemedProducts = ref<{ [key: string]: string[] }>({});

    const canRedeem = (id: string): boolean => {
      const redemptionLimitPerProduct = 1;
      const redemptionLimitPerDay = 3;

      const redeemedPerProduct = redeemedProducts.value[id] || [];
      const redeemedToday = redeemedPerProduct.filter((date) =>
        dayjs(date).isSame(dayjs(), "day")
      );

      return (
        redeemedPerProduct.length < redemptionLimitPerProduct &&
        redeemedToday.length < redemptionLimitPerDay && 
        store.getTotalRedemptionsToday() < redemptionLimitPerDay
      );
    };

    const redeemItem = (id: string): void => {
      const currentTime = dayjs().format();
      store.redeemProduct(id, currentTime);
    };

    onMounted(() => {
      // Load redemption history from store
      redeemedProducts.value = store.redeemedProducts;
    });

    return {
      $router: router,
      canRedeem,
      redeemItem,
    };
  },
  data() {
    return {
      showModal: false,
      modalProduct: [],
      items: [
        {
          imageSrc: "/product_images/arizona.png",
          title: "FREE",
          subTitle: "Arizona",
          description: "680 ml. Any variety.",
          id: "arizona",
          location: "FOR USE IN ONTARIO",
        },
        {
          imageSrc: "/product_images/guru-energy-drink.png",
          title: "FREE",
          subTitle: "Guru Energy Drink",
          description: "355ml. Any variety.",
          id: "guru-energy-drink",
          location: "FOR USE IN ONTARIO",
        },
        {
          imageSrc: "/product_images/small-hot-beverage.png",
          title: "FREE",
          subTitle: "Small Hot Beverage",
          description: "Coffee, specialty cofee, hot chocolate, or tea.",
          id: "small-hot-beverage",
          location: "FOR USE IN ONTARIO",
        },
        {
          imageSrc: "/product_images/small-froster.png",
          title: "FREE",
          subTitle: "Small Froster",
          description: "",
          id: "small-froster",
          location: "FOR USE IN ONTARIO",
        },
        {
          imageSrc: "/product_images/medium-polar-pop.png",
          title: "FREE",
          subTitle: "Medium Polar Pop",
          description: "",
          id: "medium-polar-pop",
          location: "FOR USE IN ONTARIO",
        },
        {
            imageSrc: "/product_images/powerade.png",
            title: "FREE",
            subTitle: "Powerade",
            description: "710ml. Any variety.",
            id: "powerade",
            location: "FOR USE IN ONTARIO",
        }
      ],
    };
  },
  computed: {
    id(): string {
      return this.$route.params.id as string;
    },

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
  methods: {
    getProductImagePath(id: string): string {
      return `/product_images/${id}.png`;
    },
    getItemTitle(id: string): string | undefined {
      const item = this.items.find((item) => item.id === id);
      return item ? item.subTitle : undefined;
    },
    getDesc(id: string): string | undefined {
      const item = this.items.find((item) => item.id === id);
      return item ? item.description : undefined;
    },
    handleRedeemCoupon(product: string) {
      // Set the content to "Loading..."
      this.modalProduct = "Loading..." as any;
      this.showModal = true;

      this.$router.push(`/redeemed/${product}`);
    },
  },
  mounted() {
    const viewCouponElements = document.getElementsByClassName("coupon-view");
    if (viewCouponElements) {
      for (let index = 0; index < viewCouponElements.length; index++) {
        const element = viewCouponElements[index];
        let product = this.$route.params.id;

        element.addEventListener("click", (e) => {
          this.modalProduct = [product] as any; // Updated: Assigning product as an array
          this.showModal = true;
        });
      }
    }
  },
});
</script>
