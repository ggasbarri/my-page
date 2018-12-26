<template>
  <v-layout row wrap align-center justify-center class="pl-4 pr-4">
    <v-flex v-for="(item, index) in items" :key="index">
      <a
        style="text-decoration: none;"
        target="_blank"
        v-if="isClickable"
        :href="item.url"
        class="px-1"
      >
        <v-avatar v-ripple :color="item.color">
          <v-icon dark>{{ item.icon }}</v-icon>
        </v-avatar>
      </a>
      <div class="px-1" v-else>
        <v-avatar :color="item.color">
          <v-icon dark>{{ item.icon }}</v-icon>
        </v-avatar>
      </div>

      <div class="mb-4">
        <div class="mt-2" v-if="hasTitles">{{ item.title }}</div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "CircleList",
  props: ["items", "hasTitles", "isClickable"]
};
</script>

<style scoped></style>
