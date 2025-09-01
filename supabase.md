========================
CODE SNIPPETS
========================
TITLE: Supabase Studio Local Development Quickstart
DESCRIPTION: Provides a quick guide for developers to set up and run Supabase Studio locally. It details the necessary Node.js version, dependency installation, internal secret pulling, starting the development server, and running tests.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/studio/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
# You'll need to be on Node v20
# in /studio

npm i # install dependencies
npm run dev:secrets:pull # Supabase internal use: if you are working on the platform version of the Studio
npm run dev # start dev server
npm run test # run tests
npm run -- --watch # run tests in watch mode
```

----------------------------------------

TITLE: Supabase SvelteKit User Management Setup Workflow
DESCRIPTION: This section details the sequential steps required to set up a Supabase project for user management and integrate it with a SvelteKit application. It covers project creation, database quickstart execution, API key retrieval, environment variable configuration, and the final application launch.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/user-management/sveltekit-user-management/README.md#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Supabase Project Setup & Application Execution:

1. Project Creation:
   - Endpoint: https://supabase.com/dashboard
   - Method: Manual UI interaction
   - Description: Sign up and create a new Supabase project.
   - Pre-requisite: Wait for database initialization.

2. Database Quickstart Execution:
   - Location: Supabase Project SQL Editor
   - Action: Run "User Management Starter" quickstart query.
   - Outcome: Creation of 'profiles' table with initial schema.

3. API Key Retrieval:
   - Location: Project Settings (cog icon) -> API tab
   - Keys:
     - API URL: Your project's API endpoint.
     - `anon` key: Client-side API key for anonymous access; switches to user's token post-login.
     - `service_role` key: Full access, server-side only; must be kept secret.

4. Environment Variable Configuration:
   - File: `.env.local` (created from `.env.example`)
   - Variables: Populate with retrieved API URL and `anon` key.

5. Application Launch:
   - Command: `npm run dev`
   - Access: `https://localhost:5173/`
```

----------------------------------------

TITLE: Install Laravel Breeze Authentication
DESCRIPTION: Install Laravel Breeze, a simple and minimal starter kit for Laravel's authentication features. This involves requiring the Breeze package via Composer and then running the `breeze:install` Artisan command to set up the necessary views and routes.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-22-laravel-postgres.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
composer require laravel/breeze --dev
php artisan breeze:install
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: This snippet provides commands to launch the Next.js development server using various package managers (npm, yarn, pnpm, bun). Running one of these commands will start the application locally, typically accessible via http://localhost:3000, and enable hot-reloading for development purposes.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/clerk/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Install Dependencies and Run Development Server with Bun
DESCRIPTION: This snippet provides the essential command-line instructions for a Bun-based project. It first installs all required project dependencies and then starts the local development server, making the application accessible via a web browser.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/oauth-app-authorization-flow/README.md#_snippet_0

LANGUAGE: Shell
CODE:
```
bun install
bun run dev
```

----------------------------------------

TITLE: Install Dependencies and Start All Supabase Applications
DESCRIPTION: This set of commands guides you through installing all necessary project dependencies in the root of the Supabase monorepo using `pnpm install`. It then shows how to copy the example environment file for the `www` application and finally, how to start all Supabase applications simultaneously for local development using `pnpm dev`.

SOURCE: https://github.com/supabase/supabase/blob/master/DEVELOPERS.md#_snippet_1

LANGUAGE: sh
CODE:
```
pnpm install # install dependencies
cp apps/www/.env.local.example apps/www/.env.local
pnpm dev # start all the applications
```

----------------------------------------

TITLE: Start Local Supabase Docs Development Server
DESCRIPTION: Command to navigate to the Supabase docs application directory and start the Next.js development server, making the local site accessible in a web browser.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md#_snippet_1

LANGUAGE: Shell
CODE:
```
cd /apps/docs
npm run dev
```

----------------------------------------

TITLE: Install and Run Supabase with Docker (General Setup)
DESCRIPTION: This script clones the Supabase Docker repository, creates a project directory, copies necessary files, sets up environment variables, pulls Docker images, and starts the Supabase services in detached mode. This is the recommended general setup for quick deployment.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/self-hosting/docker.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
# Get the code
git clone --depth 1 https://github.com/supabase/supabase

# Make your new supabase project directory
mkdir supabase-project

# Tree should look like this
# .
# ├── supabase
# └── supabase-project

# Copy the compose files over to your project
cp -rf supabase/docker/* supabase-project

# Copy the fake env vars
cp supabase/docker/.env.example supabase-project/.env

# Switch to your project directory
cd supabase-project

# Pull the latest images
docker compose pull

# Start the services (in detached mode)
docker compose up -d
```

----------------------------------------

TITLE: Displaying Supabase Web App Demos with JSX
DESCRIPTION: This JSX code defines an array of web application tutorial demos, covering frameworks like Next.js, React, Vue 3, and Angular. It dynamically renders these tutorials as GlassPanel components, providing users with links to full-fledged examples demonstrating Supabase's database, authentication, and storage functionalities.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started.mdx#_snippet_3

LANGUAGE: JSX
CODE:
```
{
  [
    {
      title: 'Next.js',
      href: '/guides/getting-started/tutorials/with-nextjs',
      description:
        'Learn how to build a user management app with Next.js and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/nextjs-icon',
      hasLightIcon: true
    },
    {
      title: 'React',
      href: '/guides/getting-started/tutorials/with-react',
      description:
        'Learn how to build a user management app with React and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/react-icon'
    },
    {
      title: 'Vue 3',
      href: '/guides/getting-started/tutorials/with-vue-3',
      description:
        'Learn how to build a user management app with Vue 3 and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/vuejs-icon'
    },
    {
      title: 'Nuxt 3',
      href: '/guides/getting-started/tutorials/with-nuxt-3',
      description:
        'Learn how to build a user management app with Nuxt 3 and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/nuxt-icon'
    },
    {
      title: 'Angular',
      href: '/guides/getting-started/tutorials/with-angular',
      description:
        'Learn how to build a user management app with Angular and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/angular-icon'
    },
    {
      title: 'RedwoodJS',
      href: '/guides/getting-started/tutorials/with-redwoodjs',
      description:
        'Learn how to build a user management app with RedwoodJS and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/redwood-icon'
    },
    {
      title: 'Svelte',
      href: '/guides/getting-started/tutorials/with-svelte',
      description:
        'Learn how to build a user management app with Svelte and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/svelte-icon'
    },
    {
      title: 'SvelteKit',
      href: '/guides/getting-started/tutorials/with-sveltekit',
      description:
        'Learn how to build a user management app with SvelteKit and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/svelte-icon'
    },
    {
      title: 'refine',
      href: '/guides/getting-started/tutorials/with-refine',
      description:
        'Learn how to build a user management app with refine and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/refine-icon'
    }
]
.map((item) => {
    return (
      <Link href={`${item.href}`} key={item.title} passHref className={'col-span-4'}>
        <GlassPanel
          title={item.title}
          span="col-span-6"
          background={false}
          icon={item.icon}
          hasLightIcon={item.hasLightIcon}
        >
          {item.description}
        </GlassPanel>
      </Link>
    )

})}
```

----------------------------------------

TITLE: Create Expo app from example
DESCRIPTION: Command to quickly scaffold a new Expo project pre-configured with the `with-legend-state-supabase` example, providing a ready-to-run starting point for the tutorial.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-09-23-local-first-expo-legend-state.mdx#_snippet_0

LANGUAGE: Bash
CODE:
```
npx create-expo-app --example with-legend-state-supabase
```

----------------------------------------

TITLE: Installing Prisma Client and Generating Models - bun
DESCRIPTION: These commands install the Prisma client library as a dependency and then generate the Prisma client code based on your 'schema.prisma', allowing your application to interact with the database.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/prisma.mdx#_snippet_19

LANGUAGE: sh
CODE:
```
bun install @prisma/client
bunx prisma generate
```

----------------------------------------

TITLE: Supabase local development credentials output
DESCRIPTION: Example output displayed after successfully starting the Supabase local development setup. It provides the URLs and keys for various local Supabase services, including the API, Database, Studio, Mailpit, and the anonymous and service role keys.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/cli/getting-started.mdx#_snippet_5

LANGUAGE: console
CODE:
```
Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
     Mailpit URL: http://localhost:54324
        anon key: eyJh......
service_role key: eyJh......
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: This snippet provides commands to launch the Next.js development server, which enables hot-reloading and makes the application accessible locally, typically at `http://localhost:3000`. Choose the command corresponding to your preferred package manager (npm, yarn, pnpm, or bun).

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

LANGUAGE: bash
CODE:
```
bun dev
```

----------------------------------------

TITLE: Installing Prisma Client and Generating Models - npm
DESCRIPTION: These commands install the Prisma client library as a dependency and then generate the Prisma client code based on your 'schema.prisma', allowing your application to interact with the database.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/prisma.mdx#_snippet_16

LANGUAGE: sh
CODE:
```
npm install @prisma/client
npx prisma generate
```

----------------------------------------

TITLE: Install Select Component via shadcn-ui CLI
DESCRIPTION: Installs the `Select` component into your project using the shadcn-ui command-line interface, automating the setup process.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/select.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add select
```

----------------------------------------

TITLE: Start Laravel Development Server
DESCRIPTION: Launch the Laravel development server to make the application accessible via a web browser. This command starts a local server, typically at `http://127.0.0.1:8000`, allowing for testing and interaction with the application.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-22-laravel-postgres.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
php artisan serve
```

----------------------------------------

TITLE: Install and Setup Python Environment with Poetry
DESCRIPTION: These commands guide the user through installing the Poetry package manager, activating its virtual environment, and installing project dependencies for a Python application. This ensures all required libraries are available before running the image search application.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/ai/image_search/README.md#_snippet_0

LANGUAGE: Shell
CODE:
```
pip install poetry
poetry shell
poetry install
```

----------------------------------------

TITLE: Initialize SvelteKit App and Install Supabase Client
DESCRIPTION: This snippet guides you through setting up a new SvelteKit project, navigating into the project directory, installing initial dependencies, and then adding the Supabase JavaScript client library to your application.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-sveltekit.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx sv create supabase-sveltekit
cd supabase-sveltekit
npm install
npm install @supabase/supabase-js
```

----------------------------------------

TITLE: Install and Run Supabase with Docker (Advanced Setup)
DESCRIPTION: This script uses Git sparse checkout for a more advanced setup, cloning only the necessary Docker files from the Supabase repository. It then proceeds to create a project directory, copy files, set environment variables, pull Docker images, and start Supabase services in detached mode.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/self-hosting/docker.mdx#_snippet_1

LANGUAGE: sh
CODE:
```
# Get the code using git sparse checkout
git clone --filter=blob:none --no-checkout https://github.com/supabase/supabase
cd supabase
git sparse-checkout set --cone docker && git checkout master
cd ..

# Make your new supabase project directory
mkdir supabase-project

# Tree should look like this
# .
# ├── supabase
# └── supabase-project

# Copy the compose files over to your project
cp -rf supabase/docker/* supabase-project

# Copy the fake env vars
cp supabase/docker/.env.example supabase-project/.env

# Switch to your project directory
cd supabase-project

# Pull the latest images
docker compose pull

# Start the services (in detached mode)
docker compose up -d
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: This snippet provides commands to launch the Next.js development server, which enables hot-reloading and makes the application accessible locally, typically at `http://localhost:3000`. Choose the command corresponding to your preferred package manager (npm, yarn, pnpm, or bun).

SOURCE: https://github.com/supabase/supabase/blob/master/examples/caching/with-react-query-nextjs-14/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

LANGUAGE: bash
CODE:
```
bun dev
```

----------------------------------------

TITLE: Setup Supabase Environment Variables
DESCRIPTION: This command copies the example environment file (`.env.local.example`) to `.env.local`. This is a crucial first step for configuring local development settings, including API keys and other sensitive information required by the Supabase functions.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/openai/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
cp supabase/.env.local.example supabase/.env.local
```

----------------------------------------

TITLE: Installing Prisma Client and Generating Models - pnpm
DESCRIPTION: These commands install the Prisma client library as a dependency and then generate the Prisma client code based on your 'schema.prisma', allowing your application to interact with the database.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/prisma.mdx#_snippet_17

LANGUAGE: sh
CODE:
```
pnpm install @prisma/client
pnpx prisma generate
```

----------------------------------------

TITLE: Supabase Bootstrap Command Variations
DESCRIPTION: Different methods to invoke the `supabase bootstrap` command, allowing users to start a new Supabase project setup directly via the Supabase CLI, or through npm and bun package managers, without needing a global CLI installation.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-04-15-supabase-bootstrap.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
supabase bootstrap
```

LANGUAGE: bash
CODE:
```
npx supabase@latest bootstrap
```

LANGUAGE: bash
CODE:
```
bunx supabase@latest bootstrap
```

----------------------------------------

TITLE: Install Resizable component using shadcn-ui CLI
DESCRIPTION: Installs the Resizable component and its dependencies into your project using the shadcn-ui command-line interface, simplifying the setup process.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/resizable.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add resizable
```

----------------------------------------

TITLE: Payload CMS Local Development Setup
DESCRIPTION: Provides step-by-step instructions to set up and run the Payload CMS application locally. This involves starting a local Supabase project, configuring environment variables, installing project dependencies, and launching the development server. Ensure Supabase CLI and pnpm are installed.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/cms/README.md#_snippet_0

LANGUAGE: Shell
CODE:
```
cd apps/cms && supabase start
cp .env.example .env
pnpm install && pnpm generate:importmap
pnpm dev
pnpm dev:cms
```

----------------------------------------

TITLE: Installing Prisma Client and Generating Models - yarn
DESCRIPTION: These commands install the Prisma client library as a dependency and then generate the Prisma client code based on your 'schema.prisma', allowing your application to interact with the database.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/prisma.mdx#_snippet_18

LANGUAGE: sh
CODE:
```
yarn add @prisma/client
npx prisma generate
```

----------------------------------------

TITLE: Install Dependencies and Run Supabase Studio
DESCRIPTION: Commands to install Node.js dependencies and start the Supabase Studio dashboard after configuring the essential environment variables in the `.env` file.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/studio/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

----------------------------------------

TITLE: Get Homebrew PostgreSQL Path Information on macOS
DESCRIPTION: This command provides detailed information about the Homebrew installation of PostgreSQL, including its installation path. This information is useful for manually adding PostgreSQL binaries to the system's PATH variable if they are not automatically detected.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/_partials/postgres_installation.mdx#_snippet_2

LANGUAGE: sh
CODE:
```
brew info postgresql@17
```

----------------------------------------

TITLE: Verify psql Client Installation
DESCRIPTION: This command verifies that the `psql` (PostgreSQL client) is correctly installed and accessible from the system's PATH. It outputs the version of the `psql` client, which is a crucial step after installing PostgreSQL on both Windows and macOS.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/_partials/postgres_installation.mdx#_snippet_1

LANGUAGE: sh
CODE:
```
psql --version
```

----------------------------------------

TITLE: Start the Rails development server
DESCRIPTION: Run the Rails development server, making the application accessible via a web browser. By default, the application will be available at `http://127.0.0.1:3000`.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-29-ruby-on-rails-postgres.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
bin/rails server
```

----------------------------------------

TITLE: Install vecs Python client
DESCRIPTION: Installs the `vecs` Python client library using pip. This client is used for interacting with PostgreSQL databases equipped with the `pgvector` extension. Requires Python 3.7+.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/ai/vector_hello_world.ipynb#_snippet_0

LANGUAGE: Python
CODE:
```
pip install vecs
```

----------------------------------------

TITLE: Install Supabase JavaScript client
DESCRIPTION: This command installs the `@supabase/supabase-js` package using npm. This client library is essential for interacting with Supabase services, including database changes, from a JavaScript application.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/postgres-changes.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm install @supabase/supabase-js
```

----------------------------------------

TITLE: Downloading a File with Dart
DESCRIPTION: This Dart snippet initializes a Supabase client and then uses its storage API to asynchronously download a file named 'example.txt' from the 'public' bucket. The downloaded content is returned in the `storageResponse`, allowing for subsequent processing or display within the application.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/quickstart.mdx#_snippet_8

LANGUAGE: Dart
CODE:
```
void main() async {
  final supabase = SupabaseClient('supabaseUrl', 'supabaseKey');

  final storageResponse = await supabase
      .storage
      .from('public')
      .download('example.txt');
}
```

----------------------------------------

TITLE: Install Dropdown Menu Component via CLI
DESCRIPTION: Installs the `dropdown-menu` component using the `shadcn-ui` CLI tool, simplifying the setup process by adding the component and its dependencies to your project.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/dropdown-menu.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add dropdown-menu
```

----------------------------------------

TITLE: Install Sidebar component using CLI
DESCRIPTION: Run this command to automatically install the `sidebar.tsx` component and its dependencies using the shadcn/ui CLI. This is the recommended method for quick setup.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/sidebar.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@latest add sidebar
```

----------------------------------------

TITLE: Install Supabase.js and Dependencies for React Native
DESCRIPTION: This command installs the necessary Supabase JavaScript client (`@supabase/supabase-js`) along with `@react-native-async-storage/async-storage` for persistent session storage and `react-native-url-polyfill` for URL polyfilling in a React Native Expo project. These packages are essential for integrating Supabase authentication reliably.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-16-react-native-authentication.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill
```

----------------------------------------

TITLE: Install Card component via shadcn-ui CLI
DESCRIPTION: Installs the Card UI component into your project using the shadcn-ui command-line interface, simplifying the setup process.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/card.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add card
```

----------------------------------------

TITLE: Install Textarea Component via CLI
DESCRIPTION: This command installs the Textarea component using the shadcn-ui CLI. It's the recommended method for quick setup.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/textarea.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add textarea
```

----------------------------------------

TITLE: Install RNEUI Themed for React Native UI Components
DESCRIPTION: This command installs the `@rneui/themed` package, which provides a comprehensive set of cross-platform UI components like buttons and input fields for React Native applications. It simplifies the process of building consistent and visually appealing user interfaces.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-16-react-native-authentication.mdx#_snippet_4

LANGUAGE: Bash
CODE:
```
npm install @rneui/themed
```

----------------------------------------

TITLE: Install Supabase CLI
DESCRIPTION: Provides various methods to install the Supabase CLI on different operating systems and environments, including macOS, Windows, Linux, and Node.js-based setups.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/cli/getting-started.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
brew install supabase/tap/supabase
```

LANGUAGE: powershell
CODE:
```
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

LANGUAGE: sh
CODE:
```
sudo apk add --allow-untrusted <...>.apk
sudo dpkg -i <...>.deb
sudo rpm -i <...>.rpm
```

LANGUAGE: sh
CODE:
```
npx supabase --help
```

LANGUAGE: sh
CODE:
```
npm install supabase --save-dev
```

----------------------------------------

TITLE: Interact with Rails database using console
DESCRIPTION: Launch the Rails console to interact with the application's models and database directly. This example demonstrates creating a new 'Article' record, saving it to the database, and then retrieving all existing 'Article' records.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-29-ruby-on-rails-postgres.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
bin/rails console
```

LANGUAGE: ruby
CODE:
```
article = Article.new(title: "Hello Rails", body: "I am on Rails!")
article.save # Saves the entry to the database

Article.all
```

----------------------------------------

TITLE: Initialize SolidJS App and Install Supabase.js
DESCRIPTION: This snippet demonstrates how to initialize a new SolidJS application using `degit` and then install the `supabase-js` client library as a dependency. These are the foundational steps to set up your project environment.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-solidjs.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx degit solidjs/templates/ts supabase-solid
cd supabase-solid
```

LANGUAGE: bash
CODE:
```
npm install @supabase/supabase-js
```

----------------------------------------

TITLE: Install and Start Roboflow Inference Server
DESCRIPTION: This command installs the necessary Python packages for Roboflow Inference and starts the local inference server. Ensure Docker is installed and running on your machine before executing this command, as Roboflow Inference relies on Docker for deployment.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/integrations/roboflow.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
pip install inference inference-cli inference-sdk && inference server start
```

----------------------------------------

TITLE: Create Next.js Supabase Quickstart Application
DESCRIPTION: This command initializes a new Next.js project pre-configured with Supabase integration. It downloads a quickstart application that can be used as a reference or starting point for implementing Supabase authentication with server-side rendering.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/how-do-you-troubleshoot-nextjs---supabase-auth-issues-riMCZV.mdx#_snippet_0

LANGUAGE: Shell
CODE:
```
npx create-next-app -e with-supabase
```

----------------------------------------

TITLE: Run the initialized refine development server
DESCRIPTION: Navigates into the project directory and starts the development server for the refine application. This command launches the app, typically making it accessible on `http://localhost:5173`.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-refine.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
cd app-name
npm run dev
```

----------------------------------------

TITLE: Install Switch component via shadcn-ui CLI
DESCRIPTION: Installs the Switch component and its dependencies into your project using the shadcn-ui command-line interface. This is the recommended method for quick setup.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/switch.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add switch
```

----------------------------------------

TITLE: Install Alert Dialog via CLI
DESCRIPTION: Installs the Alert Dialog component using the shadcn-ui CLI tool, simplifying the setup process.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/alert-dialog.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add alert-dialog
```

----------------------------------------

TITLE: Initialize and run a new Flutter application
DESCRIPTION: This snippet outlines the initial steps to create a new Flutter project using the `flutter create` command and then navigate into its directory to run the default application. It's the foundational setup for any Flutter development.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-06-30-flutter-tutorial-building-a-chat-app.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
flutter create my_chat_app
cd my_chat_app
flutter run
```

----------------------------------------

TITLE: Install Tooltip component using Shadcn UI CLI
DESCRIPTION: This command installs the Tooltip component into your project using the Shadcn UI command-line interface, simplifying the setup process.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/tooltip.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add tooltip
```

----------------------------------------

TITLE: Implement Supabase Authentication with Type Hints
DESCRIPTION: Provides an example of integrating `supabase-js` for user authentication, specifically `signInWithPassword`. It demonstrates how to include setup code (like client initialization) above a 'cut' line (`// ---cut---`) to provide context for type hints without displaying the setup code in the final snippet.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/app/contributing/content.mdx#_snippet_8

LANGUAGE: javascript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('dummy', 'client')

// ---cut---
const result = supabase.auth.signInWithPassword({
  email: 'test@example.com',
  password: 'test1234',
})
```

----------------------------------------

TITLE: Install Radix UI Select Dependencies Manually
DESCRIPTION: Installs the core `@radix-ui/react-select` dependency, which is required for manual setup of the `Select` component in your project.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/select.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @radix-ui/react-select
```

----------------------------------------

TITLE: Uploading a File with Dart
DESCRIPTION: This Dart snippet shows how to create a local file (`example.txt`) and then upload it to a Supabase storage bucket. It initializes a Supabase client, writes content to the file, and uploads it to the 'public' bucket using the `from()` and `upload()` methods, demonstrating file preparation before upload.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/quickstart.mdx#_snippet_6

LANGUAGE: Dart
CODE:
```
void main() async {
  final supabase = SupabaseClient('supabaseUrl', 'supabaseKey');

  // Create file `example.txt` and upload it in `public` bucket
  final file = File('example.txt');
  file.writeAsStringSync('File content');
  final storageResponse = await supabase
      .storage
      .from('public')
      .upload('example.txt', file);
}
```

----------------------------------------

TITLE: Invoke Supabase Edge Function from Client Applications
DESCRIPTION: Examples demonstrating how to invoke a deployed Supabase Edge Function from a client-side application using either the Supabase JavaScript client library or the standard Fetch API.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/quickstart.mdx#_snippet_11

LANGUAGE: jsx
CODE:
```
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://[YOUR_PROJECT_ID].supabase.co', 'YOUR_ANON_KEY')

const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'JavaScript' },
})

console.log(data) // { message: "Hello JavaScript!" }
```

LANGUAGE: jsx
CODE:
```
const response = await fetch('https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_ANON_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Fetch' }),
})

const data = await response.json()
console.log(data)
```

----------------------------------------

TITLE: Install dependencies for encrypted Supabase session storage in Expo
DESCRIPTION: This section outlines the required npm and Expo packages to install for implementing encrypted user session storage. It includes `@supabase/supabase-js` for Supabase integration, `@react-native-async-storage/async-storage` for data storage, `aes-js` for encryption, `react-native-get-random-values` for key generation, and `expo-secure-store` for secure key storage.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-16-react-native-authentication.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm install @supabase/supabase-js
npm install @rneui/themed @react-native-async-storage/async-storage react-native-url-polyfill
npm install aes-js react-native-get-random-values
npx expo install expo-secure-store
```

----------------------------------------

TITLE: Install PostgreSQL on macOS with Homebrew
DESCRIPTION: This command installs PostgreSQL version 17 using Homebrew on macOS. Homebrew is a popular package manager that simplifies software installation on macOS systems.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/_partials/postgres_installation.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
brew install postgresql@17
```

----------------------------------------

TITLE: Create Laravel Project
DESCRIPTION: Scaffold a new Laravel project using Composer's `create-project` command. This command initializes a fresh Laravel application in the specified directory.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-22-laravel-postgres.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
composer create-project laravel/laravel example-app
```

----------------------------------------

TITLE: Supabase Edge Function starter code (TypeScript)
DESCRIPTION: Provides the default TypeScript code for a newly generated Supabase Edge Function. This example demonstrates a Deno-based function that accepts a JSON payload with a `name` field and returns a greeting message.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/quickstart.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
Deno.serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }

  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
})
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: This snippet provides commands to start the Next.js development server using various package managers. It allows developers to run the application locally for testing and development purposes, typically accessible via `http://localhost:3000`.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/ui-library/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Initialize React App and Install Supabase Client
DESCRIPTION: This snippet demonstrates how to set up a new React project using Vite, navigate into the project directory, and install the `supabase-js` library, which is essential for interacting with Supabase services.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-react.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm create vite@latest supabase-react -- --template react
cd supabase-react
npm install @supabase/supabase-js
```

----------------------------------------

TITLE: Start Supabase Development Server
DESCRIPTION: This command initiates the local development server for your Supabase project. Once started, the application will be accessible in your web browser at `http://localhost:5173`, allowing you to view and interact with your application.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/sveltekit.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Build React Application for Production with npm
DESCRIPTION: Compiles the React application into the `build` folder, optimizing it for production deployment. This command bundles React in production mode, minifies the code, and includes hashes in filenames for caching, preparing the application for deployment.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/edge-functions/app/README.md#_snippet_2

LANGUAGE: shell
CODE:
```
npm run build
```

----------------------------------------

TITLE: Create new Flutter application
DESCRIPTION: Initializes a new Flutter project named 'myauthapp'. This command sets up the basic directory structure and necessary files for a Flutter application.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-07-18-flutter-authentication.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
flutter create myauthapp
```

----------------------------------------

TITLE: Initialize a RedwoodJS Application
DESCRIPTION: Use the `create redwood-app` command to scaffold a new RedwoodJS project. This command sets up the basic project structure and installs necessary dependencies, followed by navigating into the new project directory.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-redwoodjs.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
yarn create redwood-app supabase-redwoodjs
cd supabase-redwoodjs
```

----------------------------------------

TITLE: Install and setup project dependencies
DESCRIPTION: Commands to install the Poetry dependency manager, activate the project's virtual environment, and install all required application dependencies for the image search project.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/ai/aws_bedrock_image_search/README.md#_snippet_0

LANGUAGE: Shell
CODE:
```
pip install poetry
poetry shell
poetry install
```

----------------------------------------

TITLE: Initialize Supabase Project and Start Postgres
DESCRIPTION: This Bash script initializes a new Supabase project and starts a local PostgreSQL instance. It requires the Supabase CLI to be installed and Docker to be running. This sets up the local environment for using the `vecs` client.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/vecs-python-client.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
# Initialize your project
supabase init

# Start Postgres
supabase start
```

----------------------------------------

TITLE: Run React Development Server with npm
DESCRIPTION: Starts the React application in development mode, making it accessible via a web browser at http://localhost:3000. The page automatically reloads upon code changes, and any lint errors are displayed directly in the console.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/edge-functions/app/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
npm start
```

----------------------------------------

TITLE: Create a new Rails project with PostgreSQL
DESCRIPTION: Scaffold a new Ruby on Rails project, specifying PostgreSQL as the database adapter. This command initializes the project directory and sets up the basic structure for a Rails application.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-29-ruby-on-rails-postgres.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
rails new blog -d=postgresql
```

----------------------------------------

TITLE: Run Next.js Local Development Server
DESCRIPTION: Start the Next.js development server to run your application locally. This command compiles your code and serves it, typically on `localhost:3000`, allowing you to test and develop your application in real-time.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/auth/nextjs/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Configure Jackson Serialization for Supabase-kt
DESCRIPTION: This snippet provides build file configurations for integrating Jackson with Supabase-kt. It includes an example for Gradle Kotlin DSL (build.gradle.kts) to add the `serializer-jackson` dependency.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/kotlin/v1/installing.mdx#_snippet_5

LANGUAGE: kotlin
CODE:
```
implementation("io.github.jan-tennert.supabase:serializer-jackson:VERSION")
```

----------------------------------------

TITLE: Starting Local Supabase Stack and Development Server (Bash)
DESCRIPTION: These commands initiate the local Supabase development stack and start the Next.js application. This allows for testing the integrated Supabase and Dotenvx setup in a local environment by visiting `localhost:3000`.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/slack-clone/nextjs-slack-clone-dotenvx/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npx supabase start
npm run dev
```

----------------------------------------

TITLE: Expo Project Setup and Development Commands
DESCRIPTION: Commands to install project dependencies, initialize Expo Application Services (EAS) for build management, and start the Expo development server for a dev client on a physical device.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/user-management/expo-push-notifications/README.md#_snippet_1

LANGUAGE: Shell
CODE:
```
npm i
npm install --global eas-cli && eas init --id your-expo-project-id
npx expo start --dev-client
```

----------------------------------------

TITLE: Start local Supabase services and serve Edge Function
DESCRIPTION: Starts all local Supabase services, including the database and authentication, and serves a specific Edge Function. This makes the function accessible via a local URL (e.g., `http://localhost:54321/functions/v1/hello-world`) with hot reloading enabled.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/quickstart.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
supabase start  # Start all Supabase services
supabase functions serve hello-world
```

----------------------------------------

TITLE: SQL Schema and Data Setup for Supabase Explain Example
DESCRIPTION: SQL script to create an `instruments` table with `id` and `name` columns, and then insert sample data. This provides a foundational dataset for illustrating the functionality of the `explain()` method in Supabase. It's a prerequisite for testing query plans.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/debugging-performance.mdx#_snippet_2

LANGUAGE: SQL
CODE:
```
create table instruments (
  id int8 primary key,
  name text
);

insert into books
  (id, name)
values
  (1, 'violin'),
  (2, 'viola'),
  (3, 'cello');
```

----------------------------------------

TITLE: Install Carousel Component via CLI
DESCRIPTION: Installs the carousel component using the shadcn-ui CLI tool, simplifying the setup process.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/carousel.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add carousel
```

----------------------------------------

TITLE: Starting Development Server with Bun
DESCRIPTION: This command initiates the development server for the Supabase OAuth application using Bun. Once started, the application will typically be accessible via a web browser at http://localhost:3000.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/oauth-app-authorization-flow/README.md#_snippet_1

LANGUAGE: Shell
CODE:
```
bun run dev
```

----------------------------------------

TITLE: Run Hono Development Server
DESCRIPTION: Command to start the development server for the Hono application using Vite. This enables live reloading and local testing during development, facilitating rapid iteration.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/auth/hono/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Install Toggle component via shadcn-ui CLI
DESCRIPTION: Installs the Toggle component into your project using the shadcn-ui command-line interface. This method automates the setup and integration of the component.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/toggle.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add toggle
```

----------------------------------------

TITLE: Configure Jackson Serialization for Supabase-kt
DESCRIPTION: This snippet provides build file configurations for integrating Jackson with Supabase-kt. It includes an example for Gradle Kotlin DSL (build.gradle.kts) to add the `serializer-jackson` dependency.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/kotlin/v2/installing.mdx#_snippet_5

LANGUAGE: kotlin
CODE:
```
implementation("io.github.jan-tennert.supabase:serializer-jackson:VERSION")
```

----------------------------------------

TITLE: Install Alert Component via CLI
DESCRIPTION: Installs the Alert UI component using the shadcn-ui CLI tool. This command automatically adds the necessary component files and dependencies to your project, streamlining the setup process.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/alert copy.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add alert
```

----------------------------------------

TITLE: Install Dependencies and Run React Native Project
DESCRIPTION: These commands are used to set up and run the React Native application. `npm install` installs all necessary project dependencies, `npm run prebuild` prepares the project for specific functionalities like file pickers, and `npm start` launches the application in development mode.

SOURCE: https://github.com/supabase/supabase/blob/master/examples/user-management/expo-user-management/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm install
```

LANGUAGE: bash
CODE:
```
npm run prebuild
```

LANGUAGE: bash
CODE:
```
npm start
```

----------------------------------------

TITLE: Initialize a New Flutter Project
DESCRIPTION: This command initializes a new Flutter application named `supabase_quickstart`. It sets up the basic project structure and necessary files for a Flutter development environment.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-flutter.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
flutter create supabase_quickstart
```

----------------------------------------

TITLE: Invoke Supabase Edge Function from Application
DESCRIPTION: These code examples illustrate how to invoke a deployed Supabase Edge Function from a client-side application. They provide two common methods: using the official Supabase JavaScript client library for simplified interaction, and using the standard Fetch API for direct HTTP requests. Both examples demonstrate sending a JSON body and handling the function's response.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/quickstart.mdx#_snippet_10

LANGUAGE: jsx
CODE:
```
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://[YOUR_PROJECT_ID].supabase.co', 'YOUR_ANON_KEY')

const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'JavaScript' },
})

console.log(data) // { message: "Hello JavaScript!" }

```

LANGUAGE: jsx
CODE:
```
const response = await fetch('https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_ANON_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Fetch' }),
})

const data = await response.json()
console.log(data)

```

----------------------------------------

TITLE: Copy Example Environment File
DESCRIPTION: Copies the provided example environment configuration file (`.env.example`) to a new file named `.env`. This new file will store local environment variables required for the Docker setup.

SOURCE: https://github.com/supabase/supabase/blob/master/DEVELOPERS.md#_snippet_7

LANGUAGE: sh
CODE:
```
cp .env.example .env
```

----------------------------------------

TITLE: Initialize Supabase in Flutter Application
DESCRIPTION: Initializes the Supabase client within the `main` function of a Flutter application using `Supabase.initialize()`. This setup requires the Supabase project URL and anonymous key, which can be found in the Supabase dashboard, and prepares the app for authentication and database interactions.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-07-18-flutter-authentication.mdx#_snippet_3

LANGUAGE: dart
CODE:
```
import 'package:flutter/material.dart';
import 'package:myauthapp/screens/login_screen.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  /// TODO: update Supabase credentials with your own
  await Supabase.initialize(
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_ANON_KEY',
  );
  runApp(const MyApp());
}

final supabase = Supabase.instance.client;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Auth',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const LoginScreen(),
    );
  }
}
```

----------------------------------------

TITLE: Test Live Supabase Edge Function with cURL
DESCRIPTION: Verify your deployed Supabase Edge Function by sending a POST request using cURL. This example demonstrates including authorization and content-type headers, along with a JSON payload, to test the function's response.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/quickstart.mdx#_snippet_8

LANGUAGE: curl
CODE:
```
curl --request POST 'https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_PUBLISHABLE_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Production"}'
```

----------------------------------------

TITLE: Rendering Supabase Mobile Tutorial Links with React
DESCRIPTION: This JavaScript/JSX snippet defines an array of objects, each representing a mobile tutorial with Supabase. It then uses the `map` function to iterate over this array, dynamically generating `Link` and `GlassPanel` components for each tutorial. This structure helps in presenting a grid of clickable tutorial cards, linking to specific guides for Flutter, Expo React Native, Android Kotlin, iOS Swift, and various Ionic frameworks.

SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started.mdx#_snippet_4

LANGUAGE: JSX
CODE:
```
{[
    {
      title: 'Flutter',
      href: '/guides/getting-started/tutorials/with-flutter',
      description:
        'Learn how to build a user management app with Flutter and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/flutter-icon'
    },
    {
      title: 'Expo React Native',
      href: '/guides/getting-started/tutorials/with-expo-react-native',
      description:
        'Learn how to build a user management app with Expo React Native and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/expo-icon',
      hasLightIcon: true
    },
    {
      title: 'Android Kotlin',
      href: '/guides/getting-started/tutorials/with-kotlin',
      description:
        'Learn how to build a product management app with Android and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/kotlin-icon'
    },
    {
      title: 'iOS Swift',
      href: '/guides/getting-started/tutorials/with-swift',
      description:
        'Learn how to build a user management app with iOS and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/swift-icon'
    },
    {
      title: 'Ionic React',
      href: '/guides/getting-started/tutorials/with-ionic-react',
      description:
        'Learn how to build a user management app with Ionic React and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/ionic-icon'
    },
    {
      title: 'Ionic Vue',
      href: '/guides/getting-started/tutorials/with-ionic-vue',
      description:
        'Learn how to build a user management app with Ionic Vue and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/ionic-icon'
    },
    {
      title: 'Ionic Angular',
      href: '/guides/getting-started/tutorials/with-ionic-angular',
      description:
        'Learn how to build a user management app with Ionic Angular and Supabase Database, Auth, and Storage functionality.',
      icon: '/docs/img/icons/ionic-icon'
    }
  ].map((item) => {
    return (
      <Link href={`${item.href}`} key={item.title} passHref className={'col-span-4'}>
        <GlassPanel
          title={item.title}
          span="col-span-6"
          background={false}
          icon={item.icon}
          hasLightIcon={item.hasLightIcon}
        >
          {item.description}
        </GlassPanel>
      </Link>
    )
})}
```