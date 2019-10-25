<template>
  <nav>
    <div>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase black--text">
          <span class="font-weight-light"> 121 CSH </span>
          <span> Integrated Management System </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon> exit_to_app </v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <v-navigation-drawer permanent>
    <v-list-item
      v-for="item in items"
      v-model="drawer"
      :key="item.title"
      link
    >

    <v-list-item-icon>
      <v-icon> {{item.icon}} </v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title> {{item.title}} </v-list-item-title>
    </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>

</style>
