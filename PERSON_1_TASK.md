# 第 1 个人任务：初始化仓库 + 团队成员区域

你负责两件事：先创建并准备仓库，然后完成团队成员卡片区域。

## 第一部分：创建并准备仓库

这部分只需要一个人做。因为你是第 1 个人，所以先由你完成仓库初始化。

### 第 1 步：创建远程仓库

1. 打开 GitHub 或 Bitbucket。
2. 创建一个新的 repository。
3. 复制这个 repository 的 clone 地址。

### 第 2 步：克隆仓库到本地

```bash
git clone <repository-url>
cd <repository-folder>
```

把 `<repository-url>` 换成你自己的仓库地址。

### 第 3 步：放入初始文件

把这 3 个文件复制到仓库文件夹里：

```text
index.html
styles.css
script.js
```

最终文件夹应该像这样：

```text
your-repo-folder/
├── index.html
├── styles.css
└── script.js
```

### 第 4 步：提交初始代码

```bash
git add .
git commit -m "Initial project setup with base structure"
git push origin main
```

### 第 5 步：添加队友为协作者

1. 打开 GitHub 或 Bitbucket 上的仓库页面。
2. 进入 repository settings。
3. 把另外两个队友添加为 collaborators。
4. 等他们接受邀请。

## 第二部分：创建你的功能分支

先确认你在 `main` 分支，并拉取最新代码：

```bash
git switch main
git pull origin main
```

创建并切换到你的功能分支：

```bash
git switch -c feature/team-members
```

## 第三部分：修改 `index.html`

找到这一段：

```html
<section id="members">
    <!-- Team members will be added here -->
</section>
```

替换成：

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

你们可以把 `Member 1`、`Member 2`、`Member 3` 改成真实姓名。

## 第四部分：修改 `styles.css`

找到这个注释：

```css
/* ===========================================
   Team Members Styles (Person A)
   =========================================== */
```

在它下面加入：

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

## 第五部分：本地测试

用浏览器打开 `index.html`。

检查这些内容：

- 页面出现 `Meet the Team` 标题。
- 页面出现 3 个团队成员卡片。
- 卡片有间距和样式。
- 鼠标移动到卡片上时，卡片会稍微向上移动。

## 第六部分：提交并推送

先检查改了哪些文件：

```bash
git status
```

提交你的代码：

```bash
git add index.html styles.css
git commit -m "Add team members section with cards layout"
git push -u origin feature/team-members
```

## 第七部分：创建 Pull Request

1. 打开 GitHub 或 Bitbucket 上的仓库页面。
2. 创建 Pull Request。
3. Source branch 选择 `feature/team-members`。
4. Destination branch 选择 `main`。
5. 标题写：

```text
Add team members section
```

6. 描述写：

```text
Added the team members section with three profile cards and related styling.
```

7. 请一个队友 review 并 approve。

## 第八部分：合并顺序

你的 Pull Request 应该第一个合并。

审批通过后：

1. 打开你的 Pull Request。
2. 点击 Merge。
3. 如果平台让你选择合并方式，选择 merge commit。
4. 确认合并。

合并完成后，告诉另外两个队友：他们在合并自己的 PR 前，需要先从 `main` 更新代码。
