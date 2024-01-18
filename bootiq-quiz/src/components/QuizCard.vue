<template>
    <div class="base" @click="showDialog" :style="showQuestion ? '' : 'opacity:0;'">
        {{ value }}
    </div>
    <base-modal :open="openDialog" @close="hideDialog" @hide-question="hideQuestion">
    <div v-if="!answers || answers.length === 0">
        {{ questionText }}
    </div>
    <div v-else class="question-answers">
        <div class="question">{{ questionText }}</div>
        <div class="divider"></div>
        <div class="answers">
            <ol>
                <li v-for="answer in answers" :key="answer">
                    {{ answer }}
                </li>
            </ol>
        </div>
    </div>
    </base-modal>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import BaseModal from './BaseModal.vue';

export default defineComponent({
    components:{
        BaseModal
    },
    props:{
        value:{
            type: Number,
            required: true
        },
        questionText:{
            type: String,
            required: true
        },
        answers:{
            type: Array as PropType<string[]>
        }
    },
    data() {
        return {
            openDialog: false,
            showQuestion: true
        }
    },
    methods:{
        hideDialog(){
            this.openDialog = false;
        },
        showDialog(){
            if(this.showQuestion){
                this.openDialog = true;
            }
        },
        hideQuestion(){
            this.openDialog = false;
            this.showQuestion = false;
        }
    }
})
</script>

<style scoped>
.base{
    border: 1px solid white;
    border-radius: 10px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    box-shadow: 0 0 5px white;
    font-size: 3rem;
    font-weight: 700;
    transition: background-color 0.7s, color 0.7s, opacity 0.5s 0.3s;
    cursor: pointer;
    height: 18%;
    margin: 5px 0 5px 0;
}


.base:hover{
    background-color: yellow;
    color: black;
}

.question-answers{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}

.divider{
    width: 5px;
    height: 100%;
    background-color: yellow;
    border-radius: 5px;
}

ol{
    list-style-type: upper-latin;
}

.question{
    width: 65%;
    padding: 15px;
}

.answers{
    width: 35%;
    padding: 0 10px 0 80px;
    text-align: left;
    font-size: 2.5rem;
    line-height: 60px;
}
</style>