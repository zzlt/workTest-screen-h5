<template>
    <div class="left_slider">
        <scroller lock-x scrollbar-y  >
            <ul>
                <li v-for="(v,i) in data" v-if="data" @click="$emit('click_slider',v.cat_id)" ><img :src="v.image_url" alt=""></li>
            </ul>
        </scroller>

    </div>
</template>
<script>
    import {Scroller} from 'vux';
    export default {
        name:'left',
        components:{
          Scroller
        },
        props:{
            data:{
                type:Object,
                default:function(){
                    return {}
                }
            }
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
    @import '../assets/less/common.less';
    .left_slider{
        /*background-color: #efefef;*/

    }
    ul{
        width: 25vw;

        li{
            width:100%;
            padding:0px 15px;
            padding-bottom: 10px;
            img{
                width: 100%;
            }
        }
    }

</style>