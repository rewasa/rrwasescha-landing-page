export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61000a3ed79cfc0aa12d7800',
                  title: 'Sanity Studio',
                  name: 'rrwasescha-landing-page-studio',
                  apiId: '78759678-10fa-4654-849b-a7b4c67f90aa'
                },
                {
                  buildHookId: '61000a3e07788f0ea80587f7',
                  title: 'Blog Website',
                  name: 'rrwasescha-landing-page',
                  apiId: '52bf6777-53c9-48dd-8a54-be545b5ad0f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rewasa/rrwasescha-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rrwasescha-landing-page.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
