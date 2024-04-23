export interface DescriptionI {
  limitFiles?: string
  limitMb?: string
}

export interface listI {
  value?: string
  label?: string
}

export interface FormI {
  id: string
  type?: string
  placeholder?: string
  label?: string
  description?: DescriptionI
  list?: listI[]
}

export enum FormsE {
  name = 'name',
  email = 'email',
  phone = 'phone',
  organization = 'organization',
  inn = 'inn',
  kpp = 'kpp',
  region = 'region',
  kindActivity = 'kindActivity',
  title = 'title',
  description = 'description',
  dropzoneFile = 'dropzoneFile',
  isPersonalData = 'isPersonalData',
  code = 'code'
}

export interface resI {
  response?: string
}
