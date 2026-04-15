# Week 12 – Session 22-24 – 4/14 – JS

## What I learned this week

4/14/26:

Mini Project #3: API Powered App

Milestone 1: 
What does the API response look like?
 },
    },
    uv: {
      value: weather.uv_index,
      unit: "",
      label: "UV Index",
      icon: "☀️",
      getStatus: (v) => {
        if (v <= 2) return { text: "Low", class: "status-good" };
        if (v <= 5) return { text: "Moderate", class: "status-moderate" };
        return { text: "High", class: "status-bad" };
      },
    },
What fields did you use?

From Weather:

main.temp → temperature
main.humidity → humidity
weather[0].description → condition (e.g., cloudy)
wind.speed → wind

From Air Quality:

main.aqi → overall air quality index
components.pm2_5 → important for respiratory sensitivity
components.o3 → relevant for some conditions

What was the trickiest part of getting fetch to work?

The trickiest part of getting fetch to work was handling asynch data properly, since I wanted to make sure the app didn’t try to use the API data before it had finished loading. AI utilized await, proper JSON parsing, and safe checks to avoid undefined errors.

If AI helped, what did it explain about async/await?

AI explained that async/await allows asynchronous code to be written in a more synchronous and readable way by pausing execution until a Promise resolves, which makes it easier to manage API calls compared to chaining .then() methods.

## 4/14/26 Class Notes

.gitignore protects your API key by preventing it from being accidentally included in your Git repository and uploaded to platforms like GitHub.

Computer to computer --> They communicate in strings

JSON to strings or strings to JSON

GET = "give me the data"
POST = "here is some data"