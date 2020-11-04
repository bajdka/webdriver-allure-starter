export interface RecruitmentApplication {
  fullName?: String
  email?: String
  experience?: Number
  role?: Role
  aboutYou?: String
  agreeToTerms?: Boolean
}

export enum Role {
  FRONT_END_DEVELOPER = 'Frontend Developer',
  FULL_STACK_DEVELOPER = 'Full Stack Developer',
  ANDROID_ENGINEER = 'Android Engineer',
  IOS_ENGINEER = 'iOS Engineer',
  TEST_AUTOMATION_ENGINEER = 'Test Automation Engineer'
}
