I'm sure you've heard of `git`. I'm not as sure, but still pretty sure you've
heard of `fzf`. If you haven't heard of `fzf` then close this tab and go back to
whatever you were doing before. Maybe look up `fzf`. Maybe install it and play
around with it. But this information is not for you until your eyes have been opened.

If you have heard of `fzf`, have you heard of `fzf-git`? Maybe `fzf.vim` or
`fzf-lua`? These are all awesome integrations that make stuff easier. I honestly
don't know how I did anything before I had these tools.

### What Does This Fix?
Have you ever typed out something extremely long (😉) in the terminal like a
commit hash, filename, branch, hit enter, and then was off by one character?
Maybe you are a little smarter about it and use tab autocomplete or copy paste
from your browser? There is still a better and faster way to do this.

In a keyboard focused workflow, we want to avoid going to the browser to copy
and paste stuff like commit hashes or branches. If we have to go to the browser
to copy two different commit hashes or branches, then we have already wasted so
much time.

Instead of that, we can use `fzf-git`. 

I'm not going to go through the installation and keybinds, all that is available
in the [repository](https://github.com/junegunn/fzf-git.sh). I am going to go
through some practical examples of how I use this tool in my day-to-day git
operations to go *blazingly fast*

### Branches 
Say your coworker creates a new branch called `asdf`, and you want to check this
branch out. This will not be on your branch list since it's not checked out to
your system yet, and to explicitly define it, you will have to get the branch
from remote. This could be something like copy pasting it or checking your
remotes and copying it from there. You will often have to write out
`origin/branchname` or something similar.

With `fzf-git`, I can do this much easier.
```sh
git switch -t <C-g><C-b>
```

![[Pasted image 20250822161726.png]]

This pulls up the `Branches` picker. I can then press `<M-a>` to show all
branches, including branches from remote, fuzzy find to my branch, and then hit
enter to select it. Now it is pasted right in the command. In larger projects we
often have a naming convention for branches, so they can get rather long and
might have some boiler plate like a ticket name before the actual branch name,
i.e. `ASDF123-actual-branch-name`. Having to type that out is a pain, and going
to the browser to copy it can also be a pain. I can instead just fuzzy find
starting with `actual-branch-name` and `fzf` will find it.

### Commit Hashes
This is by far the most useful feature, diffing between commits, cherry picking
commits, looking at diffs for various commits, and a ton more are made super
easy with this. You can fuzzy find by commit message, and the hash is output
with this command, so instead of tracking down commit hashes and copy pasting
them to the diff command, you can just do

```sh
git diff <C-g><C-h> <C-g><C-h>
```

![[Pasted image 20250822162205.png]]

and search through your hashes by the actual hash itself. I also find this
handier than `git log` since I can see additional information like what was in
the commit in the preview window. I find myself just going `<C-g><C-h>` instead of typing `git log` or `git log --oneline`.

### Files
Working with files is already a pain, and if you are still using tab
autocomplete for deeply nested files, this is the time to stop. If you have the
`fzf` keybinds set up, you know that you can do `<C-t>` to pull up a file fuzzy
finder. This is nice, but we can take it one step further with `<C-g><C-f>`.
This adds nice things like previews, `git status` notifications on the left
side, and the ability to open the file in your browser or open it in your
editor, and see a preview (with syntax highlighting if you are using `bat`).

If you are prototyping, often you will make changes to a file that you don't
want to commit, and after you confirm your proof of concept, you will want to
`git restore` those files. Or if you accidentally `git add` something, you want
to `git restore --staged` it. You might have other changes that you want to
keep, so to specify that exact file can be cumbersome. Instead, you can do

```sh
git restore <C-g><C-f>
# or
git restore --staged <C-g><C-f>
```

![[Pasted image 20250822163237.png]]

and easily find the modified or untracked files, along with a preview to make
sure that you are restoring the right ones.

A bonus tip is you can select multiple files with `Tab` or `Shift-Tab` in the
`fzf` window, so you don't have to press `<C-g><C-f>` multiple times if you want
multiple files.

This also works for `git add` of course.

### Combining It All With Checkout
If you want to grab a file from a different branches or different commit and
pull that into your branch, this would be a massive pain to do manually.

With `fzf-git`, you can do this very easily

```sh
git checkout <C-g><C-b> <C-g><C-f>
git checkout <C-g><C-h> <C-g><C-f>
```

I think you get the idea. There are also bindings for tags, remotes, stashes, reflogs, worktrees, and `for-each-ref`

### Links
[fzf-git repository](https://github.com/junegunn/fzf-git.sh)
[fzf-git examples](https://junegunn.github.io/fzf/examples/git/)
