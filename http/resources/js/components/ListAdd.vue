<template>
    <div>
        <v-textarea
            label="텍스트를 입력하십시오."
            value=""
            v-model="memo"
        ></v-textarea>
        <v-btn v-if="this.isUpdate === false" @click="listAdd()">추가</v-btn>
        <v-btn v-else @click="listUpdate()">수정</v-btn>
    </div>
</template>
<script>
import { eventBus } from "../app.js";
export default {
    created(){
        eventBus.$on('listUpdate', (index, memo) => {
            this.memo = memo;
            this.index = index;
            this.isUpdate = true;
        })
    },
    data(){
        return{
            memo:null,
            index:null,
            isUpdate:false,
        }
    },
    methods:{
        listAdd(){
            if(this.memo === null){
                alert("할 일을 입력해주세요.");
                return;
            }
            this.$emit('listAdd', this.memo);
            this.memo = null;
        },
        listUpdate(){
            if(this.memo === null){
                alert("할 일을 입력해주세요.");
                return;
            }
            this.$emit('listUpdate', this.memo, this.index);
            this.memo = null;
            this.index = null;
            this.isUpdate = false;
        }
    }
}
</script>
