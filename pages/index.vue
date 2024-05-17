<script setup lang="ts">
useHead({
    title: 'KazyChat',
})

const counter = useCounter()

</script>

<template>
    <div class="p-4 flex flex-col">
        <Connection></Connection>

        <h1 class="text-4xl font-bold">Home</h1>
        <NuxtLink to="/about">About</NuxtLink>
        <div>
            <button
                class='px-3 border rounded mt-4 border-black hover:bg-black hover:text-white transition-all duration-200'
                @click="counter.count">+</button>
            <button
                class='px-3 border rounded mt-4 ml-4 border-black hover:bg-black hover:text-white transition-all duration-200'
                @click="counter.decount">-</button>
        </div>
        <p>{{ counter.counter }}</p>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>