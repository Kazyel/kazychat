<script setup lang="ts">
useHead({
    title: 'KazyChat | Chatting',
})

const connectedUsers = useConnected()

let messageText = ref("")

async function sendMessage() {
    const message = await $fetch('/api/messages', {
        method: "POST",
        body: {
            username: "teste",
            message: messageText
        }
    })

    messageText.value = ''
}
</script>

<template>
    <main class="flex flex-col bg-orange-200/35 justify-center min-h-screen w-screen items-center">
        <section class="h-[768px] w-[768px] flex flex-col border-black border-2 rounded p-6">
            <div class="flex w-full justify-between">
                <NuxtLink href="/"
                    class="font-semibold hover:underline hover:text-black/40 transition-all duration-200">
                    Home
                </NuxtLink>
                <Connection>{{ connectedUsers.connectedUsers }} online</Connection>
            </div>

            <div class="flex justify-end flex-1 flex-col ">
                <!-- <UserMessage>
                    <template v-model="username" #user-name>Mateus</template>
<template #user-message>Messagem de teste!</template>
</UserMessage> -->
                <div class="typebox w-full flex relative mt-6">
                    <input v-model="messageText"
                        class="w-full message-input border-2 border-black bg-transparent rounded p-2 placeholder:text-black/40"
                        placeholder="Start typing..." />
                    <button class="absolute top-1/4 right-3" @click="sendMessage">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    font-family: 'Reddit Sans';
}

.message-input::after {
    content: "teste";
}
</style>