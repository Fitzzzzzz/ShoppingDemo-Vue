<template>
  <div>
    <mu-table :multiSelectable="multiSelectable" :enableSelectAll="enableSelectAll">
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
            <mu-tr v-for="(item, index) in goods" :key="item.id" :selectable="selectable" :selected="selected[index]">
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
    <div class="pay">
        <mu-row>
            <mu-col><h1>总价 {{totalPrice}}</h1></mu-col>
            <mu-col><mu-raised-button label="结账" secondary></mu-raised-button></mu-col>
        </mu-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'shoppingcart',
        data () {
            return {
                goods : [],
                disable : false,
                enableSelectAll : true,
                multiSelectable : true,
                selectable : true,
                selected : [true,true,true,false,true,false,true,false],
                totalPrice : 0
            }
        },
        mounted() {
            this.$http.get('../../static/server/shoppingcart.json').then(response => {
                this.goods = response.body;
                console.log(response.body);
                for(let i = 0;i < response.body.length;i++){
                    this.totalPrice += response.body[i].price * response.body[i].count;
                }
            });
        },
        methods: {
            add(index){
                this.goods[index].count++;
                this.totalPrice += Number(this.goods[index].price);
                if(this.goods[index].count > 1) this.disable = false;
                this.selected[index] = false;
            },
            subtract(index){
                this.goods[index].count--;
                if(this.goods[index].count < 1) this.goods[index].count = 1;
                else{
                    this.totalPrice -= this.goods[index].price;
                }
                
                this.selected[index] = false;
            }
        }
    }
</script>

<style>
    .pay{
        text-align:center
        
    }
</style>