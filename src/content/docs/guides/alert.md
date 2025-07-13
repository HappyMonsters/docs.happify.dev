---
title: Alerts Overview
---


With Happify Wishlist you can configure 3 kinds of alerts:


- Price Drop Alert
- Stock Drop Alert
- Discount Alert

You also need an email template, our alerts support various tokens for email template customization.


- Price Drop Alert - You can personalize your message using these tokens: `**{{first_name}}**`,`**{{product_name}}**`, `**{{initial_product_price}}**`,`**{{product_price}}**`, `**{{product_url}}**`, `**{{product_image}}**`,`**{{product_quantity}}**`
- Stock Drop Alert - You can personalize your message using these tokens: `**{{first_name}}**`,`**{{product_name}}**`, `**{{product_price}}**`, `**{{product_url}}**`, `**{{product_image}}**`,`**{{product_quantity}}**`
- Discount Alert - You can personalize your message using these tokens: `**{{first_name}}**`,`**{{discount_product_list}}**`

Here is an example template that you can use or customize to your liking for the price drop alert:


    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>🔥 Great News!</h2>
      <p>Your favorite product <strong>{{product_name}}</strong> is now available at just <strong>{{product_price}}</strong>!</p>

      <a href="{{product_url}}" style="text-decoration: none; color: #1a73e8;">
        <img src="{{product_image}}" alt="{{product_name}}" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </a>

      <p>
        Don’t miss out — grab it now while stocks last!
      </p>

      <p>
        👉 <a href="{{product_url}}" style="color: #ffffff; background-color: #28a745; padding: 10px 20px; border-radius: 4px; text-decoration: none;">
          View Product
        </a>
      </p>

      <hr style="margin-top: 30px;" />
      <p style="font-size: 12px; color: #888;">
        You’re receiving this because you subscribed for updates on product availability.
      </p>
    </div>
