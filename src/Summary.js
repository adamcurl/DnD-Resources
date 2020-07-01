import React from "react";

function Start(props) {
  return (
    <div className="container_wrap mt-5">
      <h1 style={{ textAlign: "center", padding: "0 0 1rem 0" }}>
        Character Summary
      </h1>
      <div className="pb-4">
        <h2 className="pb-4">
          You chose a{" "}
          {props.house === "No House"
            ? ""
            : props.house
            ? `Mark of ${props.mark}/House ${props.house}`
            : "[No Mark/House]"}{" "}
          {props.race ? props.race : "[Race]"}{" "}
          {props.dndClass ? props.dndClass : "[Class]"}{" "}
          {props.faith === "No Faith"
            ? ""
            : props.faith
            ? ` of ${props.faith} faith`
            : "with [No Religion]"}{" "}
          from {props.homeland ? props.homeland : "[Homeland]"}.
        </h2>
        <p>
          I plan on incorporating your characters' backstory and goals into the
          main campaign story and giving your character their own little{" "}
          <em>story arc</em>. When making a backstory for your character, try
          and keep a couple things in mind:
        </p>
        <ol className="pb-3">
          <li>
            <strong>Your character is only level 1.</strong> Sure you can have
            your backstory be that you fought an ancient dragon and almost
            killed it, but as a level 1 character, you'll still struggle to
            fight off a few wolves by yourself. So, keep your story somewhat
            realistic.
          </li>
          <li>
            <strong>Keep your backstory vague and flexible.</strong> Think about
            the details that <em>your character</em> would know. Instead of
            saying that an ominous figure killed your parents by demand of an
            evil giant that plans to topple the city of Sharn who is really
            being used by a secret society of mages, just say that an ominous
            figure was responsible for the death of your parents. Would your
            character really know all of the plot twists already? If you already
            know all of the details, then your story arc will be boring. Also,
            this makes any plot twists a welcomed surprise to you as a player
            when you finally exact your revenge.
          </li>
          <li>
            <strong>Don't sweat it!</strong> While backstory does help the DM
            build roleplaying and combat around your character, it isn't
            everything. Your future goals and actions are just as important as
            backstory. Think of what your character will be known for, whether
            it be for slaying monsters, being the best thief in Sharn, or the
            smartest mage in all of Eberron. It's also a good idea to keep your
            backstory brief. You don't have to write an essay for it (if you
            want to, have at it). It can even be a couple sentances long.
          </li>
        </ol>
        <h3>
          Below are some prompts to help build up your character's personality,
          goals, and backstory. You don't have to use all of them, or any of
          them. This is just to help get you started.
        </h3>
        {/* General prompts */}
        <p>
          <strong>When making your character, think about:</strong>
        </p>
        <ul>
          <li>
            With it being only 2 years after the Last War ended, what did your
            character do during the Last War? Did you serve as a soldier for a
            country? Where you a mercenary? A researcher? Did you ignore the
            war? Was your main concern just staying alive in a war-plagued land?
          </li>
          <li>
            What is your reason for adventure? What goals and aspirations do you
            have? Do you seek revenge/vengeance on someone from the Last War? Do
            you seek out ancient magical power and ancient mysteries? Do you
            seek battle, glory, gold, or power? Or do you work at the beck and
            call of a country or Dragonmarked house?
          </li>
          <li>
            The cool thing about 5e is a new mechanic called Backgrounds. These
            give your character flavor and certain advantages, such as free
            food, always being able to find the best house to rob, more
            languages you can speak, or being more proficient with certain
            tools. Think about if you are a Soldier, Charlatan, Acolyte,
            Criminal, Sailor, Hermit, Noble, etc. A full list of backgrounds can
            be found{" "}
            <a
              href="https://www.dndbeyond.com/backgrounds"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </li>
        </ul>
        {/* Race prompts */}
        {props.racePrompts.length ? (
          <>
            <p>
              <strong>As a {props.race}, think about:</strong>
            </p>
            <ul>
              {props.racePrompts.map((prompt) => (
                <li>{prompt}</li>
              ))}
            </ul>
          </>
        ) : null}
        {/* Class prompts */}
        {props.classPrompts.length ? (
          <>
            <p>
              <strong>As a {props.dndClass}, think about:</strong>
            </p>
            <ul>
              {props.classPrompts.map((prompt) => (
                <li>{prompt}</li>
              ))}
            </ul>
          </>
        ) : null}
        {/* Mark prompts */}
        {props.housePrompts.length ? (
          <>
            <p>
              <strong>
                As a someone with a Mark of {props.mark}, think about:
              </strong>
            </p>
            <ul>
              {props.housePrompts.map((prompt) => (
                <li>{prompt}</li>
              ))}
            </ul>
          </>
        ) : null}
        {/* Faith prompts */}
        {props.faithPrompts.length ? (
          <>
            <p>
              <strong>As a someone of {props.faith} faith, think about:</strong>
            </p>
            <ul>
              {props.faithPrompts.map((prompt) => (
                <li>{prompt}</li>
              ))}
            </ul>
          </>
        ) : null}
        {/* Homeland prompts */}
        {props.homelandPrompts.length ? (
          <>
            <p>
              <strong>As a someone from {props.homeland}, think about:</strong>
            </p>
            <ul>
              {props.homelandPrompts.map((prompt) => (
                <li>{prompt}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <div className="pb-4">
        <h2>What's next?</h2>
        <ol>
          <li>
            If you aren't added to my{" "}
            <a
              href="https://www.dndbeyond.com/my-campaigns"
              target="_blank"
              rel="noopener noreferrer"
            >
              D&D Beyond campaign
            </a>
            , then let me know. This will give you access to all the races,
            classes, items, and backgrounds that you need to start playing.
          </li>
          <li>
            Head over to the{" "}
            <a
              href="https://www.dndbeyond.com/characters/builder"
              target="_blank"
              rel="noopener noreferrer"
            >
              DnD Beyond Character Builder
            </a>{" "}
            and select <em>Standard</em>. Make sure that Eberron content is
            turned on and set your Hit Point Type to <em>Manual</em>.
          </li>
          <li>
            Select the same race and class that you did here. Be sure to fill
            out your race and class features, too.
            <br />
            <strong>Note:</strong> If you chose to have a dragonmark, then you
            need to select the dragonmarked version of that race.
          </li>
          <li>
            Once you have your race and class selected, you should be able to
            see your HP in the top-right corner of the <em>Class</em> page. For
            level 1, leave your HP as it is. Whenever you level up in the
            future, return to this page, click on <em>Manage HP</em>, roll
            whatever your hit dice is, and add that number to your HP Modifier.
          </li>
          <li>
            If you chose a spellcasting class, be sure to select your spells on
            the <em>Class</em> page.
            <br />
            <strong>Note for wizards:</strong> Since wizards can learn new
            spells at any time, there is no cap on how many spells they can
            know. Be sure to only select <strong>6</strong> 1st level spells
            when you are at level 1. Each time you gain a level, be sure to only
            add <strong>2</strong> new spells. Your cantrips should be
            hard-capped, so nothing to worry about there.
          </li>
          <li>
            When determining your ability scores, select <em>Manual</em>, and
            roll 4d6, taking the sum of the highest 3 rolls. Do that a total of
            6 times. Be sure to record these numbers. These are the values you
            can use to determine your ability scores.
          </li>
          <li>
            For your character details, select a background that best fits your
            character, as well as any bonuses it gives you. Use the prompts
            listed on this page to fill out your character's details, history,
            and characteristics.
          </li>
          <li>
            For your equipment, you can choose the default starting equipment
            for your class, <em>or</em> choose to start with gold. If you choose
            gold, you start with no items, and can buy the items, weapons, and
            armor you want before the first play session.
            <br />
            <strong>Note:</strong> When adding equipment to your character, make
            sure that the <em>Proficient</em> and <em>Common</em> checkboxes are{" "}
            <strong>marked</strong> and the <em>Magical</em> checkbox is{" "}
            <strong>unmarked</strong>. Also be aware of the stealth
            disadvantages on some Medium armor and all heavy armor. Also, be
            sure to check out the weapon properties to see how you are supposed
            to use your weapon (so you don't try dual-wielding lances).
          </li>
          <li>
            When you're finished, view your finished character. You should be
            all set and ready for adventure!
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Start;
