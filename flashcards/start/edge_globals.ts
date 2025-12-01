import edge from 'edge.js'

edge.global('config', {
  colorScheme: 'dark',
  menu: [
    { label: 'Home', url: '/', title: 'Accueil' },
    { label: 'Decks', url: '/decks', title: 'Decks' },
    { label: 'Login', url: '/login', title: 'Connexion' },
    { label: 'Register', url: '/register', title: 'Enregistrement' },
  ],
  socialLinks: [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Github', url: 'https://github.com' },
  ],
})
