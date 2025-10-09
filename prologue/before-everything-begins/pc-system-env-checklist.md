# 电脑系统环境检查清单

## 编程——从配置开发环境开始

很多人学习编程时，第一步就急着去装编辑器、装 SDK、跑框架，结果常常在一开始就踩到一些莫名其妙的坑：路径里有空格或中文导致编译失败、系统盘塞满导致虚拟机打不开、权限乱用导致环境混乱……这些问题看似细小，却直接影响开发体验和工作效率。

本篇目提供了一个检查清单，帮助你在安装完操作系统后，检查一下自己的电脑环境是否符合开发要求。

如果你在阅读以下内容时有较多的疑问，请先阅读其他章节内容进行学习。

## 清单内容

### Part 1 - 系统基础信息检查

- :ballot_box_with_check: 系统用户名只能由英文字母和数字构成，且第一位字符必须是英文字母

    :::danger 警告
    若这一条不符合要求，**千万不要直接修改用户目录的文件夹名称！！！**  
     :::

- :ballot_box_with_check: 计算机名称只能由英文字母、数字、短横线“-”构成，且第一位字符必须是英文字母

- :ballot_box_with_check: 若电脑为 Windows 系统，请使用 Windows 11 专业版 及以上功能版本，且版本号为 24H2 及以上
    - Windows 10 将于 2025 年 10 月 14 日停止安全更新支持，不再建议使用
    - 专业版、专业工作站版、企业版、LTSC 版都可以，不建议使用家庭版、教育版

### Part 2 - 硬盘分区检查

- :ballot_box_with_check: 硬盘分区表类型为 GUID 格式 ( GPT 格式 )

- :ballot_box_with_check: 若电脑为 Windows 系统，硬盘至少分为三块区域 ( C 盘、D 盘、E 盘 )，且按以下要求划分容量：

::: code-group

```txt [磁盘空间为 512G]
C盘至少 160G，并建议以 OS 命名
D盘至少 120G，并建议以 Soft 命名
E盘至少 180G，并建议以 Data 命名
```

```txt [磁盘空间为 1TB]
C盘至少 200G，并建议以 OS 命名
D盘至少 200G，并建议以 Soft 命名
E盘至少 300G，并建议以 Data 命名
```

```txt [磁盘空间为 2TB]
C盘至少 400G，并建议以 OS 命名
D盘至少 400G，并建议以 Soft 命名
E盘至少 400G，并建议以 Data 命名
(多余空间可按个人需求调配)
```

:::

### Part 3 - 系统优化检查

- :ballot_box_with_check: 若电脑为 Windows 系统，请将原C盘的用户文件夹内的6大文件夹迁移到E盘
    - 在E盘内 **以原C盘用户目录名称** 创建用户文件夹（ _文件夹名称只能由英文字母和数字构成_ ），并将 **视频、图片、文档、下载、音乐、桌面** 文件夹从原C盘移动到E盘的用户文件夹内

- :ballot_box_with_check: 若电脑为 Windows 系统，请在桌面上摆放 **此电脑**、 **回收站**、**控制面板** 的访问入口

- :ballot_box_with_check: 请在 **文件资源管理器** 开启 **文件扩展名** 显示

- :ballot_box_with_check: 若电脑为 Windows 系统，请在 **设置** → **蓝牙和其他设备** 关闭 **自动播放** 功能

- :ballot_box_with_check: 若电脑为 Windows 系统，请关闭锁屏界面的广告
    - 将 **设置** → **个性化** → **锁屏界面** 的 **个性化锁屏界面** 设置为 **图片**
    - 将 **设置** → **个性化** → **锁屏界面** 的 **锁屏界面状态** 设置为 **无**
    - 在 **设置** → **个性化** → **锁屏界面** 取消勾选 **在锁屏界面上获取花絮、提示和技巧**

- :ballot_box_with_check: 若电脑为 Windows 系统，请关闭桌面和任务栏的广告
    - 将 **设置** → **个性化** → **背景** 的 **个性化设置背景** 设置为 **图片**
    - 将 **设置** → **个性化** → **任务栏** 的 **搜索** 设置为 **仅“搜索”图标**
    - 在 **设置** → **个性化** → **任务栏** 关闭 **小组件** 和 **任务视图**

- :ballot_box_with_check: 若电脑为 Windows 系统，请关闭 Windows 系统中其他潜在的广告推送
    - 在 **设置** → **个性化** → **开始** 关闭 **显示有关提示、快捷方式、新应用等的建议**
    - 在 **设置** → **系统** → **通知** → **其他设置** 关闭 **所有选项**
    - 在 **设置** → **隐私和安全性** → **常规** 关闭 **所有选项**

- :ballot_box_with_check: 若电脑上存在 Microsoft Edge 浏览器，请关闭新标签页的广告

### Part 4 - 软件安装检查

- :ballot_box_with_check: 除 **Windows 安全中心** 以外，电脑内不出现多个杀毒软件
    - 如果没有付费订阅，不建议使用 McAfee 等杀毒软件
    - **不建议** 使用 360安全卫士、360杀毒、腾讯电脑管家等 **具有广告推送** 的杀毒软件
    - 建议使用火绒安全软件等无广告的杀毒软件
    - 联想电脑管家等品牌自带的电脑管家软件可能内置杀毒软件内核，也算杀毒软件

- :ballot_box_with_check: 电脑内不出现下列流氓软件或捆绑软件
    - 360系软件（360安全卫士、360杀毒、360浏览器、小鸟壁纸、鲁大师等）
    - 2345系软件（2345看图王、2345浏览器、2345压缩等）
    - 迅读系软件（迅读PDF、迅读看图、迅读扫描王、轻映录屏、易极数据恢复等）
    - 贪玩蓝月、传奇私服等来路不明的游戏软件
    - Steam 游戏管家、Epic 游戏盒子等仿冒官方的游戏平台软件
    - 其他具有较多广告推送且难以屏蔽的软件
    - 其他具有捆绑安装行为且难以卸载的软件

- :ballot_box_with_check: 若电脑为 Windows 系统，常规应用软件请安装到统一的目录下
    - 划分出 D盘 作为软件安装的统一目录
    - 软件安装路径 **不应出现中文或其他特殊字符**
    - **同一家公司** 的多个软件应安装在 **同一父级目录** 下

- :ballot_box_with_check: 电脑上必须安装 Visual Studio Code
    - VS Code 的版本类型为 `System Installer`
    - VS Code 的 **设置** 需要包含以下内容（可直接打开设置的 `setting.json` 文件覆盖粘贴）
        ```json
        {
            // 编辑器配置
            "editor.fontFamily": "Cascadia Mono, 等线",
            "editor.fontSize": 18,
            "editor.inlineSuggest.enabled": true,
            // 文件关联配置
            "files.autoGuessEncoding": true,
            "files.associations": {
                "*.css": "tailwindcss"
            },
            "files.autoSave": "afterDelay",
            "files.eol": "\n",
            // Git 配置
            "git.autofetch": true,
            "git.confirmSync": false,
            // 终端配置
            "terminal.integrated.fontFamily": "Cascadia Mono, 等线",
            "terminal.integrated.defaultProfile.windows": "Command Prompt",
            // GitLens 扩展配置
            "gitlens.views.scm.grouped.views": {
                "commits": true,
                "branches": false,
                "remotes": false,
                "stashes": false,
                "tags": true,
                "worktrees": true,
                "contributors": true,
                "repositories": true,
                "searchAndCompare": true,
                "launchpad": true
            }
        }
        ```
