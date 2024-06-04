<template>
    <div>
        This is {{ dataFromParams }}'s About page
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name: 'AboutCompo',
    data() {
        return {
            dataFromParams: ''
        };
    },
    mounted() {
        const route = useRoute();
        this.dataFromParams = route.params.name;
         // Watch for changes in route params
         this.$watch(
            () => route.params.name,
            (newName) => {
                this.dataFromParams = newName;
            }
        );
    }
};
</script>


