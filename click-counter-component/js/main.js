Vue.component('click-counter', {
    // Structure
    template: `
        <button @click="incrementClickCounter">Clicked {{ count }} times!</button>
    `,

    // Data
    data() {
        return {
            count: 0
        };
    },

    // Logic/Behavior
    methods: {
        incrementClickCounter() {
            this.count++;
        }
    },

    // Life Cycle Hooks
    beforeCreate() {
        console.log('beforeCreate', this.count, this.$el);
    },

    created() {
        console.log('created', this.count, this.$el);
    },

    beforeMount() {
        console.log('beforeMount', this.count, this.$el);
    },

    mounted() {
        console.log('mounted', this.count, this.$el);
    },

    beforeUpdate() {
        console.log('beforeUpdate', this.count, this.$el);
    },

    updated() {
        console.log('updated', this.count, this.$el);
    }
});

var app = new Vue({
    el: '#app'
});
