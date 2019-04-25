<template>
    <div class="content-a">
        <Background></Background>
    </div>
</template>

<script>

    import Background from "./content/Background.vue";

    export default {
        components:{
            Background
        },
        data(){
            return{
            }
        },
        methods:{
            reverseMessage(){
                this.cnt += 1;
            }
        }
    }
</script>