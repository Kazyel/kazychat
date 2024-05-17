<script setup lang="ts">
useHead({
    title: 'KazyChat | About',
})

const counter = useCounter()
</script>

<template>
    <div class="p-4">
        <h1 class="text-4xl font-bold">About</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <p>{{ counter.counter }}</p>
    </div>
</template>