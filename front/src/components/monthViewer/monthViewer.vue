<template>
  <div class="main-viewer">
    <div @click="changeMonth(false)" class="btn-month previous">
      <div class="arrow sm" :class="{'darkmode':actualTheme}"></div>
      <div class="arrow md" :class="{'darkmode':actualTheme}"></div>
      <div class="arrow lg" :class="{'darkmode':actualTheme}"></div>
    </div>
    <div class="month" :class="{'darkmode':actualTheme}">
      <span style="color:#959CAB;">{{months[actualMonth]}}</span>
    </div>
    <div @click="changeMonth(true)" class="btn-month next">
      <div class="arrow sm" :class="{'darkmode':actualTheme}"></div>
      <div class="arrow md" :class="{'darkmode':actualTheme}"></div>
      <div class="arrow lg" :class="{'darkmode':actualTheme}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      months:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      actMonth:'0'
    }
  },
    computed:{
    actualMonth(){
      return this.$store.state.actualMonth
    },
    actualTheme(){
      return this.$store.state.darkMode
    }
  },
  methods:{
    changeMonth(value){
      var actMonth = this.$store.state.actualMonth
        if(value == true){
          this.$store.commit('setMonth',actMonth +1)
          this.actMonth = this.$store.state.actualMonth
        }else{
          this.$store.commit('setMonth',actMonth -1)
          this.actMonth = this.$store.state.actualMonth
        } 
    }
  },
  created:function(){
        var d = new Date()
        var month = d.getMonth()
        this.actMonth = month
        this.$store.commit('setMonth',month)
    },
    watch:{
        actMonth:function(){ 
          this.$store.dispatch('makeRequest',this.actMonth) 
        }
    },
}
</script>


<style scoped>
.main-viewer{
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
}
.month{
  display:flex;
  align-items:center;
  justify-content: center;
  padding:10px;
  font-weight: bold;
  font-size:25px;
  width:560px;
  height:70px;
  text-align: center;
  background: #EFEEEE;
  box-shadow: inset 2px 2px 9px rgba(0, 0, 0, 0.13),inset -3px -3px 2px rgba(255, 255, 255, 0.05);
  border-radius: 20px;
}
.previous{
  display:flex;
  align-items:center;
  margin:16px;
}
.next{
  display:flex;
  flex-direction: row-reverse;
  align-items:center;
  margin:16px;
}
.arrow{
  width: 16px;
  margin:5px;
  margin-right:0;
  background: #EFEEEE;
  border-radius: 50px;
  transition: box-shadow .1s;
}

.next .arrow{
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.200), 2px -2px 5px rgba(255, 255, 255, 0.068);
}
.previous .arrow{
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.200), -2px -2px 5px rgba(255, 255, 255, 0.068);
}
.sm{
  height: 15px;
}
.md{
  height: 32px;
}
.lg{
  height: 48px;
}

.btn-month:hover{
  cursor: pointer;
}
.btn-month:active .arrow{
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25), 0px 0px 1px rgba(255, 255, 255, 0.178);
}

@media (max-width:425px){
  .arrow{
    width:10px;
    margin:2px;
  }
  .next{
    margin:5px;
  }
  .previous{
    margin:5px;
  }
}

.darkmode{
    background:#242831;
  }
</style>