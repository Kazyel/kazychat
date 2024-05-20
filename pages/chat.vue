<script setup lang="ts">
useHead({
    title: 'KazyChat | Chatting',
})

const currentUser = useUsername()
</script>

<template>
    <main class="flex flex-col bg-orange-200/35 justify-center min-h-screen w-screen items-center">
        <section class="h-[768px] w-[768px] flex flex-col bg-white/60 border-black border-2 rounded p-6">
            <ChatHeader></ChatHeader>
            <div class="flex justify-end flex-1 overflow-hidden mt-4 flex-col">
                <Chat></Chat>
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