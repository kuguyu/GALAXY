 
const netWork = [
  // {
  //   path: '/',
  //   redirect: '/netWork',
  // },
  {
    path: '/',
    component: () => import('views/nvm/index.vue'),
    redirect: '/netWork',
    name: '首页展示',
    meta: {
      title: '首页展示'
    },
    children: [
      { 
        path: "/netWork",
        component: () => import('views/home/index.vue'),
        name: 'netWork',
        meta: {
          title: 'netWork',
        },
      },
      {
        path: '/minting',
        component: () => import('views/mint/index.vue'),
        name: 'Minting',
        meta: { title: 'Minting' }
      },
      {
        path: '/burning',
        component: () => import('views/burn/index.vue'),
        name: 'Burning',
        meta: { title: 'Burning' }
      },
      {
        path: '/voting',
        component: () => import('views/vot/index.vue'),
        name: 'Voting',
        meta: { title: 'Voting' }
      },
      {
        path: '/statistics',
        component: () => import('views/statistics/index.vue'),
        name: 'Statistics',
        meta: { title: 'Statistics' }
      },
      {
        path: '/loan',
        component: () => import('views/loan/index.vue'),
        name: 'Loan',
        meta: { title: 'Loan' }
      },
      {
        path: '/detail',
        component: () => import('views/detail/index.vue'),
        name: 'detail',
        meta: { title: 'detail' }
      },
      {
        path: '/all',
        component: () => import('views/all/index.vue'),
        name: 'all',
        meta: { title: 'all' }
      }
      // {
      //   path: '/minting',
      //   component: () => import('views/mint/index.vue'),
      //   name: 'Minting',
      //   meta: { title: 'Minting' }
      // }
    ]
  }
]
export default [...netWork]