<template>
    <div class="init">
        <mu-row>
            <mu-col desktop="20">
                 <mu-paper :zDepth="zDepth" :rounded="rounded" class="init">
                    <mu-list v-for="(item , index) in navTitles" :key="item.id" >
                        <mu-list-item :title="item.title" @click="goTo(index)" :class="{selected : index == currentItem}">
                        </mu-list-item>
                    </mu-list>
                </mu-paper>
            </mu-col>
            <mu-col desktop="80">
              <router-view></router-view>
            </mu-col>
        </mu-row>


    </div>
</template>

<script>
import router from "../router"
    export default {
        data(){
            return {
                zDepth: 1,
                rounded: true,
                navTitles:[
                  {"id":1,
                    "title":"添加商品"},
                  {"id":2,
                    "title":"待发货订单"},
                  {"id":3,
                    "title":"已完成订单"},
                  {"id":4,
                    "title":"待售后订单"}
                ],
                currentItem: 0
            }
        },
        methods:{
          goTo(index){
            switch (index) {
              case 0:
                this.currentItem = 0;
                router.push('/admin/add');
                break;
              case 1:
                this.currentItem = 1;
                router.push('/admin/undelivered');
                break;
              default:

            }
          }
        }
    }
</script>
<style scope>
    .init{
        height:770px
    }
    .selected{
      background-color: #e0e0e0
    }
</style>
