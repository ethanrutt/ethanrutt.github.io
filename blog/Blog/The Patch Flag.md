In `git`, there is a flag that I rarely see people use, but it's super helpful
and exists on a lot of `git` commands. 

This flag is the `--patch` or `-p` flag. What does it do? Well it patches of
course. Can't you read? Have you ever opened up a page of documentation in your life? You have? Oh ok, sorry for being so aggressive.

I find this to be the main way that I add changes to my working tree now. It allows you to go hunk by hunk and decide what to do with your changes. 

What's a hunk? The person reading this. 😉.

No, a hunk is a chunk of code that has changes in it.

![[Pasted image 20250822165251.png]]

See those little `+` signs in the gutter? Those would be hunks.

`git add -p` adds your changes as they come up in hunks.

![[Pasted image 20250822165341.png]]

What are all those letters? Well, you could press `?` and it would tell you but I guess I'll type it out here for you. A "thank you" would be nice.

```
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
s - split the current hunk into smaller hunks
e - manually edit the current hunk
p - print the current hunk, 'P' to use the pager
? - print help
```

Pretty nice huh. I'll let you figure the rest out yourself.

You can also use this with
- `git checkout -p` - This does the same thing. Instead of just checking out entire files from another branch or commit and clobbering your working tree changes, you can do this. If there's a specific change you want in the file, this is super useful.
- `git restore -p` - Have you ever wanted to partially restore some hunks in a file?
- `git stash -p` - You can pull only certain changes from your stash
- `git reset -p` - But I normally use `git restore` anyway
- `git commit -p` - This has a patch flag as well