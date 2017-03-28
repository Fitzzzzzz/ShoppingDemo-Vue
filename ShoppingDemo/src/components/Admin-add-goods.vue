<template lang="html">
  <div class="demo-step-container">
  <mu-stepper :activeStep="activeStep">
      <mu-step>
      <mu-step-label>
          添加商品名
      </mu-step-label>
      </mu-step>
      <mu-step>
      <mu-step-label>
          添加单价
      </mu-step-label>
      </mu-step>
      <mu-step>
      <mu-step-label>
          选择图片
      </mu-step-label>
      </mu-step>
      <mu-step>
      <mu-step-label>
          添加简单描述
      </mu-step-label>
      </mu-step>
  </mu-stepper>
  <div class="demo-step-content">
      <p v-if="finished">
      添加完成!<a href="javascript:;" @click="reset">点这里</a>可以继续添加
      </p>
      <template v-if="!finished">
      <mu-text-field label="商品名" labelFloat fullWidth v-show="activeStep === 0 "/>
      <mu-text-field label="单价" labelFloat fullWidth v-show="activeStep === 1"/><br/>
      <mu-raised-button class="demo-raised-button" label="选择图片" v-show="activeStep === 2">
          <input type="file" class="file-button">
      </mu-raised-button>
      <mu-text-field hintText="不允许超过30字" multiLine :rows="2" :rowsMax="3" fullWidth v-show="activeStep === 3"/><br/>
      <p>
          {{content}}
      </p>
      <div>
          <mu-flat-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev"/>
          <mu-raised-button class="demo-step-button" :label="activeStep === 3 ? '完成' : '下一步'" primary @click="handleNext"/>
      </div>
      </template>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeStep: 0
    }
  },
  computed: {
      content () {
      let message = ''
      switch (this.activeStep) {
          case 0:
          message = '为新商品添加商品名'
          break
          case 1:
          message = '选择该商品的单价'
          break
          case 2:
          message = '为新商品添加概览图片'
          break
          case 3:
          message = '为新商品添加简单的文字描述，30个字以内'
          break
          default:
          message = 'fuck! 又 TM 出错了！！！'
          break
      }
      return message
      },
      finished () {
      return this.activeStep > 3
      }
  },
  methods:{
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    }
  }
}
</script>

<style lang="css">
  .demo-step-container {
  width: 100%;
  max-width: 700px;
  margin: auto;
  }

  .demo-step-content {
  margin: 0  16px;
  }

  .demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
  }
  .file-button{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  }
</style>
