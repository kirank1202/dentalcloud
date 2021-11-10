/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOwner = /* GraphQL */ `
  query GetOwner($id: ID!) {
    getOwner(id: $id) {
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
