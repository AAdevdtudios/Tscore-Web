<template>
    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
        <div class="card pricing pricing-primary business-rate shadow border-0 rounded">
            <div class="ribbon ribbon-right ribbon-warning overflow-hidden" v-if="label"><span
                    class="text-center d-block shadow small h6">{{ label }}</span></div>
            <div class="card-body">
                <h6 class="title name fw-bold text-uppercase mb-4">{{ title }}</h6>
                <div class="d-flex mb-4">
                    <span class="h4 mb-0 mt-2">₦</span>
                    <span class="price h1 mb-0">{{ price }}</span>
                    <span class="h4 align-self-end mb-1">/mo</span>
                </div>
                <ul class="list-unstyled mb-0 ps-0">

                    <li class="h6 text-muted mb-0" v-for="(operation, index) in operations" :key="index"><span
                            class="icon h5 me-2"><i class="uil uil-check-circle align-middle"></i></span>{{ operation }}
                    </li>
                </ul>
                <nuxt-link to="/login" class="btn btn-primary mt-4">Try It Now</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type Pricing = {
    title: string,
    price: string,
    label?: string,
    operations?: string[]
}
const props = defineProps<Pricing>()

</script>