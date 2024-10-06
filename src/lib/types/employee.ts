export type Employee = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  photo: string;
  marital_status: string;
  birthday: string;
  gender: string;
  job_title: string;
  department: string;
  company_id: string;
  role: string;
  status: string;
  address: {
    country: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  }
}

export enum Role {
  Admin = 'Admin',
  Finance = 'Finance',
  Standard = 'Standard',
  SuperAdmin = 'Super Admin',
  WellnessCoordinator = 'Program Coordinator',
  CustomerSuccess = 'Customer Success',
  ProgramAdmin = 'Program Admin',
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Invited = 'Invited',
}