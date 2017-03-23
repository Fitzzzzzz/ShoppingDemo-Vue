<template>
  <div>
      <mu-appbar title="Shopping Demo" titleClass="default">
          <mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
          <mu-flat-button label="Shopping Demo" slot="left" @click="home"/>
          <mu-flat-button :label="logname" class="demo-flat-button" slot="right" @click="loged ? openPopover() : openDialog()" />
            <mu-icon-menu icon="more_vert" slot="right" v-if="showMore">
              <mu-menu-item title="我的购物车" @click="toShoppingCart"/>
              <mu-menu-item title="个人中心"/>
              <mu-menu-item title="登出"/>
            </mu-icon-menu>
          <mu-dialog :open="dialog" title="登录" @close="close">
            <mu-text-field label="账号" hintText="请输入账号" labelFloat v-model="user.username"/><br/>
            <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="user.password" labelFloat/><br/>
            <mu-flat-button slot="actions" @click="close" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="login" label="登录"/>
          </mu-dialog>      
      </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <router-link to="/1"> <mu-list-item title="饮料"/></router-link>         
        <mu-list-item title="白酒"/>
        <mu-list-item title="茶水"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
import router from '../router'
export default {
  data () {
    return {
      open: false,
      docked: true,
      dialog: false,
      logname: "登陆",
      loged: false,
      showMore: false,
      user : {
        username : "",
        password : ""
      }
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open,
      this.docked = !flag
    },
    openDialog () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    home () {
      router.push('/')
    },
    toShoppingCart(){
      router.push('/ShoppingCart')
    },
    login() {
      this.$http.get('../../static/server/login.json').then(response => {
        console.log(response.body);
        if(this.user.username == response.body[0].username){
           if(this.user.password === response.body[0].password){
              this.loged = true;
              this.showMore = true;
              this.logname = "你好: " + this.user.username;
              this.dialog = false;
              // router.push('/ShoppingCart');
           }else alert("password error");
        }
        else alert("Username or password error");
      })
    }
  }
}
</script>

<style>
    
</style>