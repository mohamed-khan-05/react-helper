import React, { useState, useEffect } from "react";

const Card = ({
  currentItem,
  nextItem,
  prevItem,
  dataLength,
  resetFlag,
  resetStates,
}) => {
  const [copy, setCopy] = useState("");
  const [description, setDescription] = useState(false);
  const [viewcode, setViewcode] = useState(false);
  useEffect(() => {
    if (resetFlag) {
      setDescription(false);
      setViewcode(false);
      resetStates();
    }
  }, [resetFlag, resetStates]);
  const copyToClipboard = () => {
    if (currentItem.code) {
      navigator.clipboard
        .writeText(currentItem.code)
        .then(() => {
          setCopy(<div className="copyMessage">Code copied to clipboard!</div>);
          setTimeout(() => {
            setCopy("");
          }, 1500);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };
  return (
    <div className="content">
      <div className="card">
        <h2>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "auto",
              fontFamily: "Clarkson, Helvetica, sans-serif",
            }}
          >
            {currentItem.title} {copy}
          </span>

          <div className="navigation-buttons">
            <button
              className="button-48"
              role="button"
              onClick={() => {
                prevItem();
                setDescription(false);
                setViewcode(false);
              }}
              disabled={currentItem.id === 0}
            >
              <span className="text"> Previous</span>
            </button>
            <button
              className="button-48"
              role="button"
              onClick={() => copyToClipboard()}
              disabled={!currentItem.code}
            >
              <span className="text"> Copy Code</span>
            </button>
            <button
              className="button-48"
              role="button"
              onClick={() => {
                nextItem();
                setDescription(false);
                setViewcode(false);
              }}
              disabled={currentItem.id === dataLength - 1}
            >
              <span className="text"> Next</span>
            </button>
            <button
              className="button-48"
              role="button"
              onClick={() => {
                setDescription(!description);
                setViewcode(false);
              }}
              disabled={!currentItem.description}
            >
              <span className="text"> Description</span>
            </button>
            <button
              className="button-48"
              role="button"
              onClick={() => {
                setViewcode(!viewcode);
                setDescription(false);
              }}
              disabled={!currentItem.code}
            >
              <span className="text"> View Code</span>
            </button>
          </div>
        </h2>
        {description ? (
          <p className="description">
            {" "}
            <h3>Description</h3>
            {currentItem.description}
          </p>
        ) : null}
        {viewcode ? (
          <p className="description">
            <h3>Code</h3> {currentItem.code}
          </p>
        ) : null}

        <div className="image-container">
          {Array.isArray(currentItem.img) ? (
            currentItem.img.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`${currentItem.title} Image ${index + 1}`}
                className="card-image"
              />
            ))
          ) : (
            <img
              src={currentItem.img}
              alt={currentItem.title}
              className="card-image"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
