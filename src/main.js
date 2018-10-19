// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import mixins from './mixins/index';
//axios 请求拦截器
// axios.interceptors.request.use(function (config) {
//     if (config.url.indexOf('api') != -1 && process.env.NODE_ENV == 'production') {
//         config.url = config.url.replace('api', '')
//     }
//     config.headers['x-requested-iswxapp'] = "YES"
//     // console.log('请求', config);

//     return config;
// }, function (error) {
//     return Promise.reject(error)
// })
//axios 响应拦截器
axios.interceptors.response.use(function (response) {
    // console.log('返回', response)
    return response;
}, function (error) {
    return Promise.reject(error)
})
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.mixin(mixins);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
