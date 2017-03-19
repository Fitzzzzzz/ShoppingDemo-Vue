<template>
    
    <mu-grid-list>
        <mu-sub-header>所有饮料</mu-sub-header>
            <mu-grid-tile v-for="good in goods" :key="good.id">
            <img :src="img"/>
            <span slot="title">{{good.title}}</span>
            <span slot="subTitle">价格： <b>{{good.price}}</b></span>
            <mu-icon-button icon="attach_money" slot="action"/>
            <mu-icon-button icon="add_shopping_cart" slot="action"/>
            </mu-grid-tile>
    </mu-grid-list>
    
</template>

<script>
    import img from '../assets/logo.png'
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
        }
    }
</script>