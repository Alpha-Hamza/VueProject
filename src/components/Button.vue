<template>
    <button @click="onclick()" :style="{background:color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: 'ButtonFunction',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onclick() {
            console.log("clicked")
        }
    }
}
</script>
 