---
path: /help/company/security
title: Security Overview
category: Company
published: true
---
We understand that by using Gather, you're trusting us with your most important asset: your customer data. The safety and security of that data is our highest priority as a company. Enforcing strict security is a multi-layered problem and we make the utmost effort to ensure best practices at every level.

Firstly, we have strict team policies and procedures. We start by restricting all access to any sensitive customer data. All product development is done with our own test data and production information is securely inaccessible to anyone in the company.

Next we built our product using world-class, modern cloud infrastructure with great security track records and standards. We bolster that with our own high-standards, including including regular backups, data encryption, sanitized logging, and common attack prevention.

Lastly, we've put in place auditing and lock down procedures that allows us to quickly identify and stop any intrusions, should they occur.

## FAQs
### Where is my data stored?
Gather *does not* store any of your customer data. All data accessible via Gather is fetched and aggregated efficiently on-demand, meaning it's not stored anywhere on our servers. Not even in cache.

What we do store are the credentials for your database and other sources, but these are encrypted at-rest using regularly rotated keys stored in Google KMS. We also store metadata for any actions run within Gather, but here we only store the ID of the entity that the action was run for (for example, a customer ID).

Data is further encrypted at disc-level by Google.

### What infrastructure do you run on?
We run entirely on Google Cloud Platform. Our servers are run within a secure VPC with only the necessary hosts/ports exposed to the internet.

### Can employees access my data?
No. Only members of your team are able to access your customer data. Our employees are not given `shell` access to any of our servers and all data access requires access to your encrypted database credentials. Our IAM permissions are such that it's not possible for employees to access or decrypt these credentials.

### How are passwords stored?
Our user authentication system uses BCrypt to hash and salt user passwords. We enforce strong password policies for all users in the product. This helps ensure safety for all our users who would otherwise put themselves at unnecessary risk.

### Is data encrypted in transit between networks?
Yes. All traffic from your browser, to our servers, and to our database are all encrypted using 256-bit AES Transport Level Security (TLS). Non-encrypted access to our API or database is not allowed. SSL certificates are issues and managed with Lets Encrypt. 

### How is security thought about at Gather?
Security is built into our day-to-day development practices. We maintain high awareness of potential security issues through rigorous code review, automated and manual testing, and scheduled penetration testing.

### Do you provide 2-factor authentication?
We are building this now and will be releasing this feature soon.

### PCI DSS
Our payments provider Stripe has been audited by an independent PCI Qualified Security Assessor and is certified as a PCI Level 1 Service Provider.

### Do you have a contact for security?
Yes, please email [mailto:security@gatherdata.co](security@gatherdata.co) with any concerns, questions, or reports related to security.
