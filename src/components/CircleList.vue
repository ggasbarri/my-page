<template>
  <v-layout class="pb-5 pl-4 pr-4">
    <v-container v-for="(item, index) in items" xs3 :key="index">
      <a
        style="text-decoration: none;"
        target="_blank"
        v-if="isClickable"
        :href="item.url"
      >
        <v-avatar :color="item.color">
          <v-icon dark>{{ item.icon }}</v-icon>
        </v-avatar>
      </a>
      <v-avatar v-else :color="item.color">
        <v-icon dark>{{ item.icon }}</v-icon>
      </v-avatar>

      <div class="mt-2" v-if="hasTitles">{{ item.title }}</div>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "CircleList",
  props: ["items", "hasTitles", "isClickable"]
};
</script>

<style scoped></style>
