const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("FortuneButton")     

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
  .then(res => {
    const data = res.data;
    alert(data);
  })
  };
  fortuneBtn.addEventListener('click', getFortune );

  const misfortuneBtn = document.getElementById("misfortuneButton")

  const getMisFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
      const data = res.data;
      alert(data);
    })
  };
  misfortuneBtn.addEventListener('click', getMisFortune);

 
  const loveBtn = document.getElementById("loveButton")

  const getLove = () => {
    axios.get("http://localhost:4000/api/fortune/")
  .then(res => {
    const data = res.data;
    alert(data);
  })
  };
  loveBtn.addEventListener('click', getLove );
