/**
 * The badges on the cards have different backgrounds and text colors depending on their position in the array.
 * @param {number} index The index of the badge in the array.
 * @returns {string} The corresponding class names for the badge.
 */
const getBadgeClassName = (index: number) => {
  return (
    {
      0: "bg-blue-100 text-blue-600",
      1: "bg-teal-100 text-teal-600",
      2: "bg-red-100 text-red-600",
    }[index] || "bg-yellow-100 text-yellow-600"
  );
};

export { getBadgeClassName };
