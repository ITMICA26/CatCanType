// ===== Settings =====
const GAME_SECONDS = 60;

// Add as many words as you like: { word, definition }
const words = [
  { word: "ubiquitous", definition: "present or found everywhere at the same time" },
  { word: "ephemeral", definition: "lasting for a very short time" },
  { word: "benevolent", definition: "kind and generous toward other people" },
  { word: "pragmatic", definition: "dealing with things in a practical and realistic way" },
  { word: "ambiguous", definition: "open to more than one possible meaning" },
  { word: "meticulous", definition: "showing great attention to small details" },
  { word: "candid", definition: "honest and straightforward in speech" },
  { word: "scrutinize", definition: "to examine something very carefully" },
  { word: "resilient", definition: "able to recover quickly from difficulty" },
  { word: "verbose", definition: "using more words than are necessary" },
  { word: "conundrum", definition: "a confusing problem with no easy answer" },
  { word: "mitigate", definition: "to make something less severe or harmful" },
  { word: "ostentatious", definition: "showy in a way meant to impress other people" },
  { word: "tenacious", definition: "holding firmly to a goal and not giving up" },
  { word: "lucid", definition: "clearly expressed and easy to understand" },
  { word: "reticent", definition: "unwilling to share thoughts or feelings" },
  { word: "abate", definition: "to become less intense or severe" },
  { word: "abdicate", definition: "to give up a position of power" },
  { word: "aberration", definition: "a departure from what is normal" },
  { word: "abhor", definition: "to hate or detest intensely" },
  { word: "abject", definition: "extremely bad or hopeless" },
  { word: "abjure", definition: "to formally reject or renounce" },
  { word: "abrogate", definition: "to abolish a law or agreement" },
  { word: "abscond", definition: "to leave secretly to avoid capture" },
  { word: "absolve", definition: "to free from blame or guilt" },
  { word: "abstain", definition: "to deliberately avoid doing something" },
  { word: "abstruse", definition: "difficult to understand" },
  { word: "accede", definition: "to agree to a request or demand" },
  { word: "acclaim", definition: "to praise enthusiastically" },
  { word: "accolade", definition: "an award or expression of praise" },
  { word: "acquiesce", definition: "to accept something without protest" },
  { word: "acrimony", definition: "bitterness or hostility" },
  { word: "acumen", definition: "the ability to make good judgments" },
  { word: "adamant", definition: "refusing to change one's opinion" },
  { word: "admonish", definition: "to warn or reprimand gently" },
  { word: "adroit", definition: "clever and skillful" },
  { word: "adulation", definition: "excessive admiration or praise" },
  { word: "adversity", definition: "a difficult or unfortunate situation" },
  { word: "advocate", definition: "to publicly support a cause" },
  { word: "aesthetic", definition: "concerned with beauty or artistic taste" },
  { word: "affable", definition: "friendly and easy to talk to" },
  { word: "affinity", definition: "a natural liking or connection" },
  { word: "affluent", definition: "wealthy" },
  { word: "aggrandize", definition: "to increase power, status, or wealth" },
  { word: "alacrity", definition: "cheerful readiness or eagerness" },
  { word: "alienate", definition: "to make someone feel isolated" },
  { word: "alleviate", definition: "to make pain or difficulty less severe" },
  { word: "allude", definition: "to refer indirectly to something" },
  { word: "aloof", definition: "emotionally distant or reserved" },
  { word: "altruism", definition: "concern for the well-being of others" },
  { word: "amalgamate", definition: "to combine into one" },
  { word: "ambivalent", definition: "having mixed or conflicting feelings" },
  { word: "ameliorate", definition: "to improve a bad situation" },
  { word: "amenable", definition: "willing to cooperate or be influenced" },
  { word: "amiable", definition: "pleasant and friendly" },
  { word: "amicable", definition: "friendly and peaceful" },
  { word: "amorphous", definition: "without a clear shape or form" },
  { word: "anachronism", definition: "something out of its proper historical time" },
  { word: "analogy", definition: "a comparison showing similarities" },
  { word: "anarchy", definition: "a state without effective government" },
  { word: "anathema", definition: "something intensely disliked" },
  { word: "anecdote", definition: "a short, interesting personal story" },
  { word: "animosity", definition: "strong hostility or resentment" },
  { word: "anomaly", definition: "something that differs from the norm" },
  { word: "antagonize", definition: "to provoke or make hostile" },
  { word: "antediluvian", definition: "extremely old-fashioned or ancient" },
  { word: "antipathy", definition: "a strong feeling of dislike" },
  { word: "antithesis", definition: "the direct opposite of something" },
  { word: "apathy", definition: "lack of interest or emotion" },
  { word: "appease", definition: "to calm or satisfy someone" },
  { word: "apprehensive", definition: "anxious about something that may happen" },
  { word: "arbitrary", definition: "based on personal choice rather than reason" },
  { word: "arcane", definition: "understood by very few people" },
  { word: "ardent", definition: "enthusiastic or passionate" },
  { word: "arduous", definition: "requiring great effort" },
  { word: "articulate", definition: "able to express ideas clearly" },
  { word: "ascetic", definition: "practicing strict self-discipline" },
  { word: "assiduous", definition: "showing persistent care and effort" },
  { word: "assuage", definition: "to ease an unpleasant feeling" },
  { word: "astute", definition: "clever at noticing and understanding things" },
  { word: "audacious", definition: "bold and willing to take risks" },
  { word: "austere", definition: "plain, strict, or without comfort" },
  { word: "avarice", definition: "extreme greed for wealth" },
  { word: "banal", definition: "boring because it is so common" },
  { word: "belie", definition: "to give a false impression of" },
  { word: "bellicose", definition: "eager to fight or argue" },
  { word: "belligerent", definition: "hostile and aggressive" },
  { word: "benign", definition: "harmless or gentle" },
  { word: "bequeath", definition: "to leave property to someone in a will" },
  { word: "bombastic", definition: "using grand language to sound important" },
  { word: "boorish", definition: "rude and insensitive" },
  { word: "brevity", definition: "the quality of being brief" },
  { word: "bucolic", definition: "relating to the pleasant countryside" },
  { word: "burgeon", definition: "to grow or develop rapidly" },
  { word: "cacophony", definition: "a harsh mixture of sounds" },
  { word: "cajole", definition: "to persuade through flattery" },
  { word: "calamity", definition: "a serious disaster" },
  { word: "callous", definition: "showing little concern for others" },
  { word: "candor", definition: "honesty and openness" },
  { word: "capricious", definition: "changing suddenly and unpredictably" },
  { word: "castigate", definition: "to criticize or punish severely" },
  { word: "catharsis", definition: "emotional release or purification" },
  { word: "caustic", definition: "sarcastic or corrosively critical" },
  { word: "censure", definition: "to express strong formal disapproval" },
  { word: "chicanery", definition: "deception or trickery" },
  { word: "circumspect", definition: "careful to consider possible consequences" },
  { word: "circumvent", definition: "to find a way around an obstacle" },
  { word: "clamor", definition: "a loud outcry or demand" },
  { word: "clandestine", definition: "kept secret or done in secret" },
  { word: "clemency", definition: "mercy or leniency" },
  { word: "coalesce", definition: "to come together into one whole" },
  { word: "cogent", definition: "clear, logical, and convincing" },
  { word: "cognizant", definition: "aware or conscious of something" },
  { word: "coherent", definition: "logical and easy to follow" },
  { word: "collusion", definition: "secret cooperation for a dishonest purpose" },
  { word: "complacent", definition: "too satisfied to notice possible problems" },
  { word: "compliant", definition: "willing to follow rules or requests" },
  { word: "compunction", definition: "a feeling of guilt or regret" },
  { word: "conciliatory", definition: "intended to restore goodwill" },
  { word: "concomitant", definition: "naturally accompanying something else" },
  { word: "conflagration", definition: "a large and destructive fire" },
  { word: "confluence", definition: "the meeting or merging of things" },
  { word: "conformity", definition: "behavior that follows accepted standards" },
  { word: "confound", definition: "to confuse or puzzle" },
  { word: "conjecture", definition: "an opinion based on incomplete evidence" },
  { word: "connoisseur", definition: "an expert judge of quality or taste" },
  { word: "consensus", definition: "general agreement among a group" },
  { word: "conspicuous", definition: "easy to notice" },
  { word: "consternation", definition: "great surprise or dismay" },
  { word: "contentious", definition: "likely to cause disagreement" },
  { word: "contrite", definition: "feeling sincere remorse" },
  { word: "convoluted", definition: "extremely complex and difficult to follow" },
  { word: "copious", definition: "abundant or plentiful" },
  { word: "corroborate", definition: "to confirm with supporting evidence" },
  { word: "cosmopolitan", definition: "familiar with many cultures" },
  { word: "credulous", definition: "too ready to believe things" },
  { word: "cryptic", definition: "mysterious or difficult to understand" },
  { word: "culpable", definition: "deserving blame" },
  { word: "cursory", definition: "quick and not thorough" },
  { word: "curtail", definition: "to reduce or limit" },
  { word: "dearth", definition: "a lack or shortage" },
  { word: "debacle", definition: "a sudden and complete failure" },
  { word: "debilitate", definition: "to weaken severely" },
  { word: "decorum", definition: "proper and respectful behavior" },
  { word: "deference", definition: "respectful submission to another's judgment" },
  { word: "defunct", definition: "no longer existing or functioning" },
  { word: "deleterious", definition: "causing harm or damage" },
  { word: "delineate", definition: "to describe or outline precisely" },
  { word: "demagogue", definition: "a leader who manipulates public emotions" },
  { word: "demur", definition: "to raise an objection" },
  { word: "denigrate", definition: "to unfairly criticize or belittle" },
  { word: "denounce", definition: "to publicly condemn" },
  { word: "deplete", definition: "to use up a supply" },
  { word: "deplore", definition: "to strongly disapprove of" },
  { word: "depravity", definition: "moral corruption" },
  { word: "deride", definition: "to ridicule or mock" },
  { word: "derivative", definition: "copied from or based on something else" },
  { word: "desiccate", definition: "to dry out completely" },
  { word: "despondent", definition: "feeling deeply discouraged" },
  { word: "despot", definition: "a ruler with absolute power" },
  { word: "destitute", definition: "extremely poor and lacking necessities" },
  { word: "deter", definition: "to discourage or prevent an action" },
  { word: "detrimental", definition: "causing harm or damage" },
  { word: "devious", definition: "dishonest or indirect" },
  { word: "didactic", definition: "intended to teach a lesson" },
  { word: "diffident", definition: "shy because of a lack of confidence" },
  { word: "dilatory", definition: "slow or intended to delay" },
  { word: "diligent", definition: "careful and hardworking" },
  { word: "diminutive", definition: "very small" },
  { word: "discerning", definition: "showing good judgment" },
  { word: "discord", definition: "disagreement or lack of harmony" },
  { word: "discrepancy", definition: "a difference that should not exist" },
  { word: "discretion", definition: "careful judgment about what to do" },
  { word: "disdain", definition: "the feeling that something is unworthy" },
  { word: "disingenuous", definition: "not sincere or candid" },
  { word: "disparate", definition: "fundamentally different" },
  { word: "disseminate", definition: "to spread information widely" },
  { word: "dissonance", definition: "a lack of harmony or agreement" },
  { word: "dissuade", definition: "to persuade someone not to act" },
  { word: "divergent", definition: "moving or developing in different directions" },
  { word: "dogmatic", definition: "insisting that beliefs are unquestionably true" },
  { word: "dormant", definition: "inactive but capable of becoming active" },
  { word: "dubious", definition: "doubtful or suspicious" },
  { word: "duplicity", definition: "deliberate dishonesty" },
  { word: "ebullient", definition: "cheerful and full of energy" },
  { word: "eclectic", definition: "drawing from many different sources" },
  { word: "edify", definition: "to instruct or improve morally or intellectually" },
  { word: "efface", definition: "to erase or make indistinct" },
  { word: "effervescent", definition: "lively, enthusiastic, or bubbly" },
  { word: "efficacy", definition: "the ability to produce a desired result" },
  { word: "effrontery", definition: "shameless boldness or rudeness" },
  { word: "effusive", definition: "expressing feelings excessively" },
  { word: "egalitarian", definition: "believing in equal rights for all" },
  { word: "egregious", definition: "remarkably bad or shocking" },
  { word: "elated", definition: "extremely happy" },
  { word: "elicit", definition: "to draw out a response" },
  { word: "elucidate", definition: "to make something clear" },
  { word: "elusive", definition: "difficult to find, catch, or understand" },
  { word: "emaciated", definition: "abnormally thin or weak" },
  { word: "embellish", definition: "to decorate or add details" },
  { word: "eminent", definition: "famous and respected" },
  { word: "empirical", definition: "based on observation or experiment" },
  { word: "emulate", definition: "to imitate in order to equal or surpass" },
  { word: "enervate", definition: "to drain energy or vitality" },
  { word: "engender", definition: "to cause or bring about" },
  { word: "enigmatic", definition: "mysterious and difficult to interpret" },
  { word: "enmity", definition: "deep-seated hostility" },
  { word: "epitome", definition: "a perfect example of something" },
  { word: "equanimity", definition: "calmness under pressure" },
  { word: "equivocal", definition: "open to multiple interpretations" },
  { word: "erudite", definition: "having extensive knowledge" },
  { word: "esoteric", definition: "understood by a small specialized group" },
  { word: "espouse", definition: "to support or adopt a belief" },
  { word: "evanescent", definition: "quickly fading or disappearing" },
  { word: "exacerbate", definition: "to make a problem worse" },
  { word: "exacting", definition: "demanding great effort or precision" },
  { word: "exculpate", definition: "to clear someone from blame" },
  { word: "exigent", definition: "requiring urgent attention" },
  { word: "exonerate", definition: "to officially clear from blame" },
  { word: "expedient", definition: "convenient or practical, sometimes unprincipled" },
  { word: "expiate", definition: "to make amends for wrongdoing" },
  { word: "extol", definition: "to praise enthusiastically" },
  { word: "extraneous", definition: "irrelevant or unnecessary" },
  { word: "extrapolate", definition: "to estimate using known information" },
  { word: "facetious", definition: "treating serious matters with inappropriate humor" },
  { word: "fallacious", definition: "based on faulty reasoning" },
  { word: "fastidious", definition: "very attentive to detail and cleanliness" },
  { word: "fatuous", definition: "silly or pointless" },
  { word: "feasible", definition: "possible and practical" },
  { word: "fecund", definition: "highly fertile or productive" },
  { word: "felicitous", definition: "well chosen or suited to the occasion" },
  { word: "fervent", definition: "intensely passionate" },
  { word: "fervid", definition: "marked by intense emotion" },
  { word: "fickle", definition: "changing loyalties or preferences often" },
  { word: "filibuster", definition: "a prolonged speech used to delay legislation" },
  { word: "flagrant", definition: "obviously offensive or wrong" },
  { word: "florid", definition: "overly elaborate or ornate" },
  { word: "flout", definition: "to openly disregard a rule" },
  { word: "foible", definition: "a minor weakness or fault" },
  { word: "fortuitous", definition: "happening by chance, often luckily" },
  { word: "fractious", definition: "irritable and difficult to control" },
  { word: "frugal", definition: "careful about spending money or resources" },
  { word: "furtive", definition: "secretive and intended to avoid notice" },
  { word: "garrulous", definition: "excessively talkative" },
  { word: "germane", definition: "relevant to the matter at hand" },
  { word: "glib", definition: "fluent but insincere or shallow" },
  { word: "grandiloquent", definition: "using pompous or extravagant language" },
  { word: "gregarious", definition: "sociable and enjoying company" },
  { word: "guile", definition: "clever but dishonest behavior" },
  { word: "hackneyed", definition: "overused and lacking originality" },
  { word: "halcyon", definition: "peaceful, happy, and prosperous" },
  { word: "haughty", definition: "arrogantly superior" },
  { word: "hedonism", definition: "the pursuit of pleasure as a primary goal" },
  { word: "hegemony", definition: "dominance by one group or country" },
  { word: "heterogeneous", definition: "made up of different kinds of things" },
  { word: "homogeneous", definition: "made up of similar kinds of things" },
  { word: "hyperbole", definition: "deliberate exaggeration" },
  { word: "iconoclast", definition: "someone who challenges established beliefs" },
  { word: "idiosyncrasy", definition: "a distinctive personal habit or feature" },
  { word: "ignominious", definition: "deserving shame or disgrace" },
  { word: "immutable", definition: "unable to be changed" },
  { word: "impassive", definition: "showing no emotion" },
  { word: "impecunious", definition: "having little or no money" },
  { word: "imperious", definition: "arrogantly commanding" },
  { word: "impertinent", definition: "rude or disrespectful" },
  { word: "implacable", definition: "impossible to appease or calm" },
  { word: "implicit", definition: "suggested without being directly stated" },
  { word: "impregnable", definition: "impossible to capture or overcome" },
  { word: "impudent", definition: "boldly disrespectful" },
  { word: "inane", definition: "silly or lacking meaning" },
  { word: "incendiary", definition: "likely to provoke anger or conflict" },
  { word: "incessant", definition: "continuing without interruption" },
  { word: "incisive", definition: "clear, direct, and intelligent" },
  { word: "incongruous", definition: "not fitting with its surroundings" },
  { word: "incontrovertible", definition: "impossible to deny or dispute" },
  { word: "incorrigible", definition: "not able to be corrected or reformed" },
  { word: "indefatigable", definition: "persisting without becoming tired" },
  { word: "indolent", definition: "habitually lazy" },
  { word: "ineffable", definition: "too great to be expressed in words" },
  { word: "inexorable", definition: "impossible to stop or persuade" },
  { word: "ingenuous", definition: "innocent, sincere, and straightforward" },
  { word: "inimical", definition: "harmful or hostile" },
  { word: "innocuous", definition: "not harmful or offensive" },
  { word: "insatiable", definition: "impossible to satisfy" },
  { word: "insidious", definition: "gradually causing harm in a hidden way" },
  { word: "insipid", definition: "lacking flavor, interest, or excitement" },
  { word: "insolent", definition: "arrogantly rude" },
  { word: "intrepid", definition: "fearless and adventurous" },
  { word: "intransigent", definition: "unwilling to compromise" },
  { word: "inundate", definition: "to overwhelm with a large amount" },
  { word: "inured", definition: "accustomed to something difficult or unpleasant" },
  { word: "inveterate", definition: "long established and unlikely to change" },
  { word: "irascible", definition: "easily angered" },
  { word: "irresolute", definition: "uncertain about what to do" },
  { word: "itinerant", definition: "traveling from place to place" },
  { word: "jocular", definition: "playful or joking" },
  { word: "judicious", definition: "showing good judgment" },
  { word: "juxtapose", definition: "to place things side by side for comparison" },
  { word: "laconic", definition: "using very few words" },
  { word: "languid", definition: "lacking energy or enthusiasm" },
  { word: "latent", definition: "present but not yet visible or active" },
  { word: "laud", definition: "to praise highly" },
  { word: "lethargic", definition: "sluggish and lacking energy" },
  { word: "levity", definition: "lightness or humor, especially in serious situations" },
  { word: "libertine", definition: "someone who ignores conventional moral restraints" },
  { word: "licentious", definition: "disregarding accepted moral rules" },
  { word: "limpid", definition: "clear and transparent" },
  { word: "loquacious", definition: "very talkative" },
  { word: "lugubrious", definition: "looking or sounding mournful" },
  { word: "magnanimous", definition: "generous and forgiving toward a rival" },
  { word: "malediction", definition: "a curse" },
  { word: "malfeasance", definition: "wrongdoing, especially by an official" },
  { word: "malleable", definition: "easily shaped or influenced" },
  { word: "maverick", definition: "an independent-minded person" },
  { word: "maudlin", definition: "overly sentimental" },
  { word: "mendacious", definition: "lying or untruthful" },
  { word: "mercurial", definition: "changing moods quickly and unpredictably" },
  { word: "meritorious", definition: "deserving praise or reward" },
  { word: "misanthrope", definition: "a person who dislikes humankind" },
  { word: "misnomer", definition: "an inaccurate or misleading name" },
  { word: "mollify", definition: "to calm someone's anger" },
  { word: "morose", definition: "gloomy or sullen" },
  { word: "munificent", definition: "extremely generous" },
  { word: "mundane", definition: "ordinary and lacking excitement" },
  { word: "nebulous", definition: "unclear or vague" },
  { word: "nefarious", definition: "wicked or criminal" },
  { word: "negligible", definition: "too small to matter" },
  { word: "neophyte", definition: "a beginner" },
  { word: "noisome", definition: "offensive or harmful, especially in smell" },
  { word: "nonchalant", definition: "calm and unconcerned" },
  { word: "nostrum", definition: "a supposed remedy with little proof" },
  { word: "notorious", definition: "famous for something bad" },
  { word: "novel", definition: "new or unusual" },
  { word: "noxious", definition: "harmful or poisonous" },
  { word: "obdurate", definition: "stubbornly refusing to change" },
  { word: "obfuscate", definition: "to make something confusing or unclear" },
  { word: "oblivious", definition: "unaware of what is happening" },
  { word: "obscure", definition: "unclear or not well known" },
  { word: "obsequious", definition: "excessively eager to please someone powerful" },
  { word: "obstinate", definition: "stubborn and unwilling to change" },
  { word: "obstreperous", definition: "noisy and difficult to control" },
  { word: "obtuse", definition: "slow to understand" },
  { word: "obviate", definition: "to remove a need or difficulty" },
  { word: "officious", definition: "overly eager to give unwanted help" },
  { word: "onerous", definition: "burdensome or difficult" },
  { word: "opprobrium", definition: "harsh public criticism or disgrace" },
  { word: "ornate", definition: "elaborately decorated" },
  { word: "orthodox", definition: "following established beliefs or practices" },
  { word: "oscillate", definition: "to swing or alternate repeatedly" },
  { word: "ostracize", definition: "to exclude someone from a group" },
  { word: "palliate", definition: "to make a problem seem less serious" },
  { word: "palpable", definition: "so clear it can almost be felt" },
  { word: "panacea", definition: "a solution claimed to fix every problem" },
  { word: "paradigm", definition: "a model or pattern" },
  { word: "paradox", definition: "a seemingly contradictory statement that may be true" },
  { word: "paragon", definition: "a model of excellence" },
  { word: "pariah", definition: "a person rejected by society" },
  { word: "parochial", definition: "narrow in outlook or limited in scope" },
  { word: "parsimonious", definition: "unwilling to spend money" },
  { word: "partisan", definition: "strongly supporting one side" },
  { word: "paucity", definition: "a scarcity or shortage" },
  { word: "pedantic", definition: "overly concerned with minor rules or details" },
  { word: "pedestrian", definition: "ordinary, dull, or unimaginative" },
  { word: "pejorative", definition: "expressing disapproval or contempt" },
  { word: "pellucid", definition: "very clear in meaning or appearance" },
  { word: "penchant", definition: "a strong liking or tendency" },
  { word: "penitent", definition: "feeling regret for wrongdoing" },
  { word: "penurious", definition: "extremely poor or unwilling to spend" },
  { word: "perennial", definition: "lasting or recurring for many years" },
  { word: "perfidious", definition: "disloyal or treacherous" },
  { word: "perfunctory", definition: "done with little care or interest" },
  { word: "peripatetic", definition: "traveling from place to place" },
  { word: "peripheral", definition: "of secondary importance or near the edge" },
  { word: "pernicious", definition: "causing great harm gradually" },
  { word: "perspicacious", definition: "having keen insight and understanding" },
  { word: "pertinacious", definition: "holding firmly to an opinion or course" },
  { word: "pertinent", definition: "relevant to the subject" },
  { word: "pervasive", definition: "spreading throughout an area or group" },
  { word: "petulant", definition: "childishly irritable" },
  { word: "phlegmatic", definition: "calm and unemotional" },
  { word: "pious", definition: "deeply religious or devoted" },
  { word: "pithy", definition: "brief but full of meaning" },
  { word: "placate", definition: "to calm or satisfy" },
  { word: "placid", definition: "calm and peaceful" },
  { word: "platitude", definition: "a dull statement used too often" },
  { word: "plausible", definition: "seeming reasonable or believable" },
  { word: "plethora", definition: "an excessive amount" },
  { word: "poignant", definition: "deeply moving or emotionally affecting" },
  { word: "polemic", definition: "a strong verbal or written attack" },
  { word: "prate", definition: "to talk foolishly at length" },
  { word: "precarious", definition: "uncertain or dangerously unstable" },
  { word: "precedent", definition: "an earlier example used as a guide" },
  { word: "precipitate", definition: "to cause something to happen suddenly" },
  { word: "precipitous", definition: "very steep or happening too quickly" },
  { word: "precursor", definition: "something that comes before and signals another" },
  { word: "predilection", definition: "a preference or liking" },
  { word: "prescient", definition: "able to anticipate future events" },
  { word: "presumptuous", definition: "overconfident or taking liberties" },
  { word: "prevaricate", definition: "to avoid the truth by being evasive" },
  { word: "probity", definition: "honesty and strong moral principles" },
  { word: "proclivity", definition: "a natural tendency or inclination" },
  { word: "prodigal", definition: "wastefully extravagant" },
  { word: "prodigious", definition: "remarkably great in size or degree" },
  { word: "profligate", definition: "recklessly wasteful or immoral" },
  { word: "profound", definition: "deep or intense in meaning" },
  { word: "proliferate", definition: "to increase rapidly in number" },
  { word: "prolific", definition: "producing much or many things" },
  { word: "propensity", definition: "a natural tendency" },
  { word: "propitious", definition: "favorable or likely to bring success" },
  { word: "propriety", definition: "appropriate or socially acceptable behavior" },
  { word: "prosaic", definition: "ordinary or lacking imagination" },
  { word: "proscribe", definition: "to forbid or condemn" },
  { word: "protean", definition: "able to change form easily" },
  { word: "provident", definition: "careful in planning for the future" },
  { word: "provincial", definition: "limited in outlook or experience" },
  { word: "provisional", definition: "temporary and subject to change" },
  { word: "prudent", definition: "wise and careful about decisions" },
  { word: "puerile", definition: "childishly immature" },
  { word: "pugnacious", definition: "eager to argue or fight" },
  { word: "punctilious", definition: "very careful about rules and details" },
  { word: "quagmire", definition: "a difficult or complicated situation" },
  { word: "quaint", definition: "attractively old-fashioned" },
  { word: "qualm", definition: "an uneasy feeling or doubt" },
  { word: "querulous", definition: "habitually complaining" },
  { word: "quiescent", definition: "inactive or at rest" },
  { word: "quixotic", definition: "idealistic in an impractical way" },
  { word: "quotidian", definition: "ordinary or occurring daily" },
  { word: "rancor", definition: "bitter resentment" },
  { word: "rarefied", definition: "elevated, refined, or understood by few" },
  { word: "recalcitrant", definition: "stubbornly resistant to authority" },
  { word: "recant", definition: "to withdraw a previously stated belief" },
  { word: "recondite", definition: "difficult to understand or little known" },
  { word: "recrimination", definition: "an accusation made in response to another" },
  { word: "redolent", definition: "strongly suggestive or fragrant" },
  { word: "relegate", definition: "to assign to a lower position" },
  { word: "remiss", definition: "careless in fulfilling responsibilities" },
  { word: "replete", definition: "completely filled or supplied" },
  { word: "reprehensible", definition: "deserving strong disapproval" },
  { word: "reproach", definition: "to express disappointment or blame" },
  { word: "repudiate", definition: "to reject or refuse to accept" },
  { word: "rescind", definition: "to officially cancel" },
  { word: "resolute", definition: "firmly determined" },
  { word: "reverent", definition: "showing deep respect" },
  { word: "rhetoric", definition: "language used to persuade or impress" },
  { word: "ribald", definition: "crude or humorously vulgar" },
  { word: "rife", definition: "widespread or abundant, often undesirably" },
  { word: "rigorous", definition: "strict, thorough, and exacting" },
  { word: "rudimentary", definition: "basic or undeveloped" },
  { word: "salient", definition: "most noticeable or important" },
  { word: "salubrious", definition: "healthful or beneficial" },
  { word: "sanction", definition: "official approval or a penalty" },
  { word: "sanguine", definition: "optimistic, especially in difficult situations" },
  { word: "sardonic", definition: "grimly mocking or cynical" },
  { word: "scathing", definition: "severely critical" },
  { word: "scintillating", definition: "brilliant, lively, or sparkling" },
  { word: "scrupulous", definition: "careful to act honestly and correctly" },
  { word: "sedulous", definition: "diligent and persistent" },
  { word: "serendipity", definition: "the occurrence of a fortunate discovery by chance" },
  { word: "servile", definition: "excessively submissive" },
  { word: "soporific", definition: "causing sleep or drowsiness" },
  { word: "sordid", definition: "morally degraded or involving shameful actions" },
  { word: "specious", definition: "seemingly reasonable but actually false" },
  { word: "sporadic", definition: "occurring irregularly" },
  { word: "spurious", definition: "false or not genuine" },
  { word: "stagnant", definition: "not moving or developing" },
  { word: "staunch", definition: "loyal and committed" },
  { word: "stentorian", definition: "extremely loud and powerful" },
  { word: "stoic", definition: "enduring pain without showing emotion" },
  { word: "strident", definition: "loud, harsh, or forceful" },
  { word: "stultify", definition: "to prevent development or make ineffective" },
  { word: "substantiate", definition: "to support with evidence" },
  { word: "subtle", definition: "not obvious or easily noticed" },
  { word: "succinct", definition: "brief and clearly expressed" },
  { word: "supercilious", definition: "acting as though superior to others" },
  { word: "superfluous", definition: "more than is needed" },
  { word: "surreptitious", definition: "done secretly to avoid notice" },
  { word: "sycophant", definition: "a person who flatters someone powerful" },
  { word: "tacit", definition: "understood without being directly stated" },
  { word: "taciturn", definition: "habitually quiet" },
  { word: "tantamount", definition: "equivalent in effect or value" },
  { word: "temerity", definition: "reckless boldness" },
  { word: "temperance", definition: "moderation and self-restraint" },
  { word: "temporal", definition: "related to time or worldly matters" },
  { word: "tenable", definition: "able to be defended with evidence" },
  { word: "tendentious", definition: "expressing a biased point of view" },
  { word: "tenuous", definition: "weak, slight, or poorly supported" },
  { word: "terse", definition: "brief and to the point" },
  { word: "timorous", definition: "fearful or timid" },
  { word: "tirade", definition: "a long, angry speech" },
  { word: "torpid", definition: "inactive or sluggish" },
  { word: "tractable", definition: "easy to manage or control" },
  { word: "transient", definition: "lasting only a short time" },
  { word: "trenchant", definition: "sharp, forceful, and effective" },
  { word: "trepidation", definition: "fear or anxiety about what may happen" },
  { word: "trite", definition: "overused and lacking originality" },
  { word: "truculent", definition: "aggressively defiant" },
  { word: "tumult", definition: "loud confusion or disorder" },
  { word: "turgid", definition: "overly complex or pompous in style" },
  { word: "turpitude", definition: "shameful or immoral behavior" },
  { word: "umbrage", definition: "offense or resentment" },
  { word: "unctuous", definition: "excessively flattering or insincerely earnest" },
  { word: "unequivocal", definition: "clear and leaving no doubt" },
  { word: "unprecedented", definition: "never having happened before" },
  { word: "urbane", definition: "polished, sophisticated, and courteous" },
  { word: "usurp", definition: "to seize power without the right to do so" },
  { word: "vacillate", definition: "to waver between choices or opinions" },
  { word: "vacuous", definition: "empty of thought or meaning" },
  { word: "vapid", definition: "dull or lacking liveliness" },
  { word: "vehement", definition: "showing intense feeling or force" },
  { word: "venal", definition: "willing to act dishonestly for money" },
  { word: "venerate", definition: "to regard with deep respect" },
  { word: "veracity", definition: "truthfulness or accuracy" },
  { word: "vex", definition: "to annoy or frustrate" },
  { word: "vicarious", definition: "experienced through another person's actions" },
  { word: "vicissitude", definition: "a change in circumstances, often difficult" },
  { word: "vilify", definition: "to speak about someone in an abusive way" }
];


