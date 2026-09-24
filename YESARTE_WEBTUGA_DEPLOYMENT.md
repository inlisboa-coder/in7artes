# YesArte independent frontend deployment

Domain: yesarte.com
Repository: inlisboa-coder/in7artes
Branch: yesarte-rebranding

Architecture:
- yesarte.com is an independent frontend hosted on WebTuga.
- in7artes.com remains unchanged.
- Shopify remains the commerce backend for catalog, cart and checkout.
- The unpublished Shopify Refresh-derived YesArte rebranding theme is a design/reference source only and must not replace the MAIN theme of the original store.
- Product availability, prices and checkout must continue to come from Shopify.

Deployment safety:
- Never deploy to the inlisboa.com primary document root.
- Never overwrite in7artes.com.
- Use a dedicated document root for yesarte.com.
- Do not activate automatic cPanel deployment until WebTuga confirms the exact document root.

Target:
- Build output expected in dist/ or equivalent production folder.
- Domain-aware frontend can link back to Shopify checkout while keeping YesArte branding.
