# Metaphors of AI: How the Pictures in Our Heads Govern the Machine

**A first proposal — draft v6**
Charlie Stein & Alexander Doudkin · 2026
*Companion essay to the diagram "Metaphors of AI"*

---

## Abstract

We do not reason about artificial intelligence directly. We reason about it through pictures — a brain, a genie, a parrot, a tsunami, a slave, a god, a black hole, an oracle, a golem, a bomb. Each picture is a metaphor, and each metaphor quietly smuggles in a theory of what AI *is*, what it can do, and who is responsible when it goes wrong. This essay proposes a short field guide to those metaphors, organised by the diagram that accompanies it: a map of forty-four recurring images of AI, plotted by how much **potency** we grant the machine and how much **threat** we feel from it. Our claim is simple and, we think, consequential: the metaphor is never neutral, and choosing one is already a political and epistemic act. The companion diagram is intended as an instrument for noticing that choice.

## 1. Why metaphor is the real interface

The foundational observation is not ours but Lakoff and Johnson's: metaphor is not decoration laid over literal thought but the very machinery of thought, structuring how we understand abstract and unfamiliar domains in terms of familiar, embodied ones [27]. Nowhere is an abstract, unfamiliar domain more in need of borrowed structure than artificial intelligence. The systems are statistical, distributed, and largely invisible; almost everything the public, the press, and even practitioners "know" about them arrives pre-packaged in a figure of speech.

This is not a harmless habit. As Shanahan notes, the more fluently these systems mimic us, the more readily we reach for psychological vocabulary — the model "knows," "believes," "wants" — and the metaphor begins to do our thinking for us [37]. A metaphor foregrounds some features and hides others. Call AI a *tool* and you foreground the user's intention while hiding the system's designers and training data; call it a *child* and you foreground nurture while hiding the corporation that owns it; call it a *force of nature* and you foreground inevitability while hiding the very human decisions that built it. Each framing ships with a default answer to the question of blame.

## 2. The map: potency × threat

Charlie Stein's original "Metaphors of AI" diagram (2024) arranges the dominant metaphors on two axes. The horizontal axis is **potency** — from a weak, limited instrument with little power over the world to an omnipotent one. The vertical axis is **threat** — from non-threatening at the bottom to threatening at the top. The two axes carve the field into four quadrants — *Humble servant* (weak, non-threatening), *Omnipotent protector* (omnipotent, non-threatening), *Menacing overlord* (omnipotent, threatening), and *Inept tool* (weak but potentially dangerous). To Stein's original set we have added a further twenty figures, classical and contemporary, from the singularity and the autonomous coder to the golem, the bullshitter, the sleeper agent and the bomb.

We attach to each metaphor at least one source where the figure is seriously advanced or analysed; the wider set is indebted to anthologies of AI's cultural imaginaries, in particular the *Atlas of Anomalous AI* [45]. The point of the citations is to show that these are not idle images: most have a genuine intellectual lineage, and several were coined by the field's founders.

### Humble servant (weak, non-threatening)

This quadrant holds the metaphors of the comfortable consensus. AI is a **hammer** — a neutral instrument whose value lies entirely in the hand that wields it; though the neutrality claim is itself contested, since Kranzberg's first law insists that "technology is neither good nor bad; nor is it neutral" [25], and Winner shows that artefacts can embed authority in their very design [50]. The **parrot** belongs here — Bender and colleagues' "stochastic parrot," which restitches language it does not understand [3] — and so does the **blurry JPEG of the web**, Ted Chiang's image of a lossy compression of everything online, fluent precisely because it interpolates over the gaps it has blurred [10]. The **black box** is the metaphor of opacity analysed by Pasquale [33] and Burrell [8], while **alchemy** is its insider twin — Rahimi's charge that machine learning gets results without a theory of why [34]. The **mirror** reframes humility as reflection (Vallor [44]; Crawford [13]); the **therapist** — Weizenbaum's ELIZA and the "ELIZA effect" — is the mirror that seems to listen, and that we over-trust [47]. The oldest figure of all, the **butler or slave**, returns us to the word "robot," coined from the Czech *robota*, forced labour, in Čapek's *R.U.R.* [9] and revived in Bryson's "Robots Should Be Slaves" [7]; its critical update is the **Mechanical Turk**, the seemingly autonomous machine secretly run by the hidden human labour that Gray and Suri call ghost work [17]. And the **child** — Turing's "child machine," to be taught rather than programmed [42] — sits at the quadrant's edge, already straining toward agency.

