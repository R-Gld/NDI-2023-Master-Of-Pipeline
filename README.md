# Informations NDI 2023 pour l'équipe MastersOfPipelines

Chef d'équipe : ju7465

En cas de souci, n'hésitez pas à contacter l'équipe de l'OFNI sur le discord avec le tag `@orga_nuit`


## Backend
- Si vous avez un backend node: ne pas changer le port du serveur express de celui qui vous est alloué : `:49141`
- Si vous avez un backend php: c’est bien, moi aussi j’aime bien PHP. J’ai pas d’instructions particulières sinon.

## Déploiement automatique
À chaque _push_ sur GitLab de votre projet, votre code sera mis à jour sur le serveur
Vous pourriez avoir besoin de faire d'autres actions pour que votre projet soit pleinement déployé (installer des dépendances `npm install --production ` ou `composer install --no-dev`, lancer des migrations, que sais-je encore…)
Dans ce cas, personnalisez le script `deploy_script.sh` dans votre dépôt, qui sera exécuté à chaque déploiement _après_ la mise à jour du code
Des notifications Discord seront envoyées au fur et à mesure du déploiement sur le discord de l'OFNI, suivez-les (#🌙-nuit-hooks)!

En complément, vous pouvez installer [GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/#create-a-gitlab-ciyml-file) dans votre dépôt pour avoir de l'intégration continue

## Connexion à la base de données
- Accès PHPMyAdmin : https://nuit-info.ofni.asso.fr/phpmyadmin/
- Utilisateur : mastersofpipelines
- Mot de passe : fa9bc4070e7e112e715d
- Base de données : mastersofpipelines
- Petit tip: Il y a un thème sombre activable depuis le menu principal

## Identifiants gitlab
- Adresse du dépôt gitlab : https://gitlab.nuit-info.ofni.asso.fr/ndi-2023/mastersofpipelines
- À chaque push sur la branch `main` de ce dépôt, votre code sera redéployé sur le serveur
- Pour clôner le dépôt :
   1. (optionnel) `git config --global credential.helper 'cache --timeout=3600'` pour enregistrer le mot de passe pendant une heure
   2. `git clone https://gitlab.nuit-info.ofni.asso.fr/ndi-2023/mastersofpipelines.git`
### Julie magnin
   - Adresse mail : julie.magnin03@edu.univ-fcomte.fr
   - Nom d'utilisateur : julie.magnin
   - Mot de passe : julie-99aed1cce46a

### romain galland
   - Adresse mail : romain.galland@edu.univ-fcomte.fr
   - Nom d'utilisateur : romain.galland
   - Mot de passe : romai-d91f7abcb35d

### Théo delaroche
   - Adresse mail : theo.delaroche@edu.univ-fcomte.fr
   - Nom d'utilisateur : theo.delaroche
   - Mot de passe : theod-477e97446edc

### Théo renaud
   - Adresse mail : theo.renaud@edu.univ-fcomte.fr
   - Nom d'utilisateur : theo.renaud
   - Mot de passe : theor-db5eb5ba531b

### Noam faivre
   - Adresse mail : noam.faivre@edu.univ-fcomte.fr
   - Nom d'utilisateur : noam.faivre
   - Mot de passe : noamf-2f3000d3a602

### Quentin radlo
   - Adresse mail : quentin.radlo@edu.univ-fcomte.fr
   - Nom d'utilisateur : quentin.radlo
   - Mot de passe : quent-5424786b958f

### Ryan loureau
   - Adresse mail : ryan.loureau@edu.univ-fcomte.fr
   - Nom d'utilisateur : ryan.loureau
   - Mot de passe : ryanl-9f91788af072# NDI-2023-Master-Of-Pipeline
Repo de la nuit de l'info 2023 - Groupe Master Of Pipeline
