-- Every article is stored in a schema named `project`
CREATE SCHEMA project;

-- There are two kinds of entities games and votes.
-- And there is a one-to-many relationship between them.
CREATE TABLE project.game (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    appid VARCHAR(127) NOT NULL,
    title VARCHAR(127) NOT NULL,
    UNIQUE(appid) -- all games are unique
);

-- These are all the votes.
CREATE TABLE project.vote (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    appid VARCHAR(127) NOT NULL
);

-- This is the initial data
INSERT INTO
    project.game (appid, title)
VALUES
    ('730', 'Counter-Strike: Global Offensive'),
    ('570', 'Dota 2'),
    ('1172470', 'Apex Legends'),
    ('578080', 'PUBG: BATTLEGROUNDS'),
    ('1599340', 'Lost Ark'),
    ('271590', 'Grand Theft Auto V'),
    ('1203220', 'NARAKA: BLADEPOINT'),
    ('440', 'Team Fortress 2');