<template>
    <div class='main'>
        <transition name="slide-fade">
            <div class="container" v-show="showPage">
                <div class="left_slider" >
                    <left_slider :data="category" v-if="category" v-on:click_slider="click_slider"></left_slider>
                </div>
                <div class="content_">

                    <div class="goods-list">
                        <transition  name="fade" >
                            <goods_list @scroll_tb="scrollToBottom"
                            :show_type="show_type" v-bind:key="show_type" :data="goods_data" v-if="goods_data && goods_data.length > 0"></goods_list>

                        </transition>
                        <!--<inline-loading :show="showInlineLoad" ></inline-loading>-->

                    </div>
                </div>
            </div>
        </transition>
        <loading :show="showLoad" ></loading>

    </div>
</template>
<script>
    import {Scroller,InlineLoading} from 'vux';
    import left_slider from '@/components/left_slider';
    import goods_list from '@/components/goods_list';
    import Loading from '@/components/loading';
    export default {
        name: 'entry',
        components: {
            Loading,
            left_slider,
            goods_list,
            Scroller,
            InlineLoading
        },
        data(){

            return {
                showLoad: true,
                showPage:false,
                showInlineLoad:false,
                category: '',
                goods_data:[],
                tempD:[1,2,3,4,5,6],
                show_type:'',
                current_page:1,
                noData:false,
                noMore:false
            }
        },
        created: function () {
            var _this = this;

            this.$http.get('/api/m/fastbuy.html').then((res) => {
                _this.category = res.data.category;
                if(res.data.rec_products ){
                    res.data.products_arr = []
                    for(var k in res.data.rec_products){
                        var item = res.data.rec_products[k];
                        res.data.products_arr.push(item);
                    }
                    _this.goods_data = res.data.products_arr
                }else{
                    _this.noData = false;
                }
                _this.show_type = 'index';

                _this.showLoad = false
                _this.showPage = true
            })
        },
        methods:{
            scrollToBottom:function(){
                var _this = this;
                if(_this.showLoad || _this.showInlineLoad){
                    return;
                }
//                console.log('收到scrollToBottom')
                _this.current_page += 1;

                _this.get_list(_this.show_type)
            },
            click_slider:function(e){
                var _this = this;

                if(e == _this.show_type ){
                    _this.show_type = e;
                    console.log('数据存在')
                    return
                }else{
                    _this.current_page = 1;
                    _this.goods_data = [];
                }

                this.get_list(e)
            },
            get_list:function(id){
                var _this = this;
                _this.showInlineLoad = true;
                _this.$http.get('/api/m/fastbuycat-index-'+id+'.html?page='+(_this.current_page?_this.current_page:1))
                    .then((res) => {
                        if(!res.data.pager || res.data.pager.total == 0){
                            console.log('无数据')
                            _this.noData = true;
                        }else if(res.data.pager && res.data.pager.current >= res.data.pager.total){
                            console.log('无更多数据')
                            _this.noMore = true;
                        }else{
                            _this.noData = false;
                            _this.noMore = false;
                        }
                        res.data.products_arr = []
                        if(res.data.products){
                            for(var k in res.data.products){
                                var item = res.data.products[k];
                                res.data.products_arr.push(item);
                            }
                            if(res.data.products_arr && res.data.products_arr.length > 0 ){
                                if(res.data.pager.current == 1){
                                    _this.goods_data = res.data.products_arr;
                                }else {
                                    _this.goods_data = _this.goods_data.concat(res.data.products_arr);
                                }
//                                console.log(_this.goods_data[id])
                            }
                        }


                        _this.showInlineLoad = false;
                        _this.show_type = id;
                    })
            }
        },
        computed:{
            type:function(){
                return this.show_type?this.show_type:'index'
            }
        }
    }
</script>
<style lang='less' rel="stylesheet/less" scoped>
    @import "../assets/less/common.less";
    .weui-icon_toast.weui-loading{
        width: 10vw;
        height: 10vw;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    .main {
        width: 100vw;
        height: 100vh;
        /*overflow: hidden;*/
        .left_slider {
            width: 25vw;
            float: left;
            border-right:1px solid #ccc;
        }

        .content_ {
            width: 75vw;
            height: 100vh;
            overflow: hidden;
            margin-left: 25vw;
            top: 0;
            left: 0;
            position:fixed;

        }
        .goods-list{
            height: 100%;
            /*background-color: #efefef;*/
        }
    }

</style>