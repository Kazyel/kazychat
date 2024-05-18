<template>
    <div class="mt-4">
        <p class="user-name">
            <slot name="user-name"></slot>
        </p>
        <p class="user-message">
            <slot name="user-message">Teste</slot>
        </p>
    </div>
</template>

<style lang="postcss" scoped>
.user-name {
    @apply text-sm font-bold
}

.user-message {
    @apply text-black/65
}
</style>