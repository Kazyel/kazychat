<script setup lang="ts">

let invalidUsername = ref(true)
let username = ref("")

watch(username, () => {
    if (username.value === "" || username.value.length < 4) {
        invalidUsername.value = true
        return
    }

    invalidUsername.value = false
    return
})

</script>


<template>
    <input v-model="username" v-on:keyup.enter="navigateTo('/chat')"
        class="bg-[#fff1e1] border-2 rounded mt-12 py-1 px-2 outline-none border-black placeholder:text-black/40"
        placeholder="Enter your username..." maxlength="16" />

    <button
        class="mt-8 border-black bg-[#fff1e1] border-2 rounded px-3 py-1 w-[150px] text-center text-sm font-semibold hover:bg-black hover:text-white transition-all duration-200 disabled:border-black/45 disabled:text-black/45 disabled:border-2 disabled:hover:text-black/45 disabled:hover:bg-[#fff1e1]"
        :disabled="invalidUsername">
        <div v-if="invalidUsername">
            <p>Start Chatting</p>
        </div>
        <div v-else>
            <NuxtLink class="disabled:pointer-events-none" to="/chat">
                Start Chatting
            </NuxtLink>
        </div>

    </button>

</template>