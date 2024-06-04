<template>
<div>
    <h1>Form</h1>
    <div>
        <ul>
            <li v-for="errorMsg in deleteMsg" v-bind:key="errorMsg">
                {{ errorMsg }} is not valid
            </li>
        </ul>
    </div>
    <form v-on:submit.prevent="fetchData">
        <label for="name">Name : </label>
        <input type="text" id="name" v-model="frm.name" />
        <label for="email">Email : </label>
        <input type="email" id="email" v-model="frm.email" />
        <label for="password">Password : </label>
        <input type="password" id="password" v-model="frm.password" />
        <select v-model="frm.subj">
            <option>next</option>
            <option>react</option>
        </select>
        <label for="male">Male</label>
        <input type="radio" id="male" value="male" name="hui" v-model="frm.gen" />
        <label for="Female">FeMale</label>
        <input type="radio" id="Female" value="female" name="hui" v-model="frm.gen" />
        <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'FoormData',
    data() {
        return {
            frm: {
                name: '',
                email: '',
                password: '',
                subj: '',
                gen: ''
            },
            deleteMsg: []
        }
    },
    methods: {
        fetchData() {
            for (const item in this.frm) {
                if (this.frm[item].length === 0 || this.frm[item] === '') {
                    this.deleteMsg.push(item)
                }
            }
            console.log(this.frm) 
        }
    }

}
</script>
