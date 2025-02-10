# 🚀 Getting Started

A **Next.js 15** application built for managing financial transactions, featuring **ShadCN/UI** for a modern UI, **TanStack Query + Axios** for efficient data fetching, and **MockAPI** for simulating backend responses. The app is styled with **Tailwind CSS** and uses **pnpm** as the package manager.

---

## 📌 Features

✅ **Modern UI** with **ShadCN + Tailwind CSS**
✅ **Efficient state management** using **TanStack Query**
✅ **API calls handled with Axios** for flexibility
✅ **MockAPI integration** for testing without a real backend
✅ **Pagination, filtering, and search for transactions**
✅ **Internationalization (i18n) ready**
✅ **Fully typed with TypeScript**

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/diasricardo23/flx-challenge.git
cd flx-challenge
```

### **2️⃣ Install dependencies using pnpm**
```bash
pnpm install
```

### **3️⃣ Configure environment variables**
Create a `.env.local` file in the project root and set up API URLs:
```ini
NEXT_PUBLIC_API_BASE_URL=https://mockapi.io/projects/your-project-id
NEXT_PUBLIC_DEFAULT_LOCALE=es
```

### **4️⃣ Start the development server**
```bash
pnpm dev
```
The application will be available at: **[http://localhost:3000](http://localhost:3000)**

---

## 📖 Usage

### **🔹 Fetch Transactions (Paginated + SSR)**
Transactions are **fetched server-side** and hydrated in the client:
```tsx
const { data } = useQuery(transactionQueryOptions(currentPage, ITEMS_PER_PAGE, filters));
```

### **🔹 Viewing Transaction Details**
Clicking a transaction opens a **modal** that loads details dynamically using `useQuery`:
```tsx
<TransactionDetailsDialog transactionId={selectedTransactionId} />
```

### **🔹 Filtering Transactions**
- **Search by Transaction ID, Sender, or Receiver** (Debounced Search).
- **Filter by Status (Completed, Pending, Failed, In Progress).**
- **Filter by Payment Method (Bank Deposit, Cash Pickup, Mobile Wallet).**

---

## 🌍 Internationalization (i18n)

This app supports **multi-language translations** using `next-international`.

### **🔹 Changing Language**
Use the `SwitchLocale` component to dynamically change languages:
```tsx
<SwitchLocale />
```

### **🔹 Default Locale (Spanish 🇪🇸)**
If no locale is specified, the app **defaults to Spanish (`es`)** using middleware:
```tsx
const I18nMiddleware = createI18nMiddleware({ locales: ['en', 'es'], defaultLocale: 'es' });
```

---

## 📊 API Overview (MockAPI)

### **🔹 Get Transactions (Mock Paginated)**
```http
GET /transactions
```

### **🔹 Get Transaction Details**
```http
GET /transactions/{transaction_id}
```

MockAPI Base URL: `https://67a7a1cd203008941f682a38.mockapi.io/api/v1`

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, TypeScript
- **UI Framework:** ShadCN/UI, Tailwind CSS
- **State Management:** TanStack Query + Axios
- **API:** MockAPI for backend simulation
- **Package Manager:** pnpm

---

## 🔗 Contribution Guidelines

1. **Fork the repository**.
2. Create a **new branch** (`feature-xyz`).
3. Submit a **pull request (PR)**.

---

## 📜 License

This project is licensed under the **MIT License**.

