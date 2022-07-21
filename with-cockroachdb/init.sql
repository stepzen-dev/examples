CREATE TABLE "customer" (
    email character(50) NOT NULL,
    id integer NOT NULL,
    name character(50) NOT NULL
);

CREATE TABLE "order" (
    id integer NOT NULL,
    createdat date NOT NULL,
    shippingcost double precision,
    customerid integer NOT NULL,
    carrier character(20),
    trackingid character(30)
);

INSERT INTO
    customer (email, id, name)
VALUES
    ('lucas.bill@example.com', 1, 'Lucas Bill'),
    ('mandy.jones@example.com   ', 2, 'Mandy Jones'),
    ('salim.ali@example.com ', 3, 'Salim Ali '),
    ('jane.xiu@example.com  ', 4, 'Jane Xiu  '),
    ('john.doe@example.com  ', 5, 'John Doe  '),
    ('jane.smith@example.com', 6, 'Jane Smith'),
    (
        'sandeep.bhushan@example.com',
        7,
        'Sandeep Bhushan'
    ),
    ('george.han@example.com', 8, 'George Han'),
    ('asha.kumari@example.com   ', 9, 'Asha Kumari'),
    ('salma.khan@example.com', 10, 'Salma Khan');

INSERT INTO
    "order" (
        id,
        createdat,
        shippingcost,
        customerid,
        carrier,
        trackingid
    )
VALUES
    (1, '2020-08-05', 3, 4, NULL, NULL),
    (2, '2020-08-02', 3, 6, NULL, NULL),
    (3, '2020-08-04', 1, 10, NULL, NULL),
    (4, '2020-08-03', 2, 8, NULL, NULL),
    (5, '2020-08-10', 2, 10, NULL, NULL),
    (6, '2020-08-01', 3, 3, NULL, NULL),
    (7, '2020-08-02', 1, 4, NULL, NULL),
    (8, '2020-08-04', 3, 2, NULL, NULL),
    (9, '2020-08-07', 3, 8, NULL, NULL),
    (10, '2020-08-09', 1, 9, NULL, NULL),
    (11, '2020-08-07', 2, 7, NULL, NULL),
    (12, '2020-08-03', 3, 9, NULL, NULL),
    (13, '2020-08-06', 3, 5, NULL, NULL),
    (14, '2020-08-01', 2, 2, NULL, NULL),
    (15, '2020-08-05', 1, 3, NULL, NULL),
    (16, '2020-08-02', 2, 5, NULL, NULL),
    (17, '2020-08-03', 1, 7, NULL, NULL),
    (18, '2020-08-06', 1, 6, NULL, NULL),
    (19, '2020-08-04', 2, 1, NULL, NULL),
    (20, '2020-08-01', 1, 1, NULL, NULL);