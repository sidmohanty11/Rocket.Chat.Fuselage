/* eslint-disable complexity */
import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import React, {
  ComponentProps,
  FormEvent,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  Ref,
  RefAttributes,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';

import { Input, InputBoxSkeleton, Wrapper } from '.';
import { Box } from '../Box';
import { Addon } from './Addon';
import { Option } from './Option';
import { Placeholder } from './Placeholder';

type InputBoxProps = Omit<ComponentProps<typeof Box>, 'ref'> & {
  addon?: ReactNode;
  input?: ReactNode;
  multiple?: boolean;
  error?: string;
  placeholder?: string;
  placeholderVisible?: boolean;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'textarea'
    | 'select';
} & RefAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export const InputBox: ForwardRefExoticComponent<InputBoxProps> & {
  Input?: ForwardRefExoticComponent<ComponentProps<typeof Box>>;
  Skeleton?: ForwardRefExoticComponent<ComponentProps<typeof InputBoxSkeleton>>;
  Option?: ForwardRefExoticComponent<ComponentProps<typeof Option>>;
  Placeholder?: ForwardRefExoticComponent<ComponentProps<typeof Placeholder>>;
} = forwardRef(function InputBox(
  {
    className,
    addon,
    error,
    hidden,
    invisible,
    multiple,
    placeholderVisible,
    type = 'text',
    onChange,
    ...props
  }: InputBoxProps,
  ref: Ref<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) {
  const innerRef = useRef<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >(null);
  const mergedRef = useMergedRefs(ref, innerRef);
  useLayoutEffect(() => {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [error]);

  useLayoutEffect(() => {
    if (addon && innerRef.current && innerRef.current.parentElement) {
      innerRef.current.parentElement.classList.toggle(
        'invalid',
        !innerRef.current.checkValidity()
      );
    }
  }, []);

  const handleChange = useCallback(
    (event: FormEvent<HTMLElement>) => {
      if (addon && innerRef.current && innerRef.current.parentElement) {
        innerRef.current.parentElement.classList.toggle(
          'invalid',
          !innerRef.current.checkValidity()
        );
      }

      return onChange?.call(event.currentTarget, event);
    },
    [addon, onChange]
  );

  if (!addon) {
    return (
      <Input
        is={
          (type === 'textarea' && 'textarea') ||
          (type === 'select' && 'select') ||
          'input'
        }
        className={className}
        cols={(type === 'textarea' && 1) || (type === 'select' && 0) || 0}
        hidden={hidden}
        invisible={invisible}
        multiple={multiple}
        ref={mergedRef}
        htmlSize={
          (type === 'textarea' && undefined) || (type === 'select' && 1) || 1
        }
        type={type === 'textarea' || type === 'select' ? undefined : type}
        onChange={handleChange}
        rcx-input-box--multiple={multiple}
        rcx-input-box--placeholder-visible={placeholderVisible}
        rcx-input-box--type={type}
        {...props}
      />
    );
  }

  return (
    <Wrapper
      className={[props.disabled && 'disabled', className].filter(
        (value): value is string => typeof value === 'string'
      )}
      hidden={hidden}
      invisible={invisible}
    >
      <Input
        is={
          (type === 'textarea' && 'textarea') ||
          (type === 'select' && 'select') ||
          'input'
        }
        className={className}
        cols={(type === 'textarea' && 1) || (type === 'select' && 0) || 0}
        multiple={multiple}
        ref={mergedRef}
        htmlSize={
          (type === 'textarea' && undefined) || (type === 'select' && 1) || 1
        }
        type={type === 'textarea' || type === 'select' ? undefined : type}
        onChange={handleChange}
        rcx-input-box--multiple={multiple}
        rcx-input-box--placeholder-visible={placeholderVisible}
        rcx-input-box--type={type}
        rcx-input-box--undecorated
        {...props}
      />
      <Addon children={addon} />
    </Wrapper>
  );
});
