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
      lname
      fname
      businessName
      businessDBAName
      street
      unit
      city
      state
      zip
      primaryDentistName
      secondaryDentistName
      businessLicenseNumber
      businessLicenseAcquiredDate
      businessLicenseExpiryDate
      professionalLicenseName
      professionalLicenseNumber
      professionalLicenseAcquiredDate
      professionalLicenseExpiryDate
      missionStatement
      visionStatement
      aboutBusiness
      ownerBiodata
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
      lname
      fname
      businessName
      businessDBAName
      street
      unit
      city
      state
      zip
      primaryDentistName
      secondaryDentistName
      businessLicenseNumber
      businessLicenseAcquiredDate
      businessLicenseExpiryDate
      professionalLicenseName
      professionalLicenseNumber
      professionalLicenseAcquiredDate
      professionalLicenseExpiryDate
      missionStatement
      visionStatement
      aboutBusiness
      ownerBiodata
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
      lname
      fname
      businessName
      businessDBAName
      street
      unit
      city
      state
      zip
      primaryDentistName
      secondaryDentistName
      businessLicenseNumber
      businessLicenseAcquiredDate
      businessLicenseExpiryDate
      professionalLicenseName
      professionalLicenseNumber
      professionalLicenseAcquiredDate
      professionalLicenseExpiryDate
      missionStatement
      visionStatement
      aboutBusiness
      ownerBiodata
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
