<template>
    <div>
        <p>This is header</p>
        <p>{{greeting}} world!</p>
        <div v-for="val in headerValue">{{val}} </div>
    </div>
</template>

<script src="./menuheader.js"></script>