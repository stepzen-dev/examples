GRANT ALL PRIVILEGES ON *.* TO 'stepzen' @'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;

CREATE TABLE `authors` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    `isPseudonym` tinyint(4) DEFAULT '0',
    PRIMARY KEY (`ID`),
    UNIQUE KEY `ID_UNIQUE` (`ID`)
);

CREATE TABLE `books` (
    `id` int(11) NOT NULL,
    `name` varchar(45) NOT NULL,
    `originalPublishingDate` date NOT NULL,
    `authorID` int(11) DEFAULT NULL,
    `isbn` varchar(13) NULL,
    PRIMARY KEY (`ID`),
    UNIQUE KEY `ID_UNIQUE` (`ID`)
);

INSERT INTO
    `authors`
VALUES
    (1, 'Agatha Christie', 0),
    (2, 'Sir Arthur Conan Doyle', 0),
    (3, 'Edgar Allan Poe', 0);

INSERT INTO
    `books`
VALUES
    (
        1,
        'Murder on the Orient Express',
        '1934-01-01',
        1,
        '9780671523688'
    ),
    (
        2,
        'The Mysterious Affair at Styles',
        '1920-10-01',
        1,
        '9780812977202'
    ),
    (
        3,
        'The Adventure of the Three Garridebs',
        '1924-10-25',
        2,
        '9788726586343'
    ),
    (
        4,
        'The Murders in the Rue Morge',
        '1841-04-04',
        3,
        '9781407021102'
    );