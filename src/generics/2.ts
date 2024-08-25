type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const top = {
  name: "TopObject",
  color: "Red",
};

const bottom = {
  position: 1,
  weight: 10,
};
const result = compare(top, bottom);
console.log(result);
