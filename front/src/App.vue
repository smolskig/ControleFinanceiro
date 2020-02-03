<template>
  <div id="app">
    <div class="nav">
      <month-button></month-button>
      <div class="month">
        <span>{{months[actualMonth]}}</span>
      </div>
      <div>
        <router-link to="">
          <i class="ico material-icons">settings</i>
        </router-link>  
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import monthButton from './components/monthButtons.vue'
export default {
  data(){
    return{
      months:['Jan','Fev','Mar','Abr','Mai','Jun','jul','Ago','Set','Out','Nov','Dez']
    }
  },
  components:{
    'month-button':monthButton
  },
  computed:{
    actualMonth(){
      return this.$store.state.actualMonth
    }
  }
  
}
</script>
<style scoped>
#app {
  display:flex;
  flex-direction: column;
  font-family: 'roboto', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.nav{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:10px;
  background: rgb(243, 248, 250);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
.month{
  padding:10px;
  font-weight: bold;
  font-size:25px;
}
.ico{
  color: #2c3e50;
  font-size:30px;
  margin-top:10px;
}
</style>
