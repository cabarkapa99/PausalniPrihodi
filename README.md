# Income Tracker for Small Business Owners

This is a Next.js application written in TypeScript designed to help small business owners track their income and monitor their tax limits. The app utilizes Tailwind CSS, Shadcn for UI components, and Clerk for authentication.

## Features

- **Income Tracking**: Allows users to input their income and calculate remaining tax-free limits.
- **User Authentication**: Secure and easy login/signup using Clerk, including support for social logins like Google and Apple.
- **Responsive Design**: Built with Tailwind CSS and Shadcn for a modern and responsive UI.
- **Data Security**: User data is securely stored and accessible only to authorized users.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with the App Router.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **UI Components**: [Shadcn](https://shadcn.dev/) for pre-designed components.
- **Authentication**: [Clerk](https://clerk.dev/) for user authentication and management.
- **Language**: TypeScript for type safety.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Clerk API key

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows a modular structure for scalability and ease of development:

```
.
├── components/        # Reusable UI components
├── pages/             # Next.js pages (App Router structure used)
├── styles/            # Tailwind CSS configuration and global styles
├── utils/             # Utility functions
├── hooks/             # Custom React hooks
├── public/            # Static assets
├── prisma/            # Prisma ORM configurations (if applicable)
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Customization

You can customize the app to match your specific requirements:

- **Income Categories**: Add or modify income categories in the components.
- **Tax Limit Rules**: Update the tax limit calculation logic in the `utils/` folder.
- **Styling**: Modify styles by editing `tailwind.config.js` or using Tailwind's utility classes.

## Deployment

1. Build the application for production:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:

   ```bash
   npm run start
   # or
   yarn start
   ```

3. Deploy to a hosting provider such as Vercel, AWS, or your preferred platform.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://shadcn.dev/)
- [Clerk](https://clerk.dev/)
