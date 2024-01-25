
<script setup lang="ts">

import { storeToRefs } from 'pinia'
const { user } = storeToRefs(useAuth())

const profileUser = ref({
    'firstName': user.value?.get_full_name.split(" ")[0],
    'lastName': user.value?.get_full_name.split(" ")[1],
    'email': user.value?.email,
    'phone_number': user.value?.phone_number
})


definePageMeta({
    layout: "dashboard",
    middleware: 'auth'
})

</script>
<template>
    <div class="profile_body mt-20">
        <div class="content_head">
            <h2>Edit Profile </h2>
            <p>You can change your name information and receive special bonuses via sms or email provided below.</p>
        </div>
        <form @submit.prevent class="form">
            <div class="body">
                <div>
                    <label for="first-name">First
                        name</label>
                    <div class="mt-2.5">
                        <input type="text" name="first-name" v-model="profileUser.firstName">
                    </div>
                </div>
                <div>
                    <label for="last-name">Last name</label>
                    <div class="mt-2.5">
                        <input type="text" name="last-name" v-model="profileUser.lastName">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="email">Phone Number</label>
                    <div class="mt-2.5">
                        <input type="number" name="email" v-model="profileUser.phone_number">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="email">Email</label>
                    <div class="mt-2.5">
                        <input type="email" name="email" v-model="profileUser.email" disabled>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <button class="btn">Save</button>
            </div>
        </form>
    </div>
</template>

<style>
.profile_body {
    @apply bg-white px-6 h-screen py-10 lg:px-8
}

.profile_body .content_head {
    @apply mx-auto max-w-2xl text-center
}

.content_head h2 {
    @apply text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl
}

.content_head p {
    @apply mt-2 text-lg leading-8 text-gray-600
}

.profile_body .form {
    @apply mx-auto mt-16 max-w-xl sm:mt-20
}

.form .body {
    @apply grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2
}

.form .body label {
    @apply block text-sm font-semibold leading-6 text-black
}

.form .body input {
    @apply block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm disabled:ring-0 disabled:shadow-none shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6
}

.profile_body .btn {
    @apply w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:bg-slate-400
}
</style>