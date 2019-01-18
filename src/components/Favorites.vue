<template>
	<main class="container py-5">
		<section class="row">
			<h2> My Favorite Beers </h2>
		</section>
		<div class="row px-5" v-if="fav.length">
	      <div class="col-md-6 col-lg-4 my-2" v-for="(beer, index) in fav" :key="beer.id">
	        <div class="card mx-2 animated fadeIn" >
	          <div @click.prevent="toggle(beer)" :style="{background: `url(${beer.image_url})`}" class="card-bg my-2"></div>
	          <div class="card-body">
	            <h5 class="card-title" >{{ beer.name }}</h5>
	            <p class="card-text">{{ beer.tagline }}</p>
	            <span v-if="beer.favorite" class="favorite" @click="removeFav(beer)"><i class="fas fa-star"></i></span>
	            <span v-else class="favorite" @click="addFav(beer)"><i class="far fa-star"></i></span>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div v-else class="py-5">
	    	<h2 class="text-center">You have no favorite beers yet.</h2>
	   	</div>
	    <Modal :beer="beer" />
	</main>
</template>

<script type="text/javascript">
	import Modal from '@/components/Modal'
	export default {
		name: 'Favorites',
		components: {
		  Modal
		},
		props: ['beer', 'fav', 'toggle','addFav', 'removeFav'],
		data() {
			return {
				
			}
		},
		methods: {
			toggleModal() {
				this.$emit('toggle-modal')
			} 
		},
		mounted() {
			this.favorites = JSON.parse(localStorage.getItem('favorites'));
		}
	}
</script>

<style type="text/css" scoped></style>