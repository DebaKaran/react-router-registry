export interface Person {
  name: string;
  email: string;
}

export interface PackageDetails {
  name: string;
  description: string;
  readme: string;
  author: Person;
  maintainers: Person[];
  license: string;
}
