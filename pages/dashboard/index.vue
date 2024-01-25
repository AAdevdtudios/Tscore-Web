<script setup lang="ts">
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
    <div class="block sm:flex flex-row-reverse mt-20 px-20">
        <div class="w-full min-h-full sm:min-h-fit">
            <iframe src="https://www.scorebat.com/account/" frameborder="0" allowfullscreen allow='autoplay; fullscreen'
                class="_scorebatEmbeddedPlayer_ w-full h-full"></iframe>
        </div>
        <div class="w-full min-h-full">
            <iframe
                src="https://www.scorebat.com/embed/?token=MTMyNDUyXzE3MDU1MDc4NDdfZDBjZWM5YzIzYWMyNjkxZDdmNDRjZjAyZDk2NDJlMTI4ODk0NDRmMA=="
                frameborder="0" allowfullscreen allow='autoplay; fullscreen'
                class="_scorebatEmbeddedPlayer_ w-full h-full"></iframe>
        </div>
    </div>
</template>