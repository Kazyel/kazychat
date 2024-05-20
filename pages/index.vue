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
    <main class="flex flex-col bg-orange-200/35 justify-center h-screen w-screen items-center">
        <section class="relative h-[768px] w-[768px] flex flex-col ">
            <div class="flex z-10 justify-center flex-1 flex-col items-center">
                <Connection>{{ connectedLabel }}</Connection>
                <h1 class="text-center text-[5rem] font-extralight">Welcome to</h1>
                <h2 class="-mt-14">
                    <span class="font-bold text-[6rem]"><span class="italic">Kazy</span>Chat</span>
                </h2>
                <UsernameInput></UsernameInput>
            </div>
            <img class="absolute top-[2.5rem] -left-[3rem] opacity-5" src="/dragon.png" />
        </section>
    </main>
</template>

<style>
main {
    font-family: 'Reddit Sans';
}
</style>