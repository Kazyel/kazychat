<script setup lang="ts">
useHead({
    title: 'KazyChat',
})
</script>

<template>
    <main class="flex flex-col bg-orange-200/40 justify-center min-h-screen w-screen items-center">
        <section class="h-[768px] w-[768px] flex flex-col border-black border-2 rounded p-6">
            <Connection></Connection>
            <div class="flex justify-center flex-1 flex-col items-center">
                <NuxtLink href="/"
                    class="mt-8 border-black border-2 rounded px-3 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-200">
                    Home
                </NuxtLink>
            </div>
        </section>
    </main>
</template>

<style>
main {
    font-family: 'Reddit Sans';
}
</style>