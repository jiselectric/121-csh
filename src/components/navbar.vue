<template>
  <nav>
    <div>
      <v-app-bar>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase black--text">
          <span class="font-weight-light"> 121 CSH </span>
          <span> Integrated Management System </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon> exit_to_app </v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" class="white"
        height="700"
        width="300"
        >
        <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Announcement', icon: 'announcement' },
        { title: 'Submit', icon: 'cloud_upload' },
        { title: 'Calendar', icon: 'event' },
        { title: 'Detail', icon: 'search' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  }
}
</script>

<style>

</style>
