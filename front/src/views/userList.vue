<template>
  <div class="home">
    <transactionPanel></transactionPanel>
  </div>
</template>

<script>
import transactionPanel from '@/components/transactionPanel/transactionPanel.vue'
export default {
  components:{
    transactionPanel
  },
computed:{
  actualData(){
    return this.$store.state.data
  }
}
}
</script>
<style scoped>
</style>
