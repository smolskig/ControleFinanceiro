<template>
    <div class="months">
        <select class="month-selector" v-model="actualOption" name="month-selector" id="month-selector">
            <option disabled>
                Selecione um mês
            </option>
            <option  value="0">
                Jan
            </option>
            <option value="1">
                Fev
            </option>
            <option value="2">
                Mar
            </option>
            <option value="3">
                Abr
            </option>
            <option value="4">
                Mai
            </option>
            <option value="5">
                Jun
            </option>
            <option value="6">
                Jul
            </option>
            <option value="7">
                Ago
            </option>
            <option value="8">
                Set
            </option>
            <option value="9">
                Out
            </option>
            <option value="10">
                Nov
            </option>
            <option value="11">
                Dez
            </option>
        </select>
    </div>
</template>

<script>
export default {
    data(){
        return{
            actualOption:'0'
        }
    },
    created:function(){
        var d = new Date()
        var month = d.getMonth()
        this.actualOption = month
        this.$store.commit('setMonth',month)
    },
    watch:{
        actualOption:function(){
            this.$store.commit('setMonth',this.actualOption)
            this.$store.dispatch('makeRequest',this.actMonth)
        }
    },

    methods:{
        actualMonth(){
            return this.$store.state.actualMonth
        }
    }
}
</script>

<style>
.month-selector {
    width:100%;
    height:50px;
    padding-left:15px;
    border:none;
    border-radius:5px;
    background: #242831;
    color: #FFF;
    box-shadow:  -4px -4px 4px #898989,  4px 4px 15px rgba(0, 0, 0, 0.22); 
}
</style>