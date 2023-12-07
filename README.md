# JeuDeDes
Jeu de dés créé avec Javascript

![accueil](https://github.com/MartinelliSam/JeuDeDes/assets/122564923/873bcef7-178b-4dfa-bd45-9082be1af6a8)

## Démo : 

https://great-dice-game.netlify.app/

## Règles : 

Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). 
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite, tant qu'il n'obtient pas un 1.
Le résultat d’un lancer est ajouté au ROUND.

![game](https://github.com/MartinelliSam/JeuDeDes/assets/122564923/92250a93-ccb3-4600-9f43-9514d2fd8d3c)


Lors de son tour, le joueur peut décider à tout moment de: 
  -Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors letour de l’autre joueur.
  -Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
  
Le premier joueur qui atteint les 100 points sur global gagne le jeu.

![win](https://github.com/MartinelliSam/JeuDeDes/assets/122564923/864e7cc6-dce0-4855-933b-052341529d55)

