<template>
  <div class='announcement'>
    <h2 class="subheading grey--text"> Announcement </h2>

     <v-container class="my-5">

       <v-card flat v-for="announcement in announcements" :key="announcement.title">
         <v-layout row wrap :class="`pa-3 announcement ${announcement.status}`">
           <v-flex xs12 md6>
             <div class="caption grey--text"> Announcement </div>
             <div> {{ announcement.title }} </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text"> Person </div>
              <div> {{ announcement.person }} </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text"> Due By </div>
              <div> {{ announcement.due }} </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
             <div class="right">
               <v-chip small :color="`${announcement.status}`" :class="`v-chip--active white--text caption my-2`">  {{ announcement.status }} </v-chip>
             </div>
           </v-flex>
         </v-layout>
         <v-divider></v-divider>
       </v-card>
     </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      announcements: [
        { title: '신인성검사', person: '지원반장', due: '2019/11/01', status: 'ongoing', content: '19-03기 신인성검사 완료할 것.' },
        { title: '미군추천', person: '지원반장', due: '2019/11/01', status: 'complete', content: '미군추천 할 것.' },
        { title: '외출대장', person: '지원반장', due: '2019/11/01', status: 'nodue', content: '외출대장 작성 엄수' }
      ]
    }
  }
}
</script>

<style>

.announcement.complete {
  border-left: 4px solid #3cd1c2;
}
.announcement.ongoing {
  border-left: 4px solid orange;
}
.announcement.nodue {
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.nodue{
  background: #f83e70;
}
</style>
