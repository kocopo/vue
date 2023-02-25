<template>
    <ul>
        <li :class="{ active: modelValue === 'great' }"><button type="button" @click="activate('great')">Great</button></li>
        <li :class="{ active: modelValue === 'average' }"><button type="button"
                @click="activate('average')">Average</button></li>
        <li :class="{ active: modelValue === 'poor' }"><button type="button" @click="activate('poor')">Poor</button></li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        modelValue: {
            type: String
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            /* activeOption: this.modelValue */
        }
    },
    methods: {
        activate(option: string) {
            this.$emit('update:modelValue', option);
        }
    },
})
</script>

<style scoped>
.active {
    border-color: green;
}

.active button {
    color: green;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>