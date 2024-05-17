<script setup>
const connectedUsers = useConnected()
await callOnce(connectedUsers.fetch)

</script>

<template>
    <div class="flex">
        <p class="font-semibold text-base text-black/45 mb-2">Online: {{ connectedUsers.connectedUsers }}</p>
    </div>
</template>
