<template>
<div>
   
    <h1>Vuex</h1>
    <input type='text' placeholder='name' v-model="val" />
    <button>Submit</button>
    <p>You entered = {{ val }}</p>
    <br />
    <label for="php">PHP</label>
v    <label for="java">JAVA</label>
    <input type="checkbox" id="java" value="java" v-model="chcy" />
    <br />
    <p>you selected = {{ chcy }}</p>
    <br />
    <label for="developer">developer</label>
    <input type="radio" id="developer" value="developer" name="ko" v-model="kai" />
    <label for="programmer">programmer</label>
    <input type="radio" id="programmer" value="programmer" name="ko" v-model="kai"/>
    <p>YOu selected = {{ kai }}</p>
    <child-compo/>
    
 
</div>
</template>

 
<script>
 
import ChildCompo from './ChildCompo.vue'

export default {
  components: { ChildCompo },
    name: 'HelloWorld',
    data() {
        return {
            val: null,
            chcy: [],
            kai : null
        }
    }
}
</script>
