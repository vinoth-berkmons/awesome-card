## Awesome Card App with Authentication


## Scope

We are building a small Card App where one can view the card and details of the card with Authentication.

## App Structure
 - src
   - app
  
     - common
       - components
         - button
         - card
         - fallback-view
         - pinInput
         - textbox
         - index.ts
  
       - constants
         - constants.ts
         - index.ts
  
       - helper
         - Utils.ts
  
       - models
         - Card.ts
         - CardConnection.ts
         - UI.ts
         - User.ts
         - UserAddress.ts

        - index.ts
  
       - modules

         - auth
           - components
             - mobileInput
             - otpInput
             - pinInput
             - index.ts
           - index.tsx

         - dashboard
           - components
             - CardUI.tsx
             - Loader.tsx
           - index.tsx

         - details
           - index.tsx

       - routing

         - PrivateRoutes.tsx
         - PublicRoutes.tsx
         - Routes.tsx

       - services

         - auth
           - actions.ts
           - constants.ts
           - slice.ts
           - thunks.ts

         - cards
           - actions.ts
           - constants.ts
           - slice.ts
           - thunks.ts

         - user
           - actions.ts
           - constants.ts
           - slice.ts
           - thunks.ts

         - store.ts

       - index.ts

   - layout

     - components
       - header
       - content
       - index.ts

     - Masterlayout

 - apolloClients.ts

 - App.tsx

 - index.tsx


## Assumption
    - Resend OTP doesn't do anything as mentioned in the assignments it should be enabled after 60 seconds.

## Improvements
    - Every time refresh the Page it asks for the Verify Pin. usually in web no need to verify every time. since this task is design for mobile App I have done the same
    - Currently verified button accepts more than one number in the inputBox. 
    - Design can be improved


### Thank you!