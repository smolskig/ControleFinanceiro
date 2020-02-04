<template>
  <div class="home">
    <table v-for="(item,index) in actualData.data" :key="index">
      <tr>
        <td>
          {{item.value}}
          {{item.description}}
          {{months[item.month]}}
        </td>
      </tr>
    </table>
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
  }
}
}
</script>