// ===== Page elements =====
const cat = document.getElementById("cat");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const bestDisplay = document.getElementById("best");
const messageDisplay = document.getElementById("message");
const wordDisplay = document.getElementById("word");
const definitionDisplay = document.getElementById("definition");
const input = document.getElementById("typing-input");
const startButton = document.getElementById("start");
const resultDisplay = document.getElementById("result");

const popSound = new Audio("pop.mp3");

// ===== Game state =====
let bestWpm = Number(localStorage.getItem("bestWpm")) || 0;
let state = "idle";            // "idle", "ready", "running", "over"
let score = 0;
let level = 1;
let deck = [];                 // shuffled words waiting to be shown
let current = null;            // the word on screen right now
let startTime = 0;
let timerId = null;
let completedChars = 0;        // correct characters in finished words
let wordsDone = 0;
let typedKeys = 0;             // every character the player typed
let correctKeys = 0;           // how many of those were right
let prevLength = 0;            // length of the input last time (to spot new keystrokes)
let messageTimer = null;

bestDisplay.textContent = bestWpm;

// ===== Helpers =====
function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function countCorrect(typed, target) {
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) {
      correct++;
    }
  }
  return correct;
}

// Higher level = more points per correct character
function multiplier() {
  return 1 + (level - 1) * 0.5;
}

