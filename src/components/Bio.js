import React from "react";
import profilePic from "../content/assets/icon.png";
import { rhythm } from "../utils/typography";

const Bio = (props) => {
  let { authors } = props;
  const hasAuthors = !!authors;

  if (!hasAuthors) {
    authors = [
      {
        name: "Clueless Coders team",
        image: {
          small: profilePic,
        },
        website: "https://github.com/cluelesscoders/",
      },
    ];
  }

  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(2),
      }}
    >
      <div className="profile-pics">
        {authors.map(({ name, image }, i) => {
          const zIndex = i === 0 ? i : authors.length - i - 1;
          const position = i === 0 ? "relative" : "absolute";
          const right = i === 0 ? 0 : (authors.length - i - 1) * 15;
          const border = "1px solid var(--textLink)";

          return (
            <img
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              src={image.small}
              alt={name}
              title={name}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: i === 0 ? rhythm(2) : rhythm(1),
                height: i === 0 ? rhythm(2) : rhythm(1),
                borderRadius: "50%",
                border,
                zIndex,
                position,
                right: `${right}px`,
                bottom: "-2px",
              }}
            />
          );
        })}
      </div>
      <p style={{ maxWidth: 310 }}>
        {`${hasAuthors ? "Written" : "Blog"} by `}
        {authors.map(({ name, website }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>
            {i !== 0 && (authors.length !== i + 1 ? ", " : " & ")}
            <a
              target={/cluelesscoders/.test(website) ? "" : "_target"}
              href={website}
            >
              {name}
            </a>
          </React.Fragment>
        ))}
        .
        <br />
        We explain with words and code.
      </p>
    </div>
  );
};

export default Bio;
