<template>
    
    <mu-grid-list>
        <mu-sub-header>所有饮料</mu-sub-header>
            <mu-grid-tile v-for="(good, index) in goods" :key="good.id">
            <img :src="img" @click="showDetail(index)"/>
            <span slot="title">{{good.title}}</span>
            <span slot="subTitle">价格： <b>{{good.price}}</b></span>
            <mu-icon-button icon="attach_money" slot="action" />
            <mu-icon-button icon="add_shopping_cart" slot="action"/>
            </mu-grid-tile>
    </mu-grid-list>
    
</template>

<script>
    import img from '../assets/logo.png'
    import router from '../router'
    export default {
        data(){
            return {
                img,
                goods : []                
            }
        },
        mounted(){
            this.$http.get('../../static/server/goods.json').then(response => {
                this.goods = response.body;
            })
        },
        methods:{
            showDetail(index){
                router.push({name : 'GoodsDetail' , params: {id : index}});
            }
        }
    }
</script>