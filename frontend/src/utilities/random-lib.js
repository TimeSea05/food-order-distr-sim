const mealNames = [
  'TACOS OR TOSTADAS', 'HUEVOS RANCHEROS', 'STIR FRY', 'BURRITOS', 'FAJITAS',
  'BURGERS OR HOTDOGS', 'MEATBALLS AND RICE', 'KFC BOWLS', 'SLOPPY JOES', 'BOWTIE PASTA & VEGGIES',
  'CHICKEN AND RICE', 'PULLED BBQ CHICKEN', 'POT ROAST', 'SALSA CHICKEN', 'RIBS',
  'FRENCH DIP SANDWICHES', 'TORTELLINI SOUP', 'RICE AND BEANS', 'LOADED POTATOES', 'JAMBALAYA',
  'CHICKEN AND RICE', 'PULLED BBQ CHICKEN', 'POT ROAST', 'SALSA CHICKEN', 'RIBS',
  'FRENCH DIP SANDWICHES', 'TORTELLINI SOUP', 'RICE AND BEANS', 'LOADED POTATOES', 'JAMBALAYA',
  'CHICKEN PARMESAN', 'CHICKEN CURRY', 'FRIED CHICKEN', 'BREADED CHICKEN', 'CHICKEN AND BROCCOLI',
  'ORANGE CHICKEN', 'CILANTRO LIME CHICKEN', 'LEMON CHICKEN', 'CHICKEN WINGS', 'CHICKEN NUGGETS',
  'PORK CHOPS', 'CHIMICHANGAS', 'MEAT LOAF', 'MEATBALL SUBS', 'STUFFED PORK CHOPS',
  'BEEF & BROCCOLI', 'HAM & POTATOES', 'BEEF/PORK TENDERLOIN', 'BEEF STROGANOFF', 'STEAK',
  'HERB CRUSTED SALMON', 'CRAB CAKES', 'FISH & CHIPS', 'HOMEMADE FISH STICKS', 'BLACKENED FISH TACOS',
  'BAKED TILAPIA', 'OVEN FRIED FISH', 'SALMON WITH AVOCADO', 'SALMON PATTIES', 'PAN FRIED COD',
  'MAC N CHEESE', 'LASAGNA/LASAGNA ROLLS', 'BAKED ZITI', 'FETTUCCINE ALFREDO', 'STUFFED PASTA SHELLS',
  'MANICOTTI', 'SPAGHETTI & MEATBALLS', 'PESTO PASTA', 'TORTELLINI', 'PAD THAI',
  'TACO SOUP', 'MINESTRONE', 'CHICKEN NOODLE SOUP', 'POTATO SOUP', 'WHITE CHICKEN CHILI',
  'CLAM CHOWDER', 'TOMATO BISQUE', 'TORTILLA SOUP', 'CHEESEBURGER SOUP', 'FRENCH ONION SOUP',
  'BLACK BEAN SALAD', 'BBQ CHICKEN SANDWICH', 'GRILLED CHEESE', 'BAKED ITALIAN SANDWICH', 'BLT S',
  'EGG ROLL BOWL', 'GRILLED CHICKEN SALAD', 'CAFE RIO PORK SALAD', 'CLUB SALAD', 'NUTS & BERRIES SALAD',
  'FRENCH TOAST', 'WAFFLES', 'PANCAKES', 'CREPES', 'OMELET/SCRAMBLED EGGS',
  'BISCUITS & GRAVY', 'BREAKFAST TACOS', 'TATER TOT CASSEROLE', 'BREAKFAST SLIDERS', 'BREAKFAST BURRITOS',
  'KEBABS', 'GRILLED FOIL PACKETS', 'TERIYAKI CHICKEN', 'HONEY CHICKEN', 'HAWAIIAN PORK CHOPS',
  'GRILLED PIZZA', 'SKIRT STEAK', 'SAUSAGE', 'SHRIMP', 'ALMOST ANY VEGETABLES',
  'VEGETABLE SOUP', 'SHEPHERD PIE', 'GOULASH', 'QUICHE', 'QUESADILLAS',
  'NACHOS', 'TACO SALAD', 'PANINIS', 'STROMBOLI', 'CASSEROLE'
]

