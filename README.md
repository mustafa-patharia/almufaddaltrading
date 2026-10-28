# Al Muffaddal General Trading

E-commerce storefront and integrations for Al Muffaddal General Trading (Dubai, UAE), specializing in mobile phones, consumer electronics, and accessories.

## Project Status

- **Selected Platform**: Shopify (approved by client)
- **Target Market**: UAE (Dubai & Northern Emirates)
- **Key Capabilities**: Shopify Payments UAE (0% transaction fee, Apple Pay, Google Pay), Cash on Delivery (COD), Buy Now Pay Later (Tabby / Tamara), UAE VAT 5% compliance, WhatsApp chat & abandoned cart recovery, and social sales channels (Instagram, TikTok).

## Directory Structure

```
.
├── shopify-theme/             # Custom Amazon & Noon hybrid Shopify Theme for Al Mufaddal General Trading
├── docs/                      # Onboarding documents, questionnaires, and client specs
│   ├── client_questionnaire.md   # Shopify Client Setup & Integrations Questionnaire (Markdown)
│   └── client_questionnaire.docx # Shopify Client Setup & Integrations Questionnaire (Word format)
└── bagisto/                   # Archived Bagisto 2.5.x (Laravel) codebase from earlier evaluation (ignored in git)
```

## Shopify Theme Architecture & Customizations

- **Store URL**: `dfxikq-7m.myshopify.com`
- **Theme Base**: Horizon (Shopify's modern blocks architecture)
- **Marketplace Customizations**:
  - `sections/marketplace-hero.liquid`: Amazon & Noon style main promo banner with dual side deal cards.
  - `sections/category-icons.liquid`: Circular "Shop by Category" icons bar with mobile swipe.
  - `sections/flash-deals.liquid`: "Deals of the Day" with live ticking countdown timer, discount badges, and stock scarcity indicator.
  - `sections/trust-badges.liquid`: 4-point trust assurance bar (100% Genuine, UAE Express Delivery, 7-Day Returns, COD & Secure Checkout).
  - `sections/brand-grid.liquid`: Top electronics brand grid (Apple, Samsung, Sony, HP, Dell, Anker).
  - `config/settings_schema.json`: Complete theme settings panel ("Electronics & Marketplace") allowing the client to customize brand colors, header background, and deal badges in 1 click from the Shopify Theme Editor.

## Next Steps

1. **Client Questionnaire**: Share [docs/client_questionnaire.docx](file:///Users/mustafapatharia/My%20Projects/Personal/almuffaddalgeneraltrading/docs/client_questionnaire.docx) with the client to gather their Shopify store login details, preferred domain, brand styling, policies, and delivery rates.
2. **Store Login & Setup**: Access the client's Shopify store and begin theme customization, product catalog import, and UAE configuration.
3. **Integrations**: Connect Shopify Payments UAE, Cash on Delivery, Tabby/Tamara, and WhatsApp chat.
