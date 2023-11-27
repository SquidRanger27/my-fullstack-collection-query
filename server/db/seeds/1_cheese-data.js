export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cheeses').del()
  await knex('cheeses').insert([
    {
      id: 1,
      name: 'Pecorino dei Malatesta al Sangiovese',
      description:
        "Produced by Romaniae Terrae, Pecorino dei Malatesta al Sangiovese is an Italian cheese made with highly selected sheep's milk pasteurized at optimum temperature. Cheese wheels are first matured in a cold room at 6° - 8°C. Later, during the final stage of maturation they are treated with Sangiovese red wine and kept in a cold room at 8°C for about 30 days.The Sangiovese red wine gives the cheese a dark burgundy rind beneath which lies a smooth white paste with a delicate mouthfeel and a sweet sheep's milk flavour with an aftertaste of wine.",
      rating: 8,
      comment:
        "This cheese is a must-have in any fridge of persons employed full-time (i.e. not students). It has a pleasant aroma, and it's flavour profile can be described as 'acidic', 'smooth', 'subtle' and 'sweet.",
    },
    {
      id: 2,
      name: 'Millie - From the Moody Cow',
      description:
        "We try and avoid cheesy puns but this white rind brie really is brielliant. It's rich and creamy (if you leave it on the bench for an hour before your first taste) and of course buttery. This time of the year you might detect hints of spring grass. It'll taste even better with a Chardonnay (and the acidity will stop the creaminess becoming overwhelming), a light pale ale, or a light soda. Eat it off your fingers!",
      rating: 9,
      comment:
        'Not sure I can taste the spring grass, but it sure is finger-licking good.',
    },
    {
      id: 3,
      name: "Gruyere - From Barry's Bay",
      description:
        "There isn't a lot of gruyere made in New Zealand, so thanks to BARRY'S BAY! It's a wonderfully versatile cheese whether on a cheeseboard, shaved or grated onto cooked veges or a salad, or melted (when it becomes just a little stretchy). The high fat content suggests a red wine, or perhaps a black tea.",
      rating: 6,
      comment: 'Barry has done it again! What a wonderful cheese maker he is.',
    },
  ])
}
