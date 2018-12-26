<template>
  <v-layout>
    <v-flex>
      <!-- Card -->
      <v-card>
        <v-layout row wrap justify-center align-center align-content-center>
          <!-- Description -->
          <v-flex xs10 style="width: 100%;" class="pb-4 pt-3">
            <v-card-text class="pa-0 text-xs-left subheading">
              <span v-html="policy"></span>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import bookQrPolicy from "../policies/BookQrPolicy";

export default {
  name: "PolicyDetailCard",

  computed: {
    policy() {
      let policy = "";
      switch (this.$route.params.id) {
        case "book-qr":
          policy = bookQrPolicy;
          break;
        default:
          this.$router.replace({ name: "not-found" });
          break;
      }

      return policy;
    }
  }
};
</script>

<style scoped></style>
