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
                  buildHookId: '5ebb1656510923dd7d2023c2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink2-studio-xfgfrbyq',
                  apiId: 'f19b8fa4-809e-44b7-adeb-fdc948351882'
                },
                {
                  buildHookId: '5ebb165666772570c161d5f6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink2-web',
                  apiId: 'e4d21f43-8834-4981-90f1-110a4613c014'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alejandro-tapia-soypyme/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink2-web.netlify.app', category: 'apps'}
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
