<template>
    <section>
        <header><h1>My friends</h1></header>
        <ul>
            <friend-contact />
            <friend-contact />
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 456 789',
                    email: 'manuel@lorenz.com'
                },
                {
                    id: 'ota',
                    name: 'Otakar Kočka',
                    phone: '0123 456 78911',
                    email: 'Otakar@kocka.com'
                }
            ]
        };
    },
};
</script>
<style lang="">
    
</style>