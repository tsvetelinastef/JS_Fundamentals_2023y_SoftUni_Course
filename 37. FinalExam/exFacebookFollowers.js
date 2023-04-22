/*
Create a program that keeps the information about Jane's Facebook followers, 
their likes, and comments. Keep a record of the followers, each with the count of likes and comments Jane has received 
from them. You will be receiving lines with commands until  you receive the "Log out" command. There are four possible 
commands:  "New follower: {username}" - Add the username to your records (with 0 likes and 0 comments). If a person with 
the given username already exists, ignore the line. ... "Like: {username}: {count}" - If the username doesn't exist, 
add it to your records with the given count of likes.  If the username exists, increase the count of likes with the
given count. .... "Comment: {username}" - If the username  doesn't exist, add it to your records with 1 comment. 
If the username exists, increase the count of comments with 1 .... "Blocked: {username}" - Delete all records of the given username. If it doesn't exist, print:
"{Username} doesn't exist." ... In the end, you have to print the count of followers, each follower with their likes and 
comments(the sum of likes and comments): "{count} followers" 
{username}: {likes+comments}  {username}: {likes+comments} 
 ..... {username}: {likes+comments} " ... 
Input: You will be receiving lines until you receive the
    "Log out"command. The input will always be valid.
Output: Print the users with their likes in the 
    format described above. 
Input
•	The possible commands are:
o	"Log out"
o	"New follower: {username}"
o	"Like: {username}: {count}"
o	"Comment: {username}"
o	"Blocked: {username}"
Output
•	The possible outputs are:
o	"{Username} doesn't exist."
o	"{count} followers
{username}: {likes+comments}
{username}: {likes+comments}
…
{username}: {likes+comments}"
Examples: Input: 
New follower: George
Like: George: 5
New follower: George
Log out
Output: 1 followers
George: 5
*/

// 100/ 100
function  facebookFollowers(arr) {
    let followers = {};
 
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split(": ");
        let command = newArr[0];
        let username = newArr[1];
 
        if (command === "New follower") {
            if (!followers.hasOwnProperty(username)) {
                followers[username] = { likes:0, comments:0}
            }
        }  else if (command === "Like") {
            let count = Number(newArr[2])
            if (!followers.hasOwnProperty(username)) {
                followers[username] = { likes: count, comments: 0}
            } else{
                followers[username].likes += count
            }
        } else if (command === "Comment") {
            if (!followers.hasOwnProperty(username)) {
                followers[username] = {likes:0, comments: 1}
            } else{
                followers[username].comments++
            }
        } else if (command === "Blocked") {
            if (followers.hasOwnProperty(username)) {
                delete followers[username]
            } else{
                console.log(`${username} doesn't exist.`);
            }
        }
    } 
 
    let followersCount = Object.keys(followers).length;
    console.log(`${followersCount} followers`);
    for (let username in followers) {
        console.log(`${username}: ${followers[username].likes + followers[username].comments}`);
    }
        
    }
 
 /* 
 Input:
 (["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])  

Output: 
1 followers
George: 5   

=============================================
Input: 
(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])

Output: 
2 followers
Katy: 4
Amy: 4
===============================================

Input: 
(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])

output:
Amy doesn't exist.
3 followers
Amy: 1 
Tom: 5
Ellie: 5

*/

 
