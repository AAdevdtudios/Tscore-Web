<script setup lang="ts">
const config = useRuntimeConfig()
definePageMeta({
    layout: "dashboard",
    middleware: 'auth'
})
const doSomething = () => {
    if (process.client) {
        const scriptElement: HTMLScriptElement = document.createElement('script');
        scriptElement.id = 'scorebat-jssdk';
        scriptElement.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';

        // Find the first script tag in the document
        const firstScriptTag = document.getElementsByTagName('script')[0];

        // Insert the new script tag before the first script tag
        firstScriptTag.parentNode?.insertBefore(scriptElement, firstScriptTag);
    }
}
doSomething()
</script>

<template>
    <div class="block sm:flex flex-row-reverse mt-20 px-10 md:px-20">
        <div class="w-full min-h-full sm:min-h-fit">
            <iframe :src="config.public.GAMES" frameborder="0" allowfullscreen allow='autoplay; fullscreen'
                class="_scorebatEmbeddedPlayer_ w-full h-full"></iframe>
        </div>
        <div class="w-full min-h-full">
            <iframe :src="config.public.LIVESCORE" frameborder="0" allowfullscreen allow='autoplay; fullscreen'
                class="_scorebatEmbeddedPlayer_ w-full h-full"></iframe>
        </div>
    </div>
</template>