// import React from 'react'
const Home = () => {
  return (
    <div className="homeText">
      <div id="home-onlyText">
        <p style={{ fontSize: "45px", fontWeight: "bold" }}>BeatIT!</p>
        <p style={{ fontSize: "20px" }}>Drop the beat anytime, anywhere.</p>
        <p style={{ fontSize: "20px" }}>
          Lay down some sick grooves on the go.
        </p>
      </div>
      <div className="demoGif" />
      {/* <img
        src="/img/beatSeq.gif"
        alt="Girl in a jacket"
        width="500"
        height="600"
      /> */}
    </div>
  );
};

export default Home;
