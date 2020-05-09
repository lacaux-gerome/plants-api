export const optionnalField = <T>(
  param: T | null | undefined
): NonNullable<T> | {} => param || {};

export const fieldToInputSetable = <T>(param: T): { set: T } => ({
  set: param,
});

export const optionalFieldToInputSetable = <T>(param: T) =>
  fieldToInputSetable(optionnalField(param));
