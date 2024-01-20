export const Phrase = ({
  textBefore,
  highlight,
  textAfter,
  textAfterAgain,
  highlightAgain,
}) => (
  <article className="">
    {textBefore}
    <span className="text-[#01AEEF]">{highlight}</span>
    {textAfter}
    {textAfterAgain}
    <span className="text-[#01AEEF]">{highlightAgain}</span>
  </article>
);
