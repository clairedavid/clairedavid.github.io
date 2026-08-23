// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bio",
          title: "Bio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bio/";
          },
        },{id: "nav-aims",
          title: "AIMS",
          description: "The African Institute for Mathematical Sciences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/aims/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "I play LEGO for a living. The tiniest pieces of LEGO.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "What gets me up on this fragile planet.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-website-migrated-to-the-latest-al-folio-template-more-updates-coming-soon",
          title: 'Website migrated to the latest al-folio template. More updates coming soon!',
          description: "",
          section: "News",},{id: "outreach-surf-39-s-neutrino-day-festival",
          title: 'SURF&amp;#39;s Neutrino Day Festival',
          description: "Sanford Underground Research Facility&#39;s Free Science Festival in Lead, South Dakota.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/festival_neutrino_day/";
            },},{id: "outreach-science-amp-technology-week",
          title: 'Science &amp;amp; Technology Week',
          description: "Promoting a scientific culture among youths in Congo DRC.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/festival_sst/";
            },},{id: "outreach-but-hbar",
          title: 'But hbar?',
          description: "Scientists and artists discuss on art and science.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/panel_but_hbar/";
            },},{id: "outreach-particle-fever",
          title: 'Particle Fever',
          description: "Panel discussion at the Vancouver International Film Festival (VIFF)",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/panel_particle_fever/";
            },},{id: "outreach-a-journey-inside-matter",
          title: 'A journey inside matter',
          description: "Experimental particle physics with the ATLAS &amp; DUNE experiments.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/talk_atlas_dune/";
            },},{id: "outreach-atlas-masterclasses",
          title: 'ATLAS Masterclasses',
          description: "Data analysis with ATLAS at the LHC.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/talk_atlas_masterclass/";
            },},{id: "outreach-the-dune-experiment",
          title: 'The DUNE Experiment',
          description: "Embark on the neutrino telescope to pierce the secrets of matter!",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/talk_dune_telescope/";
            },},{id: "outreach-how-i-became-a-scientist",
          title: 'How I became a scientist',
          description: "The backstory not written in my CV.&amp;nbsp;",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/talk_how_scientist/";
            },},{id: "outreach-sorting-needles-amp-cooling-a-sandwich",
          title: 'Sorting needles &amp;amp; cooling a sandwich',
          description: "What I did during my postdoc.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/talk_needles_sandwich/";
            },},{id: "outreach-the-triumphant-discovery-of-the-higgs-boson",
          title: 'The triumphant discovery of the Higgs boson',
          description: "A half-a-century-long journey.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/talk_triumphant_higgs/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6C%61%69%72%65%64@%61%69%6D%73.%61%63.%7A%61", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/claire-david-particles", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
