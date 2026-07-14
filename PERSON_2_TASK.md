# 第 2 个人任务：技能区域

你负责添加技能进度条区域。

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
git switch -c feature/skills-section
```

## 第 4 步：修改 `index.html`

找到这一段：

```html
<section id="skills">
    <!-- Skills section will be added here -->
</section>
```

替换成：

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

## 第 5 步：修改 `styles.css`

找到这个注释：

```css
/* ===========================================
   Skills Section Styles (Person B)
   =========================================== */
```

在它下面加入：

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

## 第 6 步：本地测试

用浏览器打开 `index.html`。

检查这些内容：

- 页面出现 `Our Skills` 标题。
- 页面出现 4 个技能。
- 每个技能都有进度条。
- 不同技能的进度条长度不同。

## 第 7 步：提交并推送

先检查改了哪些文件：

```bash
git status
```

提交你的代码：

```bash
git add index.html styles.css
git commit -m "Add skills section with progress bars"
git push -u origin feature/skills-section
```

## 第 8 步：创建 Pull Request

1. 打开 GitHub 或 Bitbucket 上的仓库页面。
2. 创建 Pull Request。
3. Source branch 选择 `feature/skills-section`。
4. Destination branch 选择 `main`。
5. 标题写：

```text
Add skills section
```

6. 描述写：

```text
Added the skills section with progress bars and related styling.
```

7. 请一个队友 review 并 approve。

## 第 9 步：合并前更新你的分支

第 1 个人应该先合并。

等第 1 个人合并后，你需要更新自己的分支：

```bash
git switch main
git pull origin main
git switch feature/skills-section
git merge main
git push origin feature/skills-section
```

如果 Git 提示有 conflicts，打开冲突文件，删除冲突标记并整理最终代码，然后运行：

```bash
git add .
git commit -m "Merge main into skills branch"
git push origin feature/skills-section
```

## 第 10 步：合并你的 Pull Request

当你的 PR 被 approve，并且没有 conflicts 后：

1. 打开你的 Pull Request。
2. 点击 Merge。
3. 如果平台让你选择合并方式，选择 merge commit。
4. 确认合并。
