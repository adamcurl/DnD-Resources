import React from "react";

function Start(props) {
  return (
    <div className="container_wrap mt-5">
      <h1 style={{ textAlign: "center", padding: "0 0 1rem 0" }}>
        Character Summary
      </h1>
      <div className="pb-4">
        <h2 className="pb-4 text-center">
          You chose a{" "}
          {props.house === "No House"
            ? ""
            : props.house === "Aberrant"
            ? "Aberrant Mark"
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
      </div>
      <div className="pb-4">
        <h2>What's next?</h2>
        <ol>
          <li>
            <a href="#develop-char">
              Develop your character's personality, goals, and backstory
            </a>
          </li>
          <li>
            <a href="#create-char">Create your character on D&D Beyond</a>
          </li>
        </ol>
      </div>
      <div className="pb-4" id="develop-char">
        <h2 className="pb-2">
          Develop your character's personality, goals, and backstory
        </h2>
        <p>
          I plan on incorporating your characters' backstory and goals into the
          main campaign story and giving your character their own little{" "}
          <em>story arc</em>. When making a backstory for your character, try
          and keep a couple things in mind:
        </p>
        <ol className="pb-1">
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
        <h3 className="pb-2">
          Below are some prompts to help get you started. You don't have to use
          all or any of them.
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
            What current or previous relationships do you have? Do you/did you
            have family? What about friends or an old rival? What was life like
            for you before you started adventuring?
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
              {props.house !== "Aberrant" ? (
                <>
                  <li>
                    Am I a member of this house? Or do I just possess the mark?
                  </li>
                  <li>
                    If I'm not a member of this house, how did I get my mark?
                    Was I an illegitimate child? Or did the mark just one day
                    appear?
                  </li>
                  <li>
                    Where on your body is your mark located? When did it appear?
                  </li>
                  <li>
                    Am I a member of this house without a mark? If so, you won't
                    have as high a status in your house as others with a
                    dragonmark.
                  </li>
                </>
              ) : null}
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
      <div className="pb-4" id="create-char">
        <h2>Create your character on D&D Beyond</h2>
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
            You can read the{" "}
            <a
              href="https://www.dndbeyond.com/sources/phb/step-by-step-characters"
              target="_blank"
              rel="noopener noreferrer"
            >
              Player's Handbook
            </a>{" "}
            on how to create a character or ask your DM.
          </li>
          <li>
            Head over to the{" "}
            <a
              href="https://www.dndbeyond.com/characters/builder"
              target="_blank"
              rel="noopener noreferrer"
            >
              D&D Beyond Character Builder
            </a>{" "}
            and select <em>Standard</em>. Make sure that{" "}
            <em>Homebrew Content</em>, <em>Critical Role Content</em>,{" "}
            <em>Magic: The Gathering Content</em>, and <em>Eberron Content</em>{" "}
            are turned on.
          </li>
          <li>
            Make sure <em>Optional Class Features</em> is turned on,{" "}
            <em>Customize Your Origin</em> is turned on, Advancement Type is set
            to <em>Milestone</em>, and Hit Point Type is set to <em>Manual</em>.
            Everything else should be the default state.
            <br />
            <strong>Note:</strong> The <em>Customize Your Origin</em> feature
            allows you to swap out race-given stats. For example, dwarves get a
            +2 to Constitution, you can make it a +2 to Charisma if that makes
            sense to your character. You can also swap out languages,
            proficiencies, and more. Just let your DM know beforehand if you
            want to do this.
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
            listed above to fill out your character's details, history, and
            characteristics.
          </li>
          <li>
            For your equipment, you can choose the default starting equipment
            for your class, <em>or</em> choose to start with gold. If you choose
            gold, you start with no items, and can buy the items, weapons, and
            armor you want before the first play session. You can view all
            available equipment for your character{" "}
            <a
              href="https://www.dndbeyond.com/equipment"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
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
          <li>
            When your character levels up, you'll have the option to take on
            Feats. These feats further enhance your stats and provide additional
            abilities for your character. You can find a list of feats{" "}
            <a
              href="https://www.dndbeyond.com/feats"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            if you wanted to plan ahead for your character.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Start;
