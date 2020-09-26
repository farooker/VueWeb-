<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75">
    <v-btn class="mr-3"
           elevation="1"
           fab
           small
          @click="setDrawer()"
        >
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-btn>
    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />
     <v-btn
        class="ml-2"
        min-width="0"
        text>
      <v-icon>mdi-home</v-icon>
    </v-btn>
     <v-btn
        class="ml-2"
        min-width="0"
        text>
      <v-icon>mdi-chart-bar</v-icon>
    </v-btn>
     <v-btn
        class="ml-2"
        min-width="0"
        text>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
 import store from '../../store'
 export default {
  data: () => ({

  }),
   methods: {
        setDrawer(){
           store.commit('SET_DRAWER', !store.state.drawer)
        },
      
    },
   computed: {
       route: {
        get () {
          return store.getters.GET_NAMEROUTE;
        },
       },
   },
 };
</script>
