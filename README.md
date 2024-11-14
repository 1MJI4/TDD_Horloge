# TDD_Horloge

Ce projet implémente une version de l'horloge de Berlin en JavaScript, avec une méthodologie TDD et une structuration des fonctionnalités en plusieurs lignes de lampes pour représenter les heures, minutes, et secondes.
# Table des matières

    Description
    Structure de l'Horloge
    Installation
    Utilisation
    Tests
    Auteurs
    Remarques Importantes

# Description

L'horloge de Berlin est un modèle unique d'affichage de l'heure utilisant des lampes pour chaque segment de temps :

    Les heures, minutes, et secondes sont divisées en lignes.
    Les lampes allumées représentent des multiples ou des unités de chaque segment de temps.

# Structure de l'Horloge

    Lampe des secondes : Une lampe qui s'allume en jaune pour les secondes paires.
    Ligne des heures en blocs de 5 heures : Quatre lampes rouges où chaque lampe représente un bloc de 5 heures.
    Ligne des heures en unités : Quatre lampes rouges représentant chacune une heure.
    Ligne des minutes en blocs de 5 minutes : Onze lampes (jaunes et rouges). Les multiples de 15, 30 et 45 minutes sont indiqués en rouge, les autres en jaune.
    Ligne des minutes en unités : Quatre lampes jaunes représentant chaque minute restante (1-4).

Exemple pour 12:32:00 :

Y
RROO
RROO
YYRYYROOOOO
YYOO

# Installation

    Cloner le dépôt :

      git clone https://github.com/1MJI4/TDD_Horloge.git

    Installer les dépendances :

      npm install

# Utilisation

Ce projet comporte plusieurs méthodes pour générer chaque ligne de l'horloge. Voici les principales :

    getSimpleMinutesLine(minutes): Gère les unités des minutes (0 à 4).
    getFiveMinutesLine(minutes): Gère les blocs de 5 minutes, avec des lampes rouges pour les multiples de 15.
    getSimpleHoursLine(hours): Gère les unités des heures.
    getFiveHoursLine(hours): Gère les blocs de 5 heures.
    getSecondsLamp(seconds): Allume la lampe jaune pour les secondes paires.

# Afficher l'horloge complète

La méthode getFullClock(hours, minutes, seconds) affiche l'horloge entière pour une heure donnée.

Exemple d'utilisation :

const main = new Main();
console.log(main.getFullClock(12, 32, 0));

# Tests

Les tests unitaires sont fournis pour vérifier le bon fonctionnement de chaque fonctionnalité de l'horloge.
Lancer les tests

Exécutez les tests avec la commande :

npm test

# Cas de tests

    Minutes simples : (YYOO pour 32 minutes, OOOO pour 10 minutes)
    Minutes par blocs de 5 : (YYRYYROOOOO pour 30 minutes)
    Heures simples : (ROOO pour 1 heure, RROO pour 2 heures)
    Lampe des secondes : (Y pour 0 secondes, O pour 1 seconde)

# Auteurs

    Groupe : 28
    Membres :
        Ibrahim Yahia
        Abdelmajid Azouagh
