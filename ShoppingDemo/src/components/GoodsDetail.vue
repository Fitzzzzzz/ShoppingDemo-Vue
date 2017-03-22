<template>
    <mu-paper>
        <h1>this is goods # {{num}}</h1>
    </mu-paper>
</template>

<script>

    export default {
        data(){
            return{
                num : 0
            }
        },
        mounted(){
            this.num = this.$route.params.id
        }
    }
</script>