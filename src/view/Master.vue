<template>
    <v-app>
         <core-app-bar />
         <core-dra-wer />
         <v-main class="body">
         <v-container fluid>
                
         </v-container>
     </v-main>
  </v-app>
</template>
<style scoped>
  .body {
    background: #06002b1a;
  }
</style>
<script>
export default {
     components: {
      CoreAppBar: () => import('../components/Navigation/AppBar.vue'),
      CoreDraWer: () => import('../components/Navigation/Drawer.vue'),
    },

    data: () => ({
      expandOnHover: false,
    }),
};
</script>
