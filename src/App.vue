<template>
  <div id="app">
    <Navbar />
    <router-view :beer="beer" :fav="favorites" :addFav="addToFavorites" :removeFav="removeFromFavorites" :toggle="toggleModal"/>
    <a href="#" id="scroll" style="display: none;"><span></span></a>
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
      favorites: []  
    }
  },
  methods: {
    addToFavorites(beer) {
      beer.favorite = true
      this.favorites.push(beer)
      toastr.success('Beer added to favorites!')
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    removeFromFavorites(beer) {
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
