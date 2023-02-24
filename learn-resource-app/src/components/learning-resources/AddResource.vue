<template>
    <base-card>
        <form>
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" ></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" name="link" id="link">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';

export default defineComponent({
    components: { BaseCard, BaseButton },
    setup() {
        return {}
    }
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