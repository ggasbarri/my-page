<template>
  <div>
    <v-layout>
      <v-flex>
        <!-- Title -->
        <div style="color: white;" class="display-2 text-xs-left text--white">
          Policies
        </div>

        <!-- Cards -->
        <v-card
          style="cursor: pointer;"
          class="mt-4"
          v-for="policy in policies"
          :key="policy.id"
          @click="goToPolicy(policy.id)"
        >
          <v-layout row wrap align-center align-content-center>
            <!-- Image -->
            <v-flex xs2 class="ml-3 mt-3">
              <v-img :src="policy.imgUrl"></v-img>
            </v-flex>

            <!-- Title -->
            <v-flex xs9 align-self-center class="pt-3">
              <v-card-title class="display-1 font-weight-medium">
                {{ policy.title }}
              </v-card-title>
            </v-flex>

            <!-- Description -->
            <v-flex style="width: 100%;" class="pl-4 pr-4 pb-4 pt-3">
              <v-card-text class="pa-0 text-xs-left subheading">
                {{ policy.description }}
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "PoliciesCard",

  data() {
    return {
      policies: [
        {
          id: "book-qr",
          title: "BookQR",
          imgUrl:
            "https://raw.githubusercontent.com/gincos/bookqr-uc/master/web_hi_res_512.png",
          description:
            "Native Android app dedicated to scanning QR codes in order to consult information regarding the books " +
            "present in the Telecommunications Engineering School library of the University of Carabobo." +
            "\n" +
            "\n" +
            "Every code would be present in each book, and the information would be allocated in an internal " +
            "database hosted inside the School, and exposed through a Web Service API." +
            "\n"
        }
      ]
    };
  },

  methods: {
    goToPolicy(id) {
      this.$router.push(`/policies/${id}`);
    }
  }
};
</script>

<style scoped></style>
