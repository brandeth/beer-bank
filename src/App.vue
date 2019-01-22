<template>
  <div id="app">
    <!-- <Navbar :search="search" :beers="beers" @nav-search="modSearch"/> -->
    <router-view style="min-height: 100vh" :beer="beer" :beers="beers" :search="search" :fav="favorites" :addFav="addToFavorites" :removeFav="removeFromFavorites" :toggle="toggleModal" :filteredListMain="filteredListMain" @main-search="modSearch"/>
    <a href="#" id="scroll" style="display: none;"><span></span></a>
    <footer class="text-muted mt-5 py-5 bg-orange">
      <div class="container">
        <p class="text-white">The Beer Bank is &copy; Beer Bank, but please drink responsibly! | Icon from <a href="https://flaticon.com" class="text-danger">Flat Icon</a></p>
        <p class="text-white">A budding developer you are? <a href="https://turing.com/" class="text-danger" target="_blank">Visit turing.com</a> or take the <a href="https://turing.ly/" target="_blank" class="text-danger">exam</a>.</p>
      </div>
    </footer>  
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      beer: '',
      favorites: [],
      search: '',
      beers: []  
    }
  },
  methods: {
    modSearch(z) {
      this.search = z
    },
    filteredListMain() {
      return this.beers.filter(beer => {
        return beer.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    addToFavorites(beer) {
      beer.favorite = true
      this.favorites.push(beer)
      toastr.success('Beer added to favorites!')
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    removeFromFavorites(beer) {
      console.log(beer)
      let index = this.favorites.indexOf(beer)
      beer.favorite = false
      if(index > -1) {
        this.favorites.splice(index, 1)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      toastr.error('Beer removed from favorites!')
    },
    toggleModal(beer) {
      this.beer = beer
      $('#exampleModal').modal('show')
    }
  },
  created() {
    if(localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites'))
    }
  }
}
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
</script>

<style>
@import './assets/style.css';
</style>
