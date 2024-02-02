export const filteredData = (searchText, allRestroList) => {
  const filterData = allRestroList.filter((restaurant) => {
    return restaurant.info.name.includes(searchText);
  });
  return filterData;
};
