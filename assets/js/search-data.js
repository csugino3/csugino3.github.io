// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-prof-sugino-starts-as-an-assistant-professor-in-the-department-of-mechanical-engineering-at-stevens-institute-of-technology",
          title: 'Prof. Sugino starts as an Assistant Professor in the Department of Mechanical Engineering...',
          description: "",
          section: "News",},{id: "news-prof-sugino-receives-the-nsf-career-award-2024-2029-for-his-proposal-titled-career-non-local-metamaterials-and-metasurfaces-for-next-generation-non-reciprocal-acoustic-devices-total-award-650-081",
          title: 'Prof. Sugino receives the NSF CAREER Award (2024-2029) for his proposal titled “CAREER:...',
          description: "",
          section: "News",},{id: "news-prof-sugino-presents-our-work-generalized-non-reciprocal-dispersion-in-non-local-piezoelectric-metamaterials-at-icast-2024",
          title: 'Prof. Sugino presents our work “Generalized Non-Reciprocal Dispersion in Non-Local Piezoelectric Metamaterials” at...',
          description: "",
          section: "News",},{id: "news-bilal-presents-our-work-inverse-design-of-non-local-metamaterials-with-arbitrary-non-reciprocal-dispersion-relations-at-asme-idetc-cie-2024",
          title: 'Bilal presents our work “Inverse design of non-local metamaterials with arbitrary non-reciprocal dispersion...',
          description: "",
          section: "News",},{id: "news-prof-sugino-and-co-authors-receive-the-adaptive-structures-amp-amp-material-systems-best-paper-award-in-structural-dynamics-amp-amp-control-for-the-journal-article-digital-programming-of-reciprocity-breaking-in-resonant-piezoelectric-metamaterials-published-in-physical-review-research-in-2023",
          title: 'Prof. Sugino and co-authors receive the Adaptive Structures &amp;amp;amp; Material Systems Best Paper...',
          description: "",
          section: "News",},{id: "news-our-paper-elastic-nonreciprocity-via-nonreciprocal-hybridization-and-destructive-interference-is-published-in-physical-review-applied",
          title: 'Our paper “Elastic nonreciprocity via nonreciprocal hybridization and destructive interference” is published in...',
          description: "",
          section: "News",},{id: "projects-nonlocal-metamaterials-amp-metasurfaces",
          title: 'Nonlocal Metamaterials &amp;amp; Metasurfaces',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%73%75%67%69%6E%6F@%73%74%65%76%65%6E%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=d8x7cZ0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
