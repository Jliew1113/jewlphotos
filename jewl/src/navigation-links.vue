<template>
  <nav class="navigation-links-nav" v-bind:class="rootClassName">
    <a class="navigation-links-text">{{ text }}</a>
    <a class="navigation-links-text1">{{ text1 }}</a>
    <a class="navigation-links-text2">{{ text3 }}</a>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    text1: {
      type: String,
      default: 'about',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'works',
    },
    text3: {
      type: String,
      default: 'contact',
    },
  },
}
</script>

<style scoped>
.navigation-links-nav {
  flex: 0 0 auto;
  display: flex;
  color: #272727;
  align-items: flex-start; /* set alignment to flex-start */
  text-align: center;
  flex-direction: row;
}

.navigation-links-nav a {
  display: inline-block; /* use inline-block instead of block */
  height: 40px; /* set a fixed height */
  line-height: 40px; /* set line-height equal to height */
}

.navigation-links-nav a:hover{
  color: #d79b19;
}

.navigation-links-text1 {
  margin-left: 20px; /* use a fixed margin instead of a variable */
}

.navigation-links-text2 {
  margin-left: 20px; /* use a fixed margin instead of a variable */
}

</style>
