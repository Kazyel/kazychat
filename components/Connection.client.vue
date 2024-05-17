<script setup>
const connectedUsers = useConnected()
await callOnce(connectedUsers.fetch)

</script>

<template>
    <div class="flex">
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<style lang="postcss" scoped>
span {
    @apply text-black/40 font-semibold text-sm
}
</style>