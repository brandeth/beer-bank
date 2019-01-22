<template>
	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-xl" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	      	<div class="row">
		        <div class="col-md-4 col-sm-12">
		        	<div class="modal-img" :style="{background: `url(${beer.image_url})`}"></div>
		        </div>
		        <div class="col-md-8 col-sm-12">
		        	<h2 class="text-orange font-weight-bolder"> {{ beer.name }} </h2>
		        	<p> {{ beer.tagline }} </p>
		        	<hr class='divider bg-orange'>
		        	<div class="row">
		        		<div class="col"><p><strong>IBU</strong>: {{ beer.ibu }}</p></div>
		        		<div class="col"><p><strong>ABV</strong>: {{ beer.abv }}%</p></div>
		        		<div class="col"><p><strong>EBC</strong>: {{ beer.ebc }}</p></div>
		        	</div>
		        	<p>{{ beer.desc }}</p>
		        	<h5>Best Served with:</h5>
		        	<ul>
		        		<li v-for="food in beer.foods">{{ food }}</li>
		        	</ul>
		        	<h5>You might also like:</h5>
		        	<div class="row">
		        		<div v-for="similar in similars" class="beer-col col-md-6 col-lg-4">
		        			<div class="card border-0">
								    <div :style="{background: `url(${similar.image_url})`}" class="card-bg my-2"></div>
								    <div class="card-body">
								      <h5 class="card-title text-center">{{ similar.name }}</h5>
								      <p class="card-text text-center">{{ similar.tagline }}</p>
								    </div>
								  </div>
		        		</div>
		        	</div>
		        </div>
	      	</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	        <button v-if="!beer.favorite" @click.prevent="addFav(beer)" type="button" class="btn btn-success">Add to Favorites</button>
	        <button v-else @click.prevent="removeFav(beer)" type="button" class="btn btn-danger">Remove From Favorites</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Modal',
		props: ['beer', 'addFav', 'removeFav'],
		data() {
		    return {
		      active: false,
		      modal: false,
		      similars: []
		    }
		},
		mounted() {
			$('#exampleModal').on('show.bs.modal', e => {
				$('.beer-col').hide()
			})
			$('#exampleModal').on('shown.bs.modal', e => {
				const axios = require('axios')
	      let x = String(this.beer.ingredients.hops[0].name.split(' ').join('_'))
	      const vm = this
	      axios.get(`https://api.punkapi.com/v2/beers?hops=${x}&per_page=3`)
	        .then(response => {
	        	this.similars = response.data
	        }).then(response => {
	        	$('.beer-col').fadeIn()
	        })
			})
		}
	}
</script>

<style type="text/css" scoped>
	.modal-img {
		height: 50vh !important;
		background-position: center !important;
		background-repeat: no-repeat !important;
		background-size: contain !important;
		margin: auto;
	}
	.divider {
		border-top: 5px solid rgba(0,0,0,.1) !important;
    	background-color: goldenrod /*#903475*/;
    	width: 50%;
    	margin-left: 0;
	}
	.card-bg {
		height: 100px;
	}
	.card-title {
		font-size: 14px;
	}
	.card-text {
		font-size: 12px;
	}
</style>