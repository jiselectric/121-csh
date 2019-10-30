<template>
  <div class="team">
    <h1 class="subheading grey--text"> Information </h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 v-for="soldier in soldiers" :key="soldier.firstName">
          <v-card flat class="text-xs-center ma-3 shaped border-radius">
            <v-card-text>
              <div class="title black--text"> {{ soldier.rank}} </div>
              <div class="subtitle-1"> {{ soldier.firstName }} {{ soldier.lastName }} </div>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      soldiers: [
        { rank: 'CPL', firstName: 'Ji Hyung', lastName: 'Kim', company: 'HHD', section: 'RSO' },
        { rank: 'CPL', firstName: 'Geun Ho', lastName: 'Kim', company: 'Alpha', section: 'MDS' },
        { rank: 'CPL', firstName: 'Jin Woo', lastName: 'Kang', company: 'Alpha', section: 'Sr. KATUSA' }
      ]
    }
  }

}
</script>
