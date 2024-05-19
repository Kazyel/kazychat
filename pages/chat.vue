<script setup lang="ts">
useHead({
    title: 'KazyChat | Chatting',
})

let messageText = ref("")
let messages = ref()
let chat = ref<HTMLUListElement | null>((null))

const connectedUsers = useConnected()

function scrollDown() {
    chat.value!.lastElementChild?.previousElementSibling?.scrollIntoView()
}

function getMessages() {
    socket.emit("getMessages")
    socket.on("returnMessages", (message) => {
        messages.value = message
    })
}

async function sendMessage() {
    socket.emit("sendMessage", messageText.value)
    messageText.value = ''
    getMessages()
}

onMounted(() => {
    getMessages()
})

onUpdated(() => {
    nextTick(() => scrollDown())
})
</script>

<template>
    <main class="flex flex-col bg-orange-200/35 justify-center min-h-screen w-screen items-center">
        <section class="h-[768px] w-[768px] flex flex-col border-black border-2 rounded p-6">
            <div class="flex w-full justify-between border-b-2 border-black pb-2">
                <NuxtLink href="/"
                    class="font-semibold hover:underline hover:text-black/40 transition-all duration-200">
                    Home
                </NuxtLink>
                <Connection>{{ connectedUsers.connectedUsers }} online</Connection>
            </div>

            <div class="flex justify-end flex-1 overflow-hidden mt-4 flex-col">
                <ul class="overflow-y-scroll" ref="chat">
                    <li v-for="message in messages">
                        <UserMessage>
                            <template #user-name>{{ message?.userId }}</template>
                            <template #user-message>{{ message?.text }}</template>
                        </UserMessage>
                    </li>
                </ul>
                <div class="typebox w-full flex relative mt-6">
                    <input v-model="messageText" v-on:keyup.enter="sendMessage"
                        class="w-full message-input outline-none border-2 border-black bg-transparent rounded p-2 placeholder:text-black/40"
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