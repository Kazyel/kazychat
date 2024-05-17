<script setup lang="ts">
useHead({
    title: 'KazyChat | Chat',
})

const connectedUsers = useConnected()
</script>

<template>
    <main class="flex flex-col bg-orange-200/40 justify-center min-h-screen w-screen items-center">
        <section class="h-[768px] w-[768px] flex flex-col border-black border-2 rounded p-6">
            <div class="flex w-full justify-between">
                <NuxtLink href="/"
                    class="font-semibold hover:underline hover:text-black/40 transition-all duration-200">
                    Home
                </NuxtLink>
                <Connection>{{ connectedUsers.connectedUsers }} online</Connection>
            </div>

            <div class="flex justify-center flex-1 flex-col items-center">
                <p>Message</p>
            </div>
        </section>
    </main>
</template>

<style>
main {
    font-family: 'Reddit Sans';
}
</style>