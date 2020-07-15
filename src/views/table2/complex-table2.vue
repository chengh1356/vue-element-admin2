<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="标题" class="filter-item" style="width:200px;" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.importance" placeholder="Imp" class="filter-item" style="width:90px;" clearable>
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-button class="filter-item" icon="el-icon-search" type="primary" @click="handleFilter">
        Search
      </el-button>
      <el-button class="filter-item" icon="el-icon-edit" type="primary" style="margin-left:10px;" @click="handleCreate">
        Add
      </el-button>
      <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width:100%;">
        <el-table-column label="ID" width="80" align="center">
          <template slot-scope="{row}">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
import { fetchList } from '@/api/article'

export default {
  name: 'ComplexTable2',
  components: {},
  directives: {},
  filters: {

  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        title: undefined,
        importance: undefined
      },
      importanceOptions: [1, 2, 3]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
      })
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
    },
    handleFilter() {
      console.log('触发点击事件')
    },
    handleCreate() {
      console.log('添加事件触发')
    }
  }
}
</script>
