<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoriayCreate @created="addNewCategory" />

        <CategoriayEdit />
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
    categories: []
  }),
  components: {
    CategoriayCreate, CategoriayEdit
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
      console.log(this.categories)
    }
  }
}
</script>
