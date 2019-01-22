<template>
	<div class="fixed-top">
		<nav class="navbar navbar-expand navbar-dark bg-warning">

		  <div class="collapse navbar-collapse" id="navbarsExample02">
		    <ul class="navbar-nav ml-auto">
		      <li class="nav-item">
		      	<router-link class="nav-link" to="/">
		      		<span class="text-white">Home</span>
		      	</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link class="nav-link" to="/favorites">
		      		<span class="text-white">Favorites</span>
		      	</router-link>
		      </li>
		    </ul>
		  </div>


		</nav>
	</div>
	

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