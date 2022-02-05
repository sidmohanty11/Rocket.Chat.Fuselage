import React, {
  forwardRef,
  useState,
  useCallback,
  ComponentProps,
  ReactNode,
  FormEvent,
  Ref,
} from 'react';

import { Box } from '..';
import { Icon } from '../Icon';
import InputBox from '../InputBox';

type SelectInputOptions = readonly (readonly [string, string])[];

type SelectInputProps = Omit<ComponentProps<typeof Box>, 'ref'> & {
  error?: string;
  options: SelectInputOptions;
  htmlSize?: number;
  addon: ReactNode;
};

export const SelectInput = forwardRef(function SelectInput(
  { children, multiple, placeholder, onChange, ...props }: SelectInputProps,
  ref: Ref<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) {
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(
    !props.value && !props.defaultValue
  );
  const handleChange = useCallback(
    (event: FormEvent<HTMLSelectElement>) => {
      setPlaceholderVisible(!event.currentTarget.value);
      onChange?.call(event.currentTarget, event);
    },
    [onChange]
  );

  if (multiple) {
    return (
      <InputBox
        children={children}
        {...props}
        multiple
        type='select'
        onChange={handleChange}
      />
    );
  }

  return (
    <InputBox
      placeholderVisible={isPlaceholderVisible ? !!placeholder : undefined}
      ref={ref}
      {...props}
      addon={<Icon name='chevron-down' size='x20' />}
      type='select'
      onChange={handleChange}
    >
      {placeholder && (
        <InputBox.Placeholder value=''>{placeholder}</InputBox.Placeholder>
      )}
      {children}
    </InputBox>
  );
});
