import React, {FC} from 'react';
import clsx from 'clsx';

import {GenericVoidFunction} from 'types/generic';
import {Time, TimeFilterType} from 'types/github';

import './TimeFilter.scss';

interface ComponentProps {
  className?: string;
  selectedFilter: TimeFilterType;
  setSelectedFilter: GenericVoidFunction;
}

const TimeFilter: FC<ComponentProps> = ({className, selectedFilter, setSelectedFilter}) => {
  const handleOptionClick = (i: TimeFilterType): GenericVoidFunction => (): void => {
    setSelectedFilter(i);
  };

  const renderOptions = () => {
    return [Time.days7, Time.days30, Time.all].map((option) => (
      <span
        className={clsx('TimeFilter__option', {
          'TimeFilter__option--active': option === selectedFilter,
        })}
        key={option}
        onClick={handleOptionClick(option)}
        role="button"
        tabIndex={0}
      >
        {option}
      </span>
    ));
  };

  return <div className={clsx('TimeFilter', className)}>{renderOptions()}</div>;
};

export default TimeFilter;
