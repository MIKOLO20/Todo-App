const getWeather = async () => {
     let city = document.getElementById("city").value
   try{
     await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d9fcad5662d61a4fc6d1f95a0718348f`)
     
    .then(async(response)=>{
        let result = await response.json()
        console.log(result)
        if(result){
            await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${result[0].lat}&lon=${result[0].lon}&appid=d9fcad5662d61a4fc6d1f95a0718348f`)
            .then(async(response)=>{
                let result = await response.json()
                console.log(result)
                document.getElementById("main").innerHTML = `${result.weather[0].main}`
                 document.getElementById("desc").innerHTML = `${result.weather[0].description}`
                 document.getElementById("temp").innerHTML = `${Math.floor(result.main.temp - 273.15)} deg`
                  document.getElementById("hum").innerHTML = `${result.main.humidity} %`
                  document.getElementById("press").innerHTML = `${result.main.pressure} hPa`
                  document.getElementById("wind").innerHTML = `${result.wind.speed} m/s`
                  if(result.weather[0].main.toLowerCase().includes("cloud")){
                    document.getElementById("bg").style.backgroundImage = `url("https://img.freepik.com/free-photo/beautiful-scenery-cloudy-sky-landscape-daytime_181624-41959.jpg?semt=ais_hybrid&w=740&q=80")`
                    document.getElementById(("bg")).style.backgroundSize = "cover"
                  } else if(result.weather[0].main.toLowerCase().includes("sun")){
                     document.getElementById("bg").style.backgroundImage = `url("https://www.wkbn.com/wp-content/uploads/sites/48/2021/03/clouds-cloudy-sky-spring-summer-fall-winter-weather-generic-8-1.jpg?w=1280")`
                    document.getElementById(("bg")).style.backgroundSize = "cover"
                  }else if(result.weather[0].main.toLowerCase().includes("clear")){
                     document.getElementById("bg").style.backgroundImage = `url("https://png.pngtree.com/thumb_back/fh260/background/20220903/pngtree-clear-weather-with-white-clouds-against-a-blue-sky-photo-image_39002894.jpg")`
                    document.getElementById(("bg")).style.backgroundSize = "cover"
                  }else if(result.weather[0].main.toLowerCase().includes("rain")){
                     document.getElementById("bg").style.backgroundImage = `url("https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=")`
                    document.getElementById(("bg")).style.backgroundSize = "cover"
                  }else if(result.weather[0].main.toLowerCase().includes("snow")){
                     document.getElementById("bg").style.backgroundImage = `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VhRhZoHYaDoiSPJU56dgQ4lfEKmJzPtplQ&s")`
                    document.getElementById(("bg")).style.backgroundSize = "cover"
                  }

            })
            .catch((err)=>{
                alert("Network issue")
                console.log(err)
            })
        }
    })
      .catch((err)=>{
        alert("Error occured")
        console.log(err)
      })
   }
   catch(error){
    alert("Much error")
    console.log(error)
   }
}



