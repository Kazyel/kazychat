<script setup lang="ts">
useHead({
    title: 'KazyChat',
})

const connectedUsers = useConnected()
</script>

<template>
    <main class="flex flex-col bg-orange-200/35 justify-center min-h-screen w-screen items-center">
        <section class="h-[768px] w-[768px] flex flex-col border-black border-2 rounded p-6">
            <div class="flex justify-center flex-1 flex-col items-center">
                <Connection>There
                    {{ connectedUsers.connectedUsers <= 1 ? 'is' : 'are' }} {{ connectedUsers.connectedUsers }} {{
                        connectedUsers.connectedUsers <= 1 ? 'user' : 'users' }} online. </Connection>

                        <h1 class="text-center text-[3.75rem] font-extralight">Welcome to</h1>
                        <h2>
                            <span class="font-bold text-[3.75rem]"><span class="italic">Kazy</span>Chat</span>
                        </h2>
                        <NuxtLink href="/chat"
                            class="mt-8 border-black border-2 rounded px-3 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-200">
                            Start
                            chatting
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