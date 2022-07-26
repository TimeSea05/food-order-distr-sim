const mealNames = [
  'TACOS OR TOSTADAS', 'HUEVOS RANCHEROS', 'BURRITOS', 'BURGERS OR HOTDOGS', 'KFC BOWLS',
  'CHICKEN AND RICE', 'PULLED BBQ CHICKEN', 'POT ROAST', 'SALSA CHICKEN', 'RIBS',
  'HOMEMADE PIZZA', 'TWICE-BAKED POTATOES', 'CALZONES', 'CHICKEN CORDON BLEU', 'EGG ROLLS',
  'CHICKEN PARMESAN', 'CHICKEN CURRY', 'CHICKEN AND BROCCOLI', 'PORK CHOPS', 'MEATBALL SUBS',
  'HERB CRUSTED SALMON', 'CRAB CAKES', 'BAKED TILAPIA', 'OVEN FRIED FISH', 'PAN FRIED COD'
]

const usernames = [
  'Adolf', 'Antony', 'Andrew', 'Boris', 'Brendan',
  'Danny', 'Dave', 'Donald', 'Edward', 'Freddie',
  'Gerard', 'Gideon', 'Homer', 'Isaac', 'Jerome',
  'Johnny', 'Kent', 'Leon', 'Laurence', 'Lincoln',
  'Matt', 'Mitchell', 'Morgan', 'Nicholas', 'Pearce',
  'Raymond', 'Richard', 'Roderick', 'Rupert', 'Sam',
  'Sandy', 'Scott', 'Simon', 'Steven', 'Theo',
  'Theodore', 'Terence', 'Wallace', 'William', 'Van',
  'Tim', 'Rupert', 'Oliver', 'Noah', 'Morris',
  'Mick', 'Isaac', 'Jasper', 'Humphry', 'Enos'
]

function getRandomInt (min, max) {
  // [min, max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default function getRandomOrder () {
  const username = usernames[getRandomInt(0, 50)]
  const orderlist = '{ ' + mealNames[getRandomInt(0, 25)] +
    ', ' + mealNames[getRandomInt(0, 25)] + ', ' + mealNames[getRandomInt(0, 25)] +
    ' }'
  const price = `$${getRandomInt(5, 100)}`
  const position = `(${getRandomInt(0, 100)}, ${getRandomInt(0, 100)})`

  return { username, orderlist, price, position }
}
