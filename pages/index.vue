<script setup lang="ts">
const { $trpc } = useNuxtApp()
const { data } = $trpc.example.osInfo.useQuery()
</script>

<template>
    <h1>
        Your platform : {{ data }}
    </h1>
</template>

<style lang="scss" scoped></style>