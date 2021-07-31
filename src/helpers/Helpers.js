export const func2=()=>{
    return(
        [
            {
              id: 1,
              name: 'API: Quotes & Comments',
              link: '/api-firebase',
            },
            {
              id: 2,
              name: 'API: Books Listings',
              link: '/api-http',
            },
        
          ]
    )

}


export const routes=()=>{
  return(
      [
          {
            path: "/cheetSheet/getting-started",
            exact: true,
            name: 'Getting Started',
            sidebar: () => "",
            main: () => <h2>Getting Started</h2>
          },
          {
            path: "/cheetSheet/components",
            name: 'Working With Components',
            sidebar: () => "",
            main: () => <h2>Working With Components</h2>
          },
          {
            path: "/cheetSheet/props",
            name: 'Passing Data via Props',
            sidebar: () => "",
            main: () => <h2>Passing Data via Props</h2>
          },
          {
            path: "/cheetSheet/states",
            name: 'State and Events',
            sidebar: () => "",
            main: () => <h2>State and Events</h2>
          },
          {
            path: "/cheetSheet/routing",
            name: 'Navigation and Routung',
            sidebar: () => "",
            main: () => <h2>Navigation and Routung</h2>
          },
          {
            path: "/cheetSheet/forms",
            name: 'Forms and User Input',
            sidebar: () => "",
            main: () => <h2>Forms and User Input</h2>
          },
          {
            path: "/cheetSheet/styling",
            name: 'Styling React Components',
            sidebar: () => "",
            main: () => <h2>Styling React Components</h2>
          },
          {
            path: "/cheetSheet/portals-ref",
            name: 'Fragments, Portals and "Refs',
            sidebar: () => "",
            main: () => <h2>Fragments, Portals and "Refs</h2>
          },
          {
            path: "/cheetSheet/effect-hooks",
            name: 'Using Effects Hooks',
            sidebar: () => "",
            main: () => <h2>Using Effects Hooks</h2>
          },
          {
            path: "/cheetSheet/http-requests",
            name: 'Sending Http Requests',
            sidebar: () => "",
            main: () => <h2>Sending Http Requests</h2>
          },   
          {
            path: "/cheetSheet/context-api",
            name: 'Redux and Context API',
            sidebar: () => "",
            main: () => <h2>Redux and Context API</h2>
          },
          {
            path: "/cheetSheet/authentication",
            name: 'Authentication',
            sidebar: () => "",
            main: () => <h2>Authentication</h2>
          },
          {
            path: "/cheetSheet/react.hooks",
            name: 'React Hooks',
            sidebar: () => "",
            main: () => <h2>React Hooks</h2>
          },
          {
            path: "/cheetSheet/next-js",
            name: 'Introduction to Next.js',
            sidebar: () => "",
            main: () => <h2>Introduction to Next.js</h2>
          },
          {
            path: "/cheetSheet/typeScript",
            name: 'React + TypeScript',
            sidebar: () => "",
            main: () => <h2>React + TypeScript</h2>
          }
        ]
  )

}
