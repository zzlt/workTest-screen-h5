<template>
    <div>
        <scroller lock-x scrollbar-y  @on-scroll-bottom="onScrollBottom" ref="scroller"  :scroll-bottom-offst="200">
            <ul class="clearfix">
                <router-link tag="li" :to="'/pro_detail/'+v.product.product_id" :key="i" v-for="(v,i) in data" v-if="data">
                    <div class="con">
                        <div class="img">
                            <img :src="v.image_url" alt="">
                        </div>
                        <p class="name text-1">{{v.product.name}}</p>
                    </div>
                </router-link>
            </ul>
        </scroller>

    </div>
</template>
<script>
    import {Scroller} from 'vux';
    export default {
        name:'goods',
        components:{
          Scroller
        },
        props:{
            data:{
                type:Array,
                default:function(){
                    return []
                }
            },
            show_type:{

            }
        },
        data(){
            return {
            }
        },
        created:function(){
            this.$refs.scroller.reset({top:0})
        },

        watch:{
            show_type:function(newD,oldD){
                console.log('数据改变')
                this.$refs.scroller.reset({top:0})
            }
        },
        methods:{
            onScrollBottom:function(){
                this.$emit('scroll_tb')
            }
        },
        created:function(){
//            console.log(this.data)
        }
    }
</script>
<style lang='less' rel="stylesheet/less" scoped>
    @import '../assets/less/common.less';
    div{
        background-color: #efefef;

    }
    ul{
        width: 75vw;
        background-color: #efefef;
        padding:0 5px;
        padding-top: 20px;


        li{
            width:33.3%;
            padding:0 5px;
            float: left;
            margin-bottom: 10px;
            .con{
                background-color: #fff;
                padding-bottom: 20px;
                padding-top: 10px;
                border-radius:5px;
                overflow: hidden;

                .img{
                    width: 200px;
                    height: 200px;
                    padding:20px;
                    overflow: hidden;
                    margin:0 auto;
                    box-sizing: border-box;
                    position:relative;
                    margin-bottom: 20px;
                    img{
                        width: 100%;
                        .c();
                    }
                }
                p.name{
                    color:#333;
                    font-size:23px;
                    padding:0 20px;
                }
            }
        }
    }

</style>