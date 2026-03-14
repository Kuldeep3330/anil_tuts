//how to reduce bundle size?
size=speed=money
1.code splitting
2.Remove unused libraries
3.tree shaking (ES modules use karo.)
4.Analyze bundle // webpack-bundle-analyzer(Dekho kya heavy hai.)
5.Avoid large Images
    Compress images
    Use WebP
    Lazy load images
one liner
I reduce bundle size using code splitting, dynamic imports, tree shaking, and avoiding heavy libraries. I also analyze bundle with tools like webpack-bundle-analyzer.

//2️⃣ Code Splitting Kaise Karte Ho?
React.lazy + Suspense
I use React.lazy for component-level splitting and route-based splitting for large pages.

//3️⃣ How to Prevent Unnecessary Re-renders?
1.React.memo(Re-render tab hoga jab props change ho.)
2. useCallback(Prevent function recreation)
3. useMemo(Memoize expensive function)
I prevent unnecessary re-renders using React.memo, useCallback, useMemo, and by colocating state properly.

//4️⃣ useMemo Kab Nahi Use Karna Chahiye?
useMemo tab use karo jab computation expensive ho aur dependency stable ho.

//5️⃣ How to Optimize Large Lists?
1. Virtualization (Best Solution) ie react-window, react-virtualized (sirf visible items render honge)
2.Pagination(Instead of 10,000 items → 20 per page.)
3.Key optimization(Unique stable keys use karo.)
4.Infinite scroll(load data gradually)

//6️⃣ React.lazy + Suspense Deep Explanation
React.lazy(Dynamic import karta hai component ko.)
Suspense(Loading fallback show karta hai jab tak component load nahi hota.)

//🏗️ 1️⃣ How do you structure large React apps?
Galat Approach
components/
pages/
utils/
services/
Sab mix ho jata hai / Feature isolation nahi hota / Scaling me pain
✅ Best Approach → Feature-Based Architecture
Auth ka code auth folder me
Dashboard ka code dashboard folder me

3️⃣ How to Manage API Layer?
❌ API calls inside components → messy
❌ Direct fetch everywhere → no consistency

✅ Best Practice->Create separate API layer:
services/
  apiClient.js
  // productsAPI.js
export const fetchProducts = () =>
  apiClient.get("/products");
✔ Centralized error handling |✔ Auth token attach easily|✔ Retry logic|✔ Logging|✔ Cleaner components

4️⃣ How to Handle Global State?
Kya sab global hona chahiye? NO 
| Type        | Example      | Where?            |
| ----------- | ------------ | ----------------- |
| UI State    | Modal open   | Local             |
| Form State  | Input values | Local             |
| Auth        | User, token  | Global            |
| Cart        | Items        | Global            |
| Server Data | Products     | RTK Query / cache |

🔐 5️⃣ How to Implement Authentication?

Proper production flow:

1️⃣ Login API
2️⃣ Receive token
3️⃣ Store token (memory or secure storage)
4️⃣ Attach token in API client
5️⃣ Protect routes

Token Storage?

LocalStorage (common but not safest)
HTTP-only cookies (better)
Memory + refresh token (advanced)

Pure 0% impossible hai(agar attacker ke pass valid token aa gya) kyuki JWT stateless hota hai-server ko pta hi nhi chalta ki token choriu hua  hai

Problem kyo aati hai
JWT me:
Server token issue karta hai
Token client ke paas hota hai
Jab tak expiry nahi hoti → valid

Zero ke closest kaise jaate hain?
1.very short lived Access Token
jwt.sign(payload, secret, { expiresIn: "5m" });

🔐 2️⃣ Refresh Token Strategy (Real Protection)

Production me kya karte hain?
Access token → short expiry
Refresh token → httpOnly cookie me/DB me store
Agar attacker ke paas sirf access token hai:
Wo refresh token generate nahi kar sakta
Access expire hone ke baad game over
🔥 4️⃣ Logout Mechanism (Important)

JWT normally stateless hota hai ❌
Isliye production me:
Refresh token DB me store karte hain
Logout pe DB se delete kar dete hain
Agar attacker refresh try karega → fail.

If an access token is compromised, the attacker can use it until it expires. That's why we keep access tokens short-lived and use refresh tokens stored in HTTP-only cookies. We also implement token rotation and server-side refresh token validation to minimize risk.

Redux Toolkit
Redux Toolkit = Modern Redux (official recommended way).
“Sir, main Redux Toolkit use karta hoon kyunki ye Redux ka official recommended approach hai. Isme boilerplate kam hota hai aur code clean rehta hai.”
| Redux (Old)           | Redux Toolkit (Modern)       |
| --------------------- | ---------------------------- |
| Bohot boilerplate     | Clean & short code           |
| Action types alag     | createSlice handle karta hai |
| Manual store setup    | configureStore easy          |
| Complex for beginners | Beginner friendly            |

“Difference batao Redux aur Redux Toolkit me”

Tum bolna:
Redux Toolkit reduces boilerplate.
It uses Immer for immutability internally.
configureStore comes with DevTools & thunk pre-configured.
createSlice combines action + reducer in one place.
flow
Component → dispatch(action) → reducer → store → re-render via useSelector

question frontend ne request ki but server down
ans:-If the server goes down, I handle it at multiple levels.
First, I prevent crashes using centralized error handling and process-level handlers.
Then I use a process manager like PM2 for automatic restarts.
In production, a load balancer distributes traffic across multiple instances, so if one server fails, traffic shifts automatically.
I also implement health checks and graceful shutdown to avoid request loss, and clients use retry mechanisms for temporary failures.
How to measure performance?
What is React Profiler?
What causes re-render?
Why child re-renders when parent re-renders?
How reconciliation works?
What is key prop role in performance?