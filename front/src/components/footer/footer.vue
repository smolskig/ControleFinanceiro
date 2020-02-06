<template>
<div>
<div class="footer" :class="{'darkmode':actualTheme}" >
    <div class="result" :class="{'darkmode':actualTheme}">
      <span class="money-indicator">R$</span>
      <div class="column">
        <span class="label">Despesas do Mês</span>
        <span class="result-value">100,00</span>
      </div>
    </div>

    <div class="btn-hole" :class="{'darkmode':actualTheme}">
      <div class="btn-add">
        <i class="material-icons" style="color:white; font-size:3em;">add</i>
      </div>
    </div>
    <div class="spacer"></div>
</div>
</div>
</template>

<script>
export default {
   computed:{
     actualTheme(){
        return this.$store.state.darkMode
      }
   }
}
</script>

<style scoped>
.footer{
  z-index:2;
  display:flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  height:fit-content;
  flex-wrap: wrap;
  align-items: center;
  padding:10px;
  background: #EFEEEE;
  box-shadow: 0px 2px 9px rgba(255, 255, 255, 0.123);
}
.spacer{
    display:flex;
    width:510px;
    margin:50px;
    margin-top:5px;
    margin-bottom:5px;

}
.column{
  display:flex;
  flex-direction: column;
}
.result{
  position:relative;
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  padding:10px;
  font-weight: bold;
  font-size:25px;
  width:510px;
  height:70px;
  margin:50px;
  margin-top:5px;
  margin-bottom:5px;
  height:70px;
  text-align: center;
  background: #EFEEEE;
  color:rgb(190, 57, 57);
  box-shadow: inset 4px 4px 9px rgba(0, 0, 0, 0.14), inset -4px -4px 4px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}
.label{
  
  font-size:13px;
}
.result-value{
 
}
.money-indicator{
  position:absolute;
  left:25px;
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

@media(max-width:425px){
  .result{
    margin:10px;
  }
}
@media(max-width:736px){
  .result{
   width:70%;
   margin:0;
  }
  .btn-hole{
    margin-left:10px;
  }
}



.darkmode{
  background:#242831;
}
</style>