<template>
    <div class="col-md-4 col-12 mt-5 mt-sm-0">
        <div class="features feature-primary text-center">
            <div class="image position-relative d-inline-block">
                <i :class="icon"></i>
            </div>

            <div class="content mt-4">
                <h5>{{ title }}</h5>
                <p class="text-muted mb-0">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
export type ServiceProps = {
    title: string,
    subtitle: string,
    icon: string
}

defineProps<ServiceProps>()
</script>