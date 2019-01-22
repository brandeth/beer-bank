<template>
	<div>
		<!-- <Navbar /> -->
		<div class="jumbotron pt-0 pb-3 rounded-0 bg-orange ">
	      <nav class="navbar navbar-expand navbar-dark bg-orange fixed-top">
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

	      <div class="container mt-5">
	        <h2 class="display-5 pt-2 text-center my-0 text-white">The Beer Bank</h2>
	        <p class="text-center my-0 text-white p-0">Find your Favourite Beer here</p>
	        <form class="w-75 mx-auto" v-on:submit.prevent>
	          <div class="form-row">
	            <div class="col">
	              <input v-model="mainSearch" type="text" class="form-control" id="search" aria-describedby="searchHelp" placeholder="Search a beer">  
	            </div>
	          </div>
	        </form>
	      </div>
	    </div>
		<main class="container mt-5">

			<section class="row px-5 pb-3">
				<div class="col">
					<h2 class="text-center"> My Favorite Beers </h2>	
				</div>
			</section>
			<div class="row px-5" v-if="filteredFav.length">
		      <div class="col-md-6 col-lg-4 my-2" v-for="(beer, index) in filteredFav" :key="beer.id">
		        <div class="card mx-2 animated fadeIn" style="min-height: 350px">
		          <div @click.prevent="toggle(beer)" :style="{background: `url(${beer.image_url})`}" class="card-bg my-2"></div>
		          <div class="card-body">
		            <h5 @click.prevent="toggle(beer)" class="card-title text-center" style="color: goldenrod" >{{ beer.name }}</h5>
		            <p class="card-text text-center">{{ beer.tagline }}</p>
		            <span v-if="beer.favorite" class="favorite" @click.prevent="removeFav(beer)"><i class="fas fa-star"></i></span>
		            <span v-else class="favorite" @click.prevent="addFav(beer)"><i class="far fa-star"></i></span>
		          </div>
		        </div>
		      </div>
		    </div>
		    <div v-else-if="!filteredFav.length && mainSearch !== ''" class="py-5">
		    	<h2 class="text-center text-danger">No results found</h2>
		   	</div>
		   	<div v-else class="py-5">
		    	<h2 class="text-center text-danger">You have no favorite beers yet.</h2>
		   	</div>
		    <Modal :beer="beer" :addFav="addFav" :removeFav="removeFav"/>
		</main>
	</div>
</template>

<script type="text/javascript">
	import Modal from '@/components/Modal'
	import Navbar from '@/components/Navbar'
	export default {
		name: 'Favorites',
		components: {
		  Modal,
		  Navbar
		},
		props: ['beer', 'fav', 'addFav', 'removeFav', 'toggle', 'search', 'filteredListMain'],
		data() {
			return {
				mainSearch: this.search
			}
		},
		computed: {
			filteredFav() {
				return this.fav.filter(beer => {
			        return beer.name.toLowerCase().includes(this.mainSearch.toLowerCase())
			      })
			}
		}, 
		mounted() {
			//this.favSearch = ""
			//$('#nav-search').val("")
			this.favorites = JSON.parse(localStorage.getItem('favorites'));
		}
	}
</script>

<style type="text/css" scoped></style>