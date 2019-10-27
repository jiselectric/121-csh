<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light"> 121 CSH </span>
        <span> ITMS </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span> Sign In </span>
        <v-icon right> account_box </v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary class="white">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route">

          <v-list-item-icon>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> {{ item.text }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { icon: 'schedule', text: 'Schedule', route: '/' },
        { icon: 'announcement', text: 'Announcement', route: '/announcement' },
        { icon: 'event', text: 'Calendar', route: '/calendar' },
        { icon: 'search', text: 'Detail', route: '/detail' }
      ]
    }
  }
}
</script>

<style>

</style>
