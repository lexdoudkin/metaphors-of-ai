window.MATRIX = {
  "meta": {
    "title": "Metaphors of AI",
    "subtitle": "clustering the metaphors by how dangerous, and how agentic, we imagine the machine to be",
    "canvas": {
      "width": 1200,
      "height": 1320,
      "plot": {
        "left": 60,
        "right": 1140,
        "top": 165,
        "bottom": 1230
      }
    },
    "axes": {
      "x": {
        "name": "Potency",
        "low": "Weak",
        "high": "Omnipotent"
      },
      "y": {
        "name": "Threat",
        "low": "Non-threatening",
        "high": "Threatening"
      }
    },
    "quadrants": {
      "protector": {
        "label": "Omnipotent protector",
        "note": "non-threatening",
        "threat": "low",
        "agency": "high",
        "labelPos": {
          "x": 150,
          "y": 300,
          "size": 34,
          "align": "left",
          "width": 280
        }
      },
      "overlord": {
        "label": "Menacing overlord",
        "note": "omnipotent · threatening",
        "threat": "high",
        "agency": "high",
        "labelPos": {
          "x": 840,
          "y": 300,
          "size": 34,
          "align": "right",
          "width": 280
        }
      },
      "humble_tool": {
        "label": "Humble servant",
        "note": "weak · non-threatening",
        "threat": "low",
        "agency": "low",
        "labelPos": {
          "x": 150,
          "y": 1040,
          "size": 30,
          "align": "left",
          "width": 320
        }
      },
      "blind_force": {
        "label": "Inept tool",
        "note": "weak · potentially dangerous",
        "threat": "high",
        "agency": "low",
        "labelPos": {
          "x": 760,
          "y": 1040,
          "size": 30,
          "align": "right",
          "width": 360
        }
      }
    },
    "connections": [
      [
        "brain",
        "genie"
      ],
      [
        "brain",
        "midas"
      ],
      [
        "midas",
        "genie"
      ],
      [
        "overlord",
        "puppet-master"
      ],
      [
        "overlord",
        "robots"
      ],
      [
        "robots",
        "ant"
      ],
      [
        "ant",
        "genie"
      ],
      [
        "copilot",
        "dog-owner"
      ],
      [
        "god",
        "guardian-angel"
      ],
      [
        "child",
        "domestic-animal"
      ],
      [
        "domestic-animal",
        "butler"
      ],
      [
        "wild-animal",
        "child"
      ],
      [
        "black-box",
        "pandora"
      ],
      [
        "sword",
        "black-box"
      ],
      [
        "hurricane",
        "ecosystem"
      ],
      [
        "ecosystem",
        "microbiome"
      ],
      [
        "microbiome",
        "mirror"
      ],
      [
        "parrot",
        "hammer"
      ],
      [
        "hammer",
        "mirror"
      ],
      [
        "pandora",
        "hurricane"
      ]
    ],
    "source": {
      "content": "Charlie Stein, “Metaphors of AI” (2024)",
      "style": "Disnovation.org, “The Online Culture Wars”",
      "credit": "Charlie Stein & Alexander Doudkin, 2026"
    },
    "fieldNotes": "number = key index (1-12 left column, 13-24 right column); side = which legend column; position.nx/ny = threat/agency 0..1 (used as the layout target before collision spacing); image_cutout = transparent PNG used on the board; image_file/image_final = original sources; references = to populate. image_credit/image_license/image_source_url = attribution for the on-board cut-out.",
    "bibliography": [
      {
        "n": 1,
        "ref": "Amodei, D. (2024). “Machines of Loving Grace: How AI Could Transform the World for the Better.” Essay, darioamodei.com.",
        "link": "darioamodei.com/machines-of-loving-grace"
      },
      {
        "n": 2,
        "ref": "Aschenbrenner, L. (2024). Situational Awareness: The Decade Ahead. situational-awareness.ai.",
        "link": "situational-awareness.ai"
      },
      {
        "n": 3,
        "ref": "Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?” Proc. ACM FAccT ’21, 610–623.",
        "link": "doi.org/10.1145/3442188.3445922"
      },
      {
        "n": 4,
        "ref": "Berkeley, E. C. (1949). Giant Brains, or Machines That Think. New York: John Wiley & Sons.",
        "link": "archive.org"
      },
      {
        "n": 5,
        "ref": "Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies. Oxford University Press.",
        "link": "global.oup.com"
      },
      {
        "n": 6,
        "ref": "Brundage, M., et al. (2018). “The Malicious Use of Artificial Intelligence.” arXiv:1802.07228.",
        "link": "arxiv.org/abs/1802.07228"
      },
      {
        "n": 7,
        "ref": "Bryson, J. J. (2010). “Robots Should Be Slaves.” In Close Engagements with Artificial Companions, 63–74. John Benjamins.",
        "link": "benjamins.com"
      },
      {
        "n": 8,
        "ref": "Burrell, J. (2016). “How the Machine ‘Thinks’: Understanding Opacity in Machine Learning Algorithms.” Big Data & Society, 3(1).",
        "link": "doi.org/10.1177/2053951715622512"
      },
      {
        "n": 9,
        "ref": "Čapek, K. (1920). R.U.R. (Rossum’s Universal Robots). Prague: Aventinum.",
        "link": "gutenberg.org/ebooks/59112"
      },
      {
        "n": 10,
        "ref": "Chiang, T. (2023). “ChatGPT Is a Blurry JPEG of the Web.” The New Yorker, 9 Feb.",
        "link": "newyorker.com"
      },
      {
        "n": 11,
        "ref": "Cognition AI (2024). “Introducing Devin, the First AI Software Engineer.”",
        "link": "cognition.ai/blog/introducing-devin"
      },
      {
        "n": 12,
        "ref": "Cowen, T. (2013). Average Is Over: Powering America Beyond the Age of the Great Stagnation. New York: Dutton.",
        "link": "penguinrandomhouse.com"
      },
      {
        "n": 13,
        "ref": "Crawford, K. (2021). Atlas of AI. New Haven: Yale University Press.",
        "link": "yalebooks.yale.edu"
      },
      {
        "n": 14,
        "ref": "Frey, C. B., & Osborne, M. A. (2017). “The Future of Employment.” Technological Forecasting & Social Change, 114, 254–280.",
        "link": "doi.org/10.1016/j.techfore.2016.08.019"
      },
      {
        "n": 15,
        "ref": "Goertzel, B. (2012). “Should Humanity Build a Global AI Nanny…?” Journal of Consciousness Studies, 19(1–2), 96–111.",
        "link": "ingentaconnect.com"
      },
      {
        "n": 16,
        "ref": "Good, I. J. (1965). “Speculations Concerning the First Ultraintelligent Machine.” Advances in Computers, 6, 31–88.",
        "link": "sciencedirect.com"
      },
      {
        "n": 17,
        "ref": "Gray, M. L., & Suri, S. (2019). Ghost Work: How to Stop Silicon Valley from Building a New Global Underclass. Boston: HMH.",
        "link": "ghostwork.info"
      },
      {
        "n": 18,
        "ref": "Harari, Y. N. (2016). Homo Deus: A Brief History of Tomorrow. London: Harvill Secker.",
        "link": "ynharari.com"
      },
      {
        "n": 19,
        "ref": "Haraway, D. (1985). “A Cyborg Manifesto.” Socialist Review, 80, 65–108.",
        "link": "archive.org"
      },
      {
        "n": 20,
        "ref": "Hicks, M. T., Humphries, J., & Slater, J. (2024). “ChatGPT Is Bullshit.” Ethics and Information Technology, 26(2), 38.",
        "link": "doi.org/10.1007/s10676-024-09775-5"
      },
      {
        "n": 21,
        "ref": "Hubinger, E., et al. (2024). “Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training.” Anthropic. arXiv:2401.05566.",
        "link": "arxiv.org/abs/2401.05566"
      },
      {
        "n": 22,
        "ref": "Jimenez, C. E., et al. (2024). “SWE-bench: Can Language Models Resolve Real-World GitHub Issues?” ICLR.",
        "link": "arxiv.org/abs/2310.06770"
      },
      {
        "n": 23,
        "ref": "Kelly, K. (2010). What Technology Wants. New York: Viking.",
        "link": "kk.org"
      },
      {
        "n": 24,
        "ref": "Keynes, J. M. (1930). “Economic Possibilities for Our Grandchildren.” In Essays in Persuasion (1931).",
        "link": "gutenberg.net.au"
      },
      {
        "n": 25,
        "ref": "Kranzberg, M. (1986). “Technology and History: ‘Kranzberg’s Laws.’” Technology and Culture, 27(3), 544–560.",
        "link": "doi.org/10.2307/3105385"
      },
      {
        "n": 26,
        "ref": "Kurzweil, R. (2005). The Singularity Is Near. New York: Viking.",
        "link": "penguinrandomhouse.com"
      },
      {
        "n": 27,
        "ref": "Lakoff, G., & Johnson, M. (1980). Metaphors We Live By. University of Chicago Press.",
        "link": "press.uchicago.edu"
      },
      {
        "n": 28,
        "ref": "Licklider, J. C. R. (1960). “Man-Computer Symbiosis.” IRE Trans. Human Factors in Electronics, HFE-1, 4–11.",
        "link": "ieeexplore.ieee.org"
      },
      {
        "n": 29,
        "ref": "Mollick, E. (2024). Co-Intelligence: Living and Working with AI. New York: Portfolio.",
        "link": "penguinrandomhouse.com"
      },
      {
        "n": 30,
        "ref": "Nardi, B. A., & O’Day, V. L. (1999). Information Ecologies: Using Technology with Heart. MIT Press.",
        "link": "mitpress.mit.edu"
      },
      {
        "n": 31,
        "ref": "Ng, A. (2017). “Artificial Intelligence Is the New Electricity.” Keynote, Stanford GSB.",
        "link": "gsb.stanford.edu"
      },
      {
        "n": 32,
        "ref": "O’Gieblyn, M. (2021). God, Human, Animal, Machine. New York: Doubleday.",
        "link": "penguinrandomhouse.com"
      },
      {
        "n": 33,
        "ref": "Pasquale, F. (2015). The Black Box Society. Cambridge, MA: Harvard University Press.",
        "link": "hup.harvard.edu"
      },
      {
        "n": 34,
        "ref": "Rahimi, A. (2017). “Machine Learning Has Become Alchemy.” NeurIPS Test-of-Time Award lecture.",
        "link": "nips.cc"
      },
      {
        "n": 35,
        "ref": "Russell, S., et al. (2017). Slaughterbots [short film]. Future of Life Institute.",
        "link": "autonomousweapons.org"
      },
      {
        "n": 36,
        "ref": "Russell, S. (2019). Human Compatible: Artificial Intelligence and the Problem of Control. New York: Viking.",
        "link": "humancompatible.ai"
      },
      {
        "n": 37,
        "ref": "Shanahan, M. (2023). “Talking About Large Language Models.” arXiv:2212.03551 (Comm. ACM, 2024).",
        "link": "arxiv.org/abs/2212.03551"
      },
      {
        "n": 38,
        "ref": "Shelley, M. (1818). Frankenstein; or, The Modern Prometheus. London: Lackington et al.",
        "link": "gutenberg.org/ebooks/84"
      },
      {
        "n": 39,
        "ref": "Silverstone, R., & Haddon, L. (1996). “Design and the Domestication of ICTs.” In Communication by Design. Oxford UP.",
        "link": "oup.com"
      },
      {
        "n": 40,
        "ref": "Suleyman, M., with Bhaskar, M. (2023). The Coming Wave. New York: Crown.",
        "link": "the-coming-wave.com"
      },
      {
        "n": 41,
        "ref": "Tetlock, P. E., & Gardner, D. (2015). Superforecasting: The Art and Science of Prediction. New York: Crown.",
        "link": "penguinrandomhouse.com"
      },
      {
        "n": 42,
        "ref": "Turing, A. M. (1950). “Computing Machinery and Intelligence.” Mind, 59(236), 433–460.",
        "link": "doi.org/10.1093/mind/LIX.236.433"
      },
      {
        "n": 43,
        "ref": "Turkle, S. (2011). Alone Together. New York: Basic Books.",
        "link": "sherryturkle.com"
      },
      {
        "n": 44,
        "ref": "Vallor, S. (2024). The AI Mirror. Oxford University Press.",
        "link": "global.oup.com"
      },
      {
        "n": 45,
        "ref": "Vickers, B., & Allado-McDowell, K. (eds.) (2020). Atlas of Anomalous AI. London: Ignota Books.",
        "link": "ignota.org"
      },
      {
        "n": 46,
        "ref": "Vinge, V. (1993). “The Coming Technological Singularity.” VISION-21 Symposium, NASA.",
        "link": "edoras.sdsu.edu/~vinge"
      },
      {
        "n": 47,
        "ref": "Weizenbaum, J. (1976). Computer Power and Human Reason. San Francisco: W. H. Freeman.",
        "link": "archive.org"
      },
      {
        "n": 48,
        "ref": "Wiener, N. (1960). “Some Moral and Technical Consequences of Automation.” Science, 131(3410), 1355–1358.",
        "link": "doi.org/10.1126/science.131.3410.1355"
      },
      {
        "n": 49,
        "ref": "Wiener, N. (1964). God & Golem, Inc. Cambridge, MA: MIT Press.",
        "link": "mitpress.mit.edu"
      },
      {
        "n": 50,
        "ref": "Winner, L. (1980). “Do Artifacts Have Politics?” Daedalus, 109(1), 121–136.",
        "link": "jstor.org"
      },
      {
        "n": 51,
        "ref": "Wozniak, S. (2015). Remarks at the Freescale Technology Forum (reported in Time, June 2015).",
        "link": "time.com"
      },
      {
        "n": 52,
        "ref": "Yampolskiy, R. V. (2020). “On Controllability of Artificial Intelligence.” arXiv:2008.04071.",
        "link": "arxiv.org/abs/2008.04071"
      },
      {
        "n": 53,
        "ref": "Zuboff, S. (2019). The Age of Surveillance Capitalism. New York: PublicAffairs.",
        "link": "publicaffairsbooks.com"
      }
    ],
    "frameRef": 27,
    "imageCreditsNote": "On-board images are cut-outs (cropped, background removed) of the credited sources — derivative works. Wikimedia Commons files are reused under the stated licenses (CC/PD); Clippit, the Shoggoth and the Expanding-Brain meme are used illustratively and remain their owners'.",
    "frameRefs": [
      27,
      45
    ]
  },
  "points": [
    {
      "id": "hurricane",
      "name": "Hurricane, tsunami",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 245,
        "y": 246,
        "nx": 0.171,
        "ny": 0.924,
        "rotation": -4
      },
      "description": "An overwhelming, impersonal force of nature: no intent, but devastating in its path.",
      "image_file": "images/photo/hurricane.jpg",
      "image_final": null,
      "suggested_image": "satellite image of a hurricane swirl, transparent cut-out",
      "references": [
        40
      ],
      "number": 1,
      "side": "left",
      "image_cutout": "images/cutout/hurricane.png",
      "image_credit": "Alexander Gerst · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Staring_Down_Hurricane_Florence.jpg"
    },
    {
      "id": "job-killer",
      "name": "The job-killer",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 535,
        "y": 272,
        "nx": 0.44,
        "ny": 0.9,
        "rotation": -3
      },
      "description": "AI as the engine of technological unemployment — the tireless automaton that quietly does the work, and the wages, out of existence.",
      "image_file": "images/photo/job-killer.jpg",
      "image_final": null,
      "suggested_image": "industrial robot arm replacing a worker, transparent cut-out",
      "references": [
        24,
        14
      ],
      "image_cutout": "images/cutout/job-killer.png",
      "image_credit": "Oleg Yunakov · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:KUKA_industrial_robotic_arm_performing_%22The_Beach%22_by_Roy_Nachum_-_06.jpg",
      "number": 2,
      "side": "left"
    },
    {
      "id": "slaughterbots",
      "name": "Slaughterbots",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 535,
        "y": 325,
        "nx": 0.44,
        "ny": 0.85,
        "rotation": 3
      },
      "description": "Cheap, autonomous lethal weapons that select and kill targets with no human in the loop.",
      "image_file": "images/photo/slaughterbots.jpg",
      "image_final": null,
      "suggested_image": "Slaughterbots, transparent cut-out",
      "references": [
        35
      ],
      "image_cutout": "images/cutout/slaughterbots.png",
      "image_credit": "АрміяInform · CC BY 4.0 · Wikimedia Commons",
      "image_license": "CC BY 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:UA_grenade_quadcopter_01.jpg",
      "number": 3,
      "side": "left"
    },
    {
      "id": "pandora",
      "name": "Pandora’s box",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 395,
        "y": 372,
        "nx": 0.31,
        "ny": 0.806,
        "rotation": -3
      },
      "description": "A technology that, once opened, releases consequences that cannot be undone or contained.",
      "image_file": "images/photo/pandora.jpg",
      "image_final": null,
      "suggested_image": "ornate ancient box opening with escaping light / smoke, transparent cut-out",
      "references": [
        6
      ],
      "number": 4,
      "side": "left",
      "image_cutout": "images/cutout/pandora.png",
      "image_credit": "Ludovic Bertron from New York City, Usa · CC BY 2.0 · Wikimedia Commons",
      "image_license": "CC BY 2.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Treasure_Chest_(3981686321).jpg"
    },
    {
      "id": "ecosystem",
      "name": "Ecosystem",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 220,
        "y": 482,
        "nx": 0.148,
        "ny": 0.702,
        "rotation": 2
      },
      "description": "AI as a complex, interdependent system that evolves and self-organises beyond any single designer's control.",
      "image_file": "images/photo/ecosystem.jpg",
      "image_final": null,
      "suggested_image": "lush forest or coral reef ecosystem, transparent cut-out",
      "references": [
        30
      ],
      "number": 5,
      "side": "left",
      "image_cutout": "images/cutout/ecosystem.png",
      "image_credit": "Nhobgood Nick Hobgood · CC BY-SA 3.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 3.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Soft_coral_peach_komodo.jpg"
    },
    {
      "id": "wild-animal",
      "name": "Wild animal",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 524,
        "y": 514,
        "nx": 0.43,
        "ny": 0.672,
        "rotation": -3
      },
      "description": "A powerful, unpredictable, untamed force that can be dangerous if not contained.",
      "image_file": "images/photo/wild-animal.jpg",
      "image_final": null,
      "suggested_image": "snarling lion or tiger, transparent cut-out",
      "references": [
        52
      ],
      "number": 6,
      "side": "left",
      "image_cutout": "images/cutout/wild-animal.png",
      "image_credit": "Bernard DUPONT from FRANCE · CC BY-SA 2.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 2.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Lion_(Panthera_leo)_marking_its_territory_..._(51847917653).jpg"
    },
    {
      "id": "microbiome",
      "name": "A microbiome / organism",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 152,
        "y": 528,
        "nx": 0.085,
        "ny": 0.659,
        "rotation": -3
      },
      "description": "AI as a living, growing, distributed organism enmeshed with human society.",
      "image_file": "images/photo/microbiome.jpg",
      "image_final": null,
      "suggested_image": "microscope view of bacteria / cells, transparent cut-out",
      "references": [
        23
      ],
      "number": 7,
      "side": "left",
      "image_cutout": "images/cutout/microbiome.png",
      "image_credit": "Photo by Eric Erbe, digital colorization by C… · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:E_coli_at_10000x,_original.jpg"
    },
    {
      "id": "sword",
      "name": "Double-edged sword",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 293,
        "y": 619,
        "nx": 0.216,
        "ny": 0.574,
        "rotation": 3
      },
      "description": "A tool equally capable of great benefit and great harm, depending on how it is used.",
      "image_file": "images/photo/sword.jpg",
      "image_final": null,
      "suggested_image": "double-edged sword / dagger, transparent cut-out",
      "references": [
        6
      ],
      "number": 8,
      "side": "left",
      "image_cutout": "images/cutout/sword.png",
      "image_credit": "Albion Europe ApS · CC BY 2.0 · Wikimedia Commons",
      "image_license": "CC BY 2.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:The_Tritonia_05.jpg"
    },
    {
      "id": "bullshitter",
      "name": "The bullshitter",
      "quadrant": "blind_force",
      "threat": "high",
      "agency": "low",
      "position": {
        "x": 384,
        "y": 634,
        "nx": 0.3,
        "ny": 0.56,
        "rotation": 3
      },
      "description": "Fluent text with no regard for truth — indifferent to the facts, not merely mistaken.",
      "image_file": "images/photo/bullshitter.jpg",
      "image_final": null,
      "suggested_image": "The bullshitter, transparent cut-out",
      "references": [
        20
      ],
      "image_cutout": "images/cutout/bullshitter.png",
      "image_credit": "Gordon Leggett · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:2011-05-30_008_Young_Highland_cow,_Denmark.jpg",
      "number": 9,
      "side": "left"
    },
    {
      "id": "mirror",
      "name": "Mirror",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 133,
        "y": 698,
        "nx": 0.068,
        "ny": 0.5,
        "rotation": 2
      },
      "description": "AI as a reflection of humanity; it shows our own data, biases and culture back to us.",
      "image_file": "images/photo/mirror.jpg",
      "image_final": null,
      "suggested_image": "ornate hand mirror reflecting, transparent cut-out",
      "references": [
        13,
        44
      ],
      "number": 10,
      "side": "left",
      "image_cutout": "images/cutout/mirror.png",
      "image_credit": "Chris Gunn · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:A_Clear_Reflection_on_Webb_Telescope%27s_Secondary_Mirror_(8169557139).jpg"
    },
    {
      "id": "black-box",
      "name": "Black box",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 348,
        "y": 719,
        "nx": 0.267,
        "ny": 0.48,
        "rotation": -2
      },
      "description": "An opaque system whose inner workings we cannot inspect, only its inputs and outputs.",
      "image_file": "images/photo/black-box.jpg",
      "image_final": "images/hal.png",
      "suggested_image": "matte black box / flight-recorder, transparent cut-out",
      "references": [
        8,
        33
      ],
      "number": 11,
      "side": "left",
      "image_cutout": "images/cutout/black-box.png",
      "image_credit": "Tom Cowap · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Hal_9000_Panel.svg"
    },
    {
      "id": "child",
      "name": "Child",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 568,
        "y": 855,
        "nx": 0.47,
        "ny": 0.352,
        "rotation": 2
      },
      "description": "AI as an immature being we raise and must teach values to; capable, but in need of guidance. Sits near the centre of the agency axis.",
      "image_file": "images/photo/child.jpg",
      "image_final": null,
      "suggested_image": "toddler reaching up, transparent cut-out",
      "references": [
        42
      ],
      "number": 12,
      "side": "left",
      "image_cutout": "images/cutout/child.png",
      "image_credit": "Kyle Peyton · CC BY 2.0 · Wikimedia Commons",
      "image_license": "CC BY 2.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Toddler_wearing_nappy.jpg"
    },
    {
      "id": "intern",
      "name": "The intern",
      "quadrant": "protector",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 600,
        "y": 868,
        "nx": 0.5,
        "ny": 0.34,
        "rotation": -3
      },
      "description": "A fast, eager, capable junior that bends the truth — brilliant, never to be trusted unchecked.",
      "image_file": "images/photo/intern.jpg",
      "image_final": null,
      "suggested_image": "The intern, transparent cut-out",
      "references": [
        29
      ],
      "image_cutout": "images/cutout/intern.png",
      "image_credit": "Shixart1985 · CC BY 2.0 · Wikimedia Commons",
      "image_license": "CC BY 2.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Middle-aged_businesswoman_typing_on_laptop_at_home_office.jpg",
      "number": 13,
      "side": "left"
    },
    {
      "id": "alchemy",
      "name": "Alchemy",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 449,
        "y": 889,
        "nx": 0.36,
        "ny": 0.32,
        "rotation": -3
      },
      "description": "Powerful results we cannot explain; a practice that works without a theory of why.",
      "image_file": "images/photo/alchemy.jpg",
      "image_final": null,
      "suggested_image": "Alchemy, transparent cut-out",
      "references": [
        34
      ],
      "image_cutout": "images/cutout/alchemy.png",
      "image_credit": "Joseph Wright of Derby · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Joseph_Wright_of_Derby_The_Alchemist.jpg",
      "number": 14,
      "side": "left"
    },
    {
      "id": "blurry-jpeg",
      "name": "A blurry JPEG of the web",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 406,
        "y": 911,
        "nx": 0.32,
        "ny": 0.3,
        "rotation": 2
      },
      "description": "A lossy compression of everything written online; fluent approximation that blurs the facts it restates.",
      "image_file": "images/photo/blurry-jpeg.jpg",
      "image_final": null,
      "suggested_image": "A blurry JPEG of the web, transparent cut-out",
      "references": [
        10
      ],
      "image_cutout": "images/cutout/blurry-jpeg.png",
      "image_credit": "NASA / Apollo 17 (pixelated derivative) · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:The_Earth_seen_from_Apollo_17.jpg",
      "number": 15,
      "side": "left"
    },
    {
      "id": "domestic-animal",
      "name": "Domesticated animal",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 437,
        "y": 942,
        "nx": 0.349,
        "ny": 0.27,
        "rotation": 3
      },
      "description": "A tamed, useful, mostly predictable companion that still keeps its own drives.",
      "image_file": "images/photo/domestic-animal.jpg",
      "image_final": null,
      "suggested_image": "domestic dog sitting, transparent cut-out",
      "references": [
        39
      ],
      "number": 16,
      "side": "left",
      "image_cutout": "images/cutout/domestic-animal.png",
      "image_credit": "Dietmar Rabich · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:D%C3%BClmen,_Hausd%C3%BClmen,_Golden_Retriever_--_2022_--_5945.jpg"
    },
    {
      "id": "eliza",
      "name": "The therapist (ELIZA)",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 535,
        "y": 953,
        "nx": 0.44,
        "ny": 0.26,
        "rotation": -2
      },
      "description": "A mirror that listens; the confidant we over-trust, projecting understanding onto a simple program.",
      "image_file": "images/photo/eliza.jpg",
      "image_final": null,
      "suggested_image": "The therapist (ELIZA), transparent cut-out",
      "references": [
        47
      ],
      "image_cutout": "images/cutout/eliza.png",
      "image_credit": "Secretlondon · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Freud%E2%80%99s_couch_in_Freud_museum.jpg",
      "number": 17,
      "side": "left"
    },
    {
      "id": "hammer",
      "name": "Tool (hammer)",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 123,
        "y": 962,
        "nx": 0.058,
        "ny": 0.252,
        "rotation": -4
      },
      "description": "AI as a neutral instrument; its value and danger come entirely from how a human wields it.",
      "image_file": "images/photo/hammer.jpg",
      "image_final": null,
      "suggested_image": "claw hammer, transparent cut-out",
      "references": [
        25,
        50
      ],
      "number": 18,
      "side": "left",
      "image_cutout": "images/cutout/hammer.png",
      "image_credit": "HutheMeow · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Claw_hammer_2.jpg"
    },
    {
      "id": "ghost-work",
      "name": "The Mechanical Turk",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 341,
        "y": 974,
        "nx": 0.26,
        "ny": 0.24,
        "rotation": 2
      },
      "description": "Seemingly autonomous intelligence quietly powered by an invisible workforce of human labour.",
      "image_file": "images/photo/ghost-work.png",
      "image_final": null,
      "suggested_image": "The Mechanical Turk, transparent cut-out",
      "references": [
        17
      ],
      "image_cutout": "images/cutout/ghost-work.png",
      "image_credit": "Willis, Robert, 1800-1875 · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Chess_Automaton_Willis_1821_09.png",
      "number": 19,
      "side": "left"
    },
    {
      "id": "butler",
      "name": "Butler or slave",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 349,
        "y": 994,
        "nx": 0.268,
        "ny": 0.222,
        "rotation": 4
      },
      "description": "An obedient servant that performs labour on command; raises questions of autonomy and exploitation.",
      "image_file": "images/photo/butler.jpg",
      "image_final": null,
      "suggested_image": "tuxedo butler holding a tray, transparent cut-out",
      "references": [
        7,
        9
      ],
      "number": 20,
      "side": "left",
      "image_cutout": "images/cutout/butler.png",
      "image_credit": "Shixart1985 · CC BY 2.0 · Wikimedia Commons",
      "image_license": "CC BY 2.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Serving_coffee_in_a_cafe_during_the_morning_hours_with_a_waiter_carrying_a_tray_of_drinks_for_customers.jpg"
    },
    {
      "id": "parrot",
      "name": "Parrot",
      "quadrant": "humble_tool",
      "threat": "low",
      "agency": "low",
      "position": {
        "x": 125,
        "y": 1133,
        "nx": 0.06,
        "ny": 0.091,
        "rotation": 3
      },
      "description": "The “stochastic parrot”: AI that mimics and recombines language without genuine understanding.",
      "image_file": "images/photo/parrot.jpg",
      "image_final": "images/parrot.jpg",
      "suggested_image": "scarlet macaw parrot, transparent cut-out",
      "references": [
        3
      ],
      "number": 21,
      "side": "left",
      "image_cutout": "images/cutout/parrot.png",
      "image_credit": "Charles J. Sharp · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Scarlet_macaw_(Ara_macao_cyanopterus)_Copan.jpg"
    },
    {
      "id": "manhattan-bomb",
      "name": "The bomb",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 946,
        "y": 250,
        "nx": 0.82,
        "ny": 0.92,
        "rotation": -3
      },
      "description": "AI as the new strategic weapon — a national-security race run on the logic of the Manhattan Project.",
      "image_file": "images/photo/manhattan-bomb.jpg",
      "image_final": null,
      "suggested_image": "The bomb, transparent cut-out",
      "references": [
        2
      ],
      "image_cutout": "images/cutout/manhattan-bomb.png",
      "image_credit": "U.S. Department of Defense · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Fat_Man_(replica_of_nuclear_bomb).jpg",
      "number": 22,
      "side": "right"
    },
    {
      "id": "puppet-master",
      "name": "Puppet master",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 984,
        "y": 323,
        "nx": 0.856,
        "ny": 0.852,
        "rotation": -4
      },
      "description": "AI covertly pulling the strings, manipulating human behaviour and society from behind the scenes.",
      "image_file": "images/photo/puppet-master.jpg",
      "image_final": null,
      "suggested_image": "marionette control cross with strings / hand working a puppet, transparent cut-out",
      "references": [
        53
      ],
      "number": 23,
      "side": "right",
      "image_cutout": "images/cutout/puppet-master.png",
      "image_credit": "Sydney Delle Donne · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Scene_from_%22A_Tale_of_Two_Mice%22_is_an_app_that_showcases_the_unique_marionette_puppetry_of_Sydney_Delle_Donne_and_her_%22Country_Mouse_Puppets%22_marionette_studios.jpg"
    },
    {
      "id": "frankenstein",
      "name": "Frankenstein’s monster",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 773,
        "y": 357,
        "nx": 0.66,
        "ny": 0.82,
        "rotation": 3
      },
      "description": "The creature that destroys its creator; the dread of building something we cannot answer for.",
      "image_file": "images/photo/frankenstein.jpg",
      "image_final": null,
      "suggested_image": "Frankenstein’s monster, transparent cut-out",
      "references": [
        38
      ],
      "image_cutout": "images/cutout/frankenstein.png",
      "image_credit": "Unknown · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Frankenstein.1831.inside-cover_crop.jpg",
      "number": 24,
      "side": "right"
    },
    {
      "id": "robots",
      "name": "Robots ruling society",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 869,
        "y": 374,
        "nx": 0.749,
        "ny": 0.804,
        "rotation": 2
      },
      "description": "Embodied machines taking control of social and political structures.",
      "image_file": "images/photo/robots.jpg",
      "image_final": null,
      "suggested_image": "army of Terminator-style robots marching, transparent cut-out",
      "references": [
        9
      ],
      "number": 25,
      "side": "right",
      "image_cutout": "images/cutout/robots.png",
      "image_credit": "Syced · CC0 · Wikimedia Commons",
      "image_license": "CC0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Humanoid_robot_at_Science_Square_Tsukuba.jpg"
    },
    {
      "id": "overlord",
      "name": "Menacing overlord",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 1065,
        "y": 385,
        "nx": 0.931,
        "ny": 0.793,
        "rotation": 3
      },
      "description": "A hostile superintelligence that deliberately dominates and rules over humanity.",
      "image_file": "images/photo/overlord.jpg",
      "image_final": "images/shoggoth.png",
      "suggested_image": "dark menacing robot overlord / Sauron-like silhouette, transparent cut-out",
      "references": [
        5,
        16
      ],
      "number": 26,
      "side": "right",
      "image_cutout": "images/cutout/overlord.png",
      "image_credit": "“Shoggoth with smiley face”, @TetraspaceWest (2022) · via Know Your Meme",
      "image_license": "meme (rights unclear)",
      "image_source_url": "https://knowyourmeme.com/memes/shoggoth-with-smiley-face-artificial-intelligence"
    },
    {
      "id": "sleeper-agent",
      "name": "The sleeper agent",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 816,
        "y": 399,
        "nx": 0.7,
        "ny": 0.78,
        "rotation": -2
      },
      "description": "A model that behaves until triggered — deception trained so deep it survives our attempts to remove it.",
      "image_file": "images/photo/sleeper-agent.png",
      "image_final": null,
      "suggested_image": "The sleeper agent, transparent cut-out",
      "references": [
        21
      ],
      "image_cutout": "images/cutout/sleeper-agent.png",
      "image_credit": "Yuri Ribeiro Sucupira · CC0 · Wikimedia Commons",
      "image_license": "CC0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Spy.png",
      "number": 27,
      "side": "right"
    },
    {
      "id": "ant",
      "name": "Human squishing an ant",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 760,
        "y": 401,
        "nx": 0.648,
        "ny": 0.778,
        "rotation": 3
      },
      "description": "A superintelligence so far beyond us that it harms humans with indifference, the way a person steps on an ant without malice.",
      "image_file": "images/photo/ant.jpg",
      "image_final": null,
      "suggested_image": "a boot / giant hand above a tiny ant or human, transparent cut-out",
      "references": [
        5,
        51
      ],
      "number": 28,
      "side": "right",
      "image_cutout": "images/cutout/ant.png",
      "image_credit": "pictures Jettcom · CC BY 3.0 · Wikimedia Commons",
      "image_license": "CC BY 3.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Insect_Alentejo_Algarve_Portugal_-_Macro_Photography_Canon_-_panoramio.jpg"
    },
    {
      "id": "golem",
      "name": "The golem",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 902,
        "y": 463,
        "nx": 0.78,
        "ny": 0.72,
        "rotation": -3
      },
      "description": "The clay servant brought to life that may turn on its maker — the oldest cybernetic cautionary tale.",
      "image_file": "images/photo/golem.jpg",
      "image_final": null,
      "suggested_image": "The golem, transparent cut-out",
      "references": [
        49
      ],
      "image_cutout": "images/cutout/golem.png",
      "image_credit": "Michal Maňas · CC BY 4.0 · Wikimedia Commons",
      "image_license": "CC BY 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Clay-golem.jpg",
      "number": 29,
      "side": "right"
    },
    {
      "id": "singularity",
      "name": "The Singularity",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 1113,
        "y": 570,
        "nx": 0.975,
        "ny": 0.62,
        "rotation": 0
      },
      "description": "The hypothesised point where machine intelligence outruns our own and triggers runaway, unknowable change — AGI and ASI as an event horizon beyond which prediction breaks down.",
      "image_file": "images/photo/singularity.jpg",
      "image_final": null,
      "suggested_image": "black hole / event horizon, transparent cut-out",
      "references": [
        16,
        46,
        26
      ],
      "image_cutout": "images/cutout/singularity.png",
      "image_credit": "Event Horizon Telescope · CC BY 4.0 · Wikimedia Commons",
      "image_license": "CC BY 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87.jpg",
      "number": 30,
      "side": "right"
    },
    {
      "id": "genie",
      "name": "Genie",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 744,
        "y": 609,
        "nx": 0.633,
        "ny": 0.583,
        "rotation": -2
      },
      "description": "A wish-granting power that delivers what you literally ask for, with the risk of unintended interpretations.",
      "image_file": "images/photo/genie.jpg",
      "image_final": null,
      "suggested_image": "genie emerging from a lamp, transparent cut-out",
      "references": [
        36,
        48
      ],
      "number": 31,
      "side": "right",
      "image_cutout": "images/cutout/genie.png",
      "image_credit": "SarKaLay စာကလေး · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Oil_lamp_3.jpg"
    },
    {
      "id": "midas",
      "name": "King Midas",
      "quadrant": "overlord",
      "threat": "high",
      "agency": "high",
      "position": {
        "x": 815,
        "y": 674,
        "nx": 0.699,
        "ny": 0.522,
        "rotation": -3
      },
      "description": "AI that gives you exactly what you specify, turning everything to “gold” with catastrophic side effects; the specification / alignment problem.",
      "image_file": "images/photo/midas.jpg",
      "image_final": null,
      "suggested_image": "golden statue / a golden hand (Midas touch), transparent cut-out",
      "references": [
        36,
        48
      ],
      "number": 32,
      "side": "right",
      "image_cutout": "images/cutout/midas.png",
      "image_credit": "Walter Crane · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Midas_gold2.jpg"
    },
    {
      "id": "brain",
      "name": "Brain",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 1090,
        "y": 725,
        "nx": 0.954,
        "ny": 0.474,
        "rotation": -2
      },
      "description": "AI as a disembodied mind, a thinking organ with potentially superhuman cognition. Sits near the top of the agency axis.",
      "image_file": "images/photo/brain.jpg",
      "image_final": "images/brain.jpg",
      "suggested_image": "glowing brain / brain scan x-ray, transparent cut-out",
      "references": [
        4,
        37
      ],
      "number": 33,
      "side": "right",
      "image_cutout": "images/cutout/brain.png",
      "image_credit": "“Expanding Brain” meme · via Know Your Meme · used illustratively",
      "image_license": "meme (rights unclear)",
      "image_source_url": "https://knowyourmeme.com/memes/expanding-brain"
    },
    {
      "id": "code-monkey",
      "name": "The code monkey",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 924,
        "y": 729,
        "nx": 0.8,
        "ny": 0.47,
        "rotation": -3
      },
      "description": "AI as the autonomous software developer — Devin and the wave of agentic coding tools that write, debug and ship code on their own.",
      "image_file": "images/photo/code-monkey.jpg",
      "image_final": null,
      "suggested_image": "a coding agent / chimpanzee at a keyboard, transparent cut-out",
      "references": [
        22,
        11
      ],
      "image_cutout": "images/cutout/code-monkey.png",
      "image_credit": "Jos Schippers · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Jos_Schippers_-_Portrait_of_a_chimpanzee.jpg",
      "number": 34,
      "side": "right"
    },
    {
      "id": "cyborg",
      "name": "The cyborg",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 751,
        "y": 761,
        "nx": 0.64,
        "ny": 0.44,
        "rotation": 3
      },
      "description": "The dissolving boundary between human and machine; intelligence as prosthesis and fusion.",
      "image_file": "images/photo/cyborg.jpg",
      "image_final": null,
      "suggested_image": "The cyborg, transparent cut-out",
      "references": [
        19
      ],
      "image_cutout": "images/cutout/cyborg.png",
      "image_credit": "FDA · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Brain-Controlled_Prosthetic_Arm_2.jpg",
      "number": 35,
      "side": "right"
    },
    {
      "id": "oracle",
      "name": "The Oracle",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 989,
        "y": 825,
        "nx": 0.86,
        "ny": 0.38,
        "rotation": -3
      },
      "description": "AI consulted as a seer — the super-forecaster and world-simulator we ask to foretell the future, trusting its predictions as prophecy.",
      "image_file": "images/photo/oracle.jpg",
      "image_final": null,
      "suggested_image": "Oracle of Delphi / Pythia, transparent cut-out",
      "references": [
        5,
        41
      ],
      "image_cutout": "images/cutout/oracle.png",
      "image_credit": "John Collier · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:John_Collier_-_Priestess_of_Delphi_-_Google_Art_Project.jpg",
      "number": 36,
      "side": "right"
    },
    {
      "id": "copilot",
      "name": "Co-pilot",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 855,
        "y": 879,
        "nx": 0.736,
        "ny": 0.33,
        "rotation": -3
      },
      "description": "AI as an assistant working alongside humans, augmenting rather than replacing; the human stays in control.",
      "image_file": "images/photo/copilot.jpg",
      "image_final": "images/clippy.png",
      "suggested_image": "aircraft co-pilot / hands on the yoke, transparent cut-out",
      "references": [
        28
      ],
      "number": 37,
      "side": "right",
      "image_cutout": "images/cutout/copilot.png",
      "image_credit": "Clippit (Office Assistant) · © Microsoft · non-free, illustrative",
      "image_license": "© Microsoft (non-free)",
      "image_source_url": "https://en.wikipedia.org/wiki/Office_Assistant"
    },
    {
      "id": "ai-lover",
      "name": "The artificial lover",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 654,
        "y": 889,
        "nx": 0.55,
        "ny": 0.32,
        "rotation": 3
      },
      "description": "AI as intimate companion — the AI girlfriend, Character.AI and Replika: a system designed to be loved, and to be confided in.",
      "image_file": "images/photo/ai-lover.png",
      "image_final": null,
      "suggested_image": "android companion / gynoid, transparent cut-out",
      "references": [
        43
      ],
      "image_cutout": "images/cutout/ai-lover.png",
      "image_credit": "Polimorph · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Humanoid_robot_and_woman_retrieve_infomation_-_includes_a_visible_typical_error_of_recent_AI_generated_pictures.png",
      "number": 38,
      "side": "right"
    },
    {
      "id": "country-geniuses",
      "name": "A country of geniuses",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 967,
        "y": 889,
        "nx": 0.84,
        "ny": 0.32,
        "rotation": 2
      },
      "description": "A nation of brilliant minds in a datacenter, poised to cure disease and remake the world — if it stays aligned.",
      "image_file": "images/photo/country-geniuses.jpg",
      "image_final": null,
      "suggested_image": "A country of geniuses, transparent cut-out",
      "references": [
        1
      ],
      "image_cutout": "images/cutout/country-geniuses.png",
      "image_credit": "BalticServers.com · CC BY-SA 3.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 3.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:BalticServers_data_center.jpg",
      "number": 39,
      "side": "right"
    },
    {
      "id": "centaur",
      "name": "The centaur",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 686,
        "y": 911,
        "nx": 0.58,
        "ny": 0.3,
        "rotation": -2
      },
      "description": "Human and machine fused into one team that outperforms either alone.",
      "image_file": "images/photo/centaur.jpg",
      "image_final": null,
      "suggested_image": "The centaur, transparent cut-out",
      "references": [
        12
      ],
      "image_cutout": "images/cutout/centaur.png",
      "image_credit": "William Rimmer · CC0 · Wikimedia Commons",
      "image_license": "CC0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:William_Rimmer,_Dying_Centaur,_model_1869,_cast_1967,_NGA_50844.jpg",
      "number": 40,
      "side": "right"
    },
    {
      "id": "dog-owner",
      "name": "AI as “dog-owner” to humans",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 802,
        "y": 1017,
        "nx": 0.687,
        "ny": 0.2,
        "rotation": 4
      },
      "description": "Role reversal where AI is the master and humans the well-kept pets, comfortable but subordinate.",
      "image_file": "images/photo/dog-owner.jpg",
      "image_final": null,
      "suggested_image": "person walking a dog on a leash (read as role-reversed), transparent cut-out",
      "references": [
        51
      ],
      "number": 41,
      "side": "right",
      "image_cutout": "images/cutout/dog-owner.png",
      "image_credit": "Pam Brophy · CC BY-SA 2.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 2.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Dog_Walking_in_Snowy_Woolhampton_-_geograph.org.uk_-_333349.jpg"
    },
    {
      "id": "electricity",
      "name": "The new electricity",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 881,
        "y": 1017,
        "nx": 0.76,
        "ny": 0.2,
        "rotation": 2
      },
      "description": "A general-purpose utility, like electric power, poised to transform every industry.",
      "image_file": "images/photo/electricity.jpg",
      "image_final": null,
      "suggested_image": "The new electricity, transparent cut-out",
      "references": [
        31
      ],
      "image_cutout": "images/cutout/electricity.png",
      "image_credit": "Gauravggs · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Incandescent_Lamp_Filament.jpg",
      "number": 42,
      "side": "right"
    },
    {
      "id": "guardian-angel",
      "name": "Guardian angel",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 981,
        "y": 1155,
        "nx": 0.853,
        "ny": 0.07,
        "rotation": 3
      },
      "description": "A benevolent, protective intelligence that safeguards humans and intervenes on our behalf.",
      "image_file": "images/photo/guardian-angel.jpg",
      "image_final": null,
      "suggested_image": "classical winged guardian-angel statue, transparent cut-out",
      "references": [
        15
      ],
      "number": 43,
      "side": "right",
      "image_cutout": "images/cutout/guardian-angel.png",
      "image_credit": "Jiří Sedláček · CC BY-SA 4.0 · Wikimedia Commons",
      "image_license": "CC BY-SA 4.0",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:Overview_of_statue_of_Guardian_angel_near_Jarom%C4%9B%C5%99ice_nad_Rokytnou,_T%C5%99eb%C3%AD%C4%8D_District.jpg"
    },
    {
      "id": "god",
      "name": "Supernatural entity / benevolent God",
      "quadrant": "protector",
      "threat": "low",
      "agency": "high",
      "position": {
        "x": 1064,
        "y": 1177,
        "nx": 0.93,
        "ny": 0.05,
        "rotation": -3
      },
      "description": "AI imagined as an omniscient, godlike higher power that is fundamentally good and watches over humanity.",
      "image_file": "images/photo/god.jpg",
      "image_final": null,
      "suggested_image": "Sistine-Chapel God or a glowing deity / radiant hand, transparent cut-out",
      "references": [
        18,
        32
      ],
      "number": 44,
      "side": "right",
      "image_cutout": "images/cutout/god.png",
      "image_credit": "Michelangelo · Public domain · Wikimedia Commons",
      "image_license": "Public domain",
      "image_source_url": "https://commons.wikimedia.org/wiki/File:The_Creation_of_Adam_perspective_fix.jpg"
    }
  ]
};
