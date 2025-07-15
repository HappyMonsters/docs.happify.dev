---
title: Alerts Overview
---


With Happify Wishlist you can configure 3 kinds of alerts:


- Price Drop Alert
- Stock Drop Alert
- Discount Alert

You also need an email template, our alerts support various tokens for email template customization.


- Price Drop Alert - You can personalize your message using these tokens: `{{first_name}}`,`{{products_list}}`
- Stock Drop Alert - You can personalize your message using these tokens: `{{first_name}}`,`{{products_list}}`
- Discount Alert - You can personalize your message using these tokens: `{{first_name}}`,`{{products_list}}`

Here is an example template that you can use or customize to your liking for the discount alert:


    <!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Discount Alert</title>
    </head>
    <body style="font-family: Arial, sans-serif; color: #333; background-color: #f7f7f7; padding: 20px;">
            <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #333;">🎉 Hi {{firstName}}, Big Discounts Are Here!</h2>
                    <p>We’re excited to let you know that some of your favorite products are now available at discounted prices!</p>
                    <div style="margin-top: 20px;">
                            {{product_list}}
                    </div>
            </div>

            <p style="margin-top: 30px;">
                    Hurry before your favorite items are gone!
            </p>

            <hr style="margin-top: 30px;" />
            <p style="font-size: 12px; color: #888;">
                    You’re receiving this because you subscribed to discount alerts.
            </p>
    </body>
    </html>
