<template>
  <div class="root">
    <div v-for="(item,index) in actualData.data" :key="index" class="transaction" :class="{'darkmode':actualTheme}">
      <span class="value">R$ {{item.value}}</span>
      <span class="description">{{item.description}}</span>
      <span class="date">{{months[item.month]}}</span> 
    </div>
  </div>
</template>

<script>
export default {
   data(){
    return{
      months:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    }
  },
  computed:{
  actualData(){
    return this.$store.state.data
  },
  actualTheme(){
    return this.$store.state.darkMode
  }
}
}
</script>

<style scoped>

  .root{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    align-content: center;
    width:100%;
    
  }
  .transaction{
    position:relative;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-left:15px;
    padding-right:15px;
    width:900px;
    height: 88px;
    margin:11px;
    background: #EFEEEE;
    opacity: 0.9;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.13), -3px -3px 2px rgba(255, 255, 255, 0.05);
    border-radius: 20px;
  }
  .value{
    position:absolute;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 42px;
    padding:5px;
    width:px;
    color: #3BD659;
    
  }
  .description{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    margin-left:90px;
    font-size: 24px;
    line-height: 28px;
    width:80%;
    text-align:center;;
    color: #959CAB;
  }
  .date{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    padding:5px;
    width:100px;
    color: #D6853B;
  }

@media (max-width:955px){
  .root{
    margin-top:10px;
  }
  .transaction{
    width:95%;
    height: 70px;
    padding:15px;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.13), -3px -3px 2px rgba(255, 255, 255, 0.05);
    border-radius: 20px;
  }
  .description{
    font-size:18px;
    line-height: 1em;
  }
  .value{
    font-size:20px;
    padding:0;
  }
  .date{
    font-size:20px;
  }
}


.darkmode{
  background:#242831;
}
</style>