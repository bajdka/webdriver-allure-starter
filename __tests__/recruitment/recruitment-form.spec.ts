import faker from 'faker'
import allure from '@wdio/allure-reporter'

import recruitmentForm from 'views/recruitment/recruitment-form.view'
import recruitmentFailedForm from 'views/recruitment/recruitment-failure'
import recruitmentSuccessForm from 'views/recruitment/recruitment-success'
import { RecruitmentApplication, Role } from 'data/recruitment'

describe('Recruitment process', () => {

  const recruitmentDetails = (): RecruitmentApplication => {
    return {
      fullName: 'Dr. John Kowalski-Mustermann',
      email: 'name@domain.com',
      experience: 3,
      role: Role.FULL_STACK_DEVELOPER,
      aboutYou: faker.lorem.sentences(2),
      agreeToTerms: true
    }
  }

  beforeEach(() => {
    allure.addFeature('Recruitment process - candidate perspective')
  })

  describe('when experience is longer than 2 years recruitment should be successful', () => {
    it('application should end with success', () => {
      recruitmentForm.openPage()
      recruitmentForm.enterDetailsAndSubmit(recruitmentDetails())
      expect(recruitmentSuccessForm.isPageOpened()).toBeTruthy()
    })
  })

  describe('applications with experience shorter than 2 years should be failed', () => {
    it('application should fail for 1 year of experience', () => {
      let recruitmentDetails: RecruitmentApplication = recruitmentDetails()
      delete recruitmentDetails.experience
      recruitmentForm.openPage()

      recruitmentForm.enterDetailsAndSubmit(recruitmentDetails)

      expect(recruitmentFailedForm.isPageOpened()).toBeTruthy()
    })
  })
})
