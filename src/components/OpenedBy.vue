<template>
  <div>
    <input type="text" class="form-control" name="" v-model="search">
      <div key='jfoas' v-for="name in filteredList">
      <a @click="setName(name.first_name); onClickButton()" v-if="nameChecked&&search.length > 2 ">
        {{ name.first_name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenedBy',
  data () {
    return {
      search: '',
      nameChecked: true,
      names: [
        {'first_name': 'Imogen'},
        {'first_name': 'Beulah'},
        {'first_name': 'Alleyn'},
        {'first_name': 'Corly'},
        {'first_name': 'Melissa'},
        {'first_name': 'Ronda'},
        {'first_name': 'Nola'},
        {'first_name': 'Baryram'},
        {'first_name': 'Sherilyn'},
        {'first_name': 'Mae'},
        {'first_name': 'Isacco'},
        {'first_name': 'Rhys'},
        {'first_name': 'Lem'},
        {'first_name': 'Colene'},
        {'first_name': 'Rorie'},
        {'first_name': 'Tanitansy'},
        {'first_name': 'Olivia'},
        {'first_name': 'Stillmann'},
        {'first_name': 'Tootsie'},
        {'first_name': 'Farly'},
        {'first_name': 'Michale'},
        {'first_name': 'Ella'},
        {'first_name': 'Vanni'},
        {'first_name': 'Glenn'},
        {'first_name': 'Van'},
        {'first_name': 'Sam'},
        {'first_name': 'Antonino'},
        {'first_name': 'Goraud'},
        {'first_name': 'Winston'},
        {'first_name': 'Julietta'},
        {'first_name': 'Carrol'},
        {'first_name': 'Adriano'},
        {'first_name': 'Ginger'},
        {'first_name': 'Elias'},
        {'first_name': 'Willie'},
        {'first_name': 'Wyatt'},
        {'first_name': 'Milly'},
        {'first_name': 'Erny'},
        {'first_name': 'Perry'},
        {'first_name': 'Cloris'},
        {'first_name': 'Jacqueline'},
        {'first_name': 'Bancroft'},
        {'first_name': 'Ode'},
        {'first_name': 'Dreddy'},
        {'first_name': 'Bartel'},
        {'first_name': 'Demetris'},
        {'first_name': 'Barrett'},
        {'first_name': 'Linell'},
        {'first_name': 'Norina'},
        {'first_name': 'Brannon'}]
    }
  },
  methods: {
    setName: function (nombre) {
      this.search = nombre
      this.nameChecked = false
    },
    onClickButton (event) {
      this.$emit('clicked', this.search)
    }

  },
  computed: {
    filteredList () {
      if (this.search.length === 0) {
        this.$emit('clicked', this.search)
        this.nameChecked = true
      }
      return this.names.filter(name => {
        return name.first_name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style scoped>

</style>
