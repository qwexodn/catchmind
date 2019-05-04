<template>
    <div>
        <v-card
        class="pa-5 mx-3 my-2"
        :class="{'done': item.status === 'done'}"
        v-for="(item, index) in todoList"
        :key="index"
        >
            <div>{{ item.memo }}</div>

            <!-- 완료버튼 -->
            <v-btn
                v-if="item.status === 'created'" 
                fab flat small color="green" class="noout"
                @click="$emit('statusChange', index, 'done')"
            >
                <i class="fas fa-check"></i>
            </v-btn>
            
            <!-- 되살리기 -->
            <v-btn 
                v-else 
                fab flat small color="blue" class="noout"
                @click="$emit('statusChange', index, 'created')"
            >
                <i class="fas fa-redo-alt"></i>
            </v-btn>

            <!-- 삭제버튼 -->
            <v-btn 
                fab flat small color="red" class="noout"
                @click="$emit('todoDelete', index)"
            >
                <i class="fas fa-trash-alt"></i>
            </v-btn>

            <!-- 수정버튼 -->
            <v-btn 
                v-if="item.status === 'created'"
                fab flat small color="yellow" class="noout"
                @click="listUpdate(index, item.memo)"
            >
                <i class="fas fa-pencil-alt"></i>
            </v-btn>
        </v-card>
    </div>
</template>
<script>
import { eventBus } from "../app.js";

export default {
    props:["todoList"],
    methods:{
        listUpdate(index, memo){
            eventBus.listUpdate(index, memo);
        }
    }
}
</script>



<style lang="scss" scoped>
    .noout{
        outline:none;
    }
    .done{
        background-color: rgba(0, 0, 0, 0.1);

        div{
            text-decoration: line-through;
        }
    }
</style>