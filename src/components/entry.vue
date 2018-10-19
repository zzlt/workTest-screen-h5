<template>
    <div class='main'>
        <ul>
            <router-link tag="li" to="/index"><img src="../assets/image/cnh.jpg" alt=""></router-link>
            <router-link tag="li" to="/index"><img src="../assets/image/shop.jpg" alt=""></router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'entry',
        data(){
            return {

            }
        },
        created:function(){

        }
    }
</script>
<style lang='less' rel="stylesheet/less" scoped>
    @import "../assets/less/entry.less";

</style>