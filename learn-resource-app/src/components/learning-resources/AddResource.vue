<template>
        <base-dialog v-if="inputIsInvalid"
    title="Invalid input"
    @close="confirmError">
        <template #default>
            <p>
                Unfortunately, at least one input is Invalid
            </p>
            <p>
                Check inputs and make sure all of them have some information
            </p>
        </template>
        <template #actions>
            <base-button @click="confirmError">
                OK
            </base-button>
        </template>
    </base-dialog>

    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" v-model="resource.title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" v-model="resource.description"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" name="link" id="link" v-model="resource.link">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import Resource from '../model/Resource';
import BaseDialog from '../UI/BaseDialog.vue';

export default defineComponent({
    
    components: { BaseCard, BaseButton, BaseDialog },
    data() {
        return {
            resource: {
                title: '',
                description: '',
                link: ''
            } as Resource,
            // injecting function with typescript is hell, i jsut used any type and ignored warning
            //eslint-disable-next-line
            addResource: inject<any>('addResource'),
            inputIsInvalid: false
        }
    },
    methods: {
        submitData() {
            if(this.resource.title.trim() === '' || this.resource.description.trim() === '' || this.resource.link.trim() === ''){
                this.inputIsInvalid = true;
                return;
            }
            this.resource.id = new Date().toISOString();
            this.addResource(this.resource);
            this.resource = {
                title: '',
                description: '',
                link: ''
            } as Resource;
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    },
})
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    resize: none;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>