<template>
  <Layout>
    <v-layout row wrap style="max-width: 90%">
      <v-flex xs12 pa-4>
        <!--<p v-for="post in $page.posts.edges">
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </p>-->
        <!--<v-list two-line>
          <template v-for="(post, index) in $page.posts.edges">
            <v-list-tile :key="post.node.path" avatar ripple :to="post.node.path">
              <v-list-tile-content>
                <v-list-tile-title>{{post.node.title}}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{(new Date(post.node.date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ post.node.timeToRead }} minute read</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-content v-html="post.node.excerpt"></v-list-tile-content>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < $page.posts.edges.length" :key="index"></v-divider>
          </template>
        </v-list>-->
        <!--<Pager :info="$page.posts.pageInfo"/>-->
        <v-card v-for="(post, index) in $page.posts.edges" :key="index">
                    <v-card-title primary-title>
            <h1 class="headline mb-0" style="padding: 0;"><g-link :to="post.node.path">{{post.node.title}}</g-link></h1>
          </v-card-title>
          <h5 style="padding: 0em 1em;">{{(new Date(post.node.date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}}</h5><br>
          <g-link :to="post.node.path"><v-img style="display: block; margin: 0 auto;" max-width="100%" max-height="100px" v-if="post.node.image" :src="post.node.image.replace('./../media/', '/../assets/static/src/media/') " /></g-link>
          <v-card-text>            
           <div v-html="post.node.excerpt" />
             <v-btn><g-link :to="post.node.path">
            Read More...
          </g-link>
             </v-btn>
          </v-card-text>
          <v-card-actions>
          <h5 style="padding: 0em 1em;"> {{ post.node.timeToRead }} minute reading time.</h5>
          </v-card-actions>          
        </v-card>
        <v-pagination :value="$page.posts.pageInfo.currentPage" :length="$page.posts.pageInfo.totalPages" @input="page" prev-icon="<" next-icon=">"></v-pagination>
      </v-flex>
    </v-layout>
  </Layout>
  </template>


<page-query>
  query Posts ($page: Int) {
    posts: allPost (perPage: 10, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
        isFirst
        isLast
      }
      edges {
        node {
          title
          image
          path
          excerpt
          date          
          timeToRead(speed: 230)
        }
      }
    }
  }
</page-query>

<script>
  import { Pager } from "gridsome";

  export default {
      metaInfo: {
    title: 'Blog'
  },
    components: {
      Pager
    },
    methods: {
      page: function(page) {
       if (page === 1) {
          this.$router.push({path: "/blog/"});
          } 
          else {
          this.$router.push({path: "/blog/" + page});
}
    }
    }
  }
</script>

<style>
  .v-list__tile {
    font-size: inherit;
  }
  .v-list__tile__sub-title {
    font-size: 0.8em;
  }
</style>