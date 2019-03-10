## Organizations (Users):
1. Relationships:
- One to Many: Campaigns
- Many to Many: Donors (via Orgs_Donors Table)
2. Data
- ID (Primary key)
- Username
- Password
- Org-Name
- Email

## Campaigns
1. Relationships: 
- One to Many: Organizations 
- Many to Many: Donors (via Donations Table)
2. Data: 
- ID (Primary key)
- Org_ID
- Title
- Cause 
- Description 
- Cash_Goal
- Current_Funds 

##Donors (Many to Many Table)
1. Relationships
- Relational Table between Campaigns and Donors
2. Data
- ID (Primary key)
- Campaign_ID (Foreign Key)
- Donor_ID (Foreign Key)
- Amount 
- Notes 

##Orgs_Donors Table (Many to Many Table)
1. Relationships
- Relational Table between Organizations and Donors
2. Data
- ID (Primary key)
- Org_ID (Foreign Key)
- Donor_ID (Foreign Key)