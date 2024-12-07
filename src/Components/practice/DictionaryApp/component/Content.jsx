import React from "react";

const Content = (props) => {
  return (
    <div className="content">
      {props?.meanings[0] && props.word && props.category === "en" && (
        <audio
          controls
          src={
            props.meanings[0]?.phonetics[0] &&
            props.meanings[0]?.phonetics[0]?.audio
          }
          style={{ backgroundColor: "white", borderRadius: 10 }}
        >
          you component does not support audio element!
        </audio>
      )}
      {props.meanings[0] && props.word && props.category === "en" && (
        <audio
          src={
            props.meanings[0].phonetics[0] &&
            props.meanings[0].phonetics[0].audio
          }
          style={{ backgroundColor: "#ffff", borderRadius: "10px" }}
        ></audio>
      )}
      {props.word === "" ? (
        <span className="subTitle" style={{color: props.ligthMode ? 'black' : 'white'}}>Start by word in search</span>
      ) : (
        props?.meanings?.map((mean) =>
          mean.meanings?.map((item) =>
            item.definitions?.map((def) => (
              <div
                className="single-mean"
                style={{
                  backgroundColor: props.ligthMode ? "#3b5360" : "white",
                  color: props.ligthMode ? "white" : "black",
                }}
              >
                <b>{def?.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def?.example && (
                  <span>
                    <b>Example :</b>
                    {def.example}
                  </span>
                )}
                {def?.synonyms && (
                  <span>
                    <b>Synonyms :</b>
                    {def.synonyms?.map((s) => `${s}`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Content;
