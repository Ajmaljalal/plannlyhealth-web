export type Tab = {
  text: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
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