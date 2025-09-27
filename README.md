Reflection

for this project I chose to create a page where the user can see builds for the game Elden ring and then enter their own. after I had this idea I moved onto my planning to ensure I had a clear Idea on what to do and the steps to achieve it

through out this project I encountered numerous errors which lead me to limiting the scope of what I indented to implement.

I believe I hit most of the requirements of allowing the user to see and create posts and setting up up my client with react and the use of polling to ensure the user wouldn't need to refresh the page, I also managed to enable the use of routes and have nested the form component inside of the home component.

after I had set up my data base and made it relational as I created a separate table for the users and seeded both with some initial data. I moved on to setting up my server and then creating the form component.

this was where I encountered my first error which took me multiple hours to fix initially I could not get the form to display and then I had an error where even if the user could type no new data would be submitted and I would just receive an error message. as this was my first time linking a form in react to my server I used some tutorials this while helpful is what caused my error as they had used a piece of code that would send an error message if successful which caused the break in my code once I had taken a break and came back with fresh eyes I noticed this and removed it which allowed the form to work, However this raised another issue the user could put any number in the userID section of the form which due to how I had set it up would not work as the form used the pre-existing Ids I had created to remedy this I implemented a drop down menus to the user can select from a list of available Ids however if I had more time I would have liked to implement a way for the user to be able to add in their own user name.
due to the amount of time I had spent on the form I felt I had limited time to complete the rest of the project I had attempted to use environments but came into repeated errors with them not working as such i chose to hard code the render links into the appropriate sections.

due to one of the requirements is to implement routes and multiple pages I chose to create a home page and have the form displayed in that which i did get working how even I encountered another issue and when I tried to remedy it I encountered more when i reverted the code to before I had the issues and tried to re implement the working routes from earlier they again didn't work as I was unsure on what to do I choose to leave them and attempt to implement some css so the page would be presentable.

after I took a long break from the routes working on the css I came back determined to get at least the functionality of have a home page and then a button to brin up the form
and then having a button to swap between the form and home page after starting from scratch just to see if I made an error I got a recurring error which i put into chatgpt which explained what the error was which turned out that i had a version miss match in the react router and the react router dom once this was fixed I got the page working as i had initial intended to how ever I did learn that my initial plan was too grand for my current capabilities but this project is something I would like to come back to and further develop into a more fully fledged app.

this has been the most challenging project so far and as a result I feel that I did not meet some of the required tasks. I also learned that jut becuse a a piece of code works in a tutorial video does not mean it will work in my code and to be a lot more cautious arround my use of the code from them as that seems to be when most if no all my issues stemmed from this project.
Required 🎯 What requirements did you achieve? 🎯 Were there any requirements or goals that you were unable to achieve? 🎯 If so, what was it that you found difficult about these tasks?

resources:
https://www.youtube.com/watch?v=fpihdncIgiY
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions
https://react.dev/learn/conditional-rendering
