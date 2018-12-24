<template>
  <v-layout class="pb-5 pl-4 pr-4">
    <v-container v-for="(item, index) in items" xs3 :key="index">
      <v-avatar :color="item.color">
        <v-icon dark>{{ item.icon }}</v-icon>
      </v-avatar>
      <div class="mt-2" v-if="hasTitles">{{ item.title }}</div>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "CircleList",
  props: ["items", "hasTitles"]
};
</script>

<style scoped></style>
