# ✅ Final React Project Structure + Responsibilities
## 📁 Overall Folder Structure
```
src/
 ├── components/
 │    ├── JobForm.jsx
 │    ├── JobList.jsx
 │    ├── JobCard.jsx
 │    ├── DashboardStats.jsx
 │    └── Filters.jsx
 │
 ├── hooks/
 │    └── useLocalStorage.js
 │
 ├── App.jsx
 └── index.js
```

## 🧠 File‑by‑File Responsibilities (Very Important)

- 1️⃣ App.jsx (🧠 Brain of the App)
    - ✅ Responsibilities

        - Owns all main application state

        - Connects all components together
    
        - Controls data flow (top → down)
    
        - Uses useLocalStorage

    - ✅ State belongs here

        - jobs (array of job objects)
        - statusFilter
        - searchText

    - ✅ Functions written here

        - addJob(job)
        - deleteJob(id)
        - editJob(updatedJob)

    - ✅ Passes props to

        - JobForm
        - Filters
        - DashboardStats
        - JobList

## 📌 Rule: No UI logic here, only data & glue logic.

- 2️⃣ hooks/useLocalStorage.js (♻️ Reusable Logic)
    - ✅ Responsibilities

        - Acts like useState
        - Saves data to localStorage
        - Loads data on refresh

    - ✅ Used in

        - App.jsx only

## 📌 Rule: No JSX, no UI, logic only.

- 3️⃣ JobForm.jsx (📝 Input Component)
    - ✅ Responsibilities

        - Collects job information from user
        - Manages temporary form state
        - Validates input
        - Sends job object to App.jsx

    - ✅ Local State

        - company
        - role
        - status
        - date
        - notes (optional)

    - ✅ Props received from App
        - JavaScriptonAddJobShow more lines
    - ✅ On submit

        - Create job object
        - Call onAddJob(job)
        - Reset form

     - ❌ Must NOT

        - Store job list
        - Use localStorage
        - Filter or edit jobs


- 4️⃣ Filters.jsx (🎛️ Control Component)
    - ✅ Responsibilities

        - Control what jobs are visible
        - UI only (dropdown + search input)

    - ✅ Props received
        - JavaScriptstatusFiltersearchTextonStatusChangeonSearchChange``Show more lines
    - ✅ Does

        - Calls functions to update filters in App.jsx

    - ❌ Must NOT

        - Filter jobs itself
        - Store job list

## 📌 Parent decides behavior, child only signals intent.

- 5️⃣ DashboardStats.jsx (📊 Derived Data)
    - ✅ Responsibilities

        - Show statistics based on jobs array
        - Compute values dynamically

    - ✅ Props received
        - JavaScriptjobsShow more lines
    - ✅ Displays

        - Total applications
        - Interviews
        - Offers
        - Rejections

    - 📌 Important Rule

         - No useState here
         - Derived data only (calculate from jobs).


- 6️⃣ JobList.jsx (📦 List Container)
    - ✅ Responsibilities

        - Receives filtered jobs
        - Loops over jobs
        - Renders a JobCard per job
        - Shows empty state message

    - ✅ Props received
        - JavaScriptjobsonDeleteonEdit``Show more lines
    - ❌ Must NOT

        - Modify job data
        - Store state


- 7️⃣ JobCard.jsx (🪪 Single Job View)
    - ✅ Responsibilities

        - Display ONE job clearly
        - Show details:

            - Company
            - Role
            - Status
            - Date


            - Show action buttons

    - ✅ Props received
        - JavaScriptjobonDeleteonEditShow more lines
    - ✅ Actions

        - Delete button → calls onDelete(job.id)
        - Edit button → calls onEdit(job)

    - 📌 Mostly a dumb component (UI-focused).

- 🔁 One‑Way Data Flow (Interview Gold)
```
App.jsx
  ↓ props
JobForm / Filters / DashboardStats / JobList
  ↓
JobCard


Changes always flow up using functions, never sideways.
```

✅ Job Object Structure (Standardize This)
```
{
  id: number,
  company: string,
  role: string,
  status: "Applied" | "Interview" | "Offer" | "Rejected",
  date: string,
  notes: string
}
```