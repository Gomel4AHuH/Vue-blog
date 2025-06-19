<template>
    <div class="container">
        <h1>My Mini Blog</h1>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/create">Create Post</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style>
    .container {
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    nav a {
        margin-right: 10px;
    }
</style>
