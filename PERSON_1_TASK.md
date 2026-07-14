# Person 1 Task: Repository Setup and Team Members Section

You are responsible for setting up the repository and adding the team members section.

## Part 1: Create and Prepare the Repository

Only one person needs to do this setup. Since you are Person 1, do this first.

### Step 1: Create the remote repository

1. Go to GitHub or Bitbucket.
2. Create a new repository.
3. Copy the repository clone URL.

### Step 2: Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

Replace `<repository-url>` with your actual repository URL.

### Step 3: Add the starter files

Copy these files into the repository folder:

```text
index.html
styles.css
script.js
```

The folder should look like this:

```text
your-repo-folder/
├── index.html
├── styles.css
└── script.js
```

### Step 4: Commit the starter project

```bash
git add .
git commit -m "Initial project setup with base structure"
git push origin main
```

### Step 5: Add teammates as collaborators

1. Open the repository on GitHub or Bitbucket.
2. Go to repository settings.
3. Add the other two teammates as collaborators.
4. Wait for them to accept the invitation.

## Part 2: Create Your Feature Branch

Make sure you are on `main` and have the latest code:

```bash
git switch main
git pull origin main
```

Create your branch:

```bash
git switch -c feature/team-members
```

## Part 3: Edit `index.html`

Find this section:

```html
<section id="members">
    <!-- Team members will be added here -->
</section>
```

Replace it with:

```html
<section id="members">
    <h2>Meet the Team</h2>
    <div class="members-grid">
        <div class="member-card">
            <div class="member-avatar">Person</div>
            <h3>Member 1</h3>
            <p class="role">Developer</p>
            <p class="bio">Passionate about clean code and best practices.</p>
        </div>
        <div class="member-card">
            <div class="member-avatar">Person</div>
            <h3>Member 2</h3>
            <p class="role">Designer</p>
            <p class="bio">Creating beautiful user experiences.</p>
        </div>
        <div class="member-card">
            <div class="member-avatar">Person</div>
            <h3>Member 3</h3>
            <p class="role">Developer</p>
            <p class="bio">Full-stack enthusiast and problem solver.</p>
        </div>
    </div>
</section>
```

You can replace `Member 1`, `Member 2`, and `Member 3` with your real names.

## Part 4: Edit `styles.css`

Find this comment:

```css
/* ===========================================
   Team Members Styles (Person A)
   =========================================== */
```

Add this CSS under it:

```css
.members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.member-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease;
}

.member-card:hover {
    transform: translateY(-5px);
}

.member-avatar {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #007bff;
}

.member-card h3 {
    color: #333;
    margin-bottom: 5px;
}

.member-card .role {
    color: #007bff;
    font-weight: bold;
    margin-bottom: 10px;
}

.member-card .bio {
    color: #666;
    font-size: 14px;
}
```

## Part 5: Test Locally

Open `index.html` in a browser.

Check that:

- The `Meet the Team` heading appears.
- Three team member cards appear.
- The cards have spacing and styling.
- Hovering over a card moves it slightly upward.

## Part 6: Commit and Push

Check your changes:

```bash
git status
```

Commit your work:

```bash
git add index.html styles.css
git commit -m "Add team members section with cards layout"
git push -u origin feature/team-members
```

## Part 7: Create a Pull Request

1. Open the repository on GitHub or Bitbucket.
2. Create a Pull Request.
3. Set source branch to `feature/team-members`.
4. Set destination branch to `main`.
5. Use this title:

```text
Add team members section
```

6. Use this description:

```text
Added the team members section with three profile cards and related styling.
```

7. Ask a teammate to review and approve it.

## Part 8: Merge Order

Your Pull Request should be merged first.

After approval:

1. Open your Pull Request.
2. Click Merge.
3. Use merge commit if the platform asks for a merge strategy.
4. Confirm the merge.

After merging, tell your teammates to update their branches from `main` before they merge.
