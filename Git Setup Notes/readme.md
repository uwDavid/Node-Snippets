# Supplement - Using Git Ignore
Please refer to my [Git Demo Snippets](https://github.com/PurpleUltralisk/GitDemo) for some common Git workflows. 

It is common practice to not upload `node_modules` folder to GitHub and we can accomplish this by using a `.gitignore` file. It is also a good practice to keep your login credentials in a `.gitignore` file when uploading. 

To setup it is really easy: 
1. Create a .gitignore file in your directory
2. Just add paths you want to ignore, here's what I added:
```
.gitignore
/node_modules
```
That's it!

Now just go about committing and pushing as usual and happy coding =)
