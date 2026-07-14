# Person 3 Task: Projects Section and Contact Form

You are responsible for two features: the projects section and the contact form.

This is the largest task because the original lab was written for four people. Since your team has three people, you will combine the original Person C and Person D work.

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
git switch -c feature/projects-and-contact
```

## Part 1: Add the Projects Section

### Step 4: Edit `index.html`

Find this section:

```html
<section id="projects">
    <!-- Projects section will be added here -->
</section>
```

Replace it with:

```html
<section id="projects">
    <h2>Our Projects</h2>
    <div class="projects-grid">
        <div class="project-card" data-project="1">
            <h3>Project Alpha</h3>
            <p>A web application for task management.</p>
            <div class="project-tags">
                <span class="tag">React</span>
                <span class="tag">Node.js</span>
            </div>
            <button class="project-btn">View Details</button>
        </div>
        <div class="project-card" data-project="2">
            <h3>Data Dashboard</h3>
            <p>Real-time analytics and visualization platform.</p>
            <div class="project-tags">
                <span class="tag">Python</span>
                <span class="tag">D3.js</span>
            </div>
            <button class="project-btn">View Details</button>
        </div>
        <div class="project-card" data-project="3">
            <h3>E-Commerce API</h3>
            <p>Scalable REST API for online stores.</p>
            <div class="project-tags">
                <span class="tag">Java</span>
                <span class="tag">Spring Boot</span>
            </div>
            <button class="project-btn">View Details</button>
        </div>
    </div>
</section>
```

### Step 5: Add Projects CSS

Find this comment in `styles.css`:

```css
/* ===========================================
   Projects Section Styles (Person C)
   =========================================== */
```

Add this CSS under it:

```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.project-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: scale(1.02);
}

.project-card h3 {
    margin-bottom: 10px;
}

.project-tags {
    margin: 15px 0;
}

.tag {
    background: rgba(255, 255, 255, 0.2);
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 12px;
    margin-right: 5px;
}

.project-btn {
    background: white;
    color: #764ba2;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: opacity 0.3s;
}

.project-btn:hover {
    opacity: 0.9;
}
```

### Step 6: Update Projects JavaScript

Find this function in `script.js`:

```javascript
function initProjects() {
    // TODO: Implement project interactivity
}
```

Replace it with:

```javascript
function initProjects() {
    const projectButtons = document.querySelectorAll('.project-btn');

    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.project-card');
            const projectId = card.dataset.project;
            alert('Opening details for Project ' + projectId + '...\n\nThis would navigate to the project page in a real application.');
        });
    });
}
```

## Part 2: Add the Contact Form

### Step 7: Edit `index.html`

Find this section:

```html
<section id="contact">
    <!-- Contact form will be added here -->
</section>
```

Replace it with:

```html
<section id="contact">
    <h2>Contact Us</h2>
    <form id="contact-form" class="contact-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="your@email.com">
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="project">Project Collaboration</option>
                <option value="feedback">Feedback</option>
            </select>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required placeholder="Your message..."></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
    </form>
    <div id="form-status" class="form-status"></div>
</section>
```

### Step 8: Add Contact Form CSS

Find this comment in `styles.css`:

```css
/* ===========================================
   Contact Form Styles (Person D)
   =========================================== */
```

Add this CSS under it:

```css
.contact-form {
    max-width: 500px;
    margin: 20px auto 0;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #007bff;
}

.submit-btn {
    background: #28a745;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s;
}

.submit-btn:hover {
    background: #218838;
}

.form-status {
    text-align: center;
    margin-top: 15px;
    padding: 10px;
    border-radius: 6px;
}

.form-status.success {
    background: #d4edda;
    color: #155724;
}

.form-status.error {
    background: #f8d7da;
    color: #721c24;
}
```

### Step 9: Update Contact Form JavaScript

Find this function in `script.js`:

```javascript
function initContactForm() {
    // TODO: Implement form handling
}
```

Replace it with:

```javascript
function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            status.textContent = 'Sending message...';
            status.className = 'form-status';

            setTimeout(() => {
                console.log('Form submitted:', data);
                status.textContent = 'Message sent successfully! We will get back to you soon.';
                status.className = 'form-status success';
                form.reset();
            }, 1500);
        });
    }
}
```

## Step 10: Test Locally

Open `index.html` in a browser.

Check the projects section:

- The `Our Projects` heading appears.
- Three project cards appear.
- Each project card has tags.
- Clicking `View Details` shows an alert.

Check the contact form:

- The `Contact Us` heading appears.
- Name, email, subject, and message fields appear.
- Required validation works if fields are empty.
- Submitting the form shows `Sending message...`.
- After a short delay, a success message appears.

## Step 11: Commit and Push

Check your changes:

```bash
git status
```

Commit your work:

```bash
git add index.html styles.css script.js
git commit -m "Add projects section and contact form"
git push -u origin feature/projects-and-contact
```

## Step 12: Create a Pull Request

1. Open the repository on GitHub or Bitbucket.
2. Create a Pull Request.
3. Set source branch to `feature/projects-and-contact`.
4. Set destination branch to `main`.
5. Use this title:

```text
Add projects section and contact form
```

6. Use this description:

```text
Added the projects showcase, project button interactivity, contact form, and form submission feedback.
```

7. Ask a teammate to review and approve it.

## Step 13: Before Merging

Person 1 should merge first. Person 2 should merge second. Your Pull Request should merge last.

After Person 1 and Person 2 merge, update your branch:

```bash
git switch main
git pull origin main
git switch feature/projects-and-contact
git merge main
git push origin feature/projects-and-contact
```

If Git reports conflicts, open the conflicted files, fix the conflict markers, then run:

```bash
git add .
git commit -m "Merge main into projects and contact branch"
git push origin feature/projects-and-contact
```

## Step 14: Merge Your Pull Request

After your PR is approved and has no conflicts:

1. Open your Pull Request.
2. Click Merge.
3. Use merge commit if the platform asks for a merge strategy.
4. Confirm the merge.

## Step 15: Final Verification

After your PR is merged, everyone should run:

```bash
git switch main
git pull origin main
```

Then open `index.html` and check that all three teammates' features work together.
