<template>
    <div class="header">
        <span><span style="color: yellow;">BOOTIQ</span> VÁNOČNÍ KVÍZ</span>
        <label class="biq-button file-lable" for="file" >
            NAHRÁT KVÍZ
            <input type="file" name="file" id="file" class="inputfile" accept=".txt" @change="parseFile">
        </label>
        <span>Tramtadada</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex';

export default defineComponent({
    methods:{
        // eslint-disable-next-line
        parseFile(event: any){
            this.clearCategories();
            console.log(event.target.files);
            const file = event.target.files[0];
            let reader = new FileReader();
            const parseArrayFunc = this.parseArray;
            // eslint-disable-next-line
            reader.onload = function(_){
                let fileLines = this.result?.toString().split('\r\n');
                parseArrayFunc(fileLines);
            }
            reader.readAsText(file);
        },
        ...mapActions(['parseArray', 'clearCategories'])
    },
    
})
</script>

<style scoped>
.header{
    font-size: 32px;
    height: 50px;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
}

.inputfile{
    display: none;
}

.file-lable{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>