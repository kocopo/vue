<template>
    <div>
        <li>
            <h2>{{name}} {{ isFavourite ? '(Favourite)' : '' }}</h2>
            <button @click="toggleDetails()">Show Details</button>
            <button @click="toggleFavourite()">Toggle favourite</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone: </strong> {{phoneNumber}}</li>
                <li><strong>Email: </strong> {{emailAddress}}</li>
                <button @click="$emit('delete', id)">Delete Friend</button>
            </ul>
        </li>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props:{
        id:{
          required: true,
          type: String
        },
        name:{
            required: true,
            type: String
        },
        phoneNumber:{
            required: true,
            type: String
        },
        emailAddress:{
            required: true,
            type: String
        },
        isFavourite:{
            required: false,
            default: false,
            type: Boolean
        }
    },
    emits: ['toggle-favourite', 'delete'],
/*     emits: {
      'toggle-favourite': function(id: string){
        if(id){
          return true;
        }else{
          console.warn("missing id");
          return false;
        }
      }
    }, */
    data() {
        return {
            detailsAreVisible: false
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavourite(){
          this.$emit('toggle-favourite', this.id);
        }
    },
})
</script>


<style>

</style>