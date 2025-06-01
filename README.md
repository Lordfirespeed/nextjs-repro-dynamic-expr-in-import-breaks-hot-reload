I ran into an issue while developing [pompy.uk](https://github.com/pompadourasaurus/pompy.uk)
and intended to report it to Next.js.
I made this repository to serve as a minimal reproducible example of the issue I was running into.
I initially failed to reproduce the issue. 
Played around some more, and discovered downgrading from tailwind v4 to tailwind v3 lead to my issue
being reproduced.
Try it out: on the `tailwind-3` branch, editing `src/content/blog-posts/foo.tsx` will not trigger a hot-reload
of the `/blog-posts/foo` page.
On the `main` branch, editing that same file *does* trigger a hot-reload of the `/blog-posts/foo` page.
