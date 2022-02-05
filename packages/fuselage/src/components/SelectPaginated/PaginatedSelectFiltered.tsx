import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import React, {
  ComponentProps,
  FC,
  FormEvent,
  forwardRef,
  useCallback,
  useState,
} from 'react';

import { PaginatedSelect, PaginatedSelectProps } from '.';
import InputBox from '../InputBox';

type PaginatedSelectFilteredProps = PaginatedSelectProps;

export const PaginatedSelectFiltered: FC<PaginatedSelectFilteredProps> = ({
  // filter,
  // setFilter,
  options,
  placeholder,
  ...props
}) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef<HTMLInputElement, ComponentProps<typeof InputBox.Input>>(
      ({ children, filter, ...props }, ref) => (
        <InputBox.Input
          mi='x4'
          flexGrow={1}
          className='rcx-select__focus'
          ref={ref}
          placeholder={placeholder}
          value={filter}
          onChange={useMutableCallback((e: FormEvent<HTMLInputElement>) =>
            setFilter(e.currentTarget.value)
          )}
          {...props}
          rcx-input-box--undecorated
        />
      )
    ),
    []
  );
  return (
    <PaginatedSelect
      placeholder={undefined}
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
