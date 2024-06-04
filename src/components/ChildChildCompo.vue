<template>
    <div>
      {{ name }}
      <p>value from parent : {{ val }}</p>
      <button v-on:click="dataFromChild(name)">send to parent</button>
      <br/>
      <FoormData/>
    </div>
     
</template>

<script>
import FoormData from './FoormData.vue'
export default {
  components: { FoormData },
     data(){
        return {
            name : 'i am in 2nd compo'
        }
     },
     props : {
        val : String,
        sendToChild : Function,
        dataFromChild : Function,
     }
}
</script>

