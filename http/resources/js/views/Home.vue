<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6>
                <List
                    :todoList="todoList"
                    @statusChange="statusChange"
                    @todoDelete="todoDelete"
                />
            </v-flex>
            <v-flex xs6>
                <ListAdd 
                    @listAdd="listAdd"
                    @listUpdate="listUpdate"
                />
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import List from "../components/List.vue"
import ListAdd from "../components/ListAdd.vue"
export default {
    components:{
        List,
        ListAdd
    },
    data(){
        return{
            todoList:[]
        }
    },
    methods:{
        listAdd(memo){
            this.todoList.push({memo:memo, status:"created"});
            console.log(this.todoList);
        },
        listUpdate(memo, index){
            this.todoList[index].memo = memo;
        },
        statusChange(index, status){
            this.todoList[index].status = status;
            console.table(this.todoList);
        },
        todoDelete(index){
            this.todoList.splice(index, 1);
            console.log(this.todoList);
        },
    }
}
</script>
