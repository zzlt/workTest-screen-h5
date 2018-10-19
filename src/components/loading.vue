<template>
    <div>
        <div class="wrapp" v-show="show">
            <div class="load-3">
                <div class="k-line k-line11-1"></div>
                <div class="k-line k-line11-2"></div>
                <div class="k-line k-line11-3"></div>
                <div class="k-line k-line11-4"></div>
                <div class="k-line k-line11-5"></div>
            </div>
        </div>
        <div class="mask" v-show="showMask"></div>
    </div>
</template>
<script>
    export default {
        props:{
            show:{
                type:Boolean,
                default:function(){
                    return true
                }
            },
            showMask:{
                type:Boolean,
                default:function(){
                    return false
                }
            },
        },
        data(){
            return {
            }
        },
        created:function(){
//            console.log(this.data)
        }
    }
</script>
<style lang='less' rel="stylesheet/less" scoped>
    @import '../assets/less/loading.css';
    @import '../assets/less/common.less';
    .wrapp{
        .c();
        z-index: 9;
        .load-3{
            width: 100%;
            .c();
        }
    }
    .mask{
        width:100%;
        height: 100%;
        position:absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.6);
    }

</style>