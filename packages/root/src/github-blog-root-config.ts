import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@github-blog/app-header",
  app: () => System.import<LifeCycles>("@github-blog/app-header"),
  activeWhen: ["/header"]
});

start({
  urlRerouteOnly: true,
});
