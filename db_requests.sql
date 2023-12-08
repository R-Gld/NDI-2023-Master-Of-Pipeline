# Update score
UPDATE `ndi`.`LEADERBOARD` SET `score` = `score` + %value WHERE `name` = "%name";

# Vérifier si le nom est présent (res = 0, OK)
SELECT name FROM `ndi`.`LEADERBOARD` WHERE name = "%name";

# Update best_score
UPDATE `ndi`.`LEADERBOARD` SET `best_score` = `score` WHERE `name` = "%name" AND `score` > `best_score`;
UPDATE `ndi`.`LEADER_BOARD` SET `score` = 0 WHERE `name` = "%name";

# Retourne le nombre de joueurs simultanée
SELECT count(name) AS "Joueurs Simultanée" FROM `ndi`.`LEADERBOARD` WHERE `score` > 0;


# GET LEADERBOARD data
SELECT `name`, `best_score` FROM `ndi`.`LEADERBOARD` ORDER BY `best_score` DESC LIMIT 10