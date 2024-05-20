<script setup lang="ts">
const currentUser = useUsername()
const connectedUsers = useConnected()

function fakeLogout() {
    currentUser.$state.username = ''
}

onBeforeMount(() => {
    if (currentUser.$state.username === '') {
        navigateTo('/')
    }
})

</script>

<template>
    <div class="flex w-full justify-between ">
        <NuxtLink @click='fakeLogout' href="/"
            class="font-semibold hover:underline hover:text-black/40 transition-all duration-200">
            Logout
        </NuxtLink>
        <div class="flex justify-center items-center gap-4">
            <h2 class="border-r border-black pr-4">{{ currentUser.username }}</h2>
            <Connection>{{ connectedUsers.connectedUsers }} online</Connection>
        </div>
    </div>
</template>