export const policies: Record<
  string,
  { title: string; intro: string; sections: { heading: string; body?: string; bullets?: string[] }[] }
> = {
  "privacy-policy": {
    title: "Privacy policy",
    intro:
      "NutriFreaks (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website or use our services.",
    sections: [
      {
        heading: "1. Information we collect",
        body: "We collect information that you provide directly to us to ensure a personalized experience:",
        bullets: [
          "**Contact and Delivery Details:** Your name, email address, contact number, and delivery address.",
          "**Financial Data:** Payment information for processing orders.",
          "**Customization Data:** Health-related information for tailoring meal plans to your dietary needs.",
          "**Preference Data:** Information regarding your food choices and feedback.",
        ],
      },
      {
        heading: "2. Use of information",
        body: "Your data is processed strictly for the following operational purposes:",
        bullets: [
          "To provide, maintain, and improve our daily meal services and dietitian-led plans.",
          "To process transactions and send related information, including confirmations and invoices.",
          "To communicate with you about your subscription and support messages.",
        ],
      },
      {
        heading: "3. Information sharing",
        body: "**We do not sell your personal data.** We share information only with service providers, such as delivery partners and payment processors, who need access to perform their specific tasks.",
      },
      {
        heading: "4. Security protocols",
        body: "We implement industry-standard security measures to protect your information. However, please note that **no method of transmission over the internet is 100% secure.**",
      },
      {
        heading: "5. Contact support",
        bullets: ["Phone: **+91 94227 99333**", "Email: **admin@nutrifreaks.com**"],
      },
    ],
  },
  "terms-and-conditions": {
    title: "Terms and conditions",
    intro: "By using NutriFreaks services or website, you agree to the following terms and conditions. Please read them carefully.",
    sections: [
      {
        heading: "1. User accounts",
        bullets: [
          "**Confidentiality:** You are responsible for maintaining the confidentiality of your account and password.",
          "**Accuracy:** You agree to provide accurate and current information during the registration process.",
        ],
      },
      {
        heading: "2. Subscription and payments",
        body: "Prices for meal plans and subscriptions are subject to change, but **you will be notified in advance** of any price adjustments.",
      },
      {
        heading: "3. Dietary restrictions and allergies",
        body: "**Your Responsibility:** It is your responsibility to inform us of any dietary restrictions, allergies, or specific health conditions. NutriFreaks is **not responsible** for any health issues arising from undisclosed allergies or restrictions.",
      },
      {
        heading: "4. Intellectual property",
        body: "All content on our website, including text, images, logos, and software, is the intellectual property of NutriFreaks. You may not reproduce or redistribute any content **without prior written consent.**",
      },
      {
        heading: "5. Limitation of liability",
        body: "NutriFreaks is **not liable** for any damages resulting from the use of our services, including but not limited to missed deliveries, incorrect meal plans, or allergic reactions.",
      },
      {
        heading: "6. Governing law",
        body: "These terms are governed by the **laws of India.** Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the **courts in India.**",
      },
    ],
  },
  "delivery-policy": {
    title: "NutriFreaks delivery policy",
    intro:
      "We are committed to delivering your personalized, dietitian-approved meals safely, hygienically, and on time. Please review our service guidelines below.",
    sections: [
      {
        heading: "Madurai service zone",
        body: "We currently provide daily meal delivery services within the **Madurai city area (select Pin Codes only).** If you are outside our primary zones, please contact us. We may be able to arrange special delivery options.",
      },
      {
        heading: "Delivery timing",
        body: "Meals are delivered daily, except for **Sundays**, which are designated cheat days. Standard hours: meals are delivered between **7:00 AM** and **10:00 PM**. Your specific slot will be communicated upon plan confirmation.",
      },
      {
        heading: "Delivery fees",
        body: "Charges are calculated based on your specific location and will be clearly itemized during the checkout process.",
      },
      {
        heading: "Failed deliveries",
        bullets: [
          "If a delivery attempt is made and you are unavailable, our partner will immediately contact you to arrange a new delivery time for that specific meal.",
          "Additional fees may apply for re-delivery attempts. We cannot guarantee freshness beyond a brief re-delivery window.",
        ],
      },
      {
        heading: "Damaged meals or incorrect orders",
        bullets: [
          "Please contact our support team immediately within **2 hours** of the delivery time.",
          "We will investigate and provide a prompt resolution, including replacements or account credits.",
        ],
      },
      {
        heading: "Packaging & sustainability",
        bullets: [
          "**Standard Meals:** High-quality, disposable, sealed containers.",
          "**The NutriFreaks Hotbox:** Reusable, insulated container provided for subscribers to ensure freshness and reduce plastic waste.",
        ],
      },
    ],
  },
  "cancellation-and-refund-policy": {
    title: "Cancellation and refund policy",
    intro:
      "At NutriFreaks, we strive to provide excellent service and high-quality meals. Please read our Cancellation and Redeem/Refund Policy carefully. Our goal is to be fair, transparent and customer-friendly while maintaining fresh preparation and reducing food wastage.",
    sections: [
      {
        heading: "Meal cancellation",
        body: "Cancelling a single meal involves a complex chain of logistics and fresh food preparation, so the cut-off window prevents food waste and keeps prices fair.",
      },
      {
        heading: "Cancellation cut-off windows",
        bullets: [
          "Breakfast & Lunch: Can be cancelled until **7:00 PM** on the **previous day**.",
          "Dinner: Can be cancelled until **7:30 AM** on the **same day**.",
          "If cancelled within the time window: A **₹19 Cancellation Fee** applies; the remaining amount is credited to your wallet balance.",
          "If cancelled after the time window: Meal is considered prepared and delivered, and there will be no wallet credit or refund.",
          "Wallet Balance Usage: Automatically used in your next renewal or you can use it for ordering add-on items.",
          "Cancellation by NutriFreaks: If we cannot fulfill your order due to unforeseen issues, a full refund will be issued.",
          "Wallet Refund: Processed within **7 business days** to the original payment method, subject to any payment provider deductions.",
        ],
      },
      {
        heading: "Ending subscription before the end date",
        body: "**1-Week / 1-month packages cannot be ended** due to advance meal planning and committed kitchen partner allotment.",
      },
      {
        heading: "3-month / 6-month packages",
        bullets: [
          "Non-cancellable period for 3-month package is **45 days** and for 6-month package is **90 days**.",
          "End-requests should be made at least **48 hours** earlier.",
          "Eligible end-requests can be converted into wallet credit or can be refunded as per the customer's wish.",
        ],
      },
      {
        heading: "Refund policy",
        body: "The refunds are credited through the customer's payment method within **7 business days**.",
      },
    ],
  },
  "package-material-policy": {
    title: "Packaging material policy",
    intro:
      "Updated On: **December 16, 2025**. To ensure every meal reaches you fresh, hygienic, and well-protected, NutriFreaks provides a designated Hotbox for each customer.",
    sections: [
      {
        heading: "Why we use hotboxes",
        bullets: [
          "Preserves meal temperature and freshness.",
          "Protects your meal from rain, dust, and outside temperatures.",
          "Provides a more hygienic, spill-free delivery solution.",
          "Ensures consistent quality for your daily customized meals.",
        ],
      },
      {
        heading: "Security deposit for hotbox",
        body: "To maintain the quality and lifespan of the Hotboxes, a **fully refundable security deposit** is collected at the time of subscription.",
        bullets: [
          "1 meal per day: **₹2,000**",
          "2 or more meals per day: **₹2,500**",
          "This amount is **100% refundable** when the Hotbox is returned.",
        ],
      },
      {
        heading: "If the hotbox is not returned at delivery time",
        bullets: [
          "Your meal will still be packed using our standard disposable packing materials.",
          "A packing material cost will be deducted from your security deposit balance.",
          "Lost or damaged Hotboxes may be subject to a **replacement fee** deducted from your security deposit.",
        ],
      },
    ],
  },
};
