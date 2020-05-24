/* eslint-disable no-param-reassign */
function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min read`;
  }
  return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min read`;
}

// `lang` is optional and will default to the current user agent locale
function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== "function") {
    return date;
  }

  // eslint-disable-next-line no-param-reassign
  date = new Date(date);
  const args = [
    lang,
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}

function formatAuthorNames(authors) {
  return authors.reduce((acc, { name }, i) => {
    if (authors.length <= 1) {
      return name;
    }
    if (authors.length === i + 1) {
      return `${acc} & ${name}`;
    }
    acc = acc ? `${acc}, ` : "";
    return `${acc}${name}`;
  }, "");
}

function showCreatedOrModifiedAt(createdAt, modifiedAt, lang) {
  createdAt = new Date(createdAt);
  modifiedAt = new Date(modifiedAt);

  const isModified =
    modifiedAt.getTime() > new Date(createdAt.getTime() + 24 * 60 * 60 * 1000);

  return isModified
    ? `Last Modified At: ${formatPostDate(modifiedAt, lang)}`
    : `Published At: ${formatPostDate(createdAt, lang)}`;
}

module.exports = {
  formatAuthorNames,
  formatPostDate,
  formatReadingTime,
  showCreatedOrModifiedAt,
};
