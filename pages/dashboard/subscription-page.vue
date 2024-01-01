<script setup lang="ts">
import { useAuth } from '@/stores/auth'
import { storeToRefs } from 'pinia'
const { fetchUser } = useAuth()

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
                            <select id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <!-- <option selected>Choose a country</option> -->
                                <option value="1" selected>1 month - Silver package </option>
                                <option value="3" selected>3 months - Gold package </option>
                                <option value="6" selected>6 months - premium package </option>
                                <option value="2" selected>1 year - Diamond package </option>
                            </select>

                            <!-- <p class="head">Experience it all with TScore Premium</p> -->

                            <p class="price_content">
                                <span class="price">₦1,500</span>
                                <span class="duration">per month</span>
                            </p>
                            <a href="#" class="btn">Get
                                Started</a>
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