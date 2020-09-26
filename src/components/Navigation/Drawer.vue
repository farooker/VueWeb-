<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    dark
    :expand-on-hover="expandOnHover"
    mobile-break-point="960"
    app
    width="260">
     <v-row>
          <v-col cols="2" class="ml-5">
         <v-list-item-avatar>
            <img src="../../assets/logo.png" />
          </v-list-item-avatar>
      </v-col>
      <v-col class="mt-2 ml-2">
        <h5 class="white--text">Control</h5>
        <h6 class="white--text">Vue</h6>
      </v-col>
    </v-row>
    <v-divider class="mb-1" />
      <v-list>
      <v-list-item-group  class="tile" active-class="active" color="#FFFFFF">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>

</style>
<script>
   import store from '../../store';
  export default {
    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({

      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'ขาย',
          to: '/',
        },
        {
          icon: 'mdi-account',
          title: 'รายงาน',
          to: '/pages/user',
        },
        {
          title: 'ข้อมูลส่วนตัว',
          icon: 'mdi-clipboard-outline',
          to: '/tables/regular-tables',
        },
      ],
    }),
    methods:{

    },
    computed: {
      drawer: {
        get () {
          return store.getters.GET_DRAWER;
        },
        set (val) {
          store.commit('SET_DRAWER', val)
        },
      },
    },
  }
</script>
