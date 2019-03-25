<template>
  <Layout>
    <v-layout style="max-width: 1100px">
      <v-flex xs12 pa-1>
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
        <template>
	<v-layout row wrap>
		<v-flex xs12 md6 pa-0>
			<!--<v-img src="../media/images/aaron.jpg"></v-img>-->
			<!--<g-image align="right" src="../media/images/aaron.jpg" style="max-width: 160px"></g-image>-->
		</v-flex>
		<v-flex xs12 md6 px-3 py-0>
			<h1>I am Aaron Davies.</h1>
			<p>I blog here like my opinions actually matter.</p>
			<ul class="social">
				<li><a href="https://twitter.com/aaronights" alt="Twitter" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-twitter.png" /></a></li>
				<li><a href="https://www.youtube.com/user/aaroNiGHTS" alt="YouTube" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-youtube.png" /></a></li>
				<li><a href="https://www.facebook.com/aaronights" alt="Facebook" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-facebook.png" /></a></li>
				<li><a href="https://www.instagram.com/aaronights/" alt="Instagram" target="_blank" rel="nofollow noopener noreferrer"><g-image src="../media/images/social/webicon-instagram.png" /></a></li>
			</ul>
		</v-flex>
	</v-layout>
</template>

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
	h1 {
		font-size: 30px;
    line-height: 34px;
		margin-bottom: 20px;
	}
	.want {
		list-style-type: none;
		padding-left: 0;
	}
	.social {
		margin-top: 2em;
		list-style-type: none;
		padding-left: 0;
	}
	.social li {
		display: inline;
		margin-right: 1em;
	}
  .v-list__tile {
    font-size: inherit;
  }
  .v-list__tile__sub-title {
    font-size: 0.8em;
  }
</style>