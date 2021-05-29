const router = {
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: () => import('@/pages/page404')
    },
    {
      path: '/',
      component: () => import('@/pages/Home')
    },
    {
      path: '/sdorica',
      component: () => import('@/pages/Sdorica')
    },
    {
      path: '/search',
      component: () => import('@/pages/Search')
    },
    {
      path: '/character/:character_name',
      component: () => import('@/pages/Character'),
      props: true
    },
    {
      path: '/edit',
      component: () => import('@/pages/Edit'),
      props: true
    }
  ]
}

export default router
