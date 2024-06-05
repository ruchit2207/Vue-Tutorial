<template>

     <div class="topHui">
        <div v-for="item in data" :key="item.id" class="hui">
        <v-card class="mx-auto" max-width="344">
            <v-img height="200px" :src="item.avatar" cover></v-img>

            <v-card-title>
                Name : {{ item.first_name }} {{ item.last_name }}
            </v-card-title>

            <v-card-subtitle>
                Email : {{ item.email }}
            </v-card-subtitle>

          

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
     </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'ApiData',
    data: () => ({
        show: false,
        data : []
    }),
    async mounted() {
        const result = await axios('https://reqres.in/api/users?page=1')
        console.log(result.data.data)
        this.data = result.data.data
    }
}
</script>

<style scoped>
.topHui{
 display: flex;
 flex-wrap: wrap;    
 gap: 20px;
 padding: 10x;
 margin: 20px;
}
.hui{

    width:300px;
    height:300px
}


</style>
