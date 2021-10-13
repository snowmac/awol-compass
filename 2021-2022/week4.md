# Agenda

* Where are we going? Road map to success (Building the feel the beat app)
* HTTP and how the web works
* API calls

# Open Weather Map
https://openweathermap.org/

Make an account

Then go to https://home.openweathermap.org/api_keys

e13df688f7b8efde93648b03a0152876


# Goal to build an app

* Write the code for the app (HTML, CSS, JSX (javascript))
* Need to design interface
* JSON
* API
* Backend web service to populate / manage the content of the app

Javascript, HTML, CSS

# The glue of the web

HTTP -> How the internet works

Computer Google.com
DNS -> Google.com -> IP Address, 0.0.0.0
Packet (80 bits), to IP
Your computer
ISP
To the ISP's ISP
The to the servers you're asking for



(API) -> Application Programming Interface

openweathermap.org/api_key/get/weather/80233

JSON
Javascript Object Notation

{
"this_is_a_json_key": "Your weather info"
}



HTTP -> Transmits data
Data back
JSON, HTML, FILES, Cat memes etc... video

# Example API:
api.openweathermap.org/data/2.5/weather?q=Denver&appid=e13df688f7b8efde93648b03a0152876


# Sample we built
https://codepen.io/adambourg/pen/XWgBeMo

# review of what we did in class today
Client side code (HTML, Javascript)
Authenticated to an API
Used Said API to gather weather information
Displayed Weather info to the user


# Last minute notes

1. Reflection, now or later, due Friday
2. If want a challenge, make the background color change based on temp

-> Fairbanks Alaska (cold) < 50, background blue
-> Phoenix > 100 background red
-> Denver > 50 < 100 background green
3. Wipe down the table and put chairs

# The Code pen to checkout
https://codepen.io/adambourg/pen/XWgBeMo
