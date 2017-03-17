<template>
  <div>
    <mu-appbar title="Title">
        <mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
        <mu-flat-button label="登陆" class="demo-flat-button" slot="right" @click="openDialog()" />
        <mu-dialog :open="dialog" title="登录" @close="close">
          <LogIn></LogIn>
          <mu-flat-button slot="actions" @click="close" primary label="取消"/>
          <mu-flat-button slot="actions" primary @click="close" label="登录"/>
        </mu-dialog>      
    </mu-appbar>
    
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
import LogIn from '@/components/LogIn'
export default {
  data () {
    return {
      open: false,
      docked: true,
      dialog: false
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
    }
  },
  components: { LogIn }
}
</script>

<style>
    
</style>