<template>
    <div>
        <p>This is header</p>
        <p>{{greeting}} world!</p>
        <div v-for="val in headerValue">{{val}} </div>
        <b-alert show>Default Alert</b-alert>
        <div class="imageRadis imageUser">
                
        </div>

        <b-modal ref="modal" title="Location" @ok="handleOk" ok-only size="lg">
        
        </b-modal>
    </div>
</template>

<style>
@import '.././css/main.css';
</style>
<script src="./menuheader.js"></script>