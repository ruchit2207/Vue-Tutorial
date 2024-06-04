<template>
    <div>
        <h1>{{ val }}</h1>
        <child-child-compo :val="val" :sendToChild="sendToChild" :dataFromChild="dataFromChild"/>
        <button v-on:click="sendToChild"> send to child component</button>
    </div>
</template>
<script>
import ChildChildCompo from './ChildChildCompo.vue'

 export default {
  components: { ChildChildCompo },
    name : 'ChildCompo',
    data(){
        return { 
            val :  'i am in 1st compo',
        }
    },
    methods : {
        sendToChild (){
            
                alert("alerty from 1st ")
            
        },
        dataFromChild(data){
          
                    console.log('data from child compo = ',data)
            
        }
    }
 }
</script>
