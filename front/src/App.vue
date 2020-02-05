<template>
  <div id="app">
    <div class="nav">
        <monthViewer></monthViewer>
    </div>
    <router-view class="router"/>
    <div class="footer">
      <div class="btn-hole">
        <div class="btn-add">
          <i class="material-icons" style="color:white; font-size:3em;">add</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import monthViewer from '@/components/monthViewer.vue'
export default {
  components:{
    monthViewer
  },
  computed:{
    actualMonth(){
      return this.$store.state.actualMonth
    }
  }
  
}
</script>
<style scoped>
#app{
  display:flex;
  flex-direction: column;
  font-family: 'roboto', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 100%;
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
.footer{
  z-index:2;
  display:flex;
  flex-direction: row;
  align-content: center;
  height:120px;
  justify-content: center;
  align-items: center;
  padding:10px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: #EFEEEE;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.123);
}
.btn-hole{
  display:flex;
  align-items: center;
  justify-content: center;
  width:80px;
  height:80px;
  background: #EFEEEE;
  border-radius: 100px;
  box-shadow: inset -4px -4px 16px rgba(0, 0, 0, 0.25);
}
.btn-add{
  display:flex;
  align-items: center;
  justify-content: center;
  width:60px;
  height:60px;
  background: rgba(59, 214, 89, 0.62);
  box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25), -4px -4px 9px rgba(255, 255, 255, 0.22);
  border-radius: 100px;
  border-radius:80px;
}
.btn-add:hover{
  cursor: pointer;
}

</style>