function scoreForNextLevel() {
  return level * 150;
}

function showMessage(text) {
  messageDisplay.textContent = text;
  clearTimeout(messageTimer);
  messageTimer = setTimeout(function () {
    messageDisplay.textContent = "";
  }, 2500);
}

// ===== Cat picture depends on level =====
function updateCatImage() {
  if (level >= 4) {
    cat.src = "cat_images/holo-cat.png";
  } else if (level === 3) {
    cat.src = "cat_images/santa-cat.png";
  } else if (level === 2) {
    cat.src = "cat_images/silver-cat.png";
  } else {
    cat.src = "cat.png";
  }
}

// ===== WPM: one "word" = 5 characters =====
function calcWpm(elapsedMs) {
  const minutes = elapsedMs / 60000;
  if (minutes < 1 / 60) {
    return 0;   // too early to measure
  }
  const typedNow = current ? countCorrect(input.value, current.definition) : 0;
  const chars = completedChars + typedNow;
  return Math.round(chars / 5 / minutes);
}

function updateAccuracy() {
  const accuracy = typedKeys === 0 ? 100 : Math.round((correctKeys / typedKeys) * 100);
  accuracyDisplay.textContent = accuracy;
  return accuracy;
}

function updateStats() {
  scoreDisplay.textContent = score;
  levelDisplay.textContent = level;
  bestDisplay.textContent = bestWpm;
  updateAccuracy();
}

