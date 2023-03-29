const app = Vue.createApp({});

app.component('agreement-text', {
    template: `
      <p v-html="agreement"></p>
    `,
    props: ['tenant', 'url'],
    data(){
        return {
            agreement: ''
        };
    },
    mounted() {
        fetch(this.url).then(response => response.json()).then(json =>{
            console.log(json);
            if(this.tenant !== 'cs'){
                var engGrantText = '';
                for(const tenantAgr of json.data.l10ns){
                    if (tenantAgr.language_code === 'en'){
                        engGrantText = tenantAgr.grant_text;
                    }
                    if(tenantAgr.language_code === this.tenant){
                        this.agreement = tenantAgr.grant_text;
                        return;
                    }
                }
                this.agreement = engGrantText;
            }else{
                this.agreement = json.data.grant_text;
            }
        });
    },
});

app.mount('#vue-agreement-text');