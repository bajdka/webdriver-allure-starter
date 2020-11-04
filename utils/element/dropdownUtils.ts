export const getSelectedOption = (element: WebdriverIO.Element<void>): string => {
  const selectedOption = element.$$('option').find((option) => option.isSelected())
  return selectedOption ? selectedOption.getText().trim() : ''
}
