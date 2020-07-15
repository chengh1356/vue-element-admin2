import Layout from '@/layout'

const tableRouter2 = {
  path: '/table2',
  component: Layout,
  redirect: '/table2/complex-table2',
  name: 'Table2',
  meta: {
    title: 'Table2',
    icon: 'table'
  },
  children: [
    {
      path: 'inline-edit-table2',
      component: () => import('@/views/table2/inline-edit-table2'),
      name: 'InlineEditTable2',
      meta: { title: 'Inline Edit' }
    },
    {
      path: 'complex-table2',
      component: () => import('@/views/table2/complex-table2'),
      name: 'ComplexTable2',
      meta: { title: 'Complex Table' }
    }
  ]
}
export default tableRouter2
