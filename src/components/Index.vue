<template>
  <main class="pt-0">

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
        <p class="text-center my-0 text-white">Find your Favourite Beer here</p>
        <form class="w-75 mx-auto" v-on:submit.prevent>
          <div class="form-row">
            <div class="col">
              <input v-model="mainSearch" type="text" class="form-control" id="search" aria-describedby="searchHelp" placeholder="Search a beer">  
            </div>
          </div>
        </form>
      </div>
    </div>

    <div v-if="beers.length && filteredListMain().length" class="row px-5 beer-rows container mx-auto ">
      <div class="col-md-6 col-lg-4 my-2" v-for="(beer, index) in filteredListMain()" :key="beer.id">
        <div class="card mx-2 animated fadeIn" style="min-height: 350px" >
          <div @click.prevent="toggle(beer)" :style="{background: `url(${beer.image_url})`}" class="card-bg my-2"></div>
          <div class="card-body">
            <h5 class="card-title text-center" style="color: goldenrod" @click.prevent="toggle(beer)" data-toggle="modal" data-target="#exampleModal">{{ beer.name }}</h5>
            <p class="card-text text-center">{{ beer.tagline }}</p>
            <span v-if="beer.favorite" class="favorite" @click="removeFav(beer)"><i class="fas fa-star"></i></span>
            <span v-else class="favorite" @click="addFav(beer)"><i class="far fa-star"></i></span>
          </div>
        </div>

      </div>
      
      <div class="col">
        <div class="loading" v-if="loading"> <h2 class="text-center py-5">Loading...</h2> </div>
      </div>
    </div>

    <div v-else-if="beers.length && !filteredListMain.length" class="px-5"> 
        <h2> No Results found... </h2>
    </div>

    <div v-else class="px-5">
      <h2> Loading... </h2>
    </div>

    <Modal :beer="beer" :addFav="addFav" :removeFav="removeFav"/>
    
  </main>
</template>

<script>
import Modal from '@/components/Modal'
import Vue from 'vue'
export default {
  name: 'Index',
  props: ['beer', 'fav', 'addFav', 'removeFav', 'toggle', 'search', 'beers', 'filteredListMain'],
  components: {
    Modal
  },
  data () {
    return {
      bottom: false,
      mainSearch: this.search,
      loading: false
    }
  },
  methods: {
    mainSrch() {
      this.$emit("main-search", this.mainSearch)
    },
    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY + 420 >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    addBeer() {
      this.loading = true
      const axios = require('axios')
      axios.get('https://api.punkapi.com/v2/beers/random')
        .then(response => {
          $('.loading').show()
          this.loading = false
          let api = response.data[0]
          let apiInfo = {
            name : api.name,
            image_url: api.image_url,
            desc : api.description,
            img : api.image_url,
            tips : api.brewers_tips,
            tagline : api.tagline,
            foods : api.food_pairing,
            ibu: api.ibu,
            abv: api.abv,
            ebc: api.ebc,
            ingredients: api.ingredients,
            favorite: false
          }
          this.beers.push(apiInfo)
          if (this.bottomVisible()) {            
            this.addBeer()
          }
      })
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom && this.mainSearch === "") {
        this.addBeer()
      }
    },
    mainSearch() {
      this.mainSrch()
    }
  },
  mounted() {
    this.mainSearch = ""
    $('#nav-search').val("")
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.addBeer()
  },
  beforeDestroy() {
    this.mainSearch = ""
    this.mainSrch()
    $('#nav-search').val("")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  
</style>
