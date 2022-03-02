const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

class result{
  constructor(search, title, link){
    this.search = search
    this.title = title
    this.link = link
  }

  getKey(){
    return this.search;
  }

  getTitle(){
    return this.title;
  }

  getLink(){
    return this.link;
  }
  
}


let pages = [
  new result("food", "Food - Wikipedia", "https://en.wikipedia.org/wiki/Food"),
  new result("food", "BBC Good Food", "https://www.bbcgoodfood.com/"),
  new result("food", "Food | The Guardian", "https://www.theguardian.com/food"),
  new result("food", "Food - BuzzFeed", "https://www.buzzfeed.com/uk"),
  new result("food", "Food News & Tips: Recipes and restaurant reviews - Metro", 
  "https://metro.co.uk/lifestyle/food/"),
  new result("food", "Food Standards Agency: Homepage", "https://www.food.gov.uk/"),
  new result("food", "Food and Drink | The Independent", 
  "https://www.independent.co.uk/life-style/food-and-drink"),
  new result("food", "Slow Food in the UK - Celebrate what's on your plate!", 
  "https://www.slowfood.org.uk/"),
  new result("food", "BBC Food - Recipes and inspiration from your favourite BBC", 
  "https://www.bbc.co.uk/food"),
  new result("food", "Slow Food International", "https://www.slowfood.com/"),
  new result("car", "CAR magazine website | Reviews | News | Scoops | CAR ", 
  "https://www.carmagazine.co.uk/"),
  new result("car", "Auto Trader UK - New and Used Cars For Sale", 
  "https://www.autotrader.co.uk/"),
  new result("car", "What Car?: New and Used Car Reviews, Car Deals", 
  "https://www.whatcar.com/"),
  new result("car", "Cazoo: The better way to buy and sell a car online in the UK", 
  "https://www.cazoo.co.uk/"),
  new result("car", "Car - Wikipedia", "hhttps://en.wikipedia.org/wiki/Car"),
  new result("car", "What Car? - YouTube", "https://www.youtube.com/channel/UC- GJbheknHZhSM7-Jgn63jg"),
  new result("car", "Autocar | Car News and Car Reviews", 
  "https://www.autocar.co.uk/"),
  new result("car", "Used Cars for sale | Find second hand cars | Motors.co.uk", 
  "https://www.motors.co.uk/used-cars/"),
  new result("car", "carwow | The car buying comparison site", 
  "https://www.carwow.co.uk/"),
  new result("car", "heycar: Find a car online | 1000s of cars for sale ", 
  "https://heycar.co.uk/"),
  new result("animal", "Animal - Wikipedia", "https://en.wikipedia.org/wiki/Animal"),
  new result("animal", "Animal: Sustainable & Organic Clothing", 
  "https://www.animal.co.uk/"),
  new result("animal", "ANIMAL | meaning in the Cambridge English Dictionary", 
  "https://dictionary.cambridge.org/dictionary/english/animal"),
  new result("animal", "Animals - National Geographic Kids", 
 "https://kids.nationalgeographic.com/animals"),
  new result("animal", "Animal - Journals | Elsevier", 
 "https://www.journals.elsevier.com/animal"),
  new result("animal", "Animal Conservation - Wiley Online Library", 
 "https://zslpublications.onlinelibrary.wiley.com/journal/14691795"),
  new result("animal", "RSPCA: The Largest Animal Welfare Charity in the UK", 
 "https://www.rspca.org.uk/"),
  new result("animal", "Home - OIE - World Organisation for Animal Health", 
 "https://www.oie.int/en/home/"),
  new result("animal", "Animal (TV Series 2021– ) - IMDb", 
 "https://www.imdb.com/title/tt15674216/"),
  new result("animal", "animal | Cambridge Core", 
 "https://www.cambridge.org/core/journals/animal")
];

app.get('/', (req, res) => { 
  res.send('');
});

app.get('/ran/:key', (req, res) => {
  let ranr = getSearchResult(req.params.key);
  let ranl = ranr[Math.floor(Math.random() * 10)]

  res.send(ranl.link)
});


app.get('/:key', (req, res) => {
  if(getSearchResult(req.params.key).length === 0){
    res.send("No result found")
    res.status(404)
  }else{
    //console.log(JSON.stringify(getSearchResult(req.params.key)))
    res.json(getSearchResult(req.params.key))
  }
})

function getSearchResult(key){
  var finalresult = new Array;
  const found = pages.filter(function(pages, index) {
    if(pages.search === key){
      finalresult.push({title: pages.title,link: pages.link})
    }
  })

  return finalresult;
}  

