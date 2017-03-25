<template>
  <div>
    <mu-table :selectable="false" :showCheckbox="false">
        <mu-thead>
            <mu-tr>
            <mu-th>选择</mu-th>
            <mu-th>ID</mu-th>
            <mu-th>商品名</mu-th>
            <mu-th>单价</mu-th>
            <mu-th>数量</mu-th>
            <mu-th>总价</mu-th>
            </mu-tr>
        </mu-thead>
        <mu-tbody>
            <mu-tr v-for="(item, index) in goods" :key="item.id" :selected="selected[index]">
            <mu-td><mu-checkbox :value="selected[index]" @input="selectCheckBox(index)"></mu-checkbox></mu-td>
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
                selected : [false,false,false,false,false,false,false,false],
                totalPrice : 0
            }
        },
        mounted() {
            this.$http.get('../../static/server/shoppingcart.json').then(response => {
                this.goods = response.body;
                console.log(response.body);
            });
        },
        methods: {
            add(index){
                this.goods[index].count++;
                if(this.selected[index] === true){
                  this.totalPrice += Number(this.goods[index].price);
                }
                if(this.goods[index].count > 1) this.disable = false;
            },
            subtract(index){
                this.goods[index].count--;
                if(this.goods[index].count < 1) this.goods[index].count = 1;
                if(this.selected[index] === true){
                  this.totalPrice -= Number(this.goods[index].price);
                }
            },
            selectCheckBox(index){
              this.selected[index] = !this.selected[index];
              if(this.selected[index] === true){
                this.totalPrice += Number(this.goods[index].price * this.goods[index].count);
              }else{
                this.totalPrice -= Number(this.goods[index].price * this.goods[index].count);
              }
            }
        }
    }
</script>

<style>
    .pay{
        text-align:center

    }
</style>
