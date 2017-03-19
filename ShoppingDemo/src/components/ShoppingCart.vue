<template>
    <mu-table>
        <mu-thead>
            <mu-tr>
            <mu-th>ID</mu-th>
            <mu-th>商品名</mu-th>
            <mu-th>单价</mu-th>
            <mu-th>数量</mu-th>
            <mu-th>总价</mu-th>
            </mu-tr>
        </mu-thead>
        <mu-tbody>
            <mu-tr v-for="(item, index) in goods" :key="item.id">
            <mu-td>{{item.id}}</mu-td>
            <mu-td>{{item.title}}</mu-td>
            <mu-td>{{item.price}}</mu-td>
            <mu-td>
                <mu-icon-button icon="remove" @click="subtract(index)" :disabled="disable"></mu-icon-button>
                    {{item.count}}
                <mu-icon-button icon="add" @click="add(index)"></mu-icon-button>
            </mu-td>
            <mu-td>{{item.price * item.count}}</mu-td>
            </mu-tr>            
        </mu-tbody>
    </mu-table>
</template>

<script>
    export default {
        name: 'shoppingcart',
        data () {
            return {
                goods : [],
                disable : false
            }
        },
        mounted() {
            this.$http.get('../../static/server/shoppingcart.json').then(response => {
                this.goods = response.body;
            })
        },
        methods: {
            add(index){
                this.goods[index].count++
                if(this.goods[index].count > 1) this.disable = false;
            },
            subtract(index){
                this.goods[index].count--;
                if(this.goods[index].count <= 1) this.disable = true;
            }
        }
    }
</script>