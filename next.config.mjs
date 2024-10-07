import nextPWA from 'next-pwa'; // Utilisation de l'import ES

const withPWA = nextPWA({
  dest: 'public', // Dossier où le service worker sera généré
  disable: process.env.NODE_ENV === 'development', // Désactive le PWA en mode développement
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig); // Exporter la configuration
