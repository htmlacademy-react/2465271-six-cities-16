import { useState } from 'react';
import { SortList } from '../../const';
import { useSort } from '../../hooks/use-sort/use-sort';

type PlacesSortingProps = {
  sortType: typeof SortList;
}

type SortListItemProps = {
  sortType: SortType;
  onSortClick: (sorting: SortType) => void;
}

type SortType = typeof SortList[number];

function SortListItem ({sortType, onSortClick}: SortListItemProps): JSX.Element {

  const { sortOffers } = useSort();

  const handleSortClick = () => {
    onSortClick(sortType);
  };

  return (
    <li
      className={`${sortType !== sortOffers ? 'places__option' : 'places__option places__option--active'}`}
      tabIndex={0}
      onClick={handleSortClick}
    >
      {sortType}
    </li>
  );
}

function PlacesSorting ({sortType}: PlacesSortingProps): JSX.Element {

  const { sortOffers, setSort } = useSort();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenChange = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSortType = (sorting: SortType) => {
    setSort(sorting);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleIsOpenChange}
      >
        {sortOffers}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`${!isOpen ? 'places__options places__options--custom' : 'places__options places__options--custom places__options--opened'}`}
      >
        {sortType.map((sortListItem) => (
          <SortListItem key={sortListItem} sortType={sortListItem} onSortClick={handleSortType} />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
