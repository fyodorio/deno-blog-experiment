/** @jsx h */

import blog, { ga, redirects, h } from "blog";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript";

blog({
  title: "My Blog",
  description: "This is my new blog.",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => (
  //     <section>
  //       <p>Your custom section with access to Post props.</p>
  //       <p>{ post.markdown }</p>
  //       <p>{ post.readTime }</p>
  //     </section>
  // ),
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  // author: "An author",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