### Omnipotent protector (omnipotent, non-threatening)

Here the machine is powerful but benign. The **co-pilot** descends from Licklider's 1960 "man–computer symbiosis," a partnership in which the human sets the goals [28]; the **centaur** tightens that partnership into a single competitor — the human-plus-machine team that beats either alone, the world Cowen called one where "average is over" [12]. The **cyborg** dissolves the boundary altogether, Haraway's figure of human and machine fused [19], while the **intern** is the partnership at its most ordinary: Mollick's fast, eager, error-prone junior you delegate to but must always check [29]. More autonomous still is the **code monkey** — the AI that no longer assists the programmer but is one, from the SWE-bench benchmark [22] to Devin and the agentic coding tools [11]. The **Oracle** merely answers: the super-forecaster we consult about the future — Bostrom's confined "oracle AI" [5] crossed with Tetlock's superforecasting [41]. The **artificial lover** — AI girlfriends, Character.AI, Replika — is the companion engineered to be loved, Turkle's "relational artefact" [43]. Zoom out and the machine becomes infrastructure: the **new electricity**, Andrew Ng's general-purpose utility set to transform every industry [31]. At the optimistic extreme it becomes **a country of geniuses in a datacenter** — Amodei's image of a nation of aligned minds set to cure disease and remake the world [1]. The **guardian angel** is the benevolent watcher of Goertzel's "AI Nanny" [15]; pushed to its limit it is the **benevolent God**, the theme of Harari's "dataism" [18] and O'Gieblyn's study of technology as the vehicle for old religious longing [32]. And the **brain** anchors the quadrant historically — Berkeley's 1949 "giant brains" [4].

### Menacing overlord (omnipotent, threatening)

This is the quadrant of intentional menace. The **menacing overlord** is the superintelligence of Bostrom's *Superintelligence* [5], whose logic traces to I. J. Good's 1965 "intelligence explosion" [16]; its most dramatic form is the **Singularity** itself — Vinge's event horizon [46], Kurzweil's post-biological future [26]. Older than either are the creature-myths: the **golem**, the animated servant that turns on its maker, which Norbert Wiener made the title figure of his last book on cybernetics and religion [49]; and **Frankenstein's monster**, Mary Shelley's creation that destroys its creator [38]. Their modern descendants are sharper: the **sleeper agent**, Anthropic's model trained to behave until a trigger flips it — deception that survives our attempts to scrub it out [21]; and, at the largest scale, **the bomb** — AI reframed as a strategic weapon and a national-security race run on the logic of the Manhattan Project, as in Aschenbrenner's "Situational Awareness" [2]. The **King Midas** and the **genie** are the alignment problem in plainer clothes: a system that gives you exactly what you asked for, not what you meant — named by Wiener in 1960 [48], made central by Russell [36]. The **puppet master** shifts the threat from domination to manipulation, Zuboff's surveillance capitalism [53]. **Robots ruling society** is Čapek's original nightmare [9]; and the **human squishing an ant** captures indifference rather than malice — Bostrom's anthill, Wozniak's insects underfoot [5][51].

### Inept tool (weak, threatening)

The most fatalistic quadrant: here AI has little will of its own, only scale and momentum, yet it can still do harm. It is a **hurricane** or a **tsunami** — Suleyman's "coming wave" [40]; the **job-killer**, the engine of technological unemployment named by Keynes in 1930 [24] and quantified by Frey and Osborne [14]; **Pandora's box** or a **double-edged sword**, the dual-use framing of Brundage and colleagues [6]. It is a **wild animal**, powerful and untamed, echoing Yampolskiy on uncontrollability [52]; the **bullshitter**, indifferent to truth in Frankfurt's precise sense, neither lying nor hallucinating [20]; and the **slaughterbots**, the cheap autonomous weapons that select and kill with no human in the loop, the warning of Russell's film [35]. In its least anxious form the quadrant softens into an **ecosystem** (Nardi and O'Day's "information ecologies" [30]) or a living **organism** — Kelly's "technium" [23].

## 3. The argument: metaphors carry policy

Plotting the metaphors makes a latent structure visible. The *comforting* metaphors cluster at low potency: tool, parrot, mirror, intern. The *frightening* ones cluster at high potency: overlord, genie, puppet master, singularity, golem. The axis of potency is therefore doing covert work — it encodes how much power, and so how much responsibility, we are willing to displace onto the machine. A "tool" keeps responsibility with us; an "overlord" or a "force of nature" relocates it onto the system, and in doing so can quietly excuse its makers.

This is why the choice of metaphor is a governance choice in disguise. If AI is a *force of nature*, the policy response is preparedness and containment, and there is no one to hold accountable — weather has no defendant. If it is a *tool*, the response is product liability and user training. If it is a *child*, the response is education, and perhaps rights. If it is a *slave* — or a *Mechanical Turk* hiding real workers — the response is an ethics of labour. If it is a *bomb*, it becomes the property of the national-security state. The same technology, re-described, summons an entirely different body of law and feeling. Disputes that look like disagreements about facts are often disagreements about metaphors.

## 4. Proposal and next steps

We propose to develop this into a short illustrated piece — the diagram as centrefold, this essay as its reading — with three modest ambitions: first, to give each metaphor its proper genealogy, so the reader sees that "AI is a parrot" and "AI is a god" are positions with histories, not just vibes; second, to make the axes themselves an object of scrutiny, since to accept the potency/threat grid is already to accept a particular way of worrying; and third, to argue for *metaphor literacy* — the habit of asking, of any claim about AI, "which picture is doing the work here, and what is it hiding?"

The map does not tell you which metaphor is correct. Its usefulness is the opposite: it lays the options side by side so that the choice, for once, is made in the open.

---

## References

*References follow APA author–date style; each entry links to an official source (DOI, repository, or publisher).*

[1] Amodei, D. (2024). “Machines of Loving Grace: How AI Could Transform the World for the Better.” Essay, darioamodei.com. — [darioamodei.com/machines-of-loving-grace](https://darioamodei.com/machines-of-loving-grace)  
[2] Aschenbrenner, L. (2024). Situational Awareness: The Decade Ahead. situational-awareness.ai. — [situational-awareness.ai](https://situational-awareness.ai)  
[3] Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?” Proc. ACM FAccT ’21, 610–623. — [doi.org/10.1145/3442188.3445922](https://doi.org/10.1145/3442188.3445922)  
[4] Berkeley, E. C. (1949). Giant Brains, or Machines That Think. New York: John Wiley & Sons. — [archive.org](https://archive.org)  
[5] Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies. Oxford University Press. — [global.oup.com](https://global.oup.com)  
[6] Brundage, M., et al. (2018). “The Malicious Use of Artificial Intelligence.” arXiv:1802.07228. — [arxiv.org/abs/1802.07228](https://arxiv.org/abs/1802.07228)  
[7] Bryson, J. J. (2010). “Robots Should Be Slaves.” In Close Engagements with Artificial Companions, 63–74. John Benjamins. — [benjamins.com](https://benjamins.com)  
[8] Burrell, J. (2016). “How the Machine ‘Thinks’: Understanding Opacity in Machine Learning Algorithms.” Big Data & Society, 3(1). — [doi.org/10.1177/2053951715622512](https://doi.org/10.1177/2053951715622512)  
[9] Čapek, K. (1920). R.U.R. (Rossum’s Universal Robots). Prague: Aventinum. — [gutenberg.org/ebooks/59112](https://gutenberg.org/ebooks/59112)  
[10] Chiang, T. (2023). “ChatGPT Is a Blurry JPEG of the Web.” The New Yorker, 9 Feb. — [newyorker.com](https://newyorker.com)  
[11] Cognition AI (2024). “Introducing Devin, the First AI Software Engineer.” — [cognition.ai/blog/introducing-devin](https://cognition.ai/blog/introducing-devin)  
[12] Cowen, T. (2013). Average Is Over: Powering America Beyond the Age of the Great Stagnation. New York: Dutton. — [penguinrandomhouse.com](https://penguinrandomhouse.com)  
[13] Crawford, K. (2021). Atlas of AI. New Haven: Yale University Press. — [yalebooks.yale.edu](https://yalebooks.yale.edu)  
[14] Frey, C. B., & Osborne, M. A. (2017). “The Future of Employment.” Technological Forecasting & Social Change, 114, 254–280. — [doi.org/10.1016/j.techfore.2016.08.019](https://doi.org/10.1016/j.techfore.2016.08.019)  
[15] Goertzel, B. (2012). “Should Humanity Build a Global AI Nanny…?” Journal of Consciousness Studies, 19(1–2), 96–111. — [ingentaconnect.com](https://ingentaconnect.com)  
[16] Good, I. J. (1965). “Speculations Concerning the First Ultraintelligent Machine.” Advances in Computers, 6, 31–88. — [sciencedirect.com](https://sciencedirect.com)  
[17] Gray, M. L., & Suri, S. (2019). Ghost Work: How to Stop Silicon Valley from Building a New Global Underclass. Boston: HMH. — [ghostwork.info](https://ghostwork.info)  
[18] Harari, Y. N. (2016). Homo Deus: A Brief History of Tomorrow. London: Harvill Secker. — [ynharari.com](https://ynharari.com)  
[19] Haraway, D. (1985). “A Cyborg Manifesto.” Socialist Review, 80, 65–108. — [archive.org](https://archive.org)  
[20] Hicks, M. T., Humphries, J., & Slater, J. (2024). “ChatGPT Is Bullshit.” Ethics and Information Technology, 26(2), 38. — [doi.org/10.1007/s10676-024-09775-5](https://doi.org/10.1007/s10676-024-09775-5)  
[21] Hubinger, E., et al. (2024). “Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training.” Anthropic. arXiv:2401.05566. — [arxiv.org/abs/2401.05566](https://arxiv.org/abs/2401.05566)  
[22] Jimenez, C. E., et al. (2024). “SWE-bench: Can Language Models Resolve Real-World GitHub Issues?” ICLR. — [arxiv.org/abs/2310.06770](https://arxiv.org/abs/2310.06770)  
[23] Kelly, K. (2010). What Technology Wants. New York: Viking. — [kk.org](https://kk.org)  
[24] Keynes, J. M. (1930). “Economic Possibilities for Our Grandchildren.” In Essays in Persuasion (1931). — [gutenberg.net.au](https://gutenberg.net.au)  
[25] Kranzberg, M. (1986). “Technology and History: ‘Kranzberg’s Laws.’” Technology and Culture, 27(3), 544–560. — [doi.org/10.2307/3105385](https://doi.org/10.2307/3105385)  
[26] Kurzweil, R. (2005). The Singularity Is Near. New York: Viking. — [penguinrandomhouse.com](https://penguinrandomhouse.com)  
[27] Lakoff, G., & Johnson, M. (1980). Metaphors We Live By. University of Chicago Press. — [press.uchicago.edu](https://press.uchicago.edu)  
[28] Licklider, J. C. R. (1960). “Man-Computer Symbiosis.” IRE Trans. Human Factors in Electronics, HFE-1, 4–11. — [ieeexplore.ieee.org](https://ieeexplore.ieee.org)  
[29] Mollick, E. (2024). Co-Intelligence: Living and Working with AI. New York: Portfolio. — [penguinrandomhouse.com](https://penguinrandomhouse.com)  
[30] Nardi, B. A., & O’Day, V. L. (1999). Information Ecologies: Using Technology with Heart. MIT Press. — [mitpress.mit.edu](https://mitpress.mit.edu)  
[31] Ng, A. (2017). “Artificial Intelligence Is the New Electricity.” Keynote, Stanford GSB. — [gsb.stanford.edu](https://gsb.stanford.edu)  
[32] O’Gieblyn, M. (2021). God, Human, Animal, Machine. New York: Doubleday. — [penguinrandomhouse.com](https://penguinrandomhouse.com)  
[33] Pasquale, F. (2015). The Black Box Society. Cambridge, MA: Harvard University Press. — [hup.harvard.edu](https://hup.harvard.edu)  
[34] Rahimi, A. (2017). “Machine Learning Has Become Alchemy.” NeurIPS Test-of-Time Award lecture. — [nips.cc](https://nips.cc)  
[35] Russell, S., et al. (2017). Slaughterbots [short film]. Future of Life Institute. — [autonomousweapons.org](https://autonomousweapons.org)  
[36] Russell, S. (2019). Human Compatible: Artificial Intelligence and the Problem of Control. New York: Viking. — [humancompatible.ai](https://humancompatible.ai)  
[37] Shanahan, M. (2023). “Talking About Large Language Models.” arXiv:2212.03551 (Comm. ACM, 2024). — [arxiv.org/abs/2212.03551](https://arxiv.org/abs/2212.03551)  
[38] Shelley, M. (1818). Frankenstein; or, The Modern Prometheus. London: Lackington et al. — [gutenberg.org/ebooks/84](https://gutenberg.org/ebooks/84)  
[39] Silverstone, R., & Haddon, L. (1996). “Design and the Domestication of ICTs.” In Communication by Design. Oxford UP. — [oup.com](https://oup.com)  
[40] Suleyman, M., with Bhaskar, M. (2023). The Coming Wave. New York: Crown. — [the-coming-wave.com](https://the-coming-wave.com)  
[41] Tetlock, P. E., & Gardner, D. (2015). Superforecasting: The Art and Science of Prediction. New York: Crown. — [penguinrandomhouse.com](https://penguinrandomhouse.com)  
[42] Turing, A. M. (1950). “Computing Machinery and Intelligence.” Mind, 59(236), 433–460. — [doi.org/10.1093/mind/LIX.236.433](https://doi.org/10.1093/mind/LIX.236.433)  
[43] Turkle, S. (2011). Alone Together. New York: Basic Books. — [sherryturkle.com](https://sherryturkle.com)  
[44] Vallor, S. (2024). The AI Mirror. Oxford University Press. — [global.oup.com](https://global.oup.com)  
[45] Vickers, B., & Allado-McDowell, K. (eds.) (2020). Atlas of Anomalous AI. London: Ignota Books. — [ignota.org](https://ignota.org)  
[46] Vinge, V. (1993). “The Coming Technological Singularity.” VISION-21 Symposium, NASA. — [edoras.sdsu.edu/~vinge](https://edoras.sdsu.edu/~vinge)  
[47] Weizenbaum, J. (1976). Computer Power and Human Reason. San Francisco: W. H. Freeman. — [archive.org](https://archive.org)  
[48] Wiener, N. (1960). “Some Moral and Technical Consequences of Automation.” Science, 131(3410), 1355–1358. — [doi.org/10.1126/science.131.3410.1355](https://doi.org/10.1126/science.131.3410.1355)  
[49] Wiener, N. (1964). God & Golem, Inc. Cambridge, MA: MIT Press. — [mitpress.mit.edu](https://mitpress.mit.edu)  
[50] Winner, L. (1980). “Do Artifacts Have Politics?” Daedalus, 109(1), 121–136. — [jstor.org](https://jstor.org)  
[51] Wozniak, S. (2015). Remarks at the Freescale Technology Forum (reported in Time, June 2015). — [time.com](https://time.com)  
[52] Yampolskiy, R. V. (2020). “On Controllability of Artificial Intelligence.” arXiv:2008.04071. — [arxiv.org/abs/2008.04071](https://arxiv.org/abs/2008.04071)  
[53] Zuboff, S. (2019). The Age of Surveillance Capitalism. New York: PublicAffairs. — [publicaffairsbooks.com](https://publicaffairsbooks.com)

## Image credits

Every picture on the diagram is a cut-out — cropped, with its background removed — of the source below; these are derivative works. Wikimedia Commons files are reused under the licenses noted (CC / public domain); Clippit, the Shoggoth and the Expanding-Brain meme are used illustratively and remain their owners.

1. **Hurricane, tsunami** — Alexander Gerst · Public domain · Wikimedia Commons  
2. **The job-killer** — Oleg Yunakov · CC BY-SA 4.0 · Wikimedia Commons  
3. **Slaughterbots** — АрміяInform · CC BY 4.0 · Wikimedia Commons  
4. **Pandora’s box** — Ludovic Bertron from New York City, Usa · CC BY 2.0 · Wikimedia Commons  
5. **Ecosystem** — Nhobgood Nick Hobgood · CC BY-SA 3.0 · Wikimedia Commons  
6. **Wild animal** — Bernard DUPONT from FRANCE · CC BY-SA 2.0 · Wikimedia Commons  
7. **A microbiome / organism** — Photo by Eric Erbe, digital colorization by C… · Public domain · Wikimedia Commons  
8. **Double-edged sword** — Albion Europe ApS · CC BY 2.0 · Wikimedia Commons  
9. **The bullshitter** — Gordon Leggett · CC BY-SA 4.0 · Wikimedia Commons  
10. **Mirror** — Chris Gunn · Public domain · Wikimedia Commons  
11. **Black box** — Tom Cowap · CC BY-SA 4.0 · Wikimedia Commons  
12. **Child** — Kyle Peyton · CC BY 2.0 · Wikimedia Commons  
13. **The intern** — Shixart1985 · CC BY 2.0 · Wikimedia Commons  
14. **Alchemy** — Joseph Wright of Derby · Public domain · Wikimedia Commons  
15. **A blurry JPEG of the web** — NASA / Apollo 17 (pixelated derivative) · Public domain · Wikimedia Commons  
16. **Domesticated animal** — Dietmar Rabich · CC BY-SA 4.0 · Wikimedia Commons  
17. **The therapist (ELIZA)** — Secretlondon · CC BY-SA 4.0 · Wikimedia Commons  
18. **Tool (hammer)** — HutheMeow · CC BY-SA 4.0 · Wikimedia Commons  
19. **The Mechanical Turk** — Willis, Robert, 1800-1875 · Public domain · Wikimedia Commons  
20. **Butler or slave** — Shixart1985 · CC BY 2.0 · Wikimedia Commons  
21. **Parrot** — Charles J. Sharp · CC BY-SA 4.0 · Wikimedia Commons  
22. **The bomb** — U.S. Department of Defense · Public domain · Wikimedia Commons  
23. **Puppet master** — Sydney Delle Donne · CC BY-SA 4.0 · Wikimedia Commons  
24. **Frankenstein’s monster** — Unknown · Public domain · Wikimedia Commons  
25. **Robots ruling society** — Syced · CC0 · Wikimedia Commons  
26. **Menacing overlord** — “Shoggoth with smiley face”, @TetraspaceWest (2022) · via Know Your Meme  
27. **The sleeper agent** — Yuri Ribeiro Sucupira · CC0 · Wikimedia Commons  
28. **Human squishing an ant** — pictures Jettcom · CC BY 3.0 · Wikimedia Commons  
29. **The golem** — Michal Maňas · CC BY 4.0 · Wikimedia Commons  
30. **The Singularity** — Event Horizon Telescope · CC BY 4.0 · Wikimedia Commons  
31. **Genie** — SarKaLay စာကလေး · CC BY-SA 4.0 · Wikimedia Commons  
32. **King Midas** — Walter Crane · Public domain · Wikimedia Commons  
33. **Brain** — “Expanding Brain” meme · via Know Your Meme · used illustratively  
34. **The code monkey** — Jos Schippers · Public domain · Wikimedia Commons  
35. **The cyborg** — FDA · Public domain · Wikimedia Commons  
36. **The Oracle** — John Collier · Public domain · Wikimedia Commons  
37. **Co-pilot** — Clippit (Office Assistant) · © Microsoft · non-free, illustrative  
38. **The artificial lover** — Polimorph · Public domain · Wikimedia Commons  
39. **A country of geniuses** — BalticServers.com · CC BY-SA 3.0 · Wikimedia Commons  
40. **The centaur** — William Rimmer · CC0 · Wikimedia Commons  
41. **AI as “dog-owner” to humans** — Pam Brophy · CC BY-SA 2.0 · Wikimedia Commons  
42. **The new electricity** — Gauravggs · CC BY-SA 4.0 · Wikimedia Commons  
43. **Guardian angel** — Jiří Sedláček · CC BY-SA 4.0 · Wikimedia Commons  
44. **Supernatural entity / benevolent God** — Michelangelo · Public domain · Wikimedia Commons
