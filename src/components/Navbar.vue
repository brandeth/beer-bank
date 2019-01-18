<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
	  <a class="navbar-brand" href="#">
	  	<img src="https://image.flaticon.com/icons/svg/202/202127.svg" width="30" height="30" class="d-inline-block align-top" alt="beer">
	  	Beer Bank
	  </a>
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
		data () {
			return {}
		}
	}
</script>

<style type="text/css"></style>