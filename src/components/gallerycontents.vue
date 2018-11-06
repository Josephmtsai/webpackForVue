<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-2 ">
                    <div class="imageRadis imageUser">                
                    </div>
                </div>
                <div class="col-lg-10">
                    <img class="image" v-for="(image, i) in images" :src="image" @click="index = i">
                    <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '.././css/main.css';
</style>
<script src="./gallerycontents.js"></script>        