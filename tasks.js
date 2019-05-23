// Enter help for a list or the name of one of the first 10 James bond films 
//(Goldfinger, Thunderball as examples.)


const express = require("express")
const serverless = require("serverless-http")

const app = express()

app.get("/tasks", function (request, response) {
  const title = request.query.title

  var jb = [{
    title: "Doctor No",
    sku: "JB01",
    image: "doctor_no.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "Strangways, the British Intelligence (SIS) Station Chief in Jamaica, is killed. In response, British agent James Bond—also known as 007—is sent to Jamaica to investigate the circumstances. During his investigation Bond meets Quarrel, a Cayman fisherman, who had been working with Strangways around the nearby islands to collect mineral samples. One of the islands was Crab Key, home to the reclusive Dr. No. Bond visits the island, where he meets a local shell diver, Honey Ryder. The three are attacked by No's men, who kill Quarrel using a flame-throwing armoured tractor; Bond and Honey are taken prisoner. Dr. No informs them he is a member of SPECTRE, the SPecial Executive for Counter-intelligence, Terrorism, Revenge, and Extortion, and he plans to disrupt the Project Mercury space launch from Cape Canaveral with his atomic-powered radio beam. Bond and Honey escape from the island, killing No and blowing up his lair in the process."
  },
  {
    title: "From Russia with love",
    sku: "JB02",
    image: "russia_with_love.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: 'SPECTRE\'s expert planner Kronsteen, known as "Number Five", upon order of the organization\'s Number One, devises a plot to steal a Lektor cryptographic device from the Soviets and sell it back to them while exacting revenge on Bond for killing their agent Dr. No; ex-SMERSH operative Rosa Klebb, SPECTRE\'s Number Three, is in charge of the mission. She recruits Donald Grant as an assassin and Tatiana Romanova, a cipher clerk at the Soviet consulate in Istanbul, as the unwitting bait. Bond travels to Turkey and meets with Ali Kerim Bey, the MI6 officer in Turkey. Between them, they obtain the Lektor, and the three escape with the device on the Orient Express. However, they are followed by Grant, who kills Kerim Bey and a Soviet security officer. Grant pretends to be another British agent and meets Bond. Over dinner Grant drugs Romanova, then overcomes Bond. Bond tricks Grant into opening Bond\'s attaché case in the manner that detonates its tear gas booby trap, allowing Bond to attack and kill him. Bond and Romanova escape with the Lektor to Venice. Rosa Klebb, disguised as a hotel maid, attempts to steal the Lektor and kill Bond, but ends up being shot by Romanova.'
  },
  {
    title: "Goldfinger",
    sku: "JB03",
    image: "goldfinger.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "Bond is ordered to observe bullion dealer Auric Goldfinger. He suspects Goldfinger of cheating at cards and foils his scheme by distracting his female accomplice, who is later killed by Goldfinger's Korean manservant and henchman Oddjob after Bond seduces her. Bond is then instructed to investigate Goldfinger's gold smuggling operation and he tails the dealer to Switzerland. Bond is captured when he reconnoitres Goldfinger's plant and is drugged unconscious; Goldfinger then transports Bond to his Kentucky stud farm where he holds Bond captive. Bond escapes briefly to witness Goldfinger's meeting with US mafiosi, observing secretly as Goldfinger presents to the gangsters his plans to rob Fort Knox by using materials they have smuggled to him and later kills them to avoid paying issues. Bond is recaptured after hearing the details of the operation, but he subsequently seduces Pussy Galore, Goldfinger's private pilot and convinces her to inform the American authorities. Goldfinger's private army break into Fort Knox and access the vault, where Bond fights and kills Oddjob, while American troops battle with Goldfinger's army outside. Bond's plane is hijacked by Goldfinger, but Bond struggles with him, and shoots out a window, creating an explosive decompression, killing Goldfinger."
  },
  {
    title: "Thunderball",
    sku: "JB04",
    image: "thunderball.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "Bond investigates the hijacking of an Avro Vulcan loaded with two atomic bombs, which had been taken by SPECTRE. The organisation demands a ransom for the return of the bombs. Bond follows a lead to the Bahamas, where he meets up with his CIA counterpart and friend Felix Leiter. The pair suspect a rich playboy, Emilio Largo, who is soon discovered to be SPECTRE's Number Two, ordered by the secretive Number One to direct the operation, and search the area around his yacht and then the area where they think the yacht may have travelled. After finding the plane—but without the nuclear devices on board—the two agents arrange for Largo's yacht to be tracked and ambushed once the bombs are being moved by Largo."
  },

  {
    title: "You Only Live Twice",
    sku: "JB05",
    image: "live_twice.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "007 is sent to Japan to investigate the spacecraft theft and astronaut kidnapping in orbit of American Project Gemini spacecraft Jupiter 16 by an unidentified spacecraft. Upon his arrival, Bond is contacted by Aki, assistant to the Japanese secret service leader Tiger Tanaka. Bond established that the mastermind behind the hijacking is SPECTRE's Number One, Ernst Stavro Blofeld, in conjunction with Osato, a local industrialist. Bond follows the trail to Blofeld's island headquarters and spaceport, while the spacecraft, Bird One, attacks a Soviet capsule. Blofeld explains Bond that his plot is to fake in front of each superpower that Bird One is an enemy spacecraft to transform the Cold War into World War III. Tanaka's ninja troops attack the island, while Bond manages to distract Blofeld and create a diversion which allows him to open the hatch, letting in the ninjas. During the battle, Osato is killed by Blofeld, who activates the base's self-destruct system and escapes. Bond, Kissy, Tanaka, and the surviving ninjas escape through the cave tunnel before it explodes, and are rescued by submarine."
  },

  {
    title: "O.H.M.S.S.",
    sku: "JB06",
    image: "ohmss.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "While searching for Blofeld, the head of SPECTRE, Bond saves Tracy di Vicenzo on the beach from committing suicide by drowning, and later meets her again in a casino. Bond then receives information from Marc-Ange Draco, the head of the European crime syndicate Unione Corse and Tracy's father, about Blofeld's Swiss solicitor. Bond breaks into the solicitors office and establishes Blofeld is corresponding with the London College of Arms. Posing as an emissary of the college, Bond meets Blofeld, who has established a clinical allergy-research institute atop Piz Gloria in the Swiss Alps. Bond soon establishes that Blofeld is brainwashing his patients to distribute bacteriological warfare agents throughout various parts of the world. Bond escapes from the clinic after Blofeld identifies him as the British agent. Bond arranges a raid on the clinic using men from Draco's organisation. The raid is a success, although Blofeld escapes. Bond marries Tracy, but she is murdered shortly afterwards by Irma Bunt, Blofeld's partner."
  },

  {
    title: "Diamonds Are Forever",
    sku: "JB07",
    image: "diamonds_for_ever.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "Bond is tasked with investigating a major diamond smuggling ring which begins in Africa and runs through Holland and the UK to the United States. Disguised as professional smuggler and murderer Peter Franks, Bond travels to Amsterdam to meet contact Tiffany Case: he is given the diamonds and travels on to the US, where he is met by Felix Leiter. Bond moves through the chain, which leads to the Whyte House, a casino-hotel owned by the reclusive billionaire Willard Whyte. Bond follows the diamonds to a pick-up by Bert Saxby, Whyte's head of security, and then onto a research laboratory owned by Whyte, where he finds that a satellite is being built by a laser refraction specialist, Professor Dr. Metz. Suspecting Whyte, Bond tries to confront him, but instead meets Blofeld, who captures the agent and explains to him that the satellite can blow up nuclear missiles. Blofeld admits that he intends to auction it to the highest bidder. Bond escapes and frees the captive Whyte and they establish that Blofeld is using an offshore oil rig as his base. Bond attacks the rig, stopping Blofeld's operation and dispersing his organisation."
  },

  {
    title: "Live & Let Die",
    sku: "JB08",
    image: "live_let_die.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "James Bond is sent to investigate the murder of three British MI6 agents, all of whom have been killed within 24 hours. He discovers the victims were all separately investigating the operations of Dr. Kananga, the dictator of a small Caribbean island, San Monique. He also establishes that Kananga also acts as Mr. Big, a ruthless and cunning American gangster. Upon visiting San Monique, Bond determines that Kananga is producing two tons of heroin and is protecting the poppy fields by exploiting locals' fear of voodoo and the occult. Through his alter ego, Mr. Big, Kananga plans to distribute the heroin free of charge at his Fillet of Soul restaurants, which will increase the number of addicts. Bond is captured by Kananga, but he escapes, killing Kananga and destroying the poppy crop."
  },

  {
    title: "The Man With The Golden Gun",
    sku: "JB09",
    image: "golden_gun.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: 'After receiving a golden bullet with James Bond\'s code "007" etched into its surface M relieves Bond of a mission locating a British scientist, Gibson, who has invented the "Solex agitator", a device to harness solar power, thereby solving the energy crisis. The bullet signifies Bond is a target of assassin Francisco Scaramanga and Bond sets out unofficially to find him. From a spent golden bullet, Bond tracks Scaramanga to Macau, where he sees Scaramanga\'s mistress collecting golden bullets at a casino. Bond follows her to Hong Kong, where he witnesses the murder of Gibson and the theft of the Solex agitator. Bond is subsequently assigned to retrieve the agitator and assassinate Scaramanga. Bond meets with Hai Fat, a wealthy Thai entrepreneur suspected of arranging Gibson\'s murder, and is captured, but subsequently escapes. He tracks Scaramanga to an island in Red Chinese waters, where the two men fight and Bond kills the assassin.'
  },

  {
    title: "The Spy Who Loved Me",
    sku: "JB10",
    image: "spy_loved_me.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et metus.",
    price: 9.99,
    priceblu: 14.99,
    stockdvd: 55,
    stockblu: 23,
    synopsis: "Bond is tasked with investigating the disappearance of British and Soviet ballistic missile submarines and the subsequent offer to sell a submarine tracking system. Bond works alongside Major Anya Amasova of the KGB. The pair track the plans across Egypt and identify the person responsible for the thefts as shipping tycoon, scientist and anarchist Karl Stromberg. Bond and Amasova follow a suspicious tanker owned by Stromberg and establish it is responsible for the missing submarines; the submarine in which they are travelling is also captured by Stromberg. Stromberg plans to destroy Moscow and New York, triggering nuclear war; he planned to then establish a new civilisation. Bond escapes, freeing the submariners captured from the other submarines and follows Stromberg to his headquarters, where he shoots the tycoon and a torpedo destroys the base."
  }
  ]
  var returnData=""
  jb.forEach(function(elem,i){
    if (elem.title.toLowerCase()===title.toLowerCase()){
      returnData=jb[i].synopsis
    }
  })

  if (returnData === "") {
    returnData = "HELP - ENTER ONE OF THE FOLLOWING TITLES FOR A SYNOPSIS. "
    for (let i = 0; i < jb.length; i++) {
      returnData = returnData + jb[i].title + '. '
    }
  }
  

  response.json({
    // message: `Title ${title} requested the task. ${returnData}`
    message: `Title requested:- ${title}. ${returnData}`
  })

})

module.exports.handler = serverless(app)

// https://f8nibhiadf.execute-api.eu-west-2.amazonaws.com/dev/tasks?username=simon