<template>
	<main class="container py-5">
		<section class="row">
			<h2> My Favorite Beers </h2>
		</section>
			<div class="row px-5" v-if="filteredFav.length">
	      <div class="col-md-6 col-lg-4 my-2" v-for="(beer, index) in filteredFav" :key="beer.id">
	        <div class="card mx-2 animated fadeIn" >
	          <div @click.prevent="toggle(beer)" :style="{background: `url(${beer.image_url})`}" class="card-bg my-2"></div>
	          <div class="card-body">
	            <h5 class="card-title" >{{ beer.name }}</h5>
	            <p class="card-text">{{ beer.tagline }}</p>
	            <span v-if="beer.favorite" class="favorite" @click.prevent="removeFav(beer)"><i class="fas fa-star"></i></span>
	            <span v-else class="favorite" @click.prevent="addFav(beer)"><i class="far fa-star"></i></span>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div v-else-if="!filteredFav.length && search !== ''" class="py-5">
	    	<h2 class="text-center">No results found</h2>
	   	</div>
	    <div v-else class="py-5">
	    	<h2 class="text-center">You have no favorite beers yet.</h2>
	   	</div>
	    <Modal :beer="beer" :addFav="addFav" :removeFav="removeFav"/>
	</main>
</template>

<script type="text/javascript">
	import Modal from '@/components/Modal'
	export default {
		name: 'Favorites',
		components: {
		  Modal
		},
		props: ['beer', 'fav', 'addFav', 'removeFav', 'toggle', 'search', 'filteredListMain'],
		data() {
			return {
				//favorites: this.fav
			}
		},
		computed: {
			filteredFav() {
				return this.fav.filter(beer => {
	        return beer.name.toLowerCase().includes(this.search.toLowerCase())
	      })
			}
		}, 
		mounted() {
			this.favorites = JSON.parse(localStorage.getItem('favorites'));
		}
	}
</script>

<style type="text/css" scoped></style>