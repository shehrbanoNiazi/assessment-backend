module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);

        
    },
  
    getFortune: (req, res) => {
        const fortune = ["A hunch is creativity trying to tell you something", "A lifetime of happiness lies ahead of you","A smooth long journey! Great expectations","All your hard work will soon pay off", "From now on your kindness will lead you to success","Now is the time to try something new"];
    
        let randomIndex = Math.floor(Math.random() * fortune.length);
    
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune); 

    }
}
