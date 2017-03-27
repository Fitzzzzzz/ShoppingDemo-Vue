<template>
    <mu-paper>
        <h1>我是 {{details}} ，看起来好喝吧 ^.^</h1>
    </mu-paper>
</template>

<script>

    export default {
        data(){
            return{
                goodsid : 0,
                details : ""
            }
        },
        mounted(){
          this.$http.get("../../static/server/goods.json").then(response => {
            this.details = response.body[this.$route.params.id].title;
          })
            this.goodsid = this.$route.params.id
        }
    }
</script>
