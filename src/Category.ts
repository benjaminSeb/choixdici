export enum CategoryEnum {
  JEUNESSE = 'JEUNESSE',
  ENVIRONNEMENT = 'ENVIRONNEMENT',
  SOCIAL_SOLIDAIRE = 'SOCIAL_SOLIDAIRE',
  EDU_POPULAIRE = 'EDU_POPULAIRE',
  CULTURE = 'CULTURE',
}

export interface ICategoryButton {
  name: CategoryEnum;
  color: string;
}

export const getCategories = (): CategoryEnum[] => {
  return [CategoryEnum.CULTURE, CategoryEnum.EDU_POPULAIRE, 
    CategoryEnum.ENVIRONNEMENT, CategoryEnum.JEUNESSE, 
    CategoryEnum.SOCIAL_SOLIDAIRE];
};


