import React from "react";

function Start(props) {
  return (
    <div className="container_wrap mt-5">
      <h1 style={{ textAlign: "center", padding: "0 0 1rem 0" }}>
        Character Summary
      </h1>
      <div>
        <h2>You chose a:{' '}
              {props.house === "No House"
                ? ""
                : props.house
                ? `Mark of ${props.mark}/House ${props.house}`
                : "[No Mark/House]"}{" "}
              {props.race ? props.race : "[Race]"} {props.dndClass ? props.dndClass : "[Class]"}{" "}
              {props.faith === "No Faith"
                ? ""
                : props.faith
                ? ` of ${props.faith} faith`
                : "with [No Religion]"}{" "}
              from {props.homeland ? props.homeland : "[Homeland]"}
            </h2>
            {/* Race prompts */}
            {props.racePrompts.length ?
            <>
            <p>As a {props.race}, think about: </p>
            <ul>
              {props.racePrompts.map((prompt) => 
              <li>{prompt}</li>
              )}
            </ul>
            </>
            : null}
            {/* Class prompts */}
            {props.classPrompts.length ?
            <>
            <p>As a {props.dndClass}, think about: </p>
            <ul>
              {props.classPrompts.map((prompt) => 
              <li>{prompt}</li>
              )}
            </ul>
            </>
            : null}
            {/* Mark prompts */}
            {props.housePrompts.length ?
            <>
            <p>As a someone with a Mark of {props.mark}, think about: </p>
            <ul>
              {props.housePrompts.map((prompt) => 
              <li>{prompt}</li>
              )}
            </ul>
            </>
            : null}
            {/* Faith prompts */}
            {props.faithPrompts.length ?
            <>
            <p>As a someone of {props.faith} faith, think about: </p>
            <ul>
              {props.faithPrompts.map((prompt) => 
              <li>{prompt}</li>
              )}
            </ul>
            </>
            : null}
            {/* Faith prompts */}
            {props.homelandPrompts.length ?
            <>
            <p>As a someone from {props.homeland}, think about: </p>
            <ul>
              {props.homelandPrompts.map((prompt) => 
              <li>{prompt}</li>
              )}
            </ul>
            </>
            : null}
        </div>
        <div className="pb-4">
        <h2>What's next?</h2>
        <ol>
        <li>Head over to the <a href="https://www.dndbeyond.com/characters/builder" target="_blank" rel="noopener noreferrer">DnD Beyond Character Builder</a> and select <em>Standard</em>. Make sure that Eberron content is turned on and set your Hit Point Type to <em>Manual</em>.</li>
        <li>Select the same race and class that you did here. Be sure to fill out your race and class features, too.<br /><strong>Note:</strong> If you chose to have a dragonmark, then you need to select the dragonmarked version of that race.</li>
        <li>Once you have your race and class selected, you should be able to see your HP in the top-right corner of the <em>Class</em> page. For level 1, leave your HP as it is. Whenever you level up in the future, return to this page, click on <em>Manage HP</em>, roll whatever your hit dice is, and add that number to your HP Modifier.</li>
        <li>If you chose a spellcasting class, be sure to select your spells on the <em>Class</em> page.<br /><strong>Note for wizards:</strong> Since wizards can learn new spells at any time, there is no cap on how many spells they can know. Be sure to only select <strong>6</strong> 1st level spells when you are at level 1. Each time you gain a level, be sure to only add <strong>2</strong> new spells. Your cantrips should be hard-capped, so nothing to worry about there.</li>
        <li>When determining your ability scores, select <em>Manual</em>, and roll 4d6, taking the sum of the highest 3 rolls. Do that a total of 6 times. Be sure to record these numbers. These are the values you can use to determine your ability scores.</li>
        <li>For your character details, select a background that best fits your character, as well as any bonuses it gives you. Use the prompts listed on this page to fill out your character's details, history, and characteristics.</li>
        <li>For your equipment, you can choose the default starting equipment for your class, <em>or</em> choose to start with gold. If you choose gold, you start with no items, and can buy the items, weapons, and armor you want before the first play session.<br /><strong>Note:</strong> When adding equipment to your character, make sure that the <em>Proficient</em> and <em>Common</em> checkboxes are <strong>marked</strong> and the <em>Magical</em> checkbox is <strong>unmarked</strong>. Also be aware of the stealth disadvantages on some Medium armor and all heavy armor. Also, be sure to check out the weapon properties to see how you are supposed to use your weapon (so you don't try dual-wielding lances).</li>
        <li>When you're finished, view your finished character. You should be all set and ready for adventure!</li>
        </ol>
        </div>
    </div>
  );
}

export default Start;