const usernames = [
  'Abigail', 'Adah', 'Adia', 'Alexandra', 'Alice',
  'Alis', 'Alyssa', 'Amber', 'Amelia', 'Amey',
  'Amy', 'Anastasia', 'Angelina', 'Ani', 'Anna',
  'Anya', 'Ariel', 'Arya', 'Ash', 'Ashley',
  'Audrey', 'Ava', 'Badra', 'Beatrice', 'Belinda',
  'Bella', 'Bency', 'Berey', 'Bery', 'Bety',
  'Bitsy', 'Brianna', 'Brooke', 'Cadie', 'Cady',
  'Caitlin', 'Callie', 'Candy', 'Cappi', 'Carla',
  'Carny', 'Caroline', 'Catherine', 'Cecilia', 'Ceila',
  'Charlotte', 'Chloe', 'Christina', 'Claire', 'Clara',
  'Cora', 'Daisy', 'Dandy', 'Daniella', 'Danya',
  'Deborah', 'Deena', 'Delcy', 'Delilah', 'Della',
  'Desha', 'Dora', 'Dorothy', 'Eddey', 'Edolie',
  'Eleanor', 'Elena', 'Elina', 'Elise', 'Eliza',
  'Elizabeth', 'Ella', 'Eloise', 'Elyana', 'Elysha',
  'Emery', 'Emily', 'Emma', 'Emmy', 'Erica',
  'Esther', 'Ethlyn', 'Eve', 'Evelyn', 'Everly',
  'Faith', 'Fanny', 'Fauna', 'Felicity', 'Finley',
  'Fiona', 'Freya', 'Gabriella', 'Genevieve', 'Grace',
  'Hadley', 'Hadly', 'Hailey', 'Hanah', 'Hannah',
  'Harmony', 'Harper', 'Hazel', 'Heavin', 'Helene',
  'Holly', 'Ida', 'Iris', 'Isabella', 'Isla',
  'Ivy', 'Jacey', 'Jade', 'Jaena', 'Jainy',
  'Jalin', 'Jasmine', 'Jennifer', 'Jessica', 'Jocelyn',
  'Jordyn', 'Josephine', 'Jovita', 'Joy', 'Joyce',
  'Julia', 'Kaylee', 'Kimberly', 'Kylie', 'Lauren',
  'Layla', 'Leah', 'Lily', 'Linda', 'Lucinda',
  'Lucy', 'Luna', 'Lydia', 'Mackenzie', 'Madeline',
  'Madison', 'Maisie', 'Margaret', 'Maria', 'Megan',
  'Melanie', 'Melody', 'Mia', 'Mila', 'Molly',
  'Morgan', 'Naomi', 'Natalie', 'Nicole', 'Norah',
  'Olivia', 'Pagi', 'Paige', 'Paisley', 'Pamela',
  'Payton', 'Phoebe', 'Piper', 'Poppy', 'Priscilla',
  'Queenie', 'Quinn', 'Rachel', 'Reagan', 'Reese',
  'Riley', 'Rose', 'Rosemary', 'Roxanne', 'Ruby',
  'Sadie', 'Samantha', 'Sarah', 'Scarlett', 'Skylar',
  'Sophia', 'Stella', 'Summer', 'Susan', 'Sylvia',
  'Tabitha', 'Taylor', 'Teresa', 'Trinity', 'Udeline',
  'Unita', 'Valerie', 'Victoria', 'Violet', 'Vivian',
  'Willow', 'Winnie', 'Ximena', 'Yvonne', 'Zoe'
]

const NUM_MEAL_NAMES = mealNames.length
const NUM_USER_NAMES = usernames.length

function getRandomInt (min, max) {
  // [min, max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default function getRandomOrder () {
  const username = usernames[getRandomInt(0, NUM_USER_NAMES)]
  const orderlist = '{ ' + mealNames[getRandomInt(0, NUM_MEAL_NAMES)] +
    ', ' + mealNames[getRandomInt(0, NUM_MEAL_NAMES)] + ', ' + mealNames[getRandomInt(0, NUM_MEAL_NAMES)] +
    ' }'
  const price = `$${getRandomInt(5, 100)}`
  const position = `(${getRandomInt(0, 100)}, ${getRandomInt(0, 100)})`

  return { username, orderlist, price, position }
}
