<script setup>
const connectedUsers = useConnected()
await callOnce(connectedUsers.fetch)

</script>

<template>
    <div class="flex">
        <p class="font-semibold">Connected Users: {{ connectedUsers.connectedUsers }}</p>
    </div>
</template>
