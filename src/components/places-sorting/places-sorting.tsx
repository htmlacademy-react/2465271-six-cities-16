import { useState } from 'react';
import { SortList } from '../../const';

type PlacesSortingProps = {
  sortType: typeof SortList;
}

type SortListItemProps = {
  sortType: SortType;
  onSortClick: (sorting: SortType) => void;
  activeSortType: SortType;
}

type SortType = typeof SortList[number];

function SortListItem ({sortType, onSortClick, activeSortType}: SortListItemProps): JSX.Element {

  const handleSortClick = () => {
    onSortClick(sortType);
  };

  return (
    <li
      className={`${sortType !== activeSortType ? 'places__option' : 'places__option places__option--active'}`}
      tabIndex={0}
      onClick={handleSortClick}
    >
      {sortType}
    </li>
  );
}

function PlacesSorting ({sortType}: PlacesSortingProps): JSX.Element {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSortType, setActiveSortType] = useState<SortType>(sortType[0]);

  const handleIsOpenChange = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSortType = (sorting: SortType) => {
    setActiveSortType(sorting);
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
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`${!isOpen ? 'places__options places__options--custom' : 'places__options places__options--custom places__options--opened'}`}
      >
        {sortType.map((sortListItem) => (
          <SortListItem key={sortListItem} sortType={sortListItem} onSortClick={handleSortType} activeSortType={activeSortType}/>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
