module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
const newItem = {
    name: item.name,
    enhancement: (item.enhancement < 20 ? item.enhancement+=1 : item.enhancement = 20),
    durability: item.durability
  }
  return newItem;
}

function fail(item) {
  if (item.enhancement < 15){
    const newItem = {
      name: item.name,
      enhancement: item.enhancement,
      durability: item.durability - 5
  }
  return newItem
} else if (item.enhancement > 16) {
const newItem = {
  name: item.name,
  enhancement: item.enhancement - 1,
  durability: item.durability - 10
}
return newItem
} else if (item.enhancement > 14) {
  const newItem = {
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability - 10
}
 return newItem;

}

}

function repair(item) {
	 const newItem = {
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  }
  return newItem;
}

function get(item) {
  return { ...item };
}