// ===== Showing the definition with green / red letters =====
function renderDefinition() {
  const typed = input.value;
  const target = current.definition;
  definitionDisplay.innerHTML = "";

  for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");
    span.textContent = target[i];
    if (i < typed.length) {
      span.className = typed[i] === target[i] ? "correct" : "wrong";
    } else if (i === typed.length) {
      span.className = "current";
    }
    definitionDisplay.appendChild(span);
  }
}

function nextWord() {
  if (deck.length === 0) {
    deck = shuffle(words);
  }
  current = deck.pop();
  wordDisplay.textContent = current.word;
  input.value = "";
  prevLength = 0;
  renderDefinition();
}

// ===== Level up =====
function checkLevelUp() {
  while (score >= scoreForNextLevel()) {
    level++;
    showMessage("Level " + level + "! Points are now x" + multiplier());
  }
}

// ===== Finishing one word =====
function finishWord(typed) {
  const correct = countCorrect(typed, current.definition);
  completedChars += correct;
  wordsDone++;
  score += Math.round(correct * multiplier());

  checkLevelUp();
  updateCatImage();
  updateStats();

  popSound.currentTime = 0;
  popSound.play().catch(function () {});   // ignore if pop.mp3 is missing

  cat.classList.remove("bounce");
  void cat.offsetWidth;
  cat.classList.add("bounce");

  nextWord();
}

