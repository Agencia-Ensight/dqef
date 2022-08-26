type IEnum = {
  id: number;
  name: string;
};

export function toEnum(dbEnum: Record<string, any>): IEnum {
  return {
    id: dbEnum.id,
    name: dbEnum.name,
  };
}
