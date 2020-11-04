import View from '../view'
import { links } from 'data/links'
import { RecruitmentApplication } from 'data/recruitment'

class RecruitmentForm extends View {
  pageUrl = links.recruitmentForm

  get fullNameField() {
    return $('#formNameInput')
  }
  get emailField() {
    return $('#formEmailInput')
  }
  get experienceField() {
    return $(
      '//*[contains(@class, "form-group has-feedback") and .//text()="Experience in years*"]//input'
    )
  }
  get roleDropdown() {
    return $('#formRoleSelect')
  }
  get aboutYouField() {
    return $('#formAboutYouTextArea')
  }
  get termsAndConditionsCheckbox() {
    return $('#formTermsAndConditionsCheckbox')
  }
  get termsAndConditionsLink() {
    return $('//a[@class="Pointer"]')
  }
  get submitButton() {
    return $('#formSubmitButton')
  }
  get cleanButton() {
    return $('#formClearButton')
  }

  enterDetails({
    fullName,
    email,
    experience,
    role,
    aboutYou,
    agreeToTerms
  }: RecruitmentApplication) {
    this.fullNameField.setValue(fullName)
    this.emailField.setValue(email)
    this.experienceField.setValue(experience)
    if (role) this.roleDropdown.selectByVisibleText(role)
    this.aboutYouField.setValue(aboutYou)
    if (agreeToTerms) this.termsAndConditionsCheckbox.click()
  }

  enterDetailsAndSubmit(details: RecruitmentApplication) {
    this.enterDetails(details)
    this.submitButton.click()
  }

  openTermsAndConditions() {
    this.termsAndConditionsLink.click()
  }

  clearForm() {
    this.cleanButton.click()
  }

  areTermsAndConditionsAccepted(): boolean {
    return this.termsAndConditionsCheckbox.isSelected()
  }
}

export default new RecruitmentForm()
