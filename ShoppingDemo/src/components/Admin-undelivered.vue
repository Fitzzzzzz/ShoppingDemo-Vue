<template lang="html">
  <mu-table :selectable="false" :showCheckbox="false" class="demo-step-container">
      <mu-thead>
          <mu-tr>
          <mu-th>选择</mu-th>
          <mu-th>ID</mu-th>
          <mu-th>商品名</mu-th>
          <mu-th>数量</mu-th>
          <mu-th>收货人</mu-th>
          <mu-th>收货地址</mu-th>
          </mu-tr>
      </mu-thead>
      <mu-tbody>
          <mu-tr v-for="(item, index) in list" :key="item.id" :selected="selected[index]">
          <mu-td><mu-checkbox :value="selected[index]" @input="selectCheckBox(index)"></mu-checkbox></mu-td>
          <mu-td>{{item.id}}</mu-td>
          <mu-td>{{item.title}}</mu-td>
          <mu-td>{{item.count}}</mu-td>
          <mu-td>{{item.name}}</mu-td>
          <mu-td>{{item.address}}</mu-td>
          <mu-td>

          </mu-td>
          </mu-tr>
      </mu-tbody>
  </mu-table>
</template>

<script>
export default {
  data(){
    return{
      list : [],
      selected : [false,false],

    }
  },
  mounted(){
    this.$http.get('../../static/server/undelivered.json').then(response => {
      this.list = response.body;
    })
  },
  methods:{
    selectCheckBox(index){
      this.selected[index] = !this.selected[index]
    }
  }
}
</script>

<style lang="css">
  .demo-step-container {
    width: 100%;
    max-width: 1100px;
    margin: auto;
  }
  
</style>
