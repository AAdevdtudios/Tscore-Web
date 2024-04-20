<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useApiFetch } from '~/composable/useApiFetch';
const { fetchUser } = useAuth()
const snack_bar = useSnackbar()

type Subs = {
    name: string,
    value: string,
    price: string
}


const subscriptions = reactive<Subs[]>([
    {
        name: '1 month - Silver package',
        value: 'silver',
        price: "10,000"
    },
    {
        name: '3 months - Gold package',
        value: 'gold',
        price: "8,900"
    },
    // {
    //     name: '6 months - premium package',
    //     value: 'premium',
    //     price: "7,800"
    // },
    {
        name: '1 year - Diamond package',
        value: 'diamond',
        price: "6,700"
    },
])

const selected_sub = ref<Subs>(subscriptions[0])
const loading = ref(false)

const check_val = async () => {
    loading.value = true
    console.log(selected_sub);
    const val = {
        "planName": selected_sub.value.value
    }
    type Response = {
        message: string
    }
    try {
        const { data, error } = await useApiFetch<Response>('subscribe/', {
            method: 'POST',
            body: val,
        })
        loading.value = true

        console.log();
        if (data.value == null) return

        await navigateTo(data.value.message, {
            external: true
        })
    } catch (error) {
        console.log(error);
        snack_bar.add({
            type: 'error',
            text: error,
        })
    }


}
const fetchUserData = async () => {
    await fetchUser()
}
fetchUserData()

const { user } = storeToRefs(useAuth())



definePageMeta({
    layout: false,
    middleware: 'auth'
})
</script>
<template>
    <div class="subscription_body">
        <div class="section_body">
            <div class="subscription_head">
                <h2>TScore Subscription</h2>
                <p>Unlock the Action: Your All-Access Pass to Thrilling Live
                    Sports with Our Exclusive Single Subscription Plan!</p>
            </div>
            <div class="subscription_content">
                <div class="content_left">
                    <h3>Unlimited Access</h3>
                    <p>Get ready for an unparalleled sports streaming
                        experience. You can subscribe using your subscription number {{ user?.subscriber_number }}</p>
                    <div class="heading">
                        <h4>What’s included</h4>
                        <div class="hrz"></div>
                    </div>
                    <ul role="list" class="list">
                        <li class="flex gap-x-3">
                            <Icon name="formkit:check" />
                            Exclusive Game Access
                        </li>
                        <li class="flex gap-x-3">
                            <Icon name="formkit:check" />
                            On-Demand Replays
                        </li>
                        <li class="flex gap-x-3">
                            <Icon name="formkit:check" />
                            HD Quality Streaming
                        </li>
                        <li class="flex gap-x-3">
                            <Icon name="formkit:check" />
                            Ad-Free Experience
                        </li>
                    </ul>
                </div>
                <div class="content_right">
                    <div class="right_body">
                        <div class="content">
                            <select id="countries" v-model="selected_sub">
                                <!-- <option selected>Choose a country</option> -->
                                <option v-for="subscription in subscriptions" :value="subscription"
                                    :key="subscription.name">{{ subscription.name }}</option>
                                <!-- <option value="Gold" selected></option>
                                <option value="Premium" selected> </option>
                                <option value="Diamond" selected> </option> -->
                            </select>

                            <!-- <p class="head">Experience it all with TScore Premium</p> -->

                            <p class="price_content">
                                <span class="price">₦{{ selected_sub.price }}</span>
                                <span class="duration">per month</span>
                            </p>
                            <button :disabled="loading" class="btn" @click="check_val">
                                <span v-if="loading">
                                    <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
                                    <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                        role="status">
                                        <span
                                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                    </div>
                                </span>
                                <span v-else>Get Started</span>
                            </button>
                            <p class="sub">Cancel anytime. No hidden fees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('~/assets/css/subscription-page.css');
</style>