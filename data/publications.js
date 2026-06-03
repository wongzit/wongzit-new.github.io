/* ==========================================================================
   publications.js — YOUR PUBLICATION LIST. This is the only file you edit to
   add or change publications. It feeds publications.html, reviews.html and
   covers.html (the "type" field decides which page each entry shows on).

   It is plain data: keep the  window.PUBLICATIONS = [   line at the top and the
   ];  at the very bottom, and edit the list of { ... } objects in between.
   See GUIDE.md for the full field reference.
   ========================================================================== */

window.PUBLICATIONS = [
  {
    "type": "paper",
    "year": 2026,
    "title": "A Persistent Ni(0)–Pentalene Complex with High Fluxionality: Does Stronger Antiaromaticity Promote Metal–Ligand Interactions?",
    "authors": "Riina Kuwata, Takefumi Imanishi, Shota Hasegawa, <span class=\"me\">Zhe Wang</span>, Junichi Usuba, Kosuke Yasui, Muhammad Usama Gul Khan, Judy I. Wu, Yuta Uetake<sup>*</sup>, Aiko Fukazawa<sup>*</sup>",
    "venue": "<i>J. Am. Chem. Soc.</i>, <b>2026</b>, <i>148</i>, 20974–20984.",
    "image": "assets/img/pubs/kuwata2026a.png",
    "doi": "10.1021/jacs.6c05255",
    "links": {
      "DOI": "https://doi.org/10.1021/jacs.6c05255",
      "PREPRINT": "https://doi.org/10.26434/chemrxiv-2025-l8c87-v2",
      "PDF": "https://wongzit.github.io/assets/pdf/kuwata2026a.pdf"
    },
    "abstract": "Despite the long-standing use of transition metal complexation for stabilizing antiaromatic hydrocarbons, the underlying factors that govern their coordination behavior remain unclear. A Ni(0) complex, [Ni(cod)(1)], featuring a benzothiophene-S,S-dioxide-fused pen-talene ligand, was synthesized and characterized, and compared to a benzothiophene-fused analog, [Ni(cod)(2)], which bears a more antiaromatic yet less electron-accepting pentalene ligand. Single-crystal X-ray diffraction, X-ray absorption spectroscopy, and variable-temperature NMR, combined with computational analyses, reveal that the enhanced stability of [Ni(cod)(1)] arises primarily from sub-stantial π-back donation facilitated by strongly electron-withdrawing SO2 groups that lower the LUMO energy of 1. Comparisons to [Ni(cod)(2)] further demonstrate that a more antiaromatic core does not necessarily lead to stronger coordination to the Ni center. Surprisingly, the robust [Ni(cod)(1)] complex is fluxional in solution; the Ni center migrates reversibly between the two five-membered rings of the pentalene ligand via a bond shift mechanism.",
    "bibtex": "@article{kuwata2026a,\n  title  = {A Persistent Ni(0)–Pentalene Complex with High Fluxionality: Does Stronger Antiaromaticity Promote Metal–Ligand Interactions?},\n  author = {Kuwata, Riina and Imanishi, Takefumi and Hasegawa, Shota and Wang, Zhe and Usuba, Junichi and Yasui, Kosuke and Khan, Muhammad Usama Gul and Wu, Judy I. and Uetake, Yuta and Fukazawa, Aiko},\n  journal= {J. Am. Chem. Soc.},\n  year   = {2026},\n  volume = {148},\n  pages  = {20974--20984},\n  doi  = {10.1021/jacs.6c05255}\n}"
  },
  {
    "type": "paper",
    "year": 2026,
    "title": "Conformational landscapes in the ground and excited states dictate circularly polarized excimer emission: A thermodynamic–kinetic interplay in carbazole dimer systems",
    "authors": "Tomohiro Kujime, <span class=\"me\">Zhe Wang</span>, Tadashi Mori<sup>*</sup>",
    "venue": "<i>Angew. Chem. Int. Ed.</i>, <b>2026</b>, <i>65</i>, e6661486.",
    "image": "assets/img/pubs/kujime2026conformational.png",
    "doi": "10.1002/anie.6661486",
    "links": {
      "DOI": "https://doi.org/10.1002/anie.6661486",
      "HTML": "https://resou.osaka-u.ac.jp/ja/research/2026/20260430_1",
      "PDF": "https://wongzit.github.io/assets/pdf/kujime2026conformational.pdf"
    },
    "abstract": "We demonstrate that in chiral carbazole dimers, the tt conformer generates intense excimer CPL, while gauche rotamers yield only local emission. In 1a, CPL intensifies and red-shifts upon cooling due to greater tt contribution. In contrast, the tert-butyl derivative 1b shows weak, temperature-insensitive CPL owing to enhanced accessibility of non-CPL-emissive gauche conformers. This work reveals how subtle substituent and environmental effects modulate excited-state conformational dynamics and chiroptical responses through a thermodynamic–kinetic interplay.",
    "bibtex": "@article{kujime2026conformational,\n  title  = {Conformational landscapes in the ground and excited states dictate circularly polarized excimer emission: A thermodynamic–kinetic interplay in carbazole dimer systems},\n  author = {Kujime, Tomohiro and Wang, Zhe and Mori, Tadashi},\n  journal= {Angew. Chem. Int. Ed.},\n  year   = {2026},\n  volume = {65},\n  pages  = {e6661486},\n  doi  = {10.1002/anie.6661486}\n}"
  },
  {
    "type": "paper",
    "year": 2024,
    "title": "py.Aroma: An Intuitive Graphical User Interface for Diverse Aromaticity Analyses",
    "authors": "<span class=\"me\">Zhe Wang</span><sup>*</sup>",
    "venue": "<i>Chemistry</i>, <b>2026</b>, <i>6</i>, 1692–1703.",
    "image": "assets/img/pubs/wang2024pyaroma.png",
    "doi": "10.3390/chemistry6060103",
    "links": {
      "DOI": "https://doi.org/10.3390/chemistry6060103",
      "PREPRINT": "https://doi.org/10.26434/chemrxiv-2024-mjmj8",
      "HTML": "https://wongzit.github.io/program/pyaroma/",
      "PDF": "https://wongzit.github.io/assets/pdf/wang2024pyaroma.pdf"
    },
    "abstract": "The nucleus-independent chemical shift (NICS) criterion plays a significant role in evaluating (anti-)aromaticity. While readily accessible even for non-computational chemists, adding ghost atoms for multi-points NICS evaluations poses a significant challenge. In this article, I introduce py.Aroma, a freely available and open-source Python package designed specifically for analyzing (anti-)aromaticity. Through its user-friendly graphical interface, py.Aroma simplifies and enhances aromaticity analyses by offering key features such as HOMA/HOMER index computation, Gaussian-type input file generation for diverse NICS calculations and corresponding output processing, NMR spectra plotting, and generating computational supporting information (SI) for scientific manuscripts. Additionally, NICS⊥ is suggested for evaluating (anti-)aromaticity for non-planar or tilted rings. Pre-compiled executables for macOS and Windows are available at https://wongzit.github.io/program/pyaroma. Make facilitate accessibility for users lacking programming experience or time constraints.",
    "bibtex": "@article{wang2024pyaroma,\n  title  = {py.Aroma: An Intuitive Graphical User Interface for Diverse Aromaticity Analyses},\n  author = {Wang, Zhe},\n  journal= {Chemistry},\n  year   = {2024},\n  volume = {6},\n  pages  = {1692--1703},\n  doi  = {10.3390/chemistry6060103}\n}"
  },
  {
    "type": "paper",
    "year": 2023,
    "title": "Energetically More Stable Singlet Cyclopentane-1,3-diyl Diradical with π-Single Bonding Character than the Corresponding σ-Single Bonded Compound",
    "authors": "Qian Liu, Keita Onishi, Yuki Miyazawa, <span class=\"me\">Zhe Wang</span>, Sayaka Hatano, Manabu Abe<sup>*</sup>",
    "venue": "<i>J. Am. Chem. Soc.</i>, <b>2023</b>, <i>145</i>, 27089–27094.",
    "image": "assets/img/pubs/onishi2023energetically.png",
    "doi": "10.1021/jacs.3c10971",
    "links": {
      "DOI": "https://doi.org/10.1021/jacs.3c10971",
      "PDF": "https://wongzit.github.io/assets/pdf/onishi2023energetically.pdf"
    },
    "abstract": "Carbon–carbon σ-single bonds are crucial for constructing molecules like ethane derivatives (R3C–CR3), which are composed of tetrahedral four-coordinate carbons. Molecular functions, such as light absorption or emission, originate from the π-bonds existing in ethylene derivatives (R2C═CR2). In this study, a relatively stable cyclopentane-1,3-diyl species with π-single bonding system (C−π–C) with planar four-coordinate carbons is constructed. This diradicaloid is energetically more stable than the corresponding σ-single bonding system. The π-electron single bonding system provides deeper insights into the chemical bonding and the physical properties derived from the small energy gaps between the bonding and antibonding molecular orbitals.",
    "bibtex": "@article{onishi2023energetically,\n  title  = {Energetically More Stable Singlet Cyclopentane-1,3-diyl Diradical with π-Single Bonding Character than the Corresponding σ-Single Bonded Compound},\n  author = {Liu, Qian and Onishi, Keita and Miyazawa, Yuki and Wang, Zhe and Hatano, Sayaka and Abe, Manabu},\n  journal= {J. Am. Chem. Soc.},\n  year   = {2023},\n  volume = {145},\n  pages  = {27089--27094},\n  doi  = {10.1021/jacs.3c10971}\n}"
  },
  {
    "type": "paper",
    "year": 2023,
    "title": "Generation and Characterization of a Tetraradical Embedded in a Curved Cyclic Paraphenylene Unit",
    "authors": "Yuki Miyazawa, <span class=\"me\">Zhe Wang</span>, Sayaka Hatano, Ryukichi Takagi, Hideto Matsuoka*, Naoka Amamizu, Yasutaka Kitagawa<sup>*</sup>, Eiichi Kayahara, Shigeru Yamago, Manabu Abe<sup>*</sup>",
    "venue": "<i>Chem. Eur. J.</i>, <b>2023</b>, <i>29</i>, e202301009.",
    "image": "assets/img/pubs/miyazawa2023generation.png",
    "doi": "10.1002/chem.202301009",
    "links": {
      "DOI": "https://doi.org/10.1002/chem.202301009",
      "PDF": "https://wongzit.github.io/assets/pdf/miyazawa2023generation.pdf"
    },
    "abstract": "Unique spin–spin (magnetic) interactions, ring-size effects on ground-state spin multiplicity, and in-plane aromaticity has been found in localized 1,3-diradicals embedded in curved benzene structures such as cycloparaphenylene (CPP). In this study, we characterized the magnetic interactions in a tetraradical consisting of two localized 1,3-diradical units connected by p-quaterphenyl within a curved CPP skeleton by electron paramagnetic resonance (EPR) spectroscopy and quantum chemical calculations. Persistent triplet species with zero-field splitting parameters similar to those of a triplet 1,3-diphenylcyclopentane-1,3-diyl diradical were observed by continuous wave (CW) or pulsed X-band EPR measurements. The quintet state derived from the ferromagnetic interaction between the two triplet diradical moieties was not detected at 20 K under glassy matrix conditions. At the B3LYP/6-31G(d) level of theory, the singlet state was lower in energy than the triplet and quintet states. These findings will aid in the development of open-shell species for material science application.",
    "bibtex": "@article{miyazawa2023generation,\n  title  = {Generation and Characterization of a Tetraradical Embedded in a Curved Cyclic Paraphenylene Unit},\n  author = {Miyazawa, Yuki and Wang, Zhe and Hatano, Sayaka and Takagi, Ryukichi and Matsuoka, Hideto and Amamizu, Naoka and Kitagawa, Yasutaka and Kayahara, Eiichi and Yamago, Shigeru and Abe, Manabu},\n  journal= {Chem. Eur. J.},\n  year   = {2023},\n  volume = {29},\n  pages  = {e202301009},\n  doi  = {10.1002/chem.202301009}\n}"
  },
  {
    "type": "paper",
    "year": 2022,
    "title": "Impacts of Solvent and Alkyl Chain Length on the Lifetime of Singlet Cyclopentane-1,3-diyl Diradicaloids with π-Single Bonding",
    "authors": "Qian Liu, <span class=\"me\">Zhe Wang</span>, Manabu Abe<sup>*</sup>",
    "venue": "<i>J. Org. Chem.</i>, <b>2022</b>, <i>87</i>, 1858–1866.",
    "image": "assets/img/pubs/liu2022impacts.png",
    "doi": "10.1021/acs.joc.1c02895",
    "links": {
      "DOI": "https://doi.org/10.1021/acs.joc.1c02895",
      "PDF": "https://wongzit.github.io/assets/pdf/liu2022impacts.pdf"
    },
    "abstract": "The singlet 2,2-dialkoxycyclopentane-1,3-diyl diradicaloids are not only the important key intermediates in the process of bond homolysis but are also attracting attention as π-single bonding compounds. In the present study, the effects of solvent viscosity η (0.24–125.4 mPa s) and polarity π* (−0.11 to 1.00 kcal mol–1) on the reactivity of localized singlet diradicaloids were thoroughly investigated using 18 different solvents including binary mixed solvent systems containing ionic liquids. In low-η solvents (η < 1 mPa s), the lifetimes of singlet diradicaloids, which are determined by the rate constant for the isomerization of π-single-bonded singlet diradicaloids to the σ-bonded isomer, were substantially dependent on π*. Slower isomerization was observed in more polar solvents. In high-η solvents (η > 2 mPa s), the rate of isomerization was largely influenced by η in addition to π*. Slower isomerization was observed in more viscous solvents. Experimental results demonstrated the crucial roles of both solvent polarity and viscosity in the reactivity of singlet diradicaloids and thus clarified the characters of singlet diradicaloids and molecular motions during the chemical transformation. The dynamic solvent effect was further proved by a long alkyl chain introduced at a remote position of the reaction site.",
    "bibtex": "@article{liu2022impacts,\n  title  = {Impacts of Solvent and Alkyl Chain Length on the Lifetime of Singlet Cyclopentane-1,3-diyl Diradicaloids with π-Single Bonding},\n  author = {Liu, Qian and Wang, Zhe and Abe, Manabu},\n  journal= {J. Org. Chem.},\n  year   = {2022},\n  volume = {87},\n  pages  = {1858--1866},\n  doi  = {10.1021/acs.joc.1c02895}\n}"
  },
  {
    "type": "review",
    "year": 2021,
    "title": "New Insights into Bond Homolysis Process and Discovery of Novel Bonding System (C–π–C) by Generating Long-lived Singlet Diradicals",
    "authors": "Manabu Abe<sup>*</sup>, <span class=\"me\">Zhe Wang</span>, Rikuo Akisaka",
    "venue": "<i>AsiaChem</i>, <b>2021</b>, <i>2</i>, 32–41.",
    "image": "assets/img/pubs/abe2021new.png",
    "doi": "10.51167/acm00020.51167/acm00021",
    "links": {
      "DOI": "https://doi.org/10.51167/acm00020.51167/acm00021",
      "PDF": "https://wongzit.github.io/assets/pdf/abe2021new.pdf"
    },
    "abstract": "In recent years, low-valent chemical species such as radicals and carbenes, which have been recognized as short-lived intermediates, have been isolated by appropriate molecular design, and their chemical properties have been investigated in detail experimentally. In particular, the discovery of isolable carbenes, which are now widely used as indispensable ligands in coordination chemistry and synthetic organic chemistry, has enabled the development of novel highly active catalysts.",
    "bibtex": "@article{abe2021new,\n  title  = {New Insights into Bond Homolysis Process and Discovery of Novel Bonding System (C–π–C) by Generating Long-lived Singlet Diradicals},\n  author = {Abe, Manabu and Wang, Zhe and Akisaka, Rikuo},\n  journal= {AsiaChem},\n  year   = {2021},\n  volume = {2},\n  pages  = {32--41},\n  doi  = {10.51167/acm00020.51167/acm00021}\n}"
  },
  {
    "type": "review",
    "year": 2021,
    "title": "Singly Occupied Molecular Orbital−Highest Occupied Molecular Orbital (SOMO−HOMO) Conversion",
    "authors": "Ryo Murata, <span class=\"me\">Zhe Wang</span>, Manabu Abe<sup>*</sup>",
    "venue": "<i>Aust. J. Chem.</i>, <b>2021</b>, <i>74</i>, 827–837.",
    "image": "assets/img/pubs/murata2021singly.png",
    "doi": "10.1071/ch21186",
    "links": {
      "DOI": "https://doi.org/10.1071/ch21186",
      "PDF": "https://wongzit.github.io/assets/pdf/murata2021singly.pdf"
    },
    "abstract": "In rts.",
    "bibtex": "@article{murata2021singly,\n  title  = {Singly Occupied Molecular Orbital−Highest Occupied Molecular Orbital (SOMO−HOMO) Conversion},\n  author = {Murata, Ryo and Wang, Zhe and Abe, Manabu,\n  journal= {Aust. J. Chem.},\n  year   = {2021},\n  volume = {74},\n  pages  = {827--837},\n  doi  = {https://doi.org/10.1071/ch21186}\n}"
  }
];
