<template>
  <div id="app">
	  	<TopBar></TopBar>
      <mu-row>
        <mu-col desktop="25"></mu-col>
        <mu-col desktop="50"><Content></Content></mu-col>
        <mu-col desktop="25"></mu-col>
      </mu-row>  
        
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import Content from '@/components/Content'
export default {
  name: 'app',
  components: { TopBar,Content }
}
</script>

<style>
	
</style>
