# API Routes #

## Registration/Login ##
1. __Register:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/register
      - **HTTP Request**: POST
      -  **Required in the Body**: 
         - Username 
         - Password
         - Org Name
         - Email
    - **Returns**:
        - Token
        - ID

2. __Login:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/login
      - **HTTP Request**: POST
      -  **Required in the Body**: 
         - Username 
         - Password
    - **Returns**:
        - Token
        - ID
        - Message

## Organizations (Users) ##
1. __Get All Organizations:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/organizations
      - **HTTP Request**: GET
      -  **Required in the Body**: 
         - N/A
    - **Returns**:
        - Returns all Organizations
        
1. __Get A Organizations:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/organizations/:id
      - **HTTP Request**: GET
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Return specified Organization

1. __Get A Organizations Donors:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/organizations/:id/donors
      - **HTTP Request**: GET
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Return specified Organization's Donors

1. __Create An Organizations:__ 
      - **Reference the Registration Route Above**

1. __Update an Organizations:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/organizations/:id
      - **HTTP Request**: PUT
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Return updated Organization
        - Return specified Organization's Donors

1. __Delete an Organizations:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/organizations/:id
      - **HTTP Request**: DELETE
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Returns 1 if delete was successful
## Donors ##
1. __Get All Donors:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/donors
      - **HTTP Request**: GET
      -  **Required in the Body**: 
         - N/A
    - **Returns**:
        - Returns All Donors

1. __Get A Donor:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/donors/:id
      - **HTTP Request**: GET
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Return specified Donor and their Donations in a Donations Object. If a user has no donations, it will return this message in the donations object: "This donor hasn't contributed yet. Try contacting them at donor.email"

1. __Create A Donor:__ 
    - **URL**: https://donor-management-lambda.herokuapp.com/api/donors/
      - **HTTP Request**: Post
      -  **Required in the Body**: 
         - Name
         - Email
         - Organization Id
    - **Returns**:
        - Return the newly created Donor and their Donations in a Donations Object.

1. __Update a Donor:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/donors/:id
      - **HTTP Request**: PUT
      -  **Required in the Body**: 
         - Any Changes you'd like
    - **Returns**:
        - Returns updated Donor
        - Returns specified Donations
        - We recommend updating a donation via the donation routes.
        
1. __Delete a Donor:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/donors/:id
      - **HTTP Request**: DELETE
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Returns 1 if delete was successful


## Campaigns ##
1. __Get All Campaigns:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/campaigns
      - **HTTP Request**: GET
      -  **Required in the Body**: 
         - N/A
    - **Returns**:
        - Returns All campaigns

1. __Get A Campaign:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/campaigns/:id
      - **HTTP Request**: GET
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Return specified Campaign and their Donations in a Donations Object. If a campaign has no donations, it will return this message in the donations object: "This Campaign has no contributions yet"

1. __Create A Campaign:__ 
    - **URL**: https://donor-management-lambda.herokuapp.com/api/campaigns/
      - **HTTP Request**: Post
      -  **Required in the Body**: 
         - Organization Id 
         - Campaign Name
    - **Returns**:
        - Return the newly created Campaign and their Donations in a Donations Object.

1. __Update A Campaign:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/campaigns/:id
      - **HTTP Request**: PUT
      -  **Required in the Body**: 
         - Any Changes you'd like
    - **Returns**:
        - Returns updated Campaign
        - Returns specified Donations
        - We recommend updating a donation via the donation routes.
1. __Delete A Campaign:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/campaigns/:id
      - **HTTP Request**: DELETE
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Returns 1 if delete was successful


## Donations ##
 1. __Get Organizations Donations By Campaigns:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/organizations/:id/donations
      - **HTTP Request**: GET
      -  **Required in the Head**: 
         - Id
    - **Returns**:
        - Returns All that Orgs Campaigns with the donations for each 

1. __Get A Campaign:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/donations/:id/
      - **HTTP Request**: GET
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Returns specified Donation

1. __Create A Donation:__ 
    - **URL**: https://donor-management-lambda.herokuapp.com/api/donations/
      - **HTTP Request**: Post
      -  **Required in the Body**: 
         - Campaign Id (Must belong to same Org_Id and the donor Id)
         - Donor Id (Must belong to same Org_Id and the campaign Id)
    - **Returns**:
        - Return the newly created Campaign and their Donations in a Donations Object.

1. __Update A Donation:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/donations/:id
      - **HTTP Request**: PUT
      -  **Required in the Body**: 
         - Any Changes you'd like
    - **Returns**:
        - Returns updated Campaign
        - Returns specified Donations
        - We recommend updating a donation via the donation routes.
1. __Delete A Campaign:__ 
      - **URL**: https://donor-management-lambda.herokuapp.com/api/donations/:id
      - **HTTP Request**: DELETE
      -  **Required in the Header**: 
         - Id
    - **Returns**:
        - Returns 1 if delete was successful
