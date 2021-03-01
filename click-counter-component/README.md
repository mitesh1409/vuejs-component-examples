## Anatomy of the component

```
Vue.component('some-awesome-vue-component', {

    // If you are using an inline template.
    // Defines Component Structure
    template: `
        ...
    `,

    // Register a list of child components.
    // Dependencies
    components: {
        ...
    },

    // Access values from the "parent" component.
    // Input received from "parent"
    props: {
        ...
    },

    // Local data specific to this component. All data properties are "reactive".
    // Component's own data.
    data() {
        ...
    },

    // Component's methods which can be called from the template.
    // Defines behavior/logic of the component.
    methods: {
        ...
    },

    // Component's computed properties which can be used in the template.
    // Advantage of caching.
    computed: {
        ...
    },

    // Watch for data changes to perform async or expensive operations
    watch: {

    },

    // Want to take action on life cycle events?
    // Lifecycle Hooks

    /* Vue Instance creation/initialization */
    beforeCreate() {
        ...
    },
    created() {
        // Component is not rendered yet but data is available.
        // Perfect place to fire AJAX calls and fetch data from API(s).
    },

    /* Compilation of template and rendering Virtual DOM */
    beforeMount() {
        ...
    },
    mounted() {
        // compiled template is mounted into the DOM.
        // Virtual DOM is rendered.
        ...
    },

    /* Re-rendering Virtual DOM with updates */
    beforeUpdate() {
        ...
    },
    updated() {
        // Virtual DOM is re-rendered with updates
        ...
    },

    /* Component destroyed */
    beforeDestroy() {
        ...
    },
    destroyed() {
        ...
    }
});
```

Example to fetch data from an API from `created()` life cycle hook:

```
let BlogPostComponent = {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            blogPost: null
        };
    },

    created() {
        axios.get('api/posts/' + this.id)
            .then(
                response => {
                    this.blogPost = response.data
                }
            )
    }
}
```

## Component Registration

There are two ways to register a component:
1. Globally
   - Components registered using `Vue.component` method are globally registered.
   - Such components are globally available in our application.
   - Example:
    ```
    Vue.component('component-a', { /* ... */ })
    Vue.component('component-b', { /* ... */ })
    Vue.component('component-c', { /* ... */ })

    new Vue({ el: '#app' })
    ```

2. Locally
   - Components registered using `components` property are locally registered.
   - They are only available inside the components in which they are registered.
   - Example:
    ```
    var ComponentA = { /* ... */ }
    var ComponentB = { /* ... */ }
    var ComponentC = { /* ... */ }

    new Vue({
        el: '#app',
        components: {
            'component-a': ComponentA,
            'component-b': ComponentB,
            'component-c': ComponentC
        }
    })
    ```

    Local Registration in a Module System

    Assume we want to use `ComponentA` and `ComponentB` inside `ComponentC` then in `ComponentC.vue` file:

    ```
    import ComponentA from './ComponentA'
    import ComponentB from './ComponentB'

    export default {
        components: {
            ComponentA,
            ComponentB
        },
        // ...
    }
    ```

    Now both `ComponentA` and `ComponentB` can be used inside `ComponentC`‘s template.

## Component Naming

There are two options to name your components:

1. kebab-case
   `Vue.component('some-component-name', { /* ... */ })`
    Custom element can be referenced using kebab-case only `<some-component-name></some-component-name>`.

2. PascalCase
   `Vue.component('SomeComponentName', { /* ... */ })`
   Custom element can be referenced using either kebab-case or PascalCase.
   So `<some-component-name></some-component-name>` and `<SomeComponentName></SomeComponentName>` both are allowed.
   However only kebab-case names are valid directly in the DOM (i.e. non-string templates).

3. Component names should always be multi-word, except for root `App` components.

Refer [Vue.js Style Guide](https://vuejs.org/v2/guide/components-registration.html#Name-Casing) for component naming guidelines.
