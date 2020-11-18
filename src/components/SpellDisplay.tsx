import React from "react";
import { SpellLevel } from "./SpellLevel";
import { SpellQuantity } from "./SpellQuantity";

type Props = {
  name: string;
  level: number;
  maxLevel: number;
  quantity?: number;
  size?: "sm";
};

export function SpellDisplay(props: Props) {
  let spellQuantityComponent;
  if (props.quantity) {
    spellQuantityComponent = (
      <SpellQuantity value={props.quantity} size={props.size} />
    );
  }

  return (
    <div className="relative inline-block border border-indigo-700 rounded-lg bg-indigo-500">
      {spellQuantityComponent}
      <SpellLevel
        level={props.level}
        maxLevel={props.maxLevel}
        size={props.size}
      />
      <img
        className={`rounded-lg ${props.size === "sm" ? "w-12" : "w-20"}`}
        src={`/img/spell_${props.name}.png`}
        alt={`Icon ${props.name}`}
      />
    </div>
  );
}
