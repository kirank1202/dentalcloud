/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOwner = /* GraphQL */ `
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
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
export const listOwners = /* GraphQL */ `
  query ListOwners(
    $filter: ModelOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getQuestionnaire = /* GraphQL */ `
  query GetQuestionnaire($id: ID!) {
    getQuestionnaire(id: $id) {
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
export const listQuestionnaires = /* GraphQL */ `
  query ListQuestionnaires(
    $filter: ModelQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionnaires(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getState = /* GraphQL */ `
  query GetState($id: ID!) {
    getState(id: $id) {
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
export const listStates = /* GraphQL */ `
  query ListStates(
    $filter: ModelStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
