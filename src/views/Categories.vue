<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"/>
      <div class="row" v-else>
        <CategoriayCreate @created="addNewCategory" />

        <CategoriayEdit
          :categories = "categories"
        />

      </div>
    </section>
  </div>
</template>

<script>
import CategoriayCreate from '../components/CategoriyaCreate'
import CategoriayEdit from '../components/CategoriyaEdit'
export default {
  name: 'categories',
  data: () => ({
    categories: [],
    loading: true
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  components: {
    CategoriayCreate, CategoriayEdit
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    }
  }
}
</script>
