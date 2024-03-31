const { exec } = require('child_process');
const dotenv = require('dotenv');

// Chargement des variables d'environnement depuis le fichier .env
dotenv.config();

// Récupération de la valeur de la variable d'environnement
const passphrase = process.env.NODE_HTTP_SERVER_SSL_PASSPHRASE;

// Construction de la commande OpenSSL
const command = `openssl rsa -in key.pem -out key-dechiffre.pem -passin pass:${passphrase}`;

// Exécution de la commande OpenSSL
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erreur lors de l'exécution de la commande : ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Erreur lors de l'exécution de la commande : ${stderr}`);
    return;
  }
  console.log(`Clé déchiffrée avec succès : ${stdout}`);
});