// ===== Timer =====
function tick() {
  const elapsed = (Date.now() - startTime) / 1000;
  const left = Math.max(0, Math.ceil(GAME_SECONDS - elapsed));
  timeDisplay.textContent = left;
  wpmDisplay.textContent = calcWpm(elapsed * 1000);

  if (left <= 0) {
    endGame();
  }
}

function startTimer() {
  state = "running";
  startTime = Date.now();
  timerId = setInterval(tick, 200);
}

// ===== Start and end =====
function startGame() {
  clearInterval(timerId);
  score = 0;
  level = 1;
  deck = shuffle(words);
  completedChars = 0;
  wordsDone = 0;
  typedKeys = 0;
  correctKeys = 0;
  state = "ready";

  timeDisplay.textContent = GAME_SECONDS;
  wpmDisplay.textContent = 0;
  resultDisplay.textContent = "";
  messageDisplay.textContent = "Timer starts when you type your first letter!";
  startButton.textContent = "Restart";

  updateCatImage();
  updateStats();
  nextWord();

  input.disabled = false;
  input.focus();
}

function endGame() {
  clearInterval(timerId);
  state = "over";
  input.disabled = true;

  const finalWpm = calcWpm(GAME_SECONDS * 1000);
  const accuracy = updateAccuracy();
  wpmDisplay.textContent = finalWpm;
  timeDisplay.textContent = 0;

  let recordText = "";
  if (finalWpm > bestWpm) {
    bestWpm = finalWpm;
    localStorage.setItem("bestWpm", bestWpm);
    recordText = "\n🏆 New best WPM!";
  }
  bestDisplay.textContent = bestWpm;

  resultDisplay.textContent =
    "⏰ Time's up!\n" +
    "WPM: " + finalWpm + "   Accuracy: " + accuracy + "%\n" +
    "Words finished: " + wordsDone + "   Score: " + score + "   Level: " + level +
    recordText;
}

// ===== Typing =====
input.addEventListener("input", function () {
  if (state === "ready") {
    startTimer();
    messageDisplay.textContent = "";
  }
  if (state !== "running") {
    return;
  }

  const typed = input.value;
  const target = current.definition;

  // Only judge the NEW characters (so backspace doesn't hurt accuracy twice)
  for (let i = prevLength; i < typed.length; i++) {
    typedKeys++;
    if (typed[i] === target[i]) {
      correctKeys++;
    }
  }
  prevLength = typed.length;
  updateAccuracy();

  if (typed.length >= target.length) {
    finishWord(typed);
  } else {
    renderDefinition();
  }
});

// No copy-pasting the answer!
input.addEventListener("paste", function (event) {
  event.preventDefault();
});

startButton.addEventListener("click", startGame);