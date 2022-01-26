# Welcome to week 18 

I have lost my voice so today is going to be a bit like last week. We're going to watch a video then do some simple work to get our snacks into source control. Once we do that, we're going to start working on building a multipage app and saving our work on in the source control tool. 

# What you need for today

1. A non school computer with terminal or command line access 
2. To accept the github invite sent to your school email
3. To install nodejs, expo.dev cli tools and git onto your local machine

# Git Video Tutorial  

Git Tutorial for Beginners: Learn Git in 1 Hour
https://www.youtube.com/watch?v=8JJ101D3knE

# Today's work

1. Watch the Git Tutorial with the class and learn
2. Do the little git assignment below 
3. Install the expo CLI tools on your local machine (Link: https://docs.expo.dev/get-started/installation/) 
4. Watch the video on React Native Navigation
5. Work on the React Native Navigation Assignment below (also the homework for next week

# Git assignment 

1. First accept the invite for the github account sent to your school email. 
2. Navigate to the ToDo list snack we built a few weeks ago and download it: https://snack.expo.dev/@adambourg/compass-week15-todo-list 
3. Unzip the project into a directory (any)
4. Clone the repo https://github.com/snowmac/compass-test-react-apps-2021_2022 (Click the Green Code button then HTTPS for the url)
5. Do the bash below: 
```bash 
cd ~
mkdir workspace
cd workspace 
git clone https://github.com/snowmac/compass-test-react-apps-2021_2022.git 
cd compass-test-react-apps-2021_2022
git branch ${YOUR_NAME} 
git checkout ${YOUR_NAME}
git push --set-upstream origin ${YOUR_NAME}
mkdir ${YOUR_NAME}
```
6. After you're done with the above bash, copy the files from the directory where you unzipped the snack (All the App.js, Package.json etc... files) into the ${YOUR_NAME} directory
7. Do the bash: 
```bash
git add ${YOUR_NAME}
git status
git commit -m 'My very first git commit'
git push
```

# React Native navigation 

Worth looking at: https://reactnavigation.org/docs/getting-started/ 

## Navigation Video 

https://www.youtube.com/watch?v=nQVCkqvU1uE 

# Assignment 

Using the todo list we built a few weeks ago. Put on one screen the todo list form that lets you add items to the list and on the main screen put the actual todo list. 

# Quiz 

Take the Git quiz and email me your results from the results page / button (Adam.Bourg@gmail.com) 

