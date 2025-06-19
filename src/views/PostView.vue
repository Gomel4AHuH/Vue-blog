<template>
    <div>
        <h2>Post Details</h2>
        <p>Post ID: {{ id }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['id'])
</script>
