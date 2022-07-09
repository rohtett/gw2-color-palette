import react from "react";

import Rarity from "./Rarity";

const Article = () => {

  return (
    <article>
      <p>
        The strips underneath the each of the respective colour's palettes represent the rarity of each dye. Unlike other items, Guild Wars 2 gives Dyes different rarity names. Any "Starter" dyes are presented here with a black-coloured strip as opposed to a white one which is usually used in chat.
      </p>
      <p>
        On this site, each of the rarities are coloured as such <Rarity title = "Rare" keys = "Rare" />, <Rarity title = "Uncommon" keys = "Masterwork" />, <Rarity title = "Common" keys = "Fine" /> and <Rarity title = "Starter" keys = "Basic" />. Notice that the names of each rarity is in fact different from their Item counterparts: <Rarity title = "Rare" keys = "Rare" />, <Rarity title = "Masterwork" keys = "Masterwork" />, <Rarity title = "Fine" keys = "Fine" /> and <Rarity title = "Basic" keys = "Basic" />.
      </p>
      <p>
        Dyes may also come in the <Rarity title = "Exclusive" keys = "Rare" /> rarity, that is recognised only by the game's API, wiki and terminology systems. These dyes are still coloured the same as Dyes and Items that are <Rarity title = "Rare" keys = "Rare" />
      </p>
      <p>
        <Rarity title = "Legendary" keys = "Legendary" />, <Rarity title = "Ascended" keys = "Ascended" /> and <Rarity title = "Exotic" keys = "Exotic" /> dyes do not exist.
      </p>
    </article>

  );
}

export default Article;
