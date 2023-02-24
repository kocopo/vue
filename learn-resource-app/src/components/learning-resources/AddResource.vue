<template>
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
import { defineComponent, inject} from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import Resource from '../model/Resource';

export default defineComponent({
    
    components: { BaseCard, BaseButton },
    inject: ['addResource'],
    data() {
        return {
            resource: {} as Resource,
            // injecting function with typescript is hell, i jsut used any type and ignored warning
            //eslint-disable-next-line
            addResource: inject<any>('addResource')
        }
    },
    methods: {
        submitData() {
            this.resource.id = new Date().toISOString();
            this.addResource(this.resource);
            this.resource = {} as Resource;
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