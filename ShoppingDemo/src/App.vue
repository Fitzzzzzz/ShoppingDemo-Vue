<template>
  <div id="app">
	  	<TopBar></TopBar>
      <mu-row>
        <mu-col desktop="25"></mu-col>
        <mu-col desktop="50"><router-view></router-view></mu-col>
        <mu-col desktop="25"></mu-col>
      </mu-row>  
        
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
export default {
  name: 'app',
  components: { TopBar }
}
</script>

<style>
	
</style>
