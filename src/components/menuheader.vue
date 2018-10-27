<template>
    <div>
        <p>This is header</p>
        <p>{{greeting}} world!</p>
        <div v-for="val in headerValue">{{val}} </div>
        <div class="imageRadis imageUser">
                
        </div>
    </div>
</template>

<style>
@import '.././css/main.css';
</style>
<script src="./menuheader.js"></script>