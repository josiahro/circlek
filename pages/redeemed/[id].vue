<template>
  <div
    class="grid"
    style="
      /*background: linear-gradient(rgb(139, 157, 208), rgb(246, 141, 74)) center top / contain;*/
      background: linear-gradient(rgb(215, 39, 44), rgb(248, 180, 72)) 0% 0% /
        cover; /*background-color: rgb(245, 245, 245);*/ /*background: linear-gradient(rgb(249, 56, 39), rgb(232, 193, 195)) 0% 0% / cover*/
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
      class="text-6xl font-extrabold mx-auto pt-3"
      style="
        /*color: rgb(220, 40, 29);*/
        color: #fff; /*color: rgb(44, 44, 44);*/
      "
      id="free"
    >
      FREE
    </h1>
    <p
      id="item"
      class="mx-auto text-3xl uppercase font-bold w-4/5"
      style="
        text-align: center;

        color: #fff; /*color: rgb(220, 40, 29);*/ /*color: rgb(44, 44, 44);*/
      "
    >
      {{ getItemTitle(id) }}
    </p>
    <p class="mx-auto text-white">
      {{ getDesc(id) ? getDesc(id) : "" }}
    </p>
    <p
      id="redeemed-by"
      class="w-5/6 mx-auto text-sm text-center pt-3 font-medium uppercase mt-3"
      style="color: #fff"
    >
      {{ redeemedByDate }}
    </p>

    <h1
      id="timer"
      class="text-7xl mx-auto font-extrabold py-2"
      style="
        color: #fff; /*color: rgb(220, 40, 29);*/ /*color: rgb(44, 44, 44);*/
      "
    >
    {{ timerMinutes.toString()}}:{{ timerSeconds.toString().padStart(2, '0') }}
    </h1>
    <h1
      style="background-color: #fff"
      class="font-black text-red-600 text-xl text-center mx-8 my-3"
    >
      FOR USE IN ONTARIO
    </h1>

    <div style="background-color: #fff">
      <p
        class="text-white font-extrabold text-center p-4 text-xl"
        style="
          
          background-color: rgb(220, 40, 29); /*color: rgb(220, 40, 29);*/
          color: #fff;
        "
      >
        REDEEMED
        <br />
        <span id="redeemed-time">{{ formattedTime }}</span>
      </p>
    </div>

    <img
      id="ROCKSTAR-ENERGY-DRINK-Code"
      class="mx-auto py-10"
      :src="getProductCodePath(id)"
      alt=""
      style="width: 70% !important"
    />

    <p
      class="px-4 pb-2 text-5xl font-bold m-auto"
      style="color: #fff;"
    >
      PLU# {{ getPlu(id) }}
    </p>

    <p class="px-4 text-center pb-10 text-white" style="font-size: 0.45rem">
      Must be redeemed in front of cashier. Pushing the Redeem button will begin
      a 5-minute timer and reveal the coupon code for the cashier to use. Once
      the 5-minute timer is up, this coupon will expire and cannot be reused. In
      order to be valid, the countdown timer must be counting down with the
      current date and time. Valid only at participating Circle K and Mac's
      stores in Canada.
    </p>

    <div
      style="
        background: linear-gradient(
            rgba(254, 220, 86, 0.294) 0%,
            rgba(254, 220, 86, 0) 0%,
            rgba(254, 220, 86, 0.757) 33%,
            rgba(254, 220, 86, 0) 100%
          )
          0% 0% no-repeat padding-box padding-box transparent; /*background-color: rgb(220, 40, 29);*/ /*rgb(99, 203, 180)*/
      "
      class="w-full grid grid-cols-3 items-center p-5"
    >
      <p
        style="color: rgb(173, 31, 35)"
        class="col-span-2 font-extrabold text-xs"
      >
        Contact | Circle K Privacy Policy | Terms of use
      </p>
      <img
        class="h-10 flex justify-self-end col-span-1"
        src="/cklogo_red.png"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const router = useRouter();

export default defineComponent({
  setup() {
    const timerMinutes = ref(5);
    const timerSeconds = ref(0);

    const formattedTime = ref('');

    const updateTime = () => {
      const currentTime = dayjs().format('MMMM D, YYYY h:mm:ssA');
      formattedTime.value = currentTime;
    };

    onMounted(() => {
      updateTime(); // Set the initial time

      // Update the time every second
      setInterval(() => {
        updateTime();
      }, 1000);
    });

    // Countdown timer function
    const countdown = () => {
      if (timerSeconds.value === 0) {
        if (timerMinutes.value === 0) {
          // Timer reached 0:00, do something
          clearInterval(intervalId);
          // Example: Redirect to another page
          // this.$router.push("/new-page");
        } else {
          // Decrement minutes and set seconds to 59
          timerMinutes.value--;
          timerSeconds.value = 59;
        }
      } else {
        // Decrement seconds
        timerSeconds.value--;
      }
    };

    // Start the countdown timer on component mount
    const intervalId = setInterval(countdown, 1000);

    return {
      $router: router,
      timerMinutes,
      timerSeconds,
      formattedTime,
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
          plu: "6455",
        },
        {
          imageSrc: "/product_images/guru-energy-drink.png",
          title: "FREE",
          subTitle: "Guru Energy Drink",
          description: "355ml. Any variety.",
          id: "guru-energy-drink",
          location: "FOR USE IN ONTARIO",
          plu: "6418",
        },
        {
          imageSrc: "/product_images/small-hot-beverage.png",
          title: "FREE",
          subTitle: "Small Hot Beverage",
          description: "Coffee, specialty cofee, hot chocolate, or tea.",
          id: "small-hot-beverage",
          location: "FOR USE IN ONTARIO",
          plu: "6391",
        },
        {
          imageSrc: "/product_images/small-froster.png",
          title: "FREE",
          subTitle: "Small Froster",
          description: "",
          id: "small-froster",
          location: "FOR USE IN ONTARIO",
          plu: "6390",
        },
        {
          imageSrc: "/product_images/medium-polar-pop.png",
          title: "FREE",
          subTitle: "Medium Polar Pop",
          description: "",
          id: "medium-polar-pop",
          location: "FOR USE IN ONTARIO",
          plu: "6394",
        },
        {
            imageSrc: "/product_images/powerade.png",
            title: "FREE",
            subTitle: "Powerade",
            description: "710ml. Any variety.",
            id: "powerade",
            location: "FOR USE IN ONTARIO",
            plu: "6419",
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
    getPlu(id: string): string | undefined {
      const item = this.items.find((item) => item.id === id);
      return item ? item.plu : undefined;
    },
    getProductCodePath(id: string): string {
      return `/product_codes/${id}-Code.png`;
    },
  },
});
</script>
