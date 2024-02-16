export default [
  {
    title: 'DASHBOARD',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'CLIENTS',
    to: { name: 'clients' },
    icon: { icon: 'tabler-user' },
    children:[
      {
        title:'VIEW CLIENTS',
        to:{name:'viewclients'},
        icon:{icon:'tabler-chevron-right'}
      },
      {
         title:'UNAPPROVED CLIENTS',
         to:{name:'unapprovedclients'},
         icon:{icon:'tabler-chevron-right'}
      }
    ]
  },
  {
    title: 'CONTACTS',
    to: { name: 'contacts' },
    icon: { icon: 'tabler-address-book' },
  },
  {
    title: 'ACCOUNTS',
    to: { name: 'accounts' },
    icon: { icon: 'tabler-user-circle' },
  },
  {
    title: 'MATERIALS',
    to: { name: 'materials' },
    icon: { icon: 'tabler-rectangular-prism' },
    children:[
      {
        
          title: 'VIEW MATERIALS',
          to: { name: 'viewmaterials' },
          icon: { icon: 'tabler-chevron-right' },
        
      },
      {
        
        title: 'VIEW MATERIALS RATES',
        to: { name: 'viewmaterialrates' },
        icon: { icon: 'tabler-chevron-right' },
      
    },

    ]

  },
  {
        
    title: 'FLEET',
    to: { name: 'fleet' },
    icon: { icon: 'tabler-truck' },
  
},
{
        
  title: 'OUTBOUND LOCATIONS',
  to: { name: 'outboundlocation' },
  icon: { icon: 'tabler-map-pin' },

},
{
        
  title: 'eZWEIGH',
  to: { name: 'esweigh' },
  icon: { icon: 'tabler-square-rounded' },

},
{
        
  title: 'EMPLOYEE',
  to: { name: 'employees' },
  icon: { icon: 'tabler-user-plus' },

},
{
        
  title: 'ROLES & PERMISSIONS',
  to: { name: 'rolesandpermission' },
  icon: { icon: 'tabler-anchor' },

},
{
        
  title: 'REPORTS',
  to: { name: 'reports' },
  icon: { icon: 'tabler-file-description' },

},
{
        
  title: 'REPORTS TICKET ISSUES',
  to: { name: 'reportsticketissues' },
  icon: { icon: 'tabler-file-description' },

},
]
