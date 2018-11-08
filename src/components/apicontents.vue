<template>
    <div class="container">
        <div class="row">
            
            <div class="col-lg-8 ">
                <b-form-input v-model="apiUrl" type="text" placeholder="Api Url"></b-form-input>
            </div>
            <div class="col-lg-4">
                <b-button class="outline-success" v-on:click="getApiResult()">submit </b-button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 ">
                <tree-view :data="jsonSource"  ></tree-view>
            </div>
        </div>
    </div>
</template>

<script src="./apicontents.js"></script>        