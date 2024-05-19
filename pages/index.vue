<script setup lang="ts">
useHead({
    title: 'KazyChat',
})

const connectedUsers = useConnected()

const connectedLabel = computed(() => {
    return `There ${connectedUsers.connectedUsers <= 1 ? 'is' : 'are'} ${connectedUsers.connectedUsers} ${connectedUsers.connectedUsers <= 1 ? 'user' : 'users'} online.`
})

</script>

<template>
    <main class="flex flex-col bg-orange-200/35 justify-center min-h-screen w-screen items-center">
        <section class="h-[768px] w-[768px] overflow-hidden relative flex flex-col border-black/25 border-2 rounded">
            <div class="flex z-10 justify-center flex-1 flex-col items-center">
                <Connection>{{ connectedLabel }}</Connection>
                <h1 class="text-center text-[3.75rem] font-extralight">Welcome to</h1>
                <h2 class="-mt-10">
                    <span class="font-bold text-[3.75rem]"><span class="italic">Kazy</span>Chat</span>
                </h2>
                <UsernameInput></UsernameInput>
            </div>
            <img class="absolute bottom-0 opacity-10 contrast-0" src="/kanagawa.png" alt="Kanagawa Wave" />

            <img class="absolute w-[500px] bottom-1/3 translate-y-[64px] translate-x-[100px] z-5 opacity-5"
                src="/dragon.png" />
        </section>
    </main>
</template>

<style>
main {
    font-family: 'Reddit Sans';
}
</style>