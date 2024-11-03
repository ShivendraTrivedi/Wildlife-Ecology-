const quizData = {
    week1: [
        { question: "Enquiry into plants is a book written by", options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"], correctAnswerIndex: 0 },
        { question: "In the Greek word root of Ecology, Oikos refers to", options: ["household", "preservation", "environment", "study"], correctAnswerIndex: 0 },
        { question: "In the Greek word root of Ecology, logos refers to", options: ["household", "preservation", "environment", "study"], correctAnswerIndex: 3 },
        { question: "Ecology is the scientific study of interactions among organisms and their_____.", options: ["habitat", "niche", "environment", "population"], correctAnswerIndex: 2 },
        { question: "Who amongst these is considered the father of Biogeography?", options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"], correctAnswerIndex: 3 },
        { question: "Which of these is not a characteristic of fitness?", options: ["Fitness is environment-specific", "Fitness is species-specific", "Higher reproductive rate means higher fitness", "Fitness should be measured across several generations"], correctAnswerIndex: 2 },
        { question: "Which of these is not a kind of selection?", options: ["directional", "stochastic", "disruptive", "stabilising"], correctAnswerIndex: 1 },
        { question: "Ecology is the scientific study of _______ that determine the distribution and abundance of organisms.", options: ["statics", "interactions", "dynamics", "habitat"], correctAnswerIndex: 1 },
        { question: "Which of these is not a characteristic of fitness?", options: ["Fitness is environment-specific", "Fitness is species-specific", "Fitness works on traits such as size and speed", "Fitness should be measured across several generations"], correctAnswerIndex: 2 },
        { question: "Which of these is not a step in natural selection?", options: ["variation", "underpopulation", "struggle for existence", "survival of the fittest"], correctAnswerIndex: 1 }
    ],
    week2: [
        { question: "Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____", options: ["perfect", "imperfect", "stable", "unstable"], correctAnswerIndex: 2 },
        { question: "The mitochondrion is a/an", options: ["sub-cellular organelle", "cell", "tissue", "organ"], correctAnswerIndex: 0 },
        { question: "The laboratory approach to ecology uses", options: ["equations", "models", "observations", "experiments"], correctAnswerIndex: 3 },
        { question: "\"The diversity that exists among different geographies\" are", options: ["alpha biodiversity", "beta biodiversity", "gamma biodiversity", "delta biodiversity"], correctAnswerIndex: 2 },
        { question: "The hierarchical system was given by", options: ["Simon", "Watson", "Hutchinson", "Humboldt"], correctAnswerIndex: 0 },
        { question: "\"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species\" is a definition of", options: ["cells", "species", "ecosystems", "biomes"], correctAnswerIndex: 1 },
        { question: "\"The diversity that exists within an ecosystem\" is", options: ["alpha biodiversity", "beta biodiversity", "gamma biodiversity", "delta biodiversity"], correctAnswerIndex: 0 },
        { question: "The emergent principle can be stated as", options: ["whole = sum of parts", "whole < sum of parts", "whole > sum of parts", "none of these"], correctAnswerIndex: 2 },
        { question: "There is more biodiversity in areas with", options: ["less competition, less predation", "less competition, more predation", "more competition, more predation", "more competition, less predation"], correctAnswerIndex: 2 },
        { question: "For more biodiversity, the level of disturbance should be", options: ["less", "intermediate", "more", "none of these"], correctAnswerIndex: 1 }
    ],
    week3: [
        { question: "Birds on giraffe are an example of", options: ["colony", "commensalism", "protocooperation", "allelopathy"], correctAnswerIndex: 2 },
        { question: "Egrets with buffaloes are an example of", options: ["colony", "commensalism", "protocooperation", "allelopathy"], correctAnswerIndex: 1 },
        { question: "The scientific study of animal behaviour is called", options: ["behaviourism", "ecology", "ethology", "prey-predator dynamics"], correctAnswerIndex: 2 },
        { question: "The interaction between exotic shrubs and trees through the action of seed predators is an example of", options: ["infraspecific competition", "apparent competition", "disguised competition", "harmonious competition"], correctAnswerIndex: 1 },
        { question: "Harmonious competition occurs where", options: ["at least one participant is benefited", "at least one participant is unharmed", "both participants are benefited", "both participants are unharmed"], correctAnswerIndex: 3 },
        { question: "Hamilton's rule can be stated as", options: ["rB < C", "rB > C", "rB = C", "rB + C = 0"], correctAnswerIndex: 1 },
        { question: "Trampling of grass due to the movement of animals is an example of", options: ["mutualism", "ammensalism", "commensalism", "protocooperation"], correctAnswerIndex: 1 },
        { question: "I observe a monkey take a tick out of another monkey's head and eat it. In the social context, this behaviour would be called", options: ["tick hunting", "auto grooming", "allo grooming", "foraging"], correctAnswerIndex: 2 },
        { question: "An inventory of behaviours exhibited by an animal during a behaviour exercise is called", options: ["ecogram", "ethogram", "behaviourogram", "animalogram"], correctAnswerIndex: 1 },
        { question: "I observe a bird take a tick out of another bird's head and eat it. In the social context, this behaviour would be called", options: ["tick hunting", "auto grooming", "allo grooming", "foraging"], correctAnswerIndex: 2 }
    ],
    week4: [
        { question: "Consider the food chain grass --> grasshopper --> frog --> snake --> hawk. As we move up the food chain,", options: ["available energy decreases", "available energy increases", "available energy remains same", "available energy is zero everywhere"], correctAnswerIndex: 0 },
        { question: "Consider the food chain grass --> grasshopper --> frog --> snake --> hawk in the food chain", options: [" hawk is producer", "hawk is consumer and carnivore", "hawk is consumer and herbivore", "hawk is decomposer"], correctAnswerIndex: 1 },
        { question: "Trees --> birds --> parasites --> hyperparasites represent", options: ["upright pyramid of numbers", "inverted pyramid of numbers", "spindle pyramid of numbers", "dumb-bell pyramid of numbers"], correctAnswerIndex: 1 },
        { question: "Consider the food chain grass --> grasshopper --> frog --> snake --> hawk. In this food chain", options: ["frog is producer", "frog is consumer and carnivore", "frog is consumer and herbivore", "frog is decomposer"], correctAnswerIndex: 1 },
        { question: "At the compensation point", options: ["photosynthesis = respiration", "photosynthesis < respiration", "photosynthesis > respiration", "photosynthesis = 0"], correctAnswerIndex: 0 },
        { question: "Tree --> frugivorous birds --> hawk represents", options: ["upright pyramid of numbers", "inverted pyramid of numbers", "spindle pyramid of numbers", "dumb-bell pyramid of numbers"], correctAnswerIndex: 2 },
        { question: "Glacial lakes are typical examples of", options: ["eutrophic lakes", "hypereutrophic lakes", "oligotrophic lakes", "none of these"], correctAnswerIndex: 2 },
        { question: "Consider the food chain grass --> grasshopper --> frog --> snake -->hawk in this food chain", options: ["more numbers of hawks than grasshoppers can be supported", "more numbers of grasshoppers than hawks can be supported", "equal numbers of hawks and grasshoppers can be supported", "none of these"], correctAnswerIndex: 1 },
        { question: "If we all become vegetarians, we'll be able to support our large populations. this can be explained through", options: ["10% rule", "1% rule", "trophic cascades", "biodiversity"], correctAnswerIndex: 0 },
        { question: "Net primary productivity is given by", options: ["APAR x LUE", "APAR + LUE", "APAR - LUE", "APAR / LUE"], correctAnswerIndex: 0 }
    ],
    week5: [
        { question: "____ is how close the measured values are to the correct value", options: ["accuracy", "precision", "bias", "variance"], correctAnswerIndex: 0 },
        { question: "Which of these is not a measure of absolute population density?", options: ["total count", "pelt count", "capture-recapture method", "removal method"], correctAnswerIndex: 1 },
        { question: "The logistic growth equation, when plotted, appears", options: ["I shaped", "J shaped", "S shaped", "O shaped"], correctAnswerIndex: 2 },
        { question: "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start", options: ["simple random sampling", "systematic sampling", "stratified sampling", "multistage sampling"], correctAnswerIndex: 1 },
        { question: "The juvenile mortality rate is the annual number of death of juveniles per", options: ["100 births", "1000 births", "100 live births", "1000 live births"], correctAnswerIndex: 3 },
        { question: "The minimum replacement level fertility for a population to grow should be greater than", options: ["1", "2", "3", "4"], correctAnswerIndex: 1 },
        { question: "Pan traps are used for sampling", options: ["bees", "butterflies", "non-pollinator insects", "pollinator insects"], correctAnswerIndex: 3 },
        { question: "Which of these is true?", options: ["physiological longevity > ecological longevity", "physiological longevity = ecological longevity", "physiological longevity < ecological longevity", "a or b"], correctAnswerIndex: 3 },
        { question: "A sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as", options: ["simple random sampling", "systematic sampling", "stratified sampling", "multistage sampling"], correctAnswerIndex: 0 },
        { question: "Cover board surveys are typically used for sampling", options: ["herpetofauna", "fishes", "large mammals", "carnivores"], correctAnswerIndex: 0 }
    ],
    
    week6: [
        { question: "A climax caused by wildfires is an example of", options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"], correctAnswerIndex: 3 },
        { question: "When compared to generalist species, specialist species have", options: ["narrower niches", "broader niches", "same-size niches", "none of these"], correctAnswerIndex: 0 },
        { question: "Which of these depicts correctly the lithosere primary succession?", options: ["rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax", "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax", "rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax"], correctAnswerIndex: 0 },
        { question: "Importance value can be written as", options: ["relative density + relative frequency X relative dominance", "relative density X relative frequency + relative dominance", "relative density + relative frequency + relative dominance", "relative density X relative frequency X relative dominance"], correctAnswerIndex: 2 },
        { question: "Lithosere is an example of", options: ["hydrosere", "xerosere", "psammosere", "halosere"], correctAnswerIndex: 1 },
        { question: "Importance value varies from", options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"], correctAnswerIndex: 3 },
        { question: "A species found most frequently in a particular community, but also present occasionally in others is called", options: ["accidental species", "indifferent species", "selective species", "exclusive species"], correctAnswerIndex: 2 },
        { question: "The climax near Tindi village is being controlled by disturbance by cattle. This is an example of", options: ["climatic climax", "edaphic climax", "disclimax", "catastrophic climax"], correctAnswerIndex: 2 },
        { question: "Which of these is correct?", options: ["fundamental niche > realised niche", "fundamental niche = realised niche", "fundamental niche < realised niche", "a or b"], correctAnswerIndex: 3 },
        { question: "Which of these is not a characteristic of pioneer species?", options: ["ability to grow on bare rocks", "ability to tolerate extreme temperatures", "large size", "short life span"], correctAnswerIndex: 2 }
    ],
    
    week7: [
        { question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about", options: ["autophagy", "allelophagy", "autopathy", "allelopathy"], correctAnswerIndex: 3 },
        { question: "Which of these is a physical factor of habitat?", options: ["soil", "moisture", "predators", "temperatures"], correctAnswerIndex: 2 },
        { question: "\"The rate of biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor\" this is the statement for", options: ["Liebig's law of minimum", "Liebig's law of maximum", "Shelford's law of tolerance", "Shelford's law of intolerance"], correctAnswerIndex: 0 },
        { question: "Transplantation experiments are used to find", options: ["potential range", "effective range", "actual range", "economic range"], correctAnswerIndex: 0 },
        { question: "\"Quick movement over large distances, often across unsuitable terrain\" is a definition of", options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"], correctAnswerIndex: 2 },
        { question: "The movement of lions across the Gir landscape is an example of", options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"], correctAnswerIndex: 0 },
        { question: "Good climate is a", options: ["chemical factor", "demographic factor", "push factor", "pull factor"], correctAnswerIndex: 3 },
        { question: "Scarcity of food is a", options: ["chemical factor", "demographic factor", "push factor", "pull factor"], correctAnswerIndex: 2 },
        { question: "\"The geographical distribution of a species will be controlled by that environment factor for which the organism has the narrowest range of tolerance\" this is the statement for", options: ["Liebig's law of minimum", "Liebig's law of maximum", "Shelford's law of tolerance", "Shelford's law of intolerance"], correctAnswerIndex: 2 },
        { question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called", options: ["translocation", "migration", "dispersal", "drifting"], correctAnswerIndex: 2 }
    ],
    
    week8: [
        { question: "According to Leopold, which of these is not a tool of habitat management", options: ["fire", "gun", "cattle", "sickle"], correctAnswerIndex: 3 },
        { question: "Which of these correctly represents the process of habitat fragmentation and loss", options: ["original forest --> dissection --> perforation --> fragmentation --> attrition", "original forest --> dissection --> attrition --> fragmentation --> perforation", "original forest --> dissection --> perforation --> attrition --> fragmentation", "original forest --> dissection --> fragmentation --> perforation --> attrition"], correctAnswerIndex: 0 },
        { question: "We prefer those areas for the creation of conservation reserve where the level of threat is", options: ["very high", "medium", "very low", "non-existent"], correctAnswerIndex: 1 },
        { question: "\"The subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of", options: ["habitat", "ecosystem", "biome", "biosphere"], correctAnswerIndex: 0 },
        { question: "Captive breeding is an example of", options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"], correctAnswerIndex: 1 },
        { question: "Which of these is a deterministic factor?", options: ["environmental variation", "forest fire", "death rate", "diseases"], correctAnswerIndex: 2 },
        { question: "Which of these is a stochastic factor?", options: ["birth rate", "death rate", "population structure", "environmental fluctuation"], correctAnswerIndex: 3 },
        { question: "Zoo is an example of", options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"], correctAnswerIndex: 1 },
        { question: "The acronym HIPPO does not include", options: ["habitat loss", "habitat enhancement", "invasive species", "human over-population"], correctAnswerIndex: 1 },
        { question: "The acronym HIPPO does not include", options: ["habitat loss", "invasive species", "pollination", "pollution"], correctAnswerIndex: 2 }
    ],
    
    week9: [
        { question: "Which of these is a positive check according to Malthus?", options: ["late marriage", "war", "celibacy", "moral restraint"], correctAnswerIndex: 1 },
        { question: "The demographic transition sees a society move from", options: ["high birth rate, low death rate to low birth rate, low death rate", "low birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, low death rate", "high birth rate, high death rate to low birth rate, high death rate"], correctAnswerIndex: 2 },
        { question: "According to Malthusian model", options: ["population grows in geometric progression, food supply increases in arithmetic progression", "population grows in geometric progression, food supply increases in geometric progression", "population grows in arithmetic progression, food supply increases in arithmetic progression", "population grows in arithmetic progression, food supply increases in geometric progression"], correctAnswerIndex: 0 },
        { question: "The book \"An essay on the principle of population\" was written by", options: ["Darwin", "Malthus", "Spencer", "Owens"], correctAnswerIndex: 1 },
        { question: "_______ is used to identify which potential impacts are relevant to assess.", options: ["screening", "scoping", "reporting", "review"], correctAnswerIndex: 1 },
        { question: "Which of these is preventive check according to Malthus?", options: ["foresight", "vice", "misery", "flood"], correctAnswerIndex: 0 },
        { question: "______ determines which projects or developments require a full or partial impact assessment study.", options: ["screening", "scoping", "reporting", "review"], correctAnswerIndex: 0 },
        { question: "Which of these is a pillar of sustainability?", options: ["social sustainability", "industrial sustainability", "agricultural sustainability", "trans-boundary sustainability"], correctAnswerIndex: 0 },
        { question: "Which of these is not a pillar of sustainability?", options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "agricultural sustainability"], correctAnswerIndex: 2 },
        { question: "The quantum of human impacts is given by", options: ["I = P X A X T", "I = P + A + T", "I = P + A - T", "I = P - (A+T)"], correctAnswerIndex: 0 }
    ],
    
    week10: [
        { question: "Which of these is not a climatic forcing for Earth?", options: ["changes in plates tectonics", "changes in Earth's orbit", "changes in Sun's orbit", "changes in Sun's strength"], correctAnswerIndex: 2 },
        { question: "Mesodebris in the context of plastic debris has a fragment size of", options: [">20mm", "5-20 mm", "<5mm", "<1mm"], correctAnswerIndex: 1 },
        { question: "Macrodebris in the context of plastic debris had a fragment size of", options: [">20mm", "5-20mm", "<5mm", "<1mm"], correctAnswerIndex: 0 },
        { question: "\"Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in reducing vulnerability but increases it instead\" is a definition of", options: ["adaptation", "mitigation", "maladaptation", "malmitigation"], correctAnswerIndex: 2 },
        { question: "Which of these is not a principle of ecological restoration?", options: ["ecological integrity", "long term sustainability", "benefits and engages scientists", "informed by past and future"], correctAnswerIndex: 2 },
        { question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs to reduce electricity consumption and carbon dioxide release from power plants. In the context of climate change, such an action would be called", options: ["adaptation", "mitigation", "deceleration", "maladaptation"], correctAnswerIndex: 1 },
        { question: "Which of these is not a principle of ecological restoration?", options: ["ecological integrity", "short term sustainability", "benefits and engages society", "informed by past and future"], correctAnswerIndex: 1 },
        { question: "\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition of", options: ["adaptive response", "adaptive capacity", "mitigative response", "mitigative capacity"], correctAnswerIndex: 1 },
        { question: "Which of these is not a climatic forcing for Earth?", options: ["changes in plate tectonics", "changes in Earth's orbit", "changes in Moon's orbit", "changes in Sun's strength"], correctAnswerIndex: 2 },
        { question: "Because of climate change, Mudumalai tiger reserve is suffering from frequent droughts. The management has built several artificial water holes for animals and fills them regularly with tankers. In the context of climate change, such an action would be called", options: ["adaptation", "mitigation", "deceleration", "maladaptation"], correctAnswerIndex: 0 }
    ],
    
    week11: [
        { question: "Which of these is correct?", options: ["R + G = M + F", "R + M = G + F", "R + F = M + G", "R + G + M + F = 0"], correctAnswerIndex: 0 },
        { question: "Which of these is not an impact of toxic chemicals?", options: ["lethal effects", "sub-lethal effects", "reduction of existing stressors", "reduced fecundity"], correctAnswerIndex: 2 },
        { question: "A pest population is called controlled when", options: ["it is not increasing", "it is decreasing", "it is not causing any economic damage", "it is not causing excessive economic damage"], correctAnswerIndex: 3 },
        { question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and species of deciduous forest planted again. This is an example of", options: ["recovery", "restoration", "enhancement", "replacement"], correctAnswerIndex: 1 },
        { question: "The root zone treatment plant is an example of", options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"], correctAnswerIndex: 0 },
        { question: "A pest population is called uncontrolled when", options: ["it is increasing", "it is not decreasing", "it is causing some economic damage", "it is causing excessive economic damage"], correctAnswerIndex: 3 },
        { question: "The impact of El Nino on fishery in Peru is explained by", options: ["match hypothesis", "mismatch hypothesis", "match-mismatch hypothesis", "none of these"], correctAnswerIndex: 2 },
        { question: "Which of these is correct?", options: ["the maximum sustainable yield is near the beginning of the sigmoidal curve", "the maximum sustainable yield is near the mid-point of the sigmoidal curve", "the maximum sustainable yield is near the end of the sigmoidal curve", "none of these"], correctAnswerIndex: 1 },
        { question: "Ludwig's ratchet predicts", options: ["decreasing harvesting rate", "constant harvesting rate", "increasing harvesting rate", "fluctuating harvesting rate"], correctAnswerIndex: 2 },
        { question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of", options: ["recovery", "restoration", "enhancement", "replacement"], correctAnswerIndex: 3 }
    ],
    
    week12: [
        { question: "\"Enquiry into plants\" is a book written by", options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"], correctAnswerIndex: 0 },
        { question: "The mitochondrion is a/an", options: ["sub-cellular organelle", "cell", "tissue", "organ"], correctAnswerIndex: 0 },
        { question: "Which of these is not a pillar of sustainability?", options: ["environmental sustainability", "economic sustainability", "trans-boundary sustainability", "social sustainability"], correctAnswerIndex: 2 },
        { question: "Good climate is a", options: ["chemical factor", "demographic factor", "push factor", "pull factor"], correctAnswerIndex: 3 },
        { question: "Importance value varies from", options: ["0 to 10", "0 to 50", "0 to 100", "0 to 300"], correctAnswerIndex: 3 },
        { question: "Consider the food chain: grass --> grasshopper --> frog --> snake --> hawk. In this food chain", options: ["frog is producer", "frog is consumer and carnivore", "frog is consumer and herbivore", "frog is decomposer"], correctAnswerIndex: 1 },
        { question: "The juvenile mortality rate is the annual number of deaths of juvenile per", options: ["100 births", "1000 births", "100 live births", "1000 live births"], correctAnswerIndex: 3 },
        { question: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called", options: ["adaptation", "mitigation", "deceleration", "maladaptation"], correctAnswerIndex: 0 },
        { question: "The scientific study of animal behaviour is called", options: ["behaviourism", "ecology", "ethology", "prey-predator dynamics"], correctAnswerIndex: 2 },
        { question: "Zoo is an example of", options: ["in-situ conservation", "ex-situ conservation", "in-situ preservation", "ex-situ preservation"], correctAnswerIndex: 1 }
    ],
    
};

export default quizData;
