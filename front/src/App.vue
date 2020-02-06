<template>
  <div class="app" :class="{'darkmode':check}">
    <div class="nav" :class="{'darkmode':check}">
        <input type="checkbox" name="check" id="check" v-model="check">
        <monthViewer></monthViewer>
    </div>
    <router-view class="router"/>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import monthViewer from '@/components/monthViewer/monthViewer.vue'
import footer from '@/components/footer/footer.vue'
export default {
  data(){
    return{
      check:false
    }
  },
  watch:{
    check:function(value){
      this.$store.commit('setDarkMode',value)
    }
  },
  components:{
    monthViewer,
    'footer-menu':footer
  },
  computed:{
    actualMonth(){
      return this.$store.state.actualMonth
    }
  }
  
}
</script>
<style scoped>
.app{
  display:flex;
  flex-direction: column;
  font-family: 'roboto', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
  background:#EFEEEE;
}
.router{
  overflow: auto;
  height:100% !important;
  
}
.nav{
  z-index:2;
  display:flex;
  flex-direction: row;
  align-content: center;
  height:115px;
  justify-content: center;
  align-items: center;
  padding:10px;
  background: #EFEEEE;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.123);
}

.darkmode{
  background:#242831;
}
</style>
