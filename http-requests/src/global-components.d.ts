import BaseButton from '@/components/UI/BaseButton.vue';
import BaseCard from '@/components/UI/BaseCard.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents{
        BaseButton: typeof BaseButton,
        BaseCard: typeof BaseCard
    }
}