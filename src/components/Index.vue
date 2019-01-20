<template>
  <main class="container py-5">

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 text-center">The Beer Bank</h1>
        <p class="lead text-center">Find your Favourite Beer here</p>
        <form class="w-75 mx-auto" v-on:submit.prevent>
          <div class="form-row">
            <div class="col">
              <input v-model="mainSearch" type="text" class="form-control" id="search" aria-describedby="searchHelp" placeholder="Search a beer">  
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary">Search</button>    
            </div>
          </div>
        </form>
      </div>
    </div>

    <div v-if="beers.length && filteredListMain().length" class="row px-5 beer-rows">
      <div class="col-md-6 col-lg-4 my-2" v-for="(beer, index) in filteredListMain()" :key="beer.id">
        <div class="card mx-2 animated fadeIn" >
          <div @click.prevent="toggle(beer)" :style="{background: `url(${beer.image_url})`}" class="card-bg my-2"></div>
          <div class="card-body">
            <h5 class="card-title" @click.prevent="toggle(beer)" data-toggle="modal" data-target="#exampleModal">{{ beer.name }}</h5>
            <p class="card-text">{{ beer.tagline }}</p>
            <span v-if="beer.favorite" class="favorite" @click="removeFav(beer)"><i class="fas fa-star"></i></span>
            <span v-else class="favorite" @click="addFav(beer)"><i class="far fa-star"></i></span>
          </div>
        </div>
      </div>
      <div class="loading" v-if="loading"> <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"> </div>
    </div>

    <div v-else-if="beers.length && !filteredListMain.length"> 
        <h2> No Results found... </h2>
    </div>

    <div v-else>
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
