# Person 2 Task: Skills Section

You are responsible for adding the skills section.

## Step 1: Clone the Repository

After Person 1 creates the repository and adds you as a collaborator, clone it:

```bash
git clone <repository-url>
cd <repository-folder>
```

Replace `<repository-url>` with the actual repository URL.

If you already cloned it, go into the folder instead:

```bash
cd <repository-folder>
```

## Step 2: Get the Latest `main`

```bash
git switch main
git pull origin main
```

## Step 3: Create Your Feature Branch

```bash
git switch -c feature/skills-section
```

## Step 4: Edit `index.html`

Find this section:

```html
<section id="skills">
    <!-- Skills section will be added here -->
</section>
```

Replace it with:

```html
<section id="skills">
    <h2>Our Skills</h2>
    <div class="skills-container">
        <div class="skill-item">
            <span class="skill-name">JavaScript</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 90%;"></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-name">Python</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 85%;"></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-name">Git</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 95%;"></div>
            </div>
        </div>
        <div class="skill-item">
            <span class="skill-name">CSS/Design</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 80%;"></div>
            </div>
        </div>
    </div>
</section>
```

## Step 5: Edit `styles.css`

Find this comment:

```css
/* ===========================================
   Skills Section Styles (Person B)
   =========================================== */
```

Add this CSS under it:

```css
.skills-container {
    margin-top: 20px;
}

.skill-item {
    margin-bottom: 15px;
}

.skill-name {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

.skill-bar {
    background: #e0e0e0;
    border-radius: 10px;
    height: 20px;
    overflow: hidden;
}

.skill-progress {
    background: linear-gradient(90deg, #007bff, #00d4ff);
    height: 100%;
    border-radius: 10px;
    transition: width 0.5s ease;
}
```

## Step 6: Test Locally

Open `index.html` in a browser.

Check that:

- The `Our Skills` heading appears.
- Four skills appear.
- Each skill has a visible progress bar.
- The progress bars have different widths.

## Step 7: Commit and Push

Check your changes:

```bash
git status
```

Commit your work:

```bash
git add index.html styles.css
git commit -m "Add skills section with progress bars"
git push -u origin feature/skills-section
```

## Step 8: Create a Pull Request

1. Open the repository on GitHub or Bitbucket.
2. Create a Pull Request.
3. Set source branch to `feature/skills-section`.
4. Set destination branch to `main`.
5. Use this title:

```text
Add skills section
```

6. Use this description:

```text
Added the skills section with progress bars and related styling.
```

7. Ask a teammate to review and approve it.

## Step 9: Before Merging

Person 1 should merge first.

After Person 1 merges, update your local branch:

```bash
git switch main
git pull origin main
git switch feature/skills-section
git merge main
git push origin feature/skills-section
```

If Git reports conflicts, open the conflicted files, fix the conflict markers, then run:

```bash
git add .
git commit -m "Merge main into skills branch"
git push origin feature/skills-section
```

## Step 10: Merge Your Pull Request

After your PR is approved and has no conflicts:

1. Open your Pull Request.
2. Click Merge.
3. Use merge commit if the platform asks for a merge strategy.
4. Confirm the merge.
