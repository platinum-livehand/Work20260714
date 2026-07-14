# 第 3 个人任务：项目展示区域 + 联系表单

你负责两个功能：项目展示区域和联系表单。

这是三个人里任务最多的一份，因为原来的实验是给四个人设计的。现在你们只有三个人，所以把原来的 Person C 和 Person D 合并给你完成。

## 第 1 步：克隆仓库

等第 1 个人创建好仓库，并把你加为 collaborator 后，克隆仓库：

```bash
git clone <repository-url>
cd <repository-folder>
```

把 `<repository-url>` 换成真实仓库地址。

如果你已经克隆过仓库，直接进入项目文件夹：

```bash
cd <repository-folder>
```

## 第 2 步：获取最新的 `main`

```bash
git switch main
git pull origin main
```

## 第 3 步：创建你的功能分支

```bash
git switch -c feature/projects-and-contact
```

## 第一部分：添加项目展示区域

### 第 4 步：修改 `index.html`

找到这一段：

```html
<section id="projects">
    <!-- Projects section will be added here -->
</section>
```

替换成：

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

### 第 5 步：添加项目区域 CSS

在 `styles.css` 里找到这个注释：

```css
/* ===========================================
   Projects Section Styles (Person C)
   =========================================== */
```

在它下面加入：

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

### 第 6 步：修改项目区域 JavaScript

在 `script.js` 里找到这个函数：

```javascript
function initProjects() {
    // TODO: Implement project interactivity
}
```

替换成：

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

## 第二部分：添加联系表单

### 第 7 步：修改 `index.html`

找到这一段：

```html
<section id="contact">
    <!-- Contact form will be added here -->
</section>
```

替换成：

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

### 第 8 步：添加联系表单 CSS

在 `styles.css` 里找到这个注释：

```css
/* ===========================================
   Contact Form Styles (Person D)
   =========================================== */
```

在它下面加入：

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

### 第 9 步：修改联系表单 JavaScript

在 `script.js` 里找到这个函数：

```javascript
function initContactForm() {
    // TODO: Implement form handling
}
```

替换成：

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

## 第 10 步：本地测试

用浏览器打开 `index.html`。

检查项目展示区域：

- 页面出现 `Our Projects` 标题。
- 页面出现 3 个项目卡片。
- 每个项目卡片都有技术标签。
- 点击 `View Details` 后会弹出提示框。

检查联系表单：

- 页面出现 `Contact Us` 标题。
- Name、Email、Subject、Message 输入项都出现。
- 空着必填项提交时，浏览器会阻止提交。
- 正常填写后提交，会显示 `Sending message...`。
- 等一会儿后，会显示成功信息。

## 第 11 步：提交并推送

先检查改了哪些文件：

```bash
git status
```

提交你的代码：

```bash
git add index.html styles.css script.js
git commit -m "Add projects section and contact form"
git push -u origin feature/projects-and-contact
```

## 第 12 步：创建 Pull Request

1. 打开 GitHub 或 Bitbucket 上的仓库页面。
2. 创建 Pull Request。
3. Source branch 选择 `feature/projects-and-contact`。
4. Destination branch 选择 `main`。
5. 标题写：

```text
Add projects section and contact form
```

6. 描述写：

```text
Added the projects showcase, project button interactivity, contact form, and form submission feedback.
```

7. 请一个队友 review 并 approve。

## 第 13 步：合并前更新你的分支

第 1 个人先合并。第 2 个人第二个合并。你的 Pull Request 最后合并。

等第 1 个人和第 2 个人都合并后，更新你的分支：

```bash
git switch main
git pull origin main
git switch feature/projects-and-contact
git merge main
git push origin feature/projects-and-contact
```

如果 Git 提示有 conflicts，打开冲突文件，删除冲突标记并整理最终代码，然后运行：

```bash
git add .
git commit -m "Merge main into projects and contact branch"
git push origin feature/projects-and-contact
```

## 第 14 步：合并你的 Pull Request

当你的 PR 被 approve，并且没有 conflicts 后：

1. 打开你的 Pull Request。
2. 点击 Merge。
3. 如果平台让你选择合并方式，选择 merge commit。
4. 确认合并。

## 第 15 步：最终检查

你的 PR 合并后，所有人都运行：

```bash
git switch main
git pull origin main
```

然后打开 `index.html`，检查三个人的功能是否都正常显示和运行。
