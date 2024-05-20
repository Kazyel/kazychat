<script setup lang="ts">
let messageText = ref("")
let messages = ref()
let chat = ref<HTMLUListElement | null>((null))

function scrollDown() {
    chat.value!.lastElementChild?.previousElementSibling?.scrollIntoView()
}

const emit = defineEmits(['entered-chat'])

const currentUser = useUsername()
function getMessages() {
    socket.emit("getMessages")
    socket.on("returnMessages", (message) => {
        messages.value = message
    })
}

async function sendMessage() {
    socket.emit("sendMessage", { username: currentUser.username, text: messageText.value })
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
    <ul class="overflow-y-scroll" ref="chat">
        <li v-for="message in messages">
            <UserMessage>
                <template #user-name>{{ message.username }}</template>
                <template #user-message>{{ message.text }}</template>
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
</template>