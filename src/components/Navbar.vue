<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
	  <router-link class="navbar-brand" to="/">
	  	<img src="https://image.flaticon.com/icons/svg/202/202127.svg" width="30" height="30" class="d-inline-block align-top" alt="beer">
	  	Beer Bank
	  </router-link>
	  <form class="form-inline my-2 my-lg-0 search-form" v-on:submit.prevent>
      <input v-model="navSearch" class="form-control mr-sm-2" id="nav-search" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav ml-auto">
	      <li class="nav-item">
	      	<router-link class="nav-link" to="/">
	      		<span>Home</span>
	      	</router-link>
	      </li>
	      <li class="nav-item">
	      	<router-link class="nav-link" to="/favorites">
	      		<span>Favorites</span>
	      	</router-link>
	      </li>
	    </ul>

	  </div>
	</nav>
</template>

<script type="text/javascript">
	export default {
		name: 'Navbar',
		props: ['search', 'beers'],
		data () {
			return {
				navBeers: this.beers,
				navSearch: this.search
			}
		},
		watch: {
			navSearch() {
				this.navSrch()
			}
		},
		methods: {
			navSrch() {
				this.$emit('nav-search', this.navSearch)
			}
		},
		mounted() {
			const searchForm = $('.search-form')
			//searchForm.hide()
			$('#nav-search').val("")
			window.addEventListener('scroll', () => {
	      if (window.scrollY >= 300) {
	      	//searchForm.fadeIn()
	      } else {
	      	//searchForm.fadeOut()
	      }
	    })
		}
	}
</script>

<style type="text/css"></style>