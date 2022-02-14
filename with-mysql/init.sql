GRANT ALL PRIVILEGES ON *.* TO 'testUserIntrospection' @'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;

CREATE TABLE `address` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `street` varchar(20) NOT NULL,
    `city` varchar(20) NOT NULL,
    `postalcode` varchar(10) NOT NULL,
    `countryregion` varchar(20) NOT NULL,
    `stateprovince` varchar(20) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `customer` (
    `email` varchar(50) NOT NULL,
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `customeraddress` (
    `customerid` int(11) NOT NULL,
    `addressid` int(11) NOT NULL,
    FOREIGN KEY (customerid) REFERENCES `customer`(id),
    FOREIGN KEY (addressid) REFERENCES `address`(id)
);

CREATE TABLE `order` (
    `id` int(11) NOT NULL,
    `createdat` date NOT NULL,
    `shippingcost` decimal(3, 2),
    `customerid` int(11) NOT NULL,
    `carrier` varchar(20) NOT NULL,
    `trackingid` varchar(30) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (customerid) REFERENCES `customer`(id)
);

CREATE TABLE `product` (
    `id` int(11) NOT NULL,
    `title` varchar(255) NOT NULL,
    `description` text NOT NULL,
    `image` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `lineitem` (
    `orderid` int(11) NOT NULL,
    `productid` int(11) NOT NULL,
    `quantity` int(11),
    FOREIGN KEY (orderid) REFERENCES `order`(id),
    FOREIGN KEY (productid) REFERENCES `product`(id)
);

INSERT INTO
    `address`
VALUES
    (
        1,
        '999 Croissant Bl',
        'Boston',
        '02122',
        'US',
        'Massachussets'
    ),
    (
        2,
        '1111 Dell Way',
        'Round Rock',
        '78664',
        'US',
        'Texas'
    ),
    (
        3,
        '555 Silly Wy',
        'London',
        'EI 6AN',
        'UK',
        'Middlesex'
    ),
    (
        4,
        '777 Highlands Dr',
        'Edinburgh',
        'EH1 1DR',
        'UK',
        'Midlothian'
    ),
    (
        5,
        '111 Main St',
        'Miami',
        '33122',
        'US',
        'Florida'
    ),
    (
        6,
        '222 Side St',
        'San Francisco',
        '94016',
        'US',
        'California'
    ),
    (
        7,
        '444 Right Cir',
        'New York',
        '10025',
        'US',
        'New York'
    ),
    (
        8,
        '888 Rainy Ct',
        'Seattle',
        '98115',
        'US',
        'Washington'
    ),
    (
        9,
        '333 Left Ave',
        'Chicago',
        '60617',
        'US',
        'Illinois'
    ),
    (
        10,
        '666 Connaught Cir',
        'Delhi',
        '110001',
        'IN',
        'Delhi'
    );

INSERT INTO
    `customer`
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
    `customeraddress`
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10);

INSERT INTO
    `order`
VALUES
    (1, '2020-08-05', 3, 4, '', ''),
    (2, '2020-08-02', 3, 6, '', ''),
    (3, '2020-08-04', 1, 10, '', ''),
    (4, '2020-08-03', 2, 8, '', ''),
    (5, '2020-08-10', 2, 10, '', ''),
    (6, '2020-08-01', 3, 3, '', ''),
    (7, '2020-08-02', 1, 4, '', ''),
    (8, '2020-08-04', 3, 2, '', ''),
    (9, '2020-08-07', 3, 8, '', ''),
    (10, '2020-08-09', 1, 9, '', ''),
    (11, '2020-08-07', 2, 7, '', ''),
    (12, '2020-08-03', 3, 9, '', ''),
    (13, '2020-08-06', 3, 5, '', ''),
    (14, '2020-08-01', 2, 2, '', ''),
    (15, '2020-08-05', 1, 3, '', ''),
    (16, '2020-08-02', 2, 5, '', ''),
    (17, '2020-08-03', 1, 7, '', ''),
    (18, '2020-08-06', 1, 6, '', ''),
    (19, '2020-08-04', 2, 1, '', ''),
    (20, '2020-08-01', 1, 1, '', '');

INSERT INTO
    `product`
VALUES
    (
        49,
        '8oz Disposable Coffee Cups with Lids and Stirrers | Insulated Double Walled Hot Drinks Takeaway Travel Paper Cups | Black Modern Design | Heat & Leak Resistant | 40 Pack | by Fuel.',
        '<!-- show up to 2 reviews by default --><p><b>PREMIUM FINISH COFFEE CUPS</b><br> Enjoy a comfortable hot drink in our FUEL. cups backed by our high density, double wall technology.<br> Keep your drinks hot for longer and your fingers safe. We have done extensive testing to<br> ensure our cups do not become wrinkled, or break down after days of holding liquids. These<br> are one of the highest quality cups available on the market. We doubt anyone can compare.<br> No more mess! You could even reuse them if you wanted.<br><br> <b>LEAK PROOF LIDS WITH TABS</b><br> Specially designed lids that “click” onto your cups so you know there’s going to be no spills or leaks.<br> Your clothes, car, desk and tables will remain clean. Just be sure to not tip the whole cup upside down!<br><br> <b>CLASSIC WOODEN STIRRERS</b><br> Just like any coffee shop, you need wooden stirrers to finish making your drink or to take with you.<br> That’s why we’ve decided to include them in this coffee cup set so you have the complete set<br> and never have to worry about finding or washing spoons.<br><br> <b>MODERN, CLEAN DESIGN</b><br> A truly inspired coffee cup design. FUEL. is in every cup. It’s beautiful modern design and premium<br> finish make these cups the most demanded designer cups on the market.<br><br> <b>FREE COFFEE EBOOK</b><br> We’ve designed and created a free coffee ebook for the enthusiast in you.<br> FIND THE RIGHT COFFEE. FIND THE RIGHT FUEL.<br><br> <b>ENJOY YOUR HOT DRINK,<br> FUEL. YOUR MIND,<br> ADD TO CART NOW!</b></p>',
        'https://images-na.ssl-images-amazon.com/images/I/81KO8I-pvnL._AC_SX569_.jpg'
    ),
    (
        64,
        'Hard-Anodized Non-Stick Deep Fry Pan, 30.5 cm',
        '<!-- show up to 2 reviews by default --><p>An Amazon Brand - You will love having this 12-inch deep fry pan in your kitchen. The hard-anodized aluminum exterior provides even heat distribution while being highly durable. A glass lid lets you cover to simmer, and the non-stick interior is easy to clean.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/818vr-0Af-L._AC_SX425_.jpg'
    ),
    (
        18,
        'Premium Charcoal BBQ, Grill, Slate Blue 37cm',
        '<div class=`disclaim`>Colour Name:<strong>Blue</strong></div><!-- show up to 2 reviews by default --><p>Details The original iconic kettle barbecue in miniature! Large enough to feed the family but small enough to pack in the car, this portable kettle barbecue is ideal for day trips, picnics, camping, holidays… just grab and go! Available in a range of new colours. The Smokey Joe Premium model comes with a lid-locking feature that doubles as a lid holder. This allows you to pick up and carry the barbecue fully loaded and also acts as a windshield. Key features of Smokey Joe Premium barbecue 10 year limited warranty Lid lock for carrying, which also lowers to double as a lid holder Rust-proof aluminium vents provide the proper airflow for perfect barbecuingSpecification Specification: 10 year limited warranty. Weather-proof handle with a protective heat shield. Lid lock for carrying, which also lowers to double as a lid holder. Fire and rust-resistant lid and bowl are made from steel and porcelain-enamel coated inside and out. This makes them weather-proof and extremely durable. Rust-proof aluminium vents provide the proper airflow for perfect barbecuing. The rust resistant cooking grate is triple-plated making it extremely durable. Rust-proof side vent. Glass-reinforced nylon handles. Charcoal measuring cup. Available Colours: Spring Green Smoke CrimsonSize Dimensions: H – 46cm W – 36cm D – 42cm Cooking Area – 1075cm²/167inch²Warranty Warranty: Bowl and lid – 10 years. Handle – 10 years. Charcoal grate and cooking grate – 2 years. All other parts (legs, base, triangle, ash catcher, wheels and vents) – 2 years.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71XSIAo%2BYwL._AC_SX569_.jpg'
    ),
    (
        43,
        '9 Piece Camping Cutlery Set for 1, TeamFar Stainless Steel Portable Picnic Travel Cutlery Sets, Hammered Design Silver Knife Fork Spoon, Chopsticks, Metal Straws, Cleaning Brush, Pink Case & Bag',
        '<div class=`disclaim`>Colour:<strong>Pink Case</strong></div><!-- show up to 2 reviews by default --><p><b>TeamFar 9 Pieces Portable Reusable Camping Cutlery Sets,</b> is constructed by food-safe stainless steel, Healthy and durable for daily meal use, Sturdy material withstands high volume usage, The edges are smoothed out designed for ease of use and hold, Each metal knife fork spoon set with elegant hammered handle pairs well with all your kitchen tableware, Perfect for holiday meal, workplace, dorm, junket, tour, get-together, family union. Can be placed in suitcase or backpack and won’t occupy too much space. Easy to use, Easy to storage, Easy to carry, Easy to clean - Develop an environmental awareness of using this friendly travel utensils and saying NO to plastic stuff!<br><br> 🎁🎁<b>&gt;&gt;&gt;Package Content</b><br> -1x Dinner Knife: 23cm<br> -1x Dinner Fork: 20cm<br> -1x Dinner Spoon: 20cm<br> -1x Chopsticks: 18.8cm<br> -1x Straight Straw: 22cm<br> -1x Curved Straw: 21cm<br> -1x Cleaning Brush: 23cm<br> -1x Carrying Case: 24.7cm<br> -1x Mesh Bag: 26.8cm<br><br> 🎁🎁<b>&gt;&gt;&gt;Features</b><br> 🎁🎁This 9-Pieces Camping Cutlery Cet Is An Excellent &amp; Friendly Substitute For Plastic Utensils Set!<br> ✅Healthy &amp; Hygienic<br> ✅Unparalleled Quality &amp; Non Toxic<br> ✅Reusable &amp; Durable<br> ✅Dishwasher Proof &amp; Easy to Maintain<br> ✅Smooth Edges &amp; Mirror Polished<br> ✅Portable &amp; Hammered Design<br> ✅Nice-Looking Carrying Box &amp; Bag<br> ✅Practical &amp; Versatile<br><br> 💠💠<b>Using Tips</b><br> 1.Please wash the cutlery set before first use to make sure no manufacture residue.<br> 2.Please clean and dry them after using for your healthy daily use, Stored in dry place for its durability.<br> 3.Please do not use iron wire to scratch the pieces to keep their smooth surface.<br><br> 💜💜<b>If you have any question with our Camping Cutlery Sets, welcome to contact with us. We will try our best to make each customer 100% satisfaction.</b><br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/718kA82kEEL._AC_SX679_.jpg'
    ),
    (
        55,
        'Copper Ceramic 5-Piece Pan Set',
        '<!-- show up to 2 reviews by default --><p>Refresh your kitchen and improve your cooking with Salter titanium and ceramic coated copper non-stick cookware. Enjoy healthier meals with little or no oil and cook in style with these striking copper ceramic pans. Super-strong and durable, these high quality pans are non-stick, scratch resistant and even suitable for all hob types, including induction. With practical and stylish designs, this Salter 5-Piece pan set would be a perfection addition to any modern kitchen.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/711iMJBtX6L._AC_SX569_.jpg'
    ),
    (
        15,
        'Outdoor BBQ Portable Folding Barbecue in Carry Case with Handle Camping Outdoor Festival',
        '<!-- show up to 2 reviews by default --><p><b>Features:</b><br>- Folds down into a carry case with handle - do not collapse while hot!<br>- Quickly unfolds into a rectangular BBQ grill with wind shield<br>- Wind shield locks into place with 2 retaining arms<br>- Cooking Grill has 3 height positions<br>- 2 Tools included for moving the grill<br>- Great for Grilling &amp; Cooking<br>- Suitable for Charcoal &amp; Wood Fuels<br>- Powder Coated<br>- Compact &amp; Portable<br><br><b>Product Specification:</b><br>- Weight: 2.1 kg<br><br>Folded: 44cm (W) x 27cm (D) x 7cm (H)Unfolded: 48cm (W) x 29cm (D) x 48cm (H)</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71Trx4GEk7L._AC_SX679_.jpg'
    ),
    (
        61,
        'Max Stainless Steel Non-Stick Frying Pan, 26 cm - Silver',
        '<div class=`disclaim`>Size:<strong>26 cm</strong>&nbsp;|&nbsp;Style Name:<strong>Frying Pan</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Tefal Comfort Max Stainless Steel Non-Stick Frying Pan, 26 cm - Silver.</p><h3>Box Contains</h3><p></p><li>1 x Tefal comfort max stainless steel 26 cm frying pan</li><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/71gwCMp7e-L._AC_SX679_.jpg'
    ),
    (
        21,
        'Compact Umbrella with Automatic Open and Close Mechanism – Heavy Duty Travel Folding Umbrella with Large Wooden Handle – Dark Blue',
        '<!-- show up to 2 reviews by default --><p></p><p><b>Sick of Getting Caught in The Rain with a Flimsy, Unreliable Umbrella Guaranteed to Break Any Second?</b></p> <p>In a country where good weather is almost never guaranteed, having a sturdy umbrella you can rely on at a moment’s notice is essential. And, with this exclusive heavy duty umbrella inside your bag, you’ll never have to worry about getting caught out in extreme weather every again.</p> <p><b>Fully Windproof &amp; Strong</b></p> <p>Whilst many of today’s standard umbrellas are flimsy and unable to withstand even the slightest hint of wind for long, this umbrella provides a robust solution.</p> <p>Complete with a sturdy 10 ribs for extra strength, this umbrella has been expertly designed to retain its shape at all times – even in harsh winds! Also featuring a durable wooden handle guaranteed not to snap, this really is an umbrella you can rely on.</p> <p><b>Automatically Opens &amp; Closes</b></p> <p>There’s nothing worse than being caught in a rain shower, getting soaked, struggling to get your umbrella open. But, as this umbrella boasts an instant automatic feature, you’re able to open and close the protective cover in a matter of seconds by pressing a single button.</p> <p><b>Satisfaction Guaranteed – Or ALL Your Money Back</b></p> <p>We’re so confident you’ll love the benefits this stylish umbrella will give you, we’re offering a full ONE YEAR unlimited warranty after purchase for you to try it out for yourself. And, if you’re not 100% satisfied after this time period, we’ll gladly offer a full refund.</p> <p><b>Keep Yourself Protected Against ALL Weather Conditions – Get Your New Umbrella Today!</b></p><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/71aNCHBrRRL._AC_SX679_.jpg'
    ),
    (
        1,
        'Foldable Pet Pool Puppy Dog Swimming Pool Multiple Bath Tub Kids Shower Indoor Outdoor Dia 140cm',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61w-zqTvItL._AC_SX569_.jpg'
    ),
    (
        51,
        'Set of 4 Mugs Porcelain Extra Large Coffee Soup Hot Cocoa Mugs (Grey)',
        '<div class=`disclaim`>Colour:<strong>Grey</strong></div><!-- show up to 2 reviews by default --><p>Brighten up your morning with your favourite hot drinks in this vibrant and funky mug collection. Perfect for everyday use or for making a statement whilst entertaining this mug set features 4 porcelain mugs beautifully decorated in an eye catching bright colourful design. <br> <br>Add some style to your kitchen with the Sketch mug, an innovative design in fabulous colours. <br> <br> <b>Features</b> <br> <br>Large Conical Shape <br>568ml Capacity <br>Dishwasher Safe <br>Microwave Safe <br>Set of 4</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81M8tXD1kVL._AC_SX679_.jpg'
    ),
    (
        42,
        '20 Piece Stainless Steel Cutlery Set | Polished Flatware Knife Fork and Spoon Set | Mirror Finish Tableware Set | Service for 4 | M&W',
        '<!-- show up to 2 reviews by default --><p>This 20 piece Maison &amp; White Cutlery Set is a must-have for any home or commercial kitchen. With a simple, yet elegant design the polished stainless steel is smooth and comfortable to hold. Featuring a weighted handle, any piece out of this set ergonomically fits in the hand and sits proudly on the dining table. This 20 piece cutlery will create an attractive and refined setting for your table. As the set is perfect for casual or formal occasions, you can not only use this set every day but also for dinner parties. Use this set without any risk of scratching or stains, the high-grade stainless steel will retain its polished finish use after use. &nbsp;<br> <br> DURABLE &amp; STAINLESS &nbsp;<br> <br> Crafted from high-grade stainless steel, this set will not rust, stain or corrode. Use this set daily in full confidence, with the durability of each utensil a constant reminder of the impeccable quality of Maison &amp; White. &nbsp;<br> <br> PERFECT FOR 4 &nbsp;<br> <br> Perfect for a service of 4 this cutlery set will provide the comprehensive utensils needed for a multi-course meal. With 4x fruit&nbsp;forks, 4x dinner forks, 4x table knives, 4x tablespoons and 4x teaspoons, each guest will have everything they need.&nbsp; &nbsp;<br> <br> COMFORTABLE &amp; WEIGHTED &nbsp;<br> <br> This cutlery set features weighted handles that ergonomically fit into the hand, ensuring a comfortable and well-controlled dining experience. Ideal for adults or children this set can be wielded with ease, even when enjoying some trickier to eat dishes.&nbsp; &nbsp;<br> <br> Specification: &nbsp;<br> <br> Size: Table fork: 20.5cm (Length) x 2.5cm (Width) | Fruit fork: 17cm (Length) x 2.3cm (Width) | Table knife: 23cm (Length) x 2.3cm (Width) | Dessert Spoon: 20.5cm (Length) x 4.2cm (Width) | Teaspoon: 14cm (Length) | 3cm (Width).<br> Material: Stainless Steel.<br> In the box: 4x fruit forks, 4x dinner forks, 4x table knives, 4x tablespoons and 4x teaspoons..<br> 2 Year Guarantee. <br> <br> All product images  2019 Maison &amp;</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61ZUvtOK-XL._AC_SX569_.jpg'
    ),
    (
        34,
        'Fine Durable Stoneware Grey Dinner Plate 26.5cm, 26.5 x 26.5 x 2.5 cm',
        '<div class=`disclaim`>Style Name:<strong>Grey Dinner Plate</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>The Mason Cash classic dinnerware range is superbly manufactured from high quality durable stoneware that is dishwasher, microwave and oven safe. This stylish attractive range of contemporary dinnerware is the perfect addition to your dining table. Mix and match the collection to complete the look</p><h3>Box Contains</h3><p>1 XClassic Collection Fine Durable Stoneware Grey Dinner Plate 26.5cm</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71C6eo7fAmL._AC_SX679_.jpg'
    ),
    (
        9,
        'Barbecue Grill Cover, 61 * 29 * 44.5 inches Waterproof Grill BBQ Cover with Storage Bag for Weber Genesis, Holland, Jenn Air, Brinkmann and Char Broil（155*74*113cm）',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61S3DYj8%2B4L._AC_SX425_.jpg'
    ),
    (
        36,
        'Rim Side Plate, Porcelain, White, 19 cm',
        '<div class=`disclaim`>Style Name:<strong>Round Side Plate</strong>&nbsp;|&nbsp;Size:<strong>19 cm</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>The Price and Kensington simplicity collection is a comprehensive range of table and serve ware. The rim 19cm side plate is made from durable, vitrified, super White porcelain. As one of the traditional Stoke-on-Trent pottery brands, Price and Kensington is a world renowned ceramic tableware company with a history and heritage dating back over 100 years. We understand that for generations, the kitchen has been the heart of the home, which has been and remains the fundamental inspiration for our new developments.</p><h3>Box Contains</h3><p>Simplicity 19Cm Rim Side Plate</p>',
        'https://images-na.ssl-images-amazon.com/images/I/21ASU0XXHdL._AC_.jpg'
    ),
    (
        53,
        '15-Piece Non-Stick Cookware Set',
        '<div class=`disclaim`>Size:<strong>15-Piece</strong>&nbsp;|&nbsp;Style Name:<strong>Single</strong></div><!-- show up to 2 reviews by default --><p>AmazonBasics offers everyday items for your home, office, garden and more. With a selection that continues to grow, the AmazonBasics brand is set to become a part of your daily convenience for electronics products and lifestyle.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61x-NhdKBmL._AC_SX679_.jpg'
    ),
    (
        63,
        'Frypan, 24cm-Black, Aluminium, 24 cm',
        '<div class=`disclaim`>Size:<strong>24 cm</strong>&nbsp;|&nbsp;Style Name:<strong>Fry Pan</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Providing optimum everyday cooking solutions for beginners, Tefal PRECISION PLUS is compatible on all hobs except induction range designed to make cooking delicious meals effortless. Engineered with high-quality materials ideal for daily use, Tefal PRECISION PLUS is equipped with advanced features that come together for an easier and more effective cooking experience. The Thermo-Spot system is your secret weapon for the ideal temperature to start cooking, producing impeccable results with total ease. The durable EASY PLUS non-stick coating delivers longer non-stick performance, while the ergonomic handle provides a comfortable grip that makes cooking more enjoyable.</p><h3>Box Contains</h3><p>1 x Tefal Precision Plus 24cm Fry pan1 x Instruction Manual</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81ndjxWDoKL._AC_SX679_.jpg'
    ),
    (
        11,
        'Folding Portable Picnic Barbecue, Black',
        '<!-- show up to 2 reviews by default --><p>Perfect for days out at the country park or afternoon lazing on the beach, The Nomad portable barbecue offers an authentic BBQ experience wherever you are. At only 3.3kg, The Nomad delivers a lightweight portable solution that easily caters for 6 people or more and then simply Folds away once done. The set comes complete with a robust, easy to clean, grill as well as a heavy duty charcoal burner for safe and effective cooking.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81E2rL%2BtZaL._AC_SX679_.jpg'
    ),
    (
        50,
        'Red Plastic Party Cups, Beer Pong Cups, (100+10+ Card Drinking Game), Red and Blue Cups 16oz/473ML, Perfect for Birthday, Wedding, Christmas Fun Drinking Games',
        '<!-- show up to 2 reviews by default --><p><br> <br> UPCHASE Beer Pong Party Cups and Card Game Sets<br> <br> Are you looking forward to a perfect party?<br> Are you looking forward to a unforgettable party?<br> `UPCHASE Beer Pong Party Cups and Card Game Sets` is the perfect party companion you are looking for.<br> <br> In addition to the perfect party, we pay more attention to quality.<br> strives to provide the best quality products for all your gaming needs. Each element of the product is <br>carefully thought of with the intentions of creating the best possible experience for our customers.<br> <br> Set contains:<br> 50x Red Party Cups (473ml -16oZ)<br> 50x blue party cups (473ml -16oZ)<br> 5x yellow party cups balls<br> 5x white party cups balls<br> 54x card game<br> <br> Table tennis balls are used to target drinking cups filled with beer.<br> <br> If a cup is hit, it must be drunk.<br> <br> 16oz Drinking Cups, 100 Packs with 10 balls<br> Red party cups are pressure resistant and do not break so easily. Whether beer or soft drinks, long <br>drinks or cocktails - the cups are suitable for all drinks.<br> <br> According to your taste:<br> Juice, soft drinks, water, long drinks, beer: The cups are suitable for a variety of drinks. In addition<br> to the purely pragmatic benefits of fluid intake, the Red Cups can also be used elsewhere.<br> <br> Robust and reusable:<br> The party cups were tested and approved for contact with food. Beer Pong cups can be reused multiple <br>times and are more stable than regular cups from the supermarket. Thanks to the extra reinforced cup rim,<br> impressions are made more difficult. As required, the cups can be rinsed as often as you wish.<br> <br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/7177t8RCfQL._AC_SY355_.jpg'
    ),
    (
        39,
        'Disposable Wooden Cutlery 180 Pieces per Set, 60 Knives, 60 Forks and 60 Spoons. Ideal for Parties, picnics, Office lunches and Day Trips',
        '<!-- show up to 2 reviews by default --><p>Eco-friendly disposable wooden cutlery. Each utensil is 16.5cm long. Shipped completely plastic free for a more sustainable planet. Ideal for family parties, buffets and BBQs. Use in your child''s packed lunch every day or school trips.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/51yVi9cIorL._AC_SY879_.jpg'
    ),
    (
        38,
        '150 Piece Perfectly Simple Wooden Cutlery Set | 50 Spoons, 50 Forks & 50 Knives | Biodegradable - Eco Friendly – Strong & Sturdy Sets for Picnic, Camping, Parties & Travel – Recyclable Box',
        '<div class=`disclaim`>Size:<strong>Pack of 150</strong></div><!-- show up to 2 reviews by default --><p>🌱 STYLISH WOODEN SILVERWARE - Weddings, birthday parties, baby showers, oh my! If you have a special occasion coming up, you’re in luck. Disposable wooden cutlery is stylish and sustainable. 🌱 CONTRIBUTE TO THE ZERO-WASTE MOVEMENT - We’re living in a beautiful moment in the world so let''s make a real impact towards helping our planet. We don’t even package our products in plastics. 🌱 DURABLE DISPOSABLE UTENSILS - Choose the highest quality wooden forks, spoons and knives. Strong enough to make quick work of any meal, with the wash and reuse, or dispose-of-them difference. 🌱 PACK OF PLENTY - You need all the party cutlery you can get to feed those hungry mouths. With 150 pieces, our package offers more for your money. Buy fewer sets, or keep the leftover, but never settle! 🌱 BE CONFIDENT IN YOUR PURCHASE - We’re sure you’ll love our recyclable cutlery set''s high grade wood and superior construction. If you’re not 100% satisfied, we will refund your money in full.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/7162sjFFAFL._AC_SX679_.jpg'
    ),
    (
        37,
        'Hand-Decorated Patterned Ceramic Side Plates, 15 cm - Blue / White (Set of 3)',
        '<div class=`disclaim`>Style Name:<strong>Canape Plate Set</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Creative Tops drift hand-decorated patterned ceramic side plates, 15 cm - Blue/White (set of 3)</p><h3>Box Contains</h3><p>Creative Tops Drift Hand-Decorated Patterned Ceramic Side Plates, 15 cm - Blue / White (Set of 3)</p>',
        'https://images-na.ssl-images-amazon.com/images/I/819NV2Zy7FL._AC_SX569_.jpg'
    ),
    (
        19,
        'Medium Fit Grill - Versatile Griddle, Hot Plate and Toastie Machine with Improved Non-Stick Coating and Speedy Heat Up, Black',
        '<div class=`disclaim`>Size Name:<strong>Medium</strong></div><!-- show up to 2 reviews by default --><p>The George Foreman medium fit grill, is the utmost mealtime friend that has you covered in the kitchen. With a smaller footprint and space saving design, providing a more streamlined grilling– it just got serious. The space saving design, means you can enjoy simpler storage without even having to compromise on your cooking. Combining a shiny black with matt finishes, this grill not only looks elegant in your kitchen but will help you eat well more often. And the speedy heat-up and super easy to clean, non-stick coating, means making your favourite tuesday night tea, just got even quicker.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/91X0ahxndhL._AC_SX679_.jpg'
    ),
    (
        76,
        '40L Slim Pedal Bin, Black Plastic, W 26.0cm x H 65.5cm x D 48.7cm',
        '<div class=`disclaim`>Style Name:<strong>Slim Pedal Bin w/ Lid Lock</strong>&nbsp;|&nbsp;Size:<strong>40L</strong>&nbsp;|&nbsp;Colour:<strong>Black</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>The simplehuman slim plastic pedal bin has a space-efficient shape that fits perfectly in tight spaces, like between cabinets. The strong steel pedal is designed to last, and our patented lid shox technology ensures a smooth, silent close every time. A slide lock helps keep rubbish in and pets and curious children out. The simplehuman code K liner fits this bin perfectly – no bunching or slipping for a cleaner experience.</p><h3>Box Contains</h3><p></p><li>1 x Mini Catalogue<br></li><li>1 x 5 year Warranty Card<p></p></li>',
        'https://images-na.ssl-images-amazon.com/images/I/81eJPZh-TJL._AC_SX679_.jpg'
    ),
    (
        70,
        'Kitchen Utensil Set Silicone Cooking Utensils - 11Pcs Cooking Spatula Turner Heat Resistant Tools with Wooden Handle for Nonstick Non Scratch Cookware - Best Kitchen Tool Gadgets with Holder（green））',
        '<div class=`disclaim`>Colour:<strong>11pcs Kitchen Utensil Sets(green)</strong></div><!-- show up to 2 reviews by default --><p>IMPORTANT: These 11pcs kitchen utensils set are unsuitable for deep fat frying - boiling oil can exceed the temperature that silicone can withstand and may damage utensils.<br>Want to revamp your kitchen and cook like a masterchef?<br> WLOT kitchen utensils set make your cooking has never been easier and helps you bring mastery of French chefs right into your kitchen! Make life in the kitchen easier by using the right tool for the task.<br> TOP QUALITY FOOD-GRADE SILICONE: It can withstand temperatures up to 446°F. Unlike plastic and rubber utensils that will easily melt, They are scratch resistant and will not harm all types of cookware such as nonstick pots and pans.<br> ERGONOMIC WOODEN HANDLES: The wooden handles have great heat insulation, protecting your hands from scalding, this durable hardwood is naturally antibacterial - important for the kitchen!<br> INNOVATIVELY DESIGNED FOR STYLE: Our unique color scheme not only enhances your appetite but also complements any palate and provides an added flair to your decor. Our set will bring elegance into your kitchen. With our stylish packaging, it will make a great gift for anyone.<br> CLEANING DIRECTIONS: Hand wash highly recommended.Please do not place them into dishwasher. Do not keep the wooden handle in water for long periods of time as this could result in cracks.<br> 11-piece kit:<br>Spoon - toss and serve salad<br> Soup Ladle - scoop and portion<br> Slotted Turner - turn, fry and grill<br> Spoon Spatula - Excels for mixing, blending, folding as well as stove-top cooking<br> Slotted Spoon - lift and drain vegetable, meat<br> Spatula - mix and blend<br>Slotted Turner - turn, fry and grill<br>Pasta Server - stir, drain and remove long spaghetti straight out of the pot<br> Basting Brush - graze, marinate barbeque<br> Whisk - blend batter, stir sauce, beat eggs<br> Tongs - grip, turn and serve<br>Plastic Crock- Holds a bunch of big cooking utensils and doesn''t take up much counter space<br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61u6zOtgyuL._AC_SX679_.jpg'
    ),
    (
        69,
        'Silicone Kitchen Helper/Utensil Set: Spatula, Slotted Spoon, Soup Ladle, Spaghetti Spoon and Sauce Spoon, Kitchen Set, Multi-Purpose Kitchen Utensil Set 5-Piece, Red/Gray',
        '<div class=`disclaim`>Colour:<strong>Red / Gray</strong></div><!-- show up to 2 reviews by default --><p>Have all of the necessary kitchen helpers ready to use: The 5-piece set made of high quality silicone offers all the utensils needed to prepare and serve food.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81Ah0D0ipXL._AC_SX679_.jpg'
    ),
    (
        2,
        'Inflatable Swimming Pool, Children''s Inflatable Pool, Swimming Pool for Family and Kids, Paddling Pool Rectangular Family Swimming Ball inflatables for Kids and Adults Indoor & Outdoor',
        '<div class=`disclaim`>Colour:<strong>Blue D</strong>&nbsp;|&nbsp;Size:<strong>150x105x50cm/59.06x41.34x19.69inch(1.5M)</strong></div><!-- show up to 2 reviews by default --><p><br> Inflatable Swimming Pool Outdoor Children Bath Pool Kids Paddling Bathtub<br>Features:<br> Third Ring independent balloon design, do not worry about leaks.<br> Environmentally friendly PVC, safe and reliable, harmless to children.<br> Anti-slip, wear-resistant, protect baby''s feet.<br> Easily fold-able and storage, you can enjoy SPA time anytime, anywhere just by pumping it up.<br> Portable drain design, easy drainage.<br> Great for kids swimming, playing.<br> Specification:<br> Material：PVC<br> Color：Blue<br> Size：Approx. 150x105x50cm/59.06x41.34x19.69inch(1.5M)<br>Package Included:<br>1 x Inflatable Swimming Pool<br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61vH85f6gXL._AC_SX679_.jpg'
    ),
    (
        29,
        'Large Dinner Plates Set of 6 - Ceramic Plate Set - Stoneware Dinner Set of Plates - Multi Coloured Plates Dinner Set - 11 inch (28 cm)',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/71JyA7O-zoL._AC_SX679_.jpg'
    ),
    (
        20,
        'Windproof Golf Umbrella, Automatic Open, Fiberglass Frame, Silicone Closing Band, Slender End, Men/Women, 55inch/140cm',
        '<!-- show up to 2 reviews by default --><p>The umbrella is very strong and resistant and prevent the canopy from turning due to the wind. Another important feature of this large umbrella is that it has an ergonomic handle. Elegant and modern, allows the hand to be in a natural position while holding it. The handle is also lightweight, which can help prevent fatigue. The fiberglass frame is lighter and more windproof, this material does not rust and the umbrella has a longer lifetime. The umbrella has a slender end that fits the design, a silicone closing band which is more durable and makes the umbrella more elegant. The large umbrella size, 55 in/140cm offers maximum protection to users during the rain.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71J0AA-%2Bj5L._AC_SX522_.jpg'
    ),
    (
        74,
        'Anti-Scratch Nylon Kitchen Utensils Set - Black (3 Pieces)',
        '<!-- show up to 2 reviews by default --><h3>Product Description</h3><p></p><p>Looking to upgrade your utensils to a non-stick-friendly alternative? Or do you need a set to get you started in the kitchen? This Kitchen Craft Anti-Scratch Nylon Kitchen Utensils Set is just the kit for you!</p> <p>It includes a slotted spoon, cooking spoon and slotted turner. They''re made of tough, heat-resistant nylon. Nylon is anti-scratch, so these utensils are safe to use on non-stick pots, pans and trays.</p> <p><strong>Three Essential Kitchen Tools</strong></p> <p>With this set, you get three essential kitchen tools, ideal for everyday cooking.</p> <p>There is a 31 cm (12.25`) slotted spoon, which is ideal for draining water from boiled vegetables before serving. There''s also a 31.5 cm (12.5`) cooking / serving spoon. Its heat resistance makes it great for stirring hot soups and sauces as they cook on the hob.<br><br>You can also remove freshly baked cookies from trays or flip burgers as they fry with the 32 cm (12.5`) fish slice, also included in the set.</p> <p><strong>Ergonomic Handles</strong></p> <p>It doesn''t matter whether you''re turning a fish fillet on a tray, stirring a tomato sauce round the pan or straining water from boiled potatoes. With these nylon kitchen utensils'' ergonomically-shaped handles, you can carry out all of your cooking tasks in comfort!</p> <p>The handles have integrated hanging loops, so you can keep the tools in easy reach on a utensil rack.</p> <p><strong>More Features</strong></p> <p>— Dishwasher safe<br> — Heat resistant to 200 degrees Celsius (392 degrees Fahrenheit)<br> — Includes <strong>Kitchen Craft''s 12 month guarantee</strong></p><p></p><h3>Box Contains</h3><p>Anti Scratch Utensils Set 3 pcs.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71nwjzanwRL._AC_SX425_.jpg'
    ),
    (
        27,
        'Umbrella Windproof Double Vented Travel Umbrella with Teflon Coating (Black)',
        '<!-- show up to 2 reviews by default --><p>An umbrella that defies the logic of Mother Nature. 9 resin-reinforced fiberglass ribs. Teflon coated canopy. Dries instantly. Auto Open/Close. Super Portable. Length: 11.5`, Weight 15 ounces. The Repel Travel Umbrella goes to extremes to keep you dry.<br><br>Lifetime Replacement Guarantee: <br><br>You are protected for life from the rain, sleet, and snow through our lifetime replacement guarantee program. If anything at all goes wrong with your umbrella, we will send you a replacement absolutely no charge, no return required.<br><br>Wind-Defying 9 Rib Construction: <br><br>Most umbrellas are made of 6 or 8 aluminum ribs but Repel is fortified with 9 resin-reinforced fiberglass ribs that flex slightly to withstand powerful gusts without turning inside out.<br><br>Teflon Technology: <br><br>The Repel Travel Umbrella gets its name from its ability to do just that - repel water and other elements through its waterproof and instantly drying canopy with state-of-the-art Teflon technology.<br><br>Automatic, Compact, and Super Light: <br><br>Auto open/close function allows for easy one-handed operation. Measures just 11.5` long and weighs less than 1 pound for easy storage in purses, briefcases, backpacks, luggage and more.<br><br>Quality Workmanship: <br><br>Designed with a three-fold chrome plated metal shaft, and strong metal frame to allow for greater stability in high winds. The ergonomic, slip-proof, and rubberized handle with wrist strap allow for easy carrying. A protective travel sleeve is included.<br><br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61yPGE6x1BL._AC_SX679_.jpg'
    ),
    (
        72,
        'Silicone Kitchen Utensils 10 PCS Silicone Cooking Utensils Heat Resistant Kitchen Cooking Set Including Brush, Tongs, Spoon, Slotted Spoon, Large Spatula, Non-Stick Kitchen Baking Tools',
        '<div class=`disclaim`>Colour:<strong>Red</strong></div><!-- show up to 2 reviews by default --><p><b>Materials</b>: <br>Made of : Silicone and Stainless Steel <br><br><b>Product specifications</b>: <br>Small Silicone Spatulas : 20.3 CM <br>Large Silicone Spatulas : 26.7 CM <br>Pasta Server : 28.5 CM <br>Slotted Spoon : 27 CM <br>Slotted Turner : 31 CM <br>Soup Ladle : 30 CM <br>Serving Spoon:27.7 CM <br>Oil Brush : 21 CM <br>Whisk:21 CM <br>Food Clip:26.8 CM <br><br><b>Use &amp; Care</b>: <br>Suited for Baking,Mixing,BBQ and Cooking. <br>Heat-resistant up to 230℃, dishwasher-safe, and stain-proof. <br>Safe for use with nonstick cookware. <br>Don''t put spatulas on top of or close to open flame. <br>Dry it with a towel and hang it in a ventilated or dry place.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/517youwH8WL._AC_.jpg'
    ),
    (
        54,
        'Non-Stick 5 Pcs Cooking Pan Set Granite Marble Coating Frying Saucepan Milk Cooking Pans',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/41ZmxeiKveL._AC_.jpg'
    ),
    (
        77,
        'Automatic Stainless Steel Dustbin - Rectangular, 60L',
        '<div class=`disclaim`>Size Name:<strong>60-Liter</strong>&nbsp;|&nbsp;Style Name:<strong>Rectangular</strong></div><!-- show up to 2 reviews by default --><p>An Amazon Brand</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71icIVX%2BnAL._SY445_.jpg'
    ),
    (
        86,
        'Dish Drying Rack, Stainless Steel Dish Rack and Drainboard Set for Counter Large Kitchen Dish Rack with Drain Board, Black',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/81zPWVvgzUL._AC_SX569_.jpg'
    ),
    (
        12,
        'Portable Round Barbecue Grill- 33 CM Steel',
        '<!-- show up to 2 reviews by default --><p>Portable Round Barbecue Grill- 33 CM Steel -Easy to assemble -Ideal for garden, picnics, beach, campaining and caravaning -Enamelled, Firebowl and Wind Shield -4 Adjustable Grill Levels -29 cm Chrome cooking grate with carry handle -Size: H-53cm X Dia-33.5cm (approx)</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71%2BuhxNvaAL._AC_SX679_.jpg'
    ),
    (
        60,
        'Frying Pan, 18/10 Steel, 1.2 liters',
        '<!-- show up to 2 reviews by default --><p>Tramontina''s 3-Ply frying pan is part of the company''s exclusive collection, a series of premium products engineered and manufactured with the finest design and materials. The 3-Ply construction provides heat from all sides, not just the bottom, and the ergonomically designed handles are riveted for stability and added support. It is compatible with all cooktops - including induction, is oven and dishwasher-safe. Designed to withstand repeated usage even in the most demanding kitchens, this cookware is ideal for home and professional cooks who want the utmost in quality and performance.<br><br>Care and use: <br>Use on a low heat so that the food does not stick to the bottom of the pan. The triple base of the pan, made of stainless steel + aluminium + stainless steel, distributes heat evenly so a high heat is unnecessary. Additionally, it is more energy efficient.<br>When the pan is used on a gas stove, the flame must not rise above the base of the pan. <br>For electric, the hob must have an equal or smaller diameter than the pan. <br>Some food containing starch such as pasta and rice, may stain the internal part of the pan while cooking. In order to remove stains easily, rub them with a cloth which has been dampened with lemon juice or vinegar, or use stainless steel polishing paste.<br>Avoid leaving food in the pan for a long time as salt may also stain the pan.<br>Before using the product remove any labels and wash it with hot water and detergent.<br>Always dissolve salt in boiling water or in the food, mixing the ingredients when cooking begins.<br>Do not heat food by placing a pan of the same diameter on top of another. This procedure is dangerous as it creates a vacuum and makes it difficult to remove afterwards.<br>If the lid of the Tramontina stainless steel pan sticks due to the vacuum effect during cooling, simply push it upwards or reheat the pan so as to neutralize the vacuum effect.<br>In order to keep your Tramontina stainless steel pan attractive and shiny, we recommend it is only washed with detergent and a soft sponge or use a special paste to polish and remove stains on stainless steel products.<br>Whenever possible, rinse the pan with hot water after washing and dry immediately so as to maintain its original sheen. Chloride and other substances in water may stain the pan.<br>Do not leave an empty pan over a source of heat.<br>Leave pans only on surfaces that are heat resistant.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61y%2BtARzMwL._AC_SX569_.jpg'
    ),
    (
        84,
        'Large Drying Rack - 47,7 x 60,9 cm- Charcoal/Nickel',
        '<div class=`disclaim`>Colour:<strong>Charcoal/Nickel</strong>&nbsp;|&nbsp;Size:<strong>Single Mat</strong></div><!-- show up to 2 reviews by default --><p>An Amazon Brand</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81PFar8ie9L._AC_SX679_.jpg'
    ),
    (
        82,
        'Touch Bin with Plastic Inner, Brilliant Steel, 30 L',
        '<div class=`disclaim`>Package Quantity:<strong>1</strong>&nbsp;|&nbsp;Colour:<strong>Stainless Steel</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>This flat top Brabantia tall bin is perfect for general waste or recycling. Thanks to its removable inner bucket with metal handle, it''s easy to take your bin our and clean the bucket. Soft-touch lid and sample pack of Brabantia size G liners and 10 year guarantee included.</p><h3>Box Contains</h3><p>Touch bin</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61EFDEXs4xL._AC_SY879_.jpg'
    ),
    (
        47,
        'Party Cups Drinking Cups, for Softdrinks Beer Cola Cocktails Beer Pong, Capacity 473 ml, Extra Strong Quality (100 Pack)',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/91UJiMiLTaL._AC_SX569_.jpg'
    ),
    (
        32,
        'Wheat Straw Plate 4 Pack 20cm / 7.8` Euro Standard, Microwave & Dishwasher Safe |Eco Friendly - Alternative to Melamine and Bamboo Healthy for Kids,Children,Toddler & Adult(20cm)',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/81mKQ-5--AL._AC_SY879_.jpg'
    ),
    (
        83,
        'Metal Effect Plastic Pedal Touch Slim Deco Bin, Silver, 40 Litre',
        '<div class=`disclaim`>Colour:<strong>Black/Silver</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Design &amp; Innovation have always been the core values of Curver. By raising Design &amp; Innovation as top priorities, CURVER seeks to always be ahead of the market, constantly exploring new practices and habits, and launching new user-friendly products that make life easier and more fun.</p><h3>Box Contains</h3><p>1 x Pedal Bin</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71oUDZq%2BvOL._AC_SY879_.jpg'
    ),
    (
        30,
        '10 Inch Wheat Straw Deep Dinner Plates - Microwave and Dishwasher Safe, Unbreakable Sturdy Dinner Plates',
        '<div class=`disclaim`>Size:<strong>10 Inch</strong></div><!-- show up to 2 reviews by default --><p><b>Why choose Shopwithgreen wheat straw tableware for family</b><br> <br> Fine material :Our dinnerware¡¯ materials are seriously and carefully chosen from wheat straw fiber and high quality food grade PP .Free of BPA and other unhealthy material. <br> Microwave&amp; Dishwasher safe: Our microwave and dishwasher safe tableware will liberate you from heavy housework. Save precious time, then just go to enjoy pleasure with families and friends. <br> <br> Multiple use :It can be perfect dinner dishes for you to have fruit, salad, noodle , snack ,pastas, etc..Great for parties, picnic and everyday meals. <br> <br> Lightweight&amp; Sturdy: Lightweight design and special material make our tableware is more suitable for your family. They are durable, sturdy and unbreakable <br><br> Kindly Note: Temperature resistance reaches up to 120¡æ. <br> <br> <b>Shopwithgreen Product Selection</b><br> <br> Don''t forget about our Shopwithgreen other tableware products that all make life easier for your family. We believe that dining should be fun, and each mealtime is a great way to connect with each other. <br> <br> We provide a 100% Customer Satisfaction Guarantee. If you are not happy for any reason, please do not hesitate to email us. <br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61zSfygKd4L._AC_SX679_.jpg'
    ),
    (
        56,
        'Non-Stick Induction Expertise Cookware Set, 13 Pieces, Black',
        '<div class=`disclaim`>Size:<strong>13 Piece</strong>&nbsp;|&nbsp;Style Name:<strong>Try-Me Cookware Set</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Tefal Ingenio is an ideal concept that brings a whole take on versatility and the range features a complete selection of accessories. This Induction Expertise 13 piece set includes 16 and 20 cm saucepans, 22 and 28 cm frying pans, 24 cm saute pan, 26 cm wok, 16, 20 and 26 cm glass lids, 16 and 20 cm plastic lids, two bakelite handles. This set includes all you need in the kitchen and is the ideal way to get started with a rich way of cooking. With products that go from the hob into the oven to the table and into the fridge, cooking has never been this simple. The Ingenio concept is built around patented detachable handles that attach and detach with one click, converting fry pans into oven dishes and saucepans into baking tins and storage containers while offering optimal space saving as the products stack easily into one another. Induction Expertise features Tefal''s most durable Titanium Pro Non-stick coating which is resistant and can be used with metal utensils (except whisks and knives). The frying pans also feature Tefal''s thermo-spot which lets you know when the pan has reached the optimum cooking temperature. The Induction Expertise range is compatible with all hobs and is also dishwasher and oven safe.</p><h3>Box Contains</h3><p></p><ul><li>1 x 16 cm Saucepan</li><li>1 x 20 cm Saucepan</li><li>1 x 22 cm Frying pan</li><li>1 x 28 cm Frying pan</li><li>1 x 24 cm Sautepan</li><li>1 x 26 cm Wok</li><li>1 x 16 cm Glass lid</li><li>1 x 20 cm Glass lid</li><li>1 x 24 cm Glass lid</li><li>1 x 16 cm Plastic lid</li><li>1 x 20 cm Plastic lid</li><li>2 x Bakelite handles</li></ul><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/919crCIF6GL._AC_SX679_.jpg'
    ),
    (
        8,
        '3 Burner Gas Barbecue Grill with TRU-Infrared technology and Side-Burner, Stainless Steel and Black Finish',
        '<div class=`disclaim`>Size Name:<strong>3 Burners</strong>&nbsp;|&nbsp;Colour Name:<strong>Stainless steel  &amp; Graphite grey</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>A outdoor barbecue grill for those who just won''t compromise on taste. The Performance T36G is a 3 burner gas barbecue that is perfect for both leisurely weekend cookouts or quick family dinners during the week. This high performance grill like all top-performing models across the Char-Broil range of gas barbecues features TRU-Infrared technology that sets it apart from conventional grills on the market. The Char-Broil T36G outdoor grill cooks ideally for up to 6 people at a time. It''s equipped with lots of practical features such as wheels so you can effortlessly cart your grill into position and wheel locks to secure it, Sure-fire electronic igniter so you can start all the burners at the push of a button, a separate warming shelf (keeping food warm away from the primary cooking area) and up to 2 sturdy shelves providing useful work-space. In addition, a grate level temperature gauge monitors heat levels and helps you get excellent grilling results and cleverly designed flush mount side-burner can be used to heat saucepans or folded down to give extra preparation space. Last, but by no means least, the thing that really makes this grill special is Char-Broil''s TRU-Infrared technology which prevents flare-ups that can often burn food, delivers even heat to all areas for perfect cooking results and up to 50% juicer food whilst also using less gas - up to 30% less gas to be more precise.</p><h3>Box Contains</h3><p>Barbecue Grill</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81VTC1nKpRL._AC_SX569_.jpg'
    ),
    (
        14,
        'Portable picnic grill I Charcoal grill for outdoor BBQ while camping, fishing and much more.',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/71ilywTsOcL._AC_SX679_.jpg'
    ),
    (
        3,
        'Dog Paddling Pool, Sturdy Foldable Dog Swimming Pool with Handle - Pet Bathtub Children Kids Ball Pits Sandbox Bathing Pool For Garden Patio Bathroom (XL: 160 x 30 cm)',
        'foobar\n\n',
        'https://images-na.ssl-images-amazon.com/images/I/61TZ2FNtmlL._AC_SX425_.jpg'
    ),
    (
        80,
        'Square Sensor Bin with Infrared Technology, Stainless Steel, 42 Litre',
        '<div class=`disclaim`>Size:<strong>42 Litre</strong>&nbsp;|&nbsp;Style Name:<strong>Square</strong>&nbsp;|&nbsp;Colour:<strong>Stainless Steel</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Accentuate your personal style and add some pizzazz to your household waste storage solution with the Morphy Richards Chroma 42 Litre sensor bin. Suitable when you need both hands free such as when scraping leftovers from cookware and serving vessels, the sensor bin features infrared technology to sense when your hand approaches and activates the lid. After five seconds of inactivity the lid closes automatically, meaning that never again will you have to directly touch unhygienic surfaces. All this plus a durable yet aesthetically pleasing non-corrosive steel body that will ensure your bin lasts for years.</p><h3>Box Contains</h3><p>1 x 42 Litre sensor bin</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71CGP5FOqXL._AC_SX425_.jpg'
    ),
    (
        48,
        'Disposable Bio Paper Coffee Cups, 100 Pieces Paper Cups + Free 100 Plastic Lids, 8oz Single Wall Kraft Brown Bamboo Eco Cups for Beverages, Party, Wedding, Anniversary, Birthday Supplies',
        '<!-- show up to 2 reviews by default --><p></p><p><strong>CUPCO Paper Cups + Plastic Lids</strong><br>☕ 100x PAPER CUPS 250ml (8OZ)<br>☕ 100x PLASTIC LIDS</p> <p><br><strong>CUPCO DISPOSABLE PAPER CUPS</strong></p> <p><br>&nbsp;Biodegradable, eco-friendly, unbleached cups for the preservation and protection of our nature.<br>If you''re looking for an eco-friendly, disposable, compostable tableware as an alternative for reusable cups made of plastic, CUPCO cups are a sustainable solution without leaving toxicity in the soil. The disposable paper cups are made from bamboo and as BPA and phthalate-free, they have a harmless interior coating, thus the coffee cups are biodegradable and recyclable.<br>CUPCO cares for our environment by supplying healthy and high-quality paper cups in accordance with the EU standards of technology and hygiene.<br>CUPCO knows the hassle around preparing a party, birthday celebration or wedding.<br>Show your customers that you''re mindful of the environment by using our CUPCO paper cups.</p> <p><br><strong>YOUR BENEFITS:</strong></p> <p><br>Great for serving your favorite hot or cold beverages: (HOT) cappuccinos, espressos, herbal tea, chai, hot chocolate, cocoa, milk, mulled wine; (COLD) latte, iced coffee, juice, lemonade, cocktail, water, beer and more stay at optimal temperatures, thanks to the advanced design of these no-spill cups. You can use them even for hot soup during cold winter! Chill with your cold drinks during summer.<br>Go ahead and serve your guests some drinks in a stylish way without worrying about washing the dishes later. Your guests will love these disposable cups.</p> <p><br>A perfect partner for your coffee machine. Coffee on the go for a busy person like you (coffee-to-go mug)<br>Printable paper cups are the perfect way to give you a professional appearance, to expose your business name or just to increase your market visibility in general.&nbsp;</p> <p><strong>Click ''ADD CART'' right now and ORDER while supplies last.</strong></p><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61eSKYAux5L._AC_SX569_.jpg'
    ),
    (
        57,
        '8 Piece Pan Set - Stainless Steel',
        '<div class=`disclaim`>Colour:<strong>Steel</strong>&nbsp;|&nbsp;Size:<strong>8 Piece Set</strong>&nbsp;|&nbsp;Style Name:<strong>Single</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p></p><p>Achieve fantastic results every time with the Morphy Richards Equip 8 Piece Pan Set. Offering a elegant and functional solution for any cooking eventuality, the set is a kitchen essential, providing reliably delicious results and unbeatable cooking efficiency. Aside from offering plenty of functionality, these elegant pans are the ideal way to add a sense of sophisticated style to your kitchen. With sleek, high-grade stainless steel bodies, the durable but lightweight pans feature stay-cool handles with integrated storage loops allowing for simple, space saving storage. Each base features a branded back stamp as a sign of quality.</p><p></p><h3>Box Contains</h3><p></p><ul><li>1 x 16 cm saucepan</li><li>1 x 18 cm saucepan</li><li>1 x 20 cm saucepan</li><li>1 x 24 cm fry pan</li><li>1 x 14 cm milk pan</li><li>2 x 18 cm steamer inserts</li><li>1 x 18 cm stockpot</li></ul><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/91glNNY5drL._AC_SX679_.jpg'
    ),
    (
        33,
        'Dinner Set 12-Piece White Porcelain Dinnerware Combination Set with Dinner Plates/Dessert Plates/Soup Plates, Service for 4 Person- A Perfect Gift for Christmas',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/81btrEgEYgL._AC_SX569_.jpg'
    ),
    (
        4,
        'Paddling Pool Rectangular Family Swimming Ball inflatables for Kids and Adults Indoor & Outdoor, Blue & White 300 x 184 x 50cm',
        '<div class=`disclaim`>Size Name:<strong>300 x 184 x 50cm</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>🌴 The perfect way for the entire family to cool off! Keep it simple with this pool and enjoy summer right in your own backyard</p><h3>Safety Warning</h3><p>For use under aduly supervision</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61vHlwyP76L._AC_SX569_.jpg'
    ),
    (
        35,
        'Cake Plates, Ceramic, Multi-Colour, 215 x 215 x 60 cm',
        '<!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Sara Miller had a vision – to bring her love of print, pattern and colour into her designs, embellishing homes at every opportunity. Now Sara is an award-winning British designer who expresses her passion for travel and love for different cultures in her art. Sharing the same commitment to beautiful, sophisticated and stylish designs, Sara Miller London and Portmeirion have collaborated to create the Chelsea collection – an enchanting fine porcelain afternoon tea collection that’s bright and beautiful with stunning Gold detailing</p><h3>Box Contains</h3><p>4 x plates</p>',
        'https://images-na.ssl-images-amazon.com/images/I/718mzeJVGGL._AC_SX569_.jpg'
    ),
    (
        22,
        'Umbrella Windproof Travel Umbrella Compact Folding Inverted Umbrella Auto Open Close',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61De0uBpf4L._AC_SX679_.jpg'
    ),
    (
        65,
        'Advanced Oven Tray Twin Pack, High-Quality Non Stick Steel Baking Tray Set, Dishwasher-Safe Bakeware Set, Carbon Steel Baking Set with Lifetime Guarantee',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61Aeh-Vng0L._AC_SX569_.jpg'
    ),
    (
        45,
        'Black Cutlery/Flatware Set, 30 Pieces Stainless Steel Knife Fork Spoon Set for 6 Person(black, 6 sets)',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61dTAEunWcL._AC_SX679_.jpg'
    ),
    (
        5,
        'Family Pool with Seats 56475NP, 229 x 229 x 66 cm(Multi-color)',
        '<!-- show up to 2 reviews by default --><p>Relax in your own garden? It is possible with this comfortable inflatable pool. With friends or family not only a pool but the chance to sit comfortably and to have always with you if you drink without needing to get out of the pool. In fact it has 4 sessions (one in every corner) and two potables placed halfway between the seats. Features of the pool with 4 seats: 4 seats with backrest, 2 containers of soft drinks (for cans or bottles); Repair kit included; Dimensions: 229 x 229 x 66 cm. Intex code: 56475.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61jZkrHTqbL._AC_SX679_.jpg'
    ),
    (
        13,
        'Black Bar-B-Kettle GBS, 57 cm',
        '<!-- show up to 2 reviews by default --><p>Bar-B-Kettle GBS 57 cm Black</p>',
        'https://images-na.ssl-images-amazon.com/images/I/511BcuTx6fL._AC_SX679_.jpg'
    ),
    (
        6,
        'Dog Paddling Pool, Sturdy Foldable Dog Swimming Pool with Handle - Pet Bathtub Children Kids Ball Pits Sandbox Bathing Pool For Garden Patio Bathroom (XL: 160 x 30 cm)',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61TZ2FNtmlL._AC_SX425_.jpg'
    ),
    (
        79,
        '72L Recycling Sensor Bin Stainless Steel 3 Compartments For Both Wet/Dry Waste w/Removable Lid Kitchen Home',
        '<!-- show up to 2 reviews by default --><p>Never be stuck when your hands are full in the kitchen again, thanks to this motion sensor rubbish bin from HOMCOM. Made from non-rust ABS plastic for strength and resilience in a sleek stainless steel look, it is crafted into a large 72 litre capacity, making it a stylish addition for busy family homes and offices, with the three sections allowing you to separate any wet, dry and recyclable produce for ultimate hygiene and organisation. Operating to a close range of 15cm, the sensor for the top bin will only open when you are within close range, helping to save battery power caused by any unnecessary opening. A smooth and efficient way to keeping your kitchen and home free of rubbish.<br><br><b>Features:</b><br><br> Infrared sensor on top bin works within 15cm for easy and smooth opening that won’t waste battery power<br>  Made from rust-resistant and sturdy ABS plastic with a stainless steel look body for a sleek finish<br>  72 litre capacity with a large top bin and two smaller bins hidden in a slide-out drawer on the bottom for easy organisation of your rubbish (e.g., wet/dry/recycling)<br>  Smooth fingerprint-proof surface with removable inner bins and lid for easy cleaning<br>  Opening can also be controlled by button if required<br>  Powered by 6 x AA batteries – not included<br><br><b>Specification:</b><br><br> Item Name: Sensor Dustbin<br>  Brand Name: HOMCOM<br>  Waste Capacity: 72L<br>  Overall Dimension: 42L x 30W x 81H cm<br>  Material: Stainless Steel, ABS Plastic<br>  Color: Stainless Steel Color, Black, Green, Grey <br>  Lid Cover Size: 42L x 30W x 9H cm<br>  Inside Opening Size:39L x 26W cm<br>  Sensor Time: 0.5 seconds<br>  Sensor Area: Within 15 cm<br>  Upper Trashbin Size: 39L x 29W x 37H cm<br>  Power: 6 x AA batteries( EXCLUDED)<br>  Bottom Trashbin Size: 23.5L x 17W x 32H cm<br>  CE,RoHS tested product<br>  Net Weight: 10kg<br> Flat Pack: Yes<br>  Custom Label: 851-018<br><br><br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/616lx8t3D0L._AC_SX679_.jpg'
    ),
    (
        62,
        'Extra Frying Pan, 26 cm - Black',
        '<div class=`disclaim`>Size:<strong>26 cm</strong>&nbsp;|&nbsp;Style Name:<strong>Fry Pan</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>An everyday range with Thermospot technology. Tefal heat indicator lets you know when the pan has reached the optimum temperature to start your cooking by turning solid red in colour you won’t run the risk under or over heating your food, which means evenly cooked food each time you cook. The powerglide non-stick coating ensures that no food will stick to your pan and washing up is a breeze; just a simple wipe clean with warm soapy water will remove burnt on food very easily. The comfortable bakelite handle is oven safe up to 175 degrees Celsius, gas mark 3, 325F for up to 1 hour, which means you can start your cooking on the hob and finish it off in the oven. Suitable gas hobs and dishwasher safe. Customer service Helpline number is 0345 602 1454, if you require any further information.</p><h3>Box Contains</h3><p>1x Tefal Extra - FryPan 26cm, 1x Instruction Manual</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81XQbs%2B9TVL._AC_SX679_.jpg'
    ),
    (
        68,
        'Professional 1lb Loaf Pan 19cm x 9cm x 5cm. Premium Quality Non-Stick Silicone Bakeware + 10 Year Guarantee',
        '<!-- show up to 2 reviews by default --><p>This WellBake 1lb / 1/2 kg loaf Pan is a top notch product used by commercial bakers and domestic users. It turns out lovely, evenly baked bread and cakes without using parchment paper, oil or butter. Reinforced side supports and base prevent bowing so bread and cakes turn out precisely to shape as you want them. Its wide handles provide a safe and steady grip when lifting or moving. Users regularly purchase these for mousses, pate, terrines, etc + Excellent for gluten free recipes. Designed to meet all your baking requirements, this easy to use superior quality loaf pan can be used in ovens to 260c or microwave, is very easy to clean and dishwasher safe. Freezer flexible it is ideal to cook and freeze in the dish, peel out frozen food + reuse the dish or reheat straight from the freezer. It also comes with a 10 Year Guarantee. Internal dimensions 19cm x 9cm x 5cm</p>',
        'https://images-na.ssl-images-amazon.com/images/I/31oAcagBVSL._AC_.jpg'
    ),
    (
        73,
        'Kitchen Utensil Set, 15pcs Silicone Cooking Kitchen Utensils Set, Cooking Tools Turner Tongs Spatula Spoon for Nonstick Heat Resistant Cookware - (Grey)',
        '<div class=`disclaim`>Colour:<strong>Grey</strong></div><!-- show up to 2 reviews by default --><p><b>🎁🎁Umite 15-piece utensils set is a complete set of accessories you will need to make the maximum out of your wonderful little kitchen appliance.They will satisfy all your needs for cooking, would be your great companion in the kitchen. Each of them has its unique use. </b><br> <b>🎁🎁We promise that our kitchen tools are 100% safe for you and your family’s health.</b><br><br> <b>🎁🎁ABOUT UMITE CHEF SILICONE UTENSILS</b><br> ✅Anti-rust, anti-bacteria,anti-deformation<br> ✅100% FDA-approved, BPA free premium food grade silicone<br> ✅Food grade Silicone head combine with High quality 18/8 stainless steel handle<br> ✅No melting&amp; Non scratch nit chip, warp or melt like other kitchen untensils<br> ✅Friendly &amp; Non stick The soft silicone won’t stick cookware or your expensive pans<br> ✅Heat resistant with stand temperatures ranging from -22° to 446°F not produce any hazardous fumes<br> ✅100% Non corrosive and hard wearing<br> ✅ Dishwasher-safe,easy clean<br> ✅Ergonomic handle design<br> ✅ABS Plastic Filter utensils Holder with small drainage holes in the bottom ensure no bacteria or water stay<br><br> <b>🎁🎁15-PIECE STAILESS STEEL SILICONE KITCHEN UTENSILS SET WILL SATISFY ALL YOUR</b><br> √Slotted Turner<br> √Solid Turner<br> √Deep Soup Ladl<br> √Pasta Server<br> √Flexible Spatula<br> √Spoon Spatula<br> √Spreader Spatula<br> √Slotted Spatula<br> √Bating Brush<br> √Egg Whisk<br> √Slotted Spoon<br> √Solid Spoon<br> √ Kitchen Tongs <br> √Utensil crock<br><br> <b>💠💠NOTE</b><br> Remember to wash the products carefully before the first use. Wash them with dish soap and plenty of water using cleaning brushes<br> <br> <b>💜💜CUSTOMER WARRANTY: </b><br> If you have any question with the purchase of our Baking Sheet, welcome to contact with us. We will try our best to make each customer 100% satisfaction.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61VR6ooA98L._AC_SX679_.jpg'
    ),
    (
        25,
        'Luxury 62 inch Large Oversized, Double Vented Canopy Golf Umbrella | 100% Waterproof, Windproof, Sun-proof | Automatic Open, Extra Strong Reinforced Fibreglass Frame | Men Women Ladies & Gents | Black',
        '<!-- show up to 2 reviews by default --><p></p><p>✔ BIG Enough: This oversized 62` umbrella is big enough to fit you and your significant other under its huge cover, after all sharing is caring!&nbsp;</p> <p>✔ Designed to Last: Umbrellas are globally known to be the main day-ruiner, always breaking when you need them the most! We took all this into consideration when designing our reinforced flexible frame that is made of advanced fibreglass&nbsp;technology to keep it light while at the same time protecting the canopy from the windiest conditions. This umbrella is for a lifetime</p> <p>✔ Everything-Proof: Sun-proof, windproof, waterproof, break-proof, need we say more? All what you need to do when the storm hits is press a button and the fully automatic mechanism will take care of the rest!&nbsp;</p> <p>✔ For Every Course: The handle is designed&nbsp;to fit perfectly onto most golf carts nice and easy. It is also designed for extra grip and maximum comfort to avoid muscle fatigue during longer journeys. </p> <p>✔ Full-refunds &amp; Full-satisfaction: Please don''t hesitate to take advantage of our full-refund no questions asked policy. If for any reason you''re not fully happy with us then please get in touch through our email and we''ll fix everything in 1 working day!&nbsp;</p><p> </p><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/81bBhXIgsBL._AC_SX679_.jpg'
    ),
    (
        71,
        'Kitchen Utensil Set, 4pcs - 304 Stainless Steel Cooking Utensil Set with Skimmer Slotted Spoon, Spatula Turner, Spaghetti Server and Soup Ladle, Heat Resistant Kitchen Gadgets Tools for Gift',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/51UOF%2BD5mVL._AC_SX679_.jpg'
    ),
    (
        67,
        'Advanced 5 Piece Baking Tin Set, High-Quality Non Stick Steel Baking Set, Dishwasher-Safe Bakeware Set, Carbon Steel Baking Tins with Lifetime Guarantee',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61-MzRHQYYL._AC_SX679_.jpg'
    ),
    (
        24,
        '12 Ribs Auto Open/Close Windproof Rain Umbrella, Waterproof Travel Umbrella, Portable Umbrellas With Ergonomic Handle,Black',
        '<div class=`disclaim`>Size Name:<strong>Upgraded</strong></div><!-- show up to 2 reviews by default --><p></p><p><b>Smart Open/Close Button:</b></p> <p> Our umbrella has been designed to be the most practical automatic umbrella, which opens and closes with one quick and simple movement.</p> <p> This smart, automatic system will turn out to be incredibly practical, especially when you''ll try to get in and out of your car.</p> <p><b> Storage Sleeve:</b></p> <p> Our automatic travel umbrella includes a slip-on sleeve, which helps keep the umbrella neatly stored. The storage sleeve fits securely around the closed-position umbrella, and lifts off easily when it''s time to take cover and venture outside.</p> <p><b> Soft Rubber Frosted Handle:</b></p> <p> The umbrella comes with a soft frosted handle, which helps ensure a comfortable hold, whether casually window-shopping downtown or dashing from your car to the front door. A wrist strap at the end of the handle allows for hands-free carrying when the rain subsides.</p> <p><b> Bigger and More Reasonable Size:</b></p> <p> Like image shows, the diameter size is 48 inch comparing with most of others is 42 inch.It is big enough to fit under it ,can accommodate 2-3 people.</p> <p><b><br></b></p> <p><b> Product parameters:</b></p> <p> 1. Umbrella cloth material: impact cloth</p> <p> 2. Umbrella cloth density: 210D</p> <p> 3. Scaffold material: aluminium alloy</p> <p> 4. Umbrella handle material: Rubber frosted</p> <p> 5. Color: Black</p> <p> 6.Applicable User:</p> <p> women,men,boys,girls,kids,students,ect</p> <p><b><br></b></p> <p><b> Package including:</b></p> <p> 1*Umbrella</p> <p> 1*Umbrella cover</p><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61xJIKl0pwL._AC_SX679_.jpg'
    ),
    (
        26,
        'Umbrella Inverted/Reversible, Long Windproof Umbrella Double Layer Inside-Out Self-Standing for Women and Men with Carring Bag',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61nxsDkXCTL._AC_SX679_.jpg'
    ),
    (
        75,
        'Kitchen Utensils - 12 Piece Cooking Utensils - Nonstick Utensil Set - Silicone and Stainless Steel Kit',
        '<div class=`disclaim`>Colour:<strong>12p</strong></div><!-- show up to 2 reviews by default --><p></p><p>NEXGADGET offers a wide and varied selection of kitchen accessories at competitive prices designed for any home. You don''t need to look for every kinds of kitchen tools everywhere, this 12-piece kitchen utensils set will satisfy all your needs for cooking. Eco-friendly, practical and stylish, this utensils combination of silicone and stainless steel would be a great helper and decoration in your kitchen.<br> <br> <b>Features:</b><br> . Gives you all the tools to complement your dishes and make cooking much easier.<br> . Made of FDA-approved BPA-free material.<br> . Durable silicone withstands temperatures of up to 230 ℃/ 446 ℉ while remaining unscathed.<br> . Utensils holder included for easy access and storage.<br> <br> <b>NEXGADGET Premium 12-Piece Silicone Kitchen Utensils Set Including:</b><br> 1*Soup ladle<br> 1*Slotted Turner<br> 1*Spaghetti Server<br> 1*Skimmer<br> 1*Serving Spoon<br> 1*Kitchen Scissor<br> 1*Peeler<br> 1*Can Opener<br> 1*Scrapers<br> 1*Egg Whisk<br> 1*Food Tongs<br> 1*Utensil Holder<br> <br> <b>Note:</b><br> 1.Do not leave the products in the pan while cooking.<br> 2.Please keep the products away from fire.<br> 3.It''s recommended to hand wash the products. Do not put them in the dishwasher.<br> <br> <b>Risk Free Hassle Free Purchase!</b><br> If you are not 100% happy with our product we will<br> be happy to refund 100% of your money back!<br> <b>★100% No Questions Asked Money Back Guarantee!★</b></p><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/71AsqQhSbBL._AC_SX679_.jpg'
    ),
    (
        81,
        'Toilet roll holder for Wc Chrome; 14 cm diameter toilet paper holder',
        '<div class=`disclaim`>Style Name:<strong>Recycle Bags</strong></div><!-- show up to 2 reviews by default --><h3>Product Description</h3><p>Never run short thanks to the practical multi-functional toilet paper holder. Its sleek design is enhanced by a chrome finish which will harmonize with all bathrooms. The paper holder can hold up to four rollers toilet paper, making it ideal for the family home or for the flu season Diameter: 14 x height: 50cm Premier Housewares is one of the UK''s leading suppliers and distributors of household goods and home decor Premier Housewares has an extensive portfolio that covers kitchen, table and bathroom accessories, as well as garden furniture, decorative accessories, lighting fixtures and accent furniture. objective of providing a complete solution to your needs in retail of household goods by offering a complete collection of assorted products.</p><h3>Box Contains</h3><p>3 x Recycle Bags</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71X3zEZaZsL._AC_SX679_.jpg'
    ),
    (
        59,
        'Frying Pan Induction 28cm, Stone-Derived Nonstick Coating Saute Pan, Stainless Steel Handle Woks & Stir Fry Pans, Oven Safe, Granite/Gift Box Included',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/71Xux5E-9rL._AC_SX679_.jpg'
    ),
    (
        17,
        'BBQ Grill Mat, Set of 5 Non Stick Barbecue Baking Mats for Charcoal, Gas or Electric Grill - Heat Resistant, Reusable and Easy to Clean, FDA Aproved - Bonus 12` BBQ Tongs',
        '<!-- show up to 2 reviews by default --><p></p><p><b>Beeway BBQ Grill Mats Will Make You The Ultimate Grill Master</b><br> <br> Having a barbecue is the perfect way to hang out with friends and cook flavorful food, fast. But nothing takes the fun out of grilling more than opening the cover and finding a messy grill caked with barbecues past!<br> <br> Not anymore! Now you can keep your grill clean and bbq ready at all times. Not only that, our grill mat means you can infuse a wider range of dishes with that deliciously smoky flavor, with grill marks, effortlessly. Seriously, you’ll wonder how you ever grilled without them.<br> <br> - Set of 5 40cm x 33cm mats that makes grilling a dream.<br> - Made from fiberglass fabric coated PTFE(PFOA Free), similar to what’s used for Teflon non-stick pots and pans, so you can cook without oils and clean with ease<br> - Keeps your food from falling between the grates and allows for evenly grilled food every time. You can even see the grill marks on your food.<br> - Suitable for any type of barbecue (smoker, briquettes, propane, gas, or electric or charcoal grill)<br> - Perfect for chicken, wings, ribs, burgers, steaks, fish, shrimp, fruits, vegetables, breakfast, and even pizza.<br> - Can be placed on top of any grilling space (charcoal, gas, or electric) and recommended with temperatures up to 500 F.<br> - 100% non-stick and dishwasher safe...use it OVER and OVER AGAIN. No more ruined dinners and clean-up is a breeze.<br> <br> <b>Specifications</b><br> <br> Material: PTFE coated fiberglass fabric. <br> Thickness: 2mm<br> Size: 40cm x 33cm <br> Heat Range: -70-260℃`<br> <br> <br> <b>Packing List</b><br> <br> 5x Beeway BBQ Grill Mat<br> 1x 12` BBQ Tongs with Silicone Tips<br> 　</p><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61yxEE%2BbYTL._AC_SX425_.jpg'
    ),
    (
        10,
        'Folding Grill - Portable Picnic BBQ with Chrome Plated Cooking Grid (Black)',
        '<!-- show up to 2 reviews by default --><p></p><p><b>Notebook Folding Grill</b></p> <p>Now you can have a barbecue pretty much anywhere. The ingenious design means it will fold completely flat, making it very convenient for taking to the beach, on a camping trip or anywhere you want. Just be sure to use it on a flat, sturdy surface.</p> <p>The Notebook Folding Grill may be compact but, with a cooking area of just under 45cm x 30cm, there is plenty of room for mouthwatering burgers and sausages or whatever you fancy cooking up at your next picnic.</p> <p>This clever little BBQ is incredibly easy to use. Simply unfold, add the wire racks and you are ready to go.</p> <p>-</p> <p><b>Product Dimensions (Open): </b>45cm x 30cm x 30cm</p> <p><b>Product Dimensions (Closed): </b>46cm x 43.5cm x 4.5cm</p> <p><b>Cooking Area: </b>45cm x 30cm</p> <p><b>Cooking Height: </b>30.5cm</p> <p><b>Weight: </b>3.0 kg</p> <p><b>Construction: </b>Heat-resistant painted-steel with chrome-plated steel grills</p><p></p>',
        'https://images-na.ssl-images-amazon.com/images/I/41iqrU7ohWL._AC_.jpg'
    ),
    (
        16,
        'BBQ Charcoal barbecue smoker with heat indicator - different models - (3in1 Smoker (ton 400820))',
        '<!-- show up to 2 reviews by default --><p><b>3in1 Smoker (ton 400820)</b> <br> <br> 2 side doors for ventilation <br> Water bowl for perfect steaming or smoking results <br> Thermometer on the cover <br> Coal ash tray with grate <br> 2 side handles <br> Total height: 80cm <br> Diameter: Ø 41 cm <br> Plank heights: 35 or 56 cm <br> Charcoal filter diameter: 38 x 7 cm <br> Air-door: 14 x 12 cm <br> Vent holes: 10 cm with 6 slots deduction <br> Distance from floor to canister 11 cm <br> Material: Coated Metal <br> Weight: 6.5 kg <br> <br> <br> <b>Smoker model 2 (small 401172)<br></b> <br> Thermometer on the lid <br> Airflow control <br> Wire shelf underneath the grill <br> Height approx: 123cm, Total width: approx. 85cm, Total depth: approx. 48cm <br> Large cooking chamber: approx. 51cm wide, 38cm in diameter <br> Lower wire shelf: approx. 44x33cm <br> Wheels: 15cm diameter <br> Material: powder-coated metal, heat-resistant paint <br> Weight: approx. 13kg <br> Including Assembly material &amp; Assembly instructions <br> <br> <br> <b>Smoker model 1 (big 400821)<br></b> <br> Durable, mobile metal frame <br> Thermometer on the lid <br> Airflow control <br> Chrome plated cooking grates <br> Coal grids for both cooking chambers <br> Attractive wood handles <br> With drip pan to collect roast juice <br> Height: approx. 113cm, Total width: approx. 102cm, Total depth: approx. 62cm <br> Grill surface area: approx. 54x30cm <br> Small cooking chamber: approx. 30cm wide, 30cm in diameter <br> Large cooking chamber: approx. 62cm wide, 30cm in diameter <br> Material: powder-coated metal, heat-resistant paint <br> Weight: approx. 14,5kg <br> Including Assembly material &amp; Assembly instructions <br></p>',
        'https://images-na.ssl-images-amazon.com/images/I/61-iXQrGa7L._AC_SX679_.jpg'
    ),
    (
        66,
        'Advanced Oven Tray Set, High-Quality Non Stick Steel Baking Tray Set, Dishwasher-Safe Bakeware Set, Carbon Steel Baking Set with Lifetime Guarantee',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61KP6pRCbsL._AC_SX569_.jpg'
    ),
    (
        41,
        '96 Pack Plastic Light Blue Cutlery - 32 Spoons, 32 Knives, 32 Forks - Light Blue',
        '<!-- show up to 2 reviews by default --><p>96 Pack Plastic Light Blue Cutlery - 32 Spoons, 32 Knives, 32 Forks - Light Blue</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71se9fwIQWL._AC_SX569_.jpg'
    ),
    (
        78,
        'Hanging Trash Can, Upgraded Foldable Waste Bin with Trash Bag Holder for Kitchen Cabinet Door, Compact Garbage Can Portable for Living Room Bathroom Car Office - 9L (Brown)',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/71FQw5buChL._AC_SX679_.jpg'
    ),
    (
        46,
        'Cutlery Set Coloured 16PCS - Stainless Steel with Plastic Wide Handles – Comfortable to Hold - 4 x Forks, 4 x Dinner Knives, 4 x Dinner Spoons, 4 x Teaspoons – Service for 4 (Light Blue x 16)',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/710qa0lG%2BQL._AC_SX569_.jpg'
    ),
    (
        58,
        'Stainless Steel Induction Non Stick Frying Pan, 24 cm, with Soft Touch Handle, PFOA&BPA Free',
        '<div class=`disclaim`>Size:<strong>24 cm</strong>&nbsp;|&nbsp;Style Name:<strong>Frying pan</strong></div><!-- show up to 2 reviews by default --><p>AmazonBasics offers everyday items for your home, office, garden and more. With a selection that continues to grow, the AmazonBasics brand is set to become a part of your daily convenience for electronics products and lifestyle.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/71JGaPVviJL._AC_SX679_.jpg'
    ),
    (
        40,
        'Disposable Wooden Cutlery Sets - 200 Piece Total: 100 Spoons, 50 Forks, 50 Knives, 6` Length Eco-Friendly Biodegradable Compostable Utensils - Streetfood Packaging (100 Spoons, 50 Forks, 50 Knives)',
        '<div class=`disclaim`>Size:<strong>200 Set (100 Spoons, 50 Forks, 50 Knives)</strong></div><!-- show up to 2 reviews by default --><p><b>ECO-FRIENDLY </b> - 100% natural, compostable and biodegradable disposable wooden cutlery. Absolutely no coatings or chemicals of any kind are added. <br> <br> <b>DURABLE </b> - Made from birch wood that is smooth, sturdy, and durable. Perfect for any party, wedding, baby or bridal shower, BBQ, dinner event or arts and crafts project. <br><br> <b>UNIQUE </b> - Rustic wooden look that complements Aevia''s palm leaf plates or other disposable bamboo plates. A unique eco alternative to disposable plastic or bamboo utensils.<br><br> <b>SUSTAINABLE </b>- Approved by the Forest Stewardship Council (FCS) for environmentally and socially responsible production.<br><br> <b>GUARANTEE </b> - 100% money-back guarantee if you''re not satisfied for any reason. Each 300 pack includes 100 forks, 100 spoons and 85 knives in a reusable bag. Forks and spoons are 6.25` and knives are 6.5` in length. <br> <br> Are you looking for classy yet affordable styles of wooden cutlery for your event? You need not search for longer because we offer an impressive set of bamboo cutlery for your food shop. Our collection of bamboo cutlery is an excellent alternative to plastic utensils and these disposable wooden cutlery sets are your most eco friendly option available in the market. Our range of disposable wooden forks are made of natural Birchwood using 100% natural methods which are not only your best choice for the environment but also provide a great aesthetic to match your outdoor picnics, formal events as well as your themed restaurant serving . The next time you want to restock biodegradable cutleries for your catering event or host a BBQ party, think of how stylish your event would look with these disposable wooden forks. The beautifully plain design of these wooden forks makes them simply stylish for all your catering events, and if you want to stand out, you can always choose to customize, get a little creative and use your branded stickers to make them more distinctive.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/51fMnHlWJ8L._AC_.jpg'
    ),
    (
        52,
        'Disposable Red Plastic Party Cups - 18 oz (525 ml) Disposable Glasses for Parties - Pack of 50 Party Cups *** 100% Money Back Guarantee ***',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/91k1LaNt83L._AC_SX569_.jpg'
    ),
    (
        28,
        'Dinner Plate Set, 6-Piece',
        '<div class=`disclaim`>Style Name:<strong>Dinner Plates</strong></div><!-- show up to 2 reviews by default --><p>AmazonBasics offers everyday items for your home, office, garden and more. With a selection that continues to grow, the AmazonBasics brand is set to become a part of your daily convenience for electronics products and lifestyle.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/51RhEPbfvHL._AC_SX679_.jpg'
    ),
    (
        23,
        '58/62 Inch Portable Golf Umbrella Large Windproof Double Canopy - Automatic Open Strong Oversized Rain Umbrellas',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61TlmdY%2B3tL._AC_SX679_.jpg'
    ),
    (
        44,
        'Cutlery Set of 16, Stainless Steel - Color Handles - 4 Forks, 4 Knives, 4 Dinner Spoons, 4 Teaspoons - EX23-16 (Turquoise)',
        'foobar\n',
        'https://images-na.ssl-images-amazon.com/images/I/71l-f%2BnrYtL._AC_SX569_.jpg'
    ),
    (
        85,
        'Aluminum Dish Drainers,Compact Dish Drying Rack with Removable Drip Tray,Utensil Holder, Draining Board, Grey Dish Rack Drainers for Small Kitchen Countertop',
        'foobar',
        'https://images-na.ssl-images-amazon.com/images/I/61wv-o7-XaL._AC_SX569_.jpg'
    ),
    (
        7,
        'Steel Pro Frame Swimming Pool 305 x 76 - Blue',
        '<div class=`disclaim`>Size:<strong>305 x 76 cm</strong></div><!-- show up to 2 reviews by default --><p>The Bestway Steel Pro frame pools are designed for strength and reliability. This 30in deep pool has a water capacity at (90% full) of 1,236 gal (4,678L). It has a rust-resistant metal frame. The extra strength side walls are made with 3 separate layers of material. The inner layer of polyester mesh is laminated to the 2 outer heavy gauge PVC layers. It has a flow control drain valve for easy draining. The valve attaches to your garden hose so that water can be drained away from the pool area.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/61sVCfB6LAL._AC_SX569_.jpg'
    ),
    (
        31,
        'Rose Gold Plated Mesh Strap',
        '<!-- show up to 2 reviews by default --><p>Sara Miller Chelsea Collection womens watch with gold plated brass casing, 38mm green birds print dial, 2-hand analogue display, and gold plated stainless steel bracelet strap with slider fastening.</p>',
        'https://images-na.ssl-images-amazon.com/images/I/81MnNV%2BgTrL._AC_UY741_.jpg'
    );

INSERT INTO
    `lineitem`
VALUES
    (12, 24, 1),
    (19, 38, 1),
    (17, 33, 1),
    (16, 31, 1),
    (9, 17, 1),
    (5, 10, 1),
    (9, 18, 1),
    (20, 39, 1),
    (11, 22, 1),
    (14, 27, 1),
    (1, 1, 1),
    (17, 34, 1),
    (4, 8, 1),
    (13, 25, 1),
    (8, 16, 1),
    (3, 5, 1),
    (14, 28, 1),
    (3, 6, 1),
    (10, 20, 1),
    (4, 7, 1),
    (15, 29, 1),
    (15, 30, 1),
    (11, 21, 1),
    (6, 11, 1),
    (13, 26, 1),
    (7, 13, 1),
    (1, 2, 1),
    (19, 37, 1),
    (7, 14, 1),
    (2, 3, 1),
    (2, 4, 1),
    (20, 40, 1),
    (6, 12, 1),
    (8, 15, 1),
    (10, 19, 1),
    (5, 9, 1),
    (12, 23, 1),
    (18, 36, 1),
    (18, 35, 1),
    (16, 32, 1);