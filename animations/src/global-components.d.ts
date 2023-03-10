import BaseModal from '@/components/BaseModal.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents{
        BaseModal: typeof BaseModal
    }
}