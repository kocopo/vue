<template>
    <div class="base" @click="showDialog" :style="showQuestion ? '' : 'opacity:0;'">
        {{ value }}
    </div>
    <base-modal :open="openDialog" @close="hideDialog" @hide-question="hideQuestion">
    {{ questionText }}
    </base-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
    font-family: 'Noto Sans', sans-serif;
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
</style>