# 🌴 Oasis — The Connected Workspace

**Oasis** is a full-featured Notion clone built on a modern technology stack. It's a unified space for your notes, documents, and ideas — where organizing information is fast, beautiful, and intuitive.

---
![alt text](<Снимок экрана 2026-04-02 в 15.19.00.png>)
## ✨ Features

| Feature | Description |
|---|---|
| 📝 **Rich Text Editor** | Full support for headings, lists, checkboxes, and real-time formatting |
| 📁 **Infinite Nesting** | Create documents inside documents — build the perfect hierarchy |
| ☁️ **Cloud Storage** | Image and icon uploads powered by **EdgeStore** |
| 🔐 **Authentication** | Secure sign-in via **Clerk** (Google, GitHub, and more) |
| 🚀 **Real-time Database** | Instant sync across all clients via **Convex** |
| 🌗 **Dark Mode** | Full light/dark theme support via `next-themes` |
| 🗑️ **Trash & Restore** | Soft-delete notes and restore or permanently delete them |
| 📱 **Responsive Design** | Works great on desktop and mobile |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14/15](https://nextjs.org/) (App Router) |
| Database & Backend | [Convex](https://www.convex.dev/) (Real-time DB) |
| Auth | [Clerk](https://clerk.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [Shadcn/UI](https://ui.shadcn.com/) |
| File Storage | [EdgeStore](https://edgestore.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/oasis.git
cd oasis
```

### 2. Install dependencies

This project uses [Bun](https://bun.sh/), but npm or yarn work too:

```bash
bun install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add your keys:

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# EdgeStore
EDGE_STORE_ACCESS_KEY=your_edgestore_access_key
EDGE_STORE_SECRET_KEY=your_edgestore_secret_key
```

### 4. Start the Convex backend

In a separate terminal, run Convex in development mode:

```bash
npx convex dev
```

### 5. Start the frontend

```bash
bun dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📦 Building & Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Add all environment variables from `.env.local` to your Vercel project settings.
4. Run `npx convex deploy` to deploy the Convex backend to production.

---

## 📄 License

MIT © https://github.com/Empty-Developer
