<template>
    <div>
        <header>
            <div class="left-arrow"></div>
        </header>
        <h4>商品详情</h4>
    </div>
</template>
<script>
    export default {
        components:{
        },
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style rel="stylesheet/less" lang="less" scoped>
    @import "../assets/less/common.less";
    .left-arrow{
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #ccc;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    }
</style>