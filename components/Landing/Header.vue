<template>
    <div class="row justify-content-center">
        <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
                <h4 class="title mb-4">{{ title }}
                    <slot name="special" />
                </h4>
                <p class="text-muted para-desc mb-0 mx-auto">{{ contentLeft }} <span class="text-primary fw-bold">{{ content
                }}</span> {{ contentRight }}</p>
            </div>
        </div><!--end col-->
    </div><!--end row-->
</template>
<script setup lang="ts">
type HeadProp = {
    title: string,
    content?: string,
    contentLeft?: string,
    contentRight?: string,
}

defineProps<HeadProp>()
</script>