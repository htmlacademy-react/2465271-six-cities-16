import { SortList } from '../../const';

type PlacesSortingProps = {
  sortType: typeof SortList;
}

type SortListItemProps = {
  sortType: string;
}

function SortListItem ({sortType}: SortListItemProps): JSX.Element {
  return (
    <li className="places__option places__option--active" tabIndex={0}>{sortType}</li>
  );
}

function PlacesSorting ({sortType}: PlacesSortingProps): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(sortType).map((sortListItem) => (
          <SortListItem key={sortListItem} sortType={sortListItem} />
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
