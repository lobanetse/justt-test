const customers = [
  {
    customer_id: '813-86-3131',
    first_name: 'Benedikt',
    last_name: 'Abberley',
    email: 'babberley0@artisteer.com',
    gender: 'Male',
    country: 'Nicaragua',
    city: 'San Jorge',
    street: '415 Green Lane',
    phone: '887-564-6105',
    total_price: '1329.12',
    currency: 'NIO',
    cerdit_card_type: 'mastercard',
    cerdit_card_number: '5010126046192324',
  },
  {
    customer_id: '387-63-2772',
    first_name: 'Ellwood',
    last_name: 'Speirs',
    email: 'espeirs1@mediafire.com',
    gender: 'Male',
    country: 'Indonesia',
    city: 'Kiarajangkung',
    street: '4368 Sloan Trail',
    phone: '660-819-9883',
    total_price: '4257.95',
    currency: 'IDR',
    cerdit_card_type: 'visa-electron',
    cerdit_card_number: '4508672811329403',
  },
  {
    customer_id: '500-47-2929',
    first_name: 'Gray',
    last_name: 'Slucock',
    email: 'gslucock2@wufoo.com',
    gender: 'Male',
    country: 'Cuba',
    city: 'Vertientes',
    street: '01195 Laurel Drive',
    phone: '689-147-8731',
    total_price: '4213.02',
    currency: 'CUP',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3537300561420746',
  },
  {
    customer_id: '183-06-7195',
    first_name: 'Felicia',
    last_name: 'Starbucke',
    email: 'fstarbucke3@mashable.com',
    gender: 'Female',
    country: 'China',
    city: 'Shijing',
    street: '90119 Grasskamp Parkway',
    phone: '312-874-7275',
    total_price: '847.10',
    currency: 'CNY',
    cerdit_card_type: 'visa',
    cerdit_card_number: '4041371907379',
  },
  {
    customer_id: '249-75-0095',
    first_name: 'Ewell',
    last_name: 'Hazzard',
    email: 'ehazzard4@istockphoto.com',
    gender: 'Male',
    country: 'Cyprus',
    city: 'Kíti',
    street: '45987 8th Road',
    phone: '479-392-7059',
    total_price: '3420.94',
    currency: 'EUR',
    cerdit_card_type: 'switch',
    cerdit_card_number: '633110643696828708',
  },
  {
    customer_id: '361-48-2924',
    first_name: 'Kristoffer',
    last_name: 'Portwain',
    email: 'kportwain5@mashable.com',
    gender: 'Male',
    country: 'Afghanistan',
    city: 'Shahrak',
    street: '3 Hallows Point',
    phone: '979-372-3737',
    total_price: '8799.10',
    currency: 'AFN',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3555799617754676',
  },
  {
    customer_id: '138-07-4256',
    first_name: 'Vivian',
    last_name: 'Everleigh',
    email: 'veverleigh6@deviantart.com',
    gender: 'Female',
    country: 'Uzbekistan',
    city: 'Navoiy',
    street: '5496 Welch Junction',
    phone: '981-908-1763',
    total_price: '2396.21',
    currency: 'UZS',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3570774585323755',
  },
  {
    customer_id: '879-81-8422',
    first_name: 'Blakelee',
    last_name: 'Kedward',
    email: 'bkedward7@hatena.ne.jp',
    gender: 'Female',
    country: 'Tajikistan',
    city: 'Proletar',
    street: '17311 Maple Court',
    phone: '383-963-1677',
    total_price: '1696.57',
    currency: 'TJS',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3540183427223701',
  },
  {
    customer_id: '321-12-3355',
    first_name: 'Wilfrid',
    last_name: 'Paradine',
    email: 'wparadine8@whitehouse.gov',
    gender: 'Male',
    country: 'Peru',
    city: 'Acobamba',
    street: '4335 Glacier Hill Park',
    phone: '997-221-1933',
    total_price: '6277.91',
    currency: 'PEN',
    cerdit_card_type: 'maestro',
    cerdit_card_number: '6761156728826111188',
  },
  {
    customer_id: '790-68-2030',
    first_name: 'Monah',
    last_name: 'Sneath',
    email: 'msneath9@ed.gov',
    gender: 'Female',
    country: 'Indonesia',
    city: 'Solok Timur',
    street: '56284 Holy Cross Plaza',
    phone: '952-547-2943',
    total_price: '5041.08',
    currency: 'IDR',
    cerdit_card_type: 'diners-club-enroute',
    cerdit_card_number: '201859780695926',
  },
  {
    customer_id: '855-30-5168',
    first_name: 'Aldus',
    last_name: 'Furby',
    email: 'afurbya@abc.net.au',
    gender: 'Male',
    country: 'Luxembourg',
    city: 'Mamer',
    street: '0 Armistice Avenue',
    phone: '566-805-8767',
    total_price: '9908.35',
    currency: 'EUR',
    cerdit_card_type: 'maestro',
    cerdit_card_number: '50202204285174297',
  },
  {
    customer_id: '668-49-2538',
    first_name: 'Fidole',
    last_name: 'Dyshart',
    email: 'fdyshartb@vkontakte.ru',
    gender: 'Male',
    country: 'China',
    city: 'Fucun',
    street: '6 Eastlawn Plaza',
    phone: '310-292-8532',
    total_price: '257.99',
    currency: 'CNY',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3576843779704833',
  },
  {
    customer_id: '526-21-4495',
    first_name: 'Gusta',
    last_name: 'Kemme',
    email: 'gkemmec@google.nl',
    gender: 'Female',
    country: 'Poland',
    city: 'Widuchowa',
    street: '7 Jana Circle',
    phone: '112-154-0476',
    total_price: '7938.35',
    currency: 'PLN',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3530634389418343',
  },
  {
    customer_id: '293-03-5451',
    first_name: 'Lem',
    last_name: 'Bremond',
    email: 'lbremondd@cbslocal.com',
    gender: 'Male',
    country: 'Philippines',
    city: 'Mangarine',
    street: '881 Graedel Pass',
    phone: '410-185-6675',
    total_price: '7260.98',
    currency: 'PHP',
    cerdit_card_type: 'switch',
    cerdit_card_number: '6333425605574973',
  },
  {
    customer_id: '282-79-4320',
    first_name: 'Misti',
    last_name: 'Derricoat',
    email: 'mderricoate@canalblog.com',
    gender: 'Female',
    country: 'Brazil',
    city: 'Barcarena',
    street: '60 Starling Pass',
    phone: '578-566-6838',
    total_price: '1145.97',
    currency: 'BRL',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3578687454686221',
  },
  {
    customer_id: '225-02-2575',
    first_name: 'Elias',
    last_name: 'Delle',
    email: 'edellef@icq.com',
    gender: 'Male',
    country: 'Nigeria',
    city: 'Sofo-Birnin-Gwari',
    street: '24 Sycamore Terrace',
    phone: '638-297-7522',
    total_price: '9136.07',
    currency: 'NGN',
    cerdit_card_type: 'jcb',
    cerdit_card_number: '3560671956013282',
  },
  {
    customer_id: '154-88-2507',
    first_name: 'Torey',
    last_name: 'Beddow',
    email: 'tbeddowg@digg.com',
    gender: 'Male',
    country: 'North Korea',
    city: 'Namp’o',
    street: '497 Fieldstone Place',
    phone: '904-393-6436',
    total_price: '5685.91',
    currency: 'KPW',
    cerdit_card_type: 'diners-club-enroute',
    cerdit_card_number: '201777698727625',
  },
];

module.exports = {
  customers,
};