import React, { useState } from "react";
import { Link } from "react-router-dom";

function Start(props) {
  const bottom = React.useRef(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(true);
    setTimeout(() => {
      if (bottom && bottom.current)
        bottom.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }, 200);
  };

  React.useEffect(() => {
    if (
      props.race ||
      props.dndClass ||
      props.house ||
      props.faith ||
      props.homeland
    )
      setShowOptions(true);
  }, [props]);

  return (
    <div className="container_wrap mt-5" ref={bottom}>
      <h1 style={{ textAlign: "center", padding: "0 0 1rem 0" }}>
        What is Eberron?
      </h1>
      <div style={{ padding: "0 12rem" }}>
        <h4>A world of Magic, Adventure, and Intrigue</h4>
        <p>
          Eberron is a world full of mystery, intrigue, and fast-paced action.
          Magic has advanced much faster than science, making low-level magic
          more readily available and common among the populus. The continent of
          Khorvaire has just entered a new era after a hundred year civil war
          that ended in the Treaty of Thronehold two years after the nation of
          Cyre was destroyed and twisted by a large magical cataclysm, known as
          the Mourning. This campaign starts two years after the end of the war,
          in the year 998 YK. The gods of Eberron are distant and do not
          directly influence the world. Other immortal entities, such as the
          chaotic, outer-planar Daelkyr, the holy Silver Flame that locks away
          the Overlords, the ancient elves of the Undying Court, and demonic
          Overlords do still reside within Eberron.
        </p>
        <h4>The Dragonmarked Houses</h4>
        <p>
          Long before the Last War, mysterious symbols, called Dragonmarks,
          began to appear on certain bloodlines of certain races. These marks
          gave individuals powerful magical abilities and influence. Each
          Dragonmarked bloodline formed a House and began to use their marks to
          form and operate a business. House Cannith Humans mass produces
          magical items, House Ghallanda Halflings operate a chain of Inns, and
          House Lyrandar Half-Elves operate flying airships and swift galleons.
          The Last War was very profitable to the Dragonmarked Houses. Before
          the Last War, Galifar kept these Houses' power in check, but now that
          Galifar is no more, the Houses are beginning to grow in power and
          influence.
        </p>
        <h4>The Last War</h4>
        <p>
          Khorvaire was unified under the nation of Galifar, which contained the
          Five Nations (nations ruled by the descendants of Galifar): Aundair,
          Thrane, Breland, Karrnath, and Cyre, the former seat of power - now
          the Mournland. After dispute about the new Cyran heir becoming the
          ruler of Galifar, as it always has been, the Last War broke out,
          turning the Five Nations against one another, and allowing for other
          territories, such as Valenar, the Eldeen Reaches, and Darguun to form
          and join the fray. Towards the end of the war, new creations called
          Warforged, magical golems with their own free will and souls, were
          created by House Cannith to be used as soldiers in this war.
        </p>
      </div>
      {!showOptions ? (
        <div
          className="d-flex justify-content-center"
          style={{ padding: "0 2rem 2rem 2rem" }}
        >
          <button className="btn btn-primary" onClick={handleShowOptions}>
            Start building your character
          </button>
        </div>
      ) : null}
      {showOptions ? (
        <>
          <div className="d-flex justify-content-between">
            <Link to="/races">
              <button
                className="btn start-circle zoom_img"
                style={
                  !props.race
                    ? { backgroundColor: "#DDC575" }
                    : { backgroundColor: "#2f9158" }
                }
              >
                Race
              </button>
            </Link>
            <Link to="/houses">
              <button
                className="btn start-circle zoom_img"
                style={
                  !props.house
                    ? { backgroundColor: "#DDC575" }
                    : { backgroundColor: "#2f9158" }
                }
              >
                House
              </button>
            </Link>
            <Link to="/classes">
              <button
                className="btn start-circle zoom_img"
                style={
                  !props.dndClass
                    ? { backgroundColor: "#DDC575" }
                    : { backgroundColor: "#2f9158" }
                }
              >
                Class
              </button>
            </Link>
          </div>
          <div className="d-flex justify-content-around">
            <Link to="/faiths">
              <button
                className="btn start-circle zoom_img"
                style={
                  !props.faith
                    ? { backgroundColor: "#DDC575" }
                    : { backgroundColor: "#2f9158" }
                }
              >
                Faith
              </button>
            </Link>
            <Link to="/homeland">
              <button
                className="btn start-circle zoom_img"
                style={
                  !props.homeland
                    ? { backgroundColor: "#DDC575" }
                    : { backgroundColor: "#2f9158" }
                }
              >
                Homeland
              </button>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Start;
