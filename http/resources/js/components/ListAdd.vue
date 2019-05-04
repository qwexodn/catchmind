<template>
    <div>
        <v-textarea
            label="텍스트를 입력하십시오."
            value=""
            v-model="memo"
        ></v-textarea>
        <v-btn @click="listAdd()">추가</v-btn>
    </div>
</template>
<script>
export default {
    data(){
        return{
            memo:null
        }
    },
    methods:{
        listAdd(){
            this.$emit('listAdd', this.memo);
            this.memo = "";
        }
    }
}
</script>
