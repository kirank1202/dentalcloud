/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOwner = /* GraphQL */ `
  mutation CreateOwner(
    $input: CreateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    createOwner(input: $input, condition: $condition) {
      id
      ownerID
      role
      lname
      fname
      street
      unit
      city
      state
      zip
      businessName
      businessDBAName
      businessLogo
      questionnaireId
      practiceType
      mobileClinicType
      missionStatement
      visionStatement
      aboutBusiness
      ownerBiodata
      businessLicenseNumber
      businessLicenseAcquiredDate
      businessLicenseExpiryDate
      professionalLicenseName
      professionalLicenseNumber
      professionalLicenseAcquiredDate
      professionalLicenseExpiryDate
      primaryDentist
      secondaryDentist
      lawyer
      accountant
      createdAt
      updatedAt
    }
  }
`;
export const updateOwner = /* GraphQL */ `
  mutation UpdateOwner(
    $input: UpdateOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    updateOwner(input: $input, condition: $condition) {
      id
      ownerID
      role
      lname
      fname
      street
      unit
      city
      state
      zip
      businessName
      businessDBAName
      businessLogo
      questionnaireId
      practiceType
      mobileClinicType
      missionStatement
      visionStatement
      aboutBusiness
      ownerBiodata
      businessLicenseNumber
      businessLicenseAcquiredDate
      businessLicenseExpiryDate
      professionalLicenseName
      professionalLicenseNumber
      professionalLicenseAcquiredDate
      professionalLicenseExpiryDate
      primaryDentist
      secondaryDentist
      lawyer
      accountant
      createdAt
      updatedAt
    }
  }
`;
export const deleteOwner = /* GraphQL */ `
  mutation DeleteOwner(
    $input: DeleteOwnerInput!
    $condition: ModelOwnerConditionInput
  ) {
    deleteOwner(input: $input, condition: $condition) {
      id
      ownerID
      role
      lname
      fname
      street
      unit
      city
      state
      zip
      businessName
      businessDBAName
      businessLogo
      questionnaireId
      practiceType
      mobileClinicType
      missionStatement
      visionStatement
      aboutBusiness
      ownerBiodata
      businessLicenseNumber
      businessLicenseAcquiredDate
      businessLicenseExpiryDate
      professionalLicenseName
      professionalLicenseNumber
      professionalLicenseAcquiredDate
      professionalLicenseExpiryDate
      primaryDentist
      secondaryDentist
      lawyer
      accountant
      createdAt
      updatedAt
    }
  }
`;
export const createQuestionnaire = /* GraphQL */ `
  mutation CreateQuestionnaire(
    $input: CreateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    createQuestionnaire(input: $input, condition: $condition) {
      id
      questionnaireId
      passion
      othersInterest
      planB
      pricePoint
      competition
      growBusiness
      insuranceNeeds
      costOfEntry
      monthlyLivingExpenses
      readyAndDriven
      additionalNotes1
      additinalNotes2
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestionnaire = /* GraphQL */ `
  mutation UpdateQuestionnaire(
    $input: UpdateQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    updateQuestionnaire(input: $input, condition: $condition) {
      id
      questionnaireId
      passion
      othersInterest
      planB
      pricePoint
      competition
      growBusiness
      insuranceNeeds
      costOfEntry
      monthlyLivingExpenses
      readyAndDriven
      additionalNotes1
      additinalNotes2
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestionnaire = /* GraphQL */ `
  mutation DeleteQuestionnaire(
    $input: DeleteQuestionnaireInput!
    $condition: ModelQuestionnaireConditionInput
  ) {
    deleteQuestionnaire(input: $input, condition: $condition) {
      id
      questionnaireId
      passion
      othersInterest
      planB
      pricePoint
      competition
      growBusiness
      insuranceNeeds
      costOfEntry
      monthlyLivingExpenses
      readyAndDriven
      additionalNotes1
      additinalNotes2
      createdAt
      updatedAt
    }
  }
`;
export const createState = /* GraphQL */ `
  mutation CreateState(
    $input: CreateStateInput!
    $condition: ModelStateConditionInput
  ) {
    createState(input: $input, condition: $condition) {
      id
      abbreviation
      name
      form1
      form2
      form3
      form4
      from5
      createdAt
      updatedAt
    }
  }
`;
export const updateState = /* GraphQL */ `
  mutation UpdateState(
    $input: UpdateStateInput!
    $condition: ModelStateConditionInput
  ) {
    updateState(input: $input, condition: $condition) {
      id
      abbreviation
      name
      form1
      form2
      form3
      form4
      from5
      createdAt
      updatedAt
    }
  }
`;
export const deleteState = /* GraphQL */ `
  mutation DeleteState(
    $input: DeleteStateInput!
    $condition: ModelStateConditionInput
  ) {
    deleteState(input: $input, condition: $condition) {
      id
      abbreviation
      name
      form1
      form2
      form3
      form4
      from5
      createdAt
      updatedAt
    }
  }
`;
