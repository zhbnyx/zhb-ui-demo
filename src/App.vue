<template>
  <div id="app">
    <zhb-button>按钮</zhb-button>
    <zhb-button type="primary">primary按钮</zhb-button>
    <zhb-button type="success">success按钮</zhb-button>
    <zhb-button type="info">info按钮</zhb-button>
    <zhb-button type="danger">danger按钮</zhb-button>
    <zhb-button type="warning">warning按钮</zhb-button>

    <h6>ZhbCheckGroup</h6>
    <zhb-check-group v-model="checkGroup"  @change="changeCheckGroup" >
      <ZhbCheck label="0">输电线</ZhbCheck>
      <ZhbCheck label="1">变电站</ZhbCheck>
    </zhb-check-group>



  </div>
</template>
<script>
  export default {
    data(){
      return {
       checkGroup:[]
      }
    },
    methods: {

      changeCheckGroup(){
        console.log(this.checkGroup);
      }
    }
  }
</script>
<style lang="scss">

</style>
