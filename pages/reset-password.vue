<script setup lang="ts">
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useApiFetch } from '~/composable/useApiFetch';
definePageMeta({
    layout: 'auth',
})
const router = useRouter()
const snack_bar = useSnackbar()

const form_data = ref({
    email: ''
});
const loading = ref(false)

const rules = computed(() => {
    return {
        email: { required, email }
    }
})

const v = useValidate(rules, form_data)

const submit_form = async () => {
    const results = await v.value.$validate()
    if (!results) {
        return null
    }
    loading.value = true

    const { data, error } = await useApiFetch('auth/password-reset/', {
        method: 'POST',
        body: form_data,
    })

    if (data.value) {
        loading.value = false
        snack_bar.add({
            type: 'success',
            text: "Check your email to continue and reset password",
        })
        return null
    }
    loading.value = false

    snack_bar.add({
        type: 'error',
        text: "User doesn't exist",
    })
}
</script>
<template>
    <div class="section">
        <div class="heading">
            <h2>TScore</h2>
            <p>Reset password</p>
            <span class="text-gray-800 dark:text-white">Please check your email to reset your password</span>
        </div>
        <div class="body">
            <form @submit.prevent="submit_form">
                <div>
                    <label for="email" class="block mb-2">Email Address</label>
                    <input name="email" type="email" placeholder="example@example.com" v-model="form_data.email" />
                    <span class="error" v-for="error in v.email.$errors" :key="error.$uid"> {{ error.$message }}
                    </span>
                </div>
                <div class="my-6">
                    <button :disabled="loading">
                        <span v-if="loading">
                            <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
                            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                            </div>
                        </span>
                        <span v-else>Send Reset token
                            <!-- <Icon name="material-symbols-light:arrow-right-alt" /> -->
                        </span>
                    </button>
                </div>
            </form>
            <hr />
            <div class="text-center">
                <p>Already have an account <nuxt-link to="/login" class="direct-link">Login</nuxt-link>.</p>
            </div>
        </div>
    </div>
</template>