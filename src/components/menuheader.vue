<template>
    <div>
        <p>This is header</p>
        <p>{{greeting}} world!</p>
        <div v-for="val in headerValue">{{val}} </div>
        <b-alert show>Default Alert</b-alert>
        <div class="imageRadis imageUser">
                
        </div>
        <b-btn @click="showModal" variant="info" class="m-1">
            Show Image
        </b-btn>
        <b-modal ref="modal" title="Image" @ok="hideModal" ok-only size="lg">
            <image-modal :select-index="index" ></image-modal>
        </b-modal>
    </div>
</template>

<style>
@import '.././css/main.css';
</style>
<script src="./menuheader.js"></script>