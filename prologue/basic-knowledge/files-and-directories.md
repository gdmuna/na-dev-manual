# 文件与目录

## 基本概念

- **文件（File）**  
  文件是计算机中存储信息的基本单元。不同文件类型承载的内容各不相同，例如文本文档、图片、视频、程序等。

- **目录（Directory） / 文件夹（Folder）**  
  文件夹用于存放和组织文件，也可以包含其他文件夹。多个文件夹之间通过层级结构形成“树状”体系，有助于文件管理和分类。

## 文件名的构成

一个完整的文件名通常由 **文件名部分** 与 **文件扩展名部分** 构成。

::: info 示例

- `homework.txt` → 文件名：`homework`，文件扩展名：`.txt`
- `game.exe` → 文件名：`game`，文件扩展名：`.exe`

:::

### 文件扩展名的作用

文件扩展名标识文件类型，并告诉操作系统应调用何种程序打开该文件：

- `.docx` → Microsoft Word
- `.xlsx` → Microsoft Excel
- `.png` → 图片查看器
- `.mp3` → 音乐播放器

::: warning 注意：

可执行文件（`.exe`）具有运行属性，通常不需要依赖外部程序即可运行，需谨慎双击打开。

:::

### 如何显示文件扩展名

在 Windows 系统中，扩展名在默认情况下是隐藏的。隐藏扩展名可能导致用户误判文件类型。

::: danger 风险示例

文件被命名为 `photo.jpg.exe`。若系统隐藏扩展名，仅显示为 `photo.jpg`，用户可能将其误认为图片文件，实际却是可执行程序。

:::

**操作建议**——启用扩展名显示功能

- 打开资源管理器
- 点击“查看”
- 勾选“文件扩展名”

![how-to-show-file-extensions](/prologue/basic-knowledge/files-and-directories/how-to-show-file-extensions.png)

## 文件格式

**定义**：文件格式（或文件类型）是指电脑为了存储信息而使用的对信息的特殊编码方式，是用于识别内部储存的资料。  
:bangbang:文件扩展名并不等同于文件格式。更改扩展名不会改变文件的实际数据结构。

::: info 示例：

将 `table.xlsx` 改为 `table.docx` 后，Word 无法正常打开该文件，但 Excel 依旧能正常打开该文件。

原因：

- **Excel 文件** 存储的是电子表格数据结构。
- **Word 文件** 存储的是文本文档结构。

扩展名仅作为标识标签，无法改变实际格式。

:::

### 常见文件格式

- 文本文档：`.txt`
- Word 文档：`.doc`、`.docx`
- Excel 表格：`.xls`、`.xlsx`
- 演示文稿：`.ppt`、`.pptx`
- 图片：`.jpg`、`.png`、`.gif`
- 音乐：`.mp3`、`.wav`、`.flac`
- 视频：`.mp4`、`.avi`、`.mkv`
- 压缩包：`.zip`、`.rar`、`.7z`
- 可执行文件：`.exe`

### 文件格式的转换方法

- 通过某种类型文件的编辑程序**另存为**、**导出为**另一种格式
- 使用专用软件（如 [FFmpeg](https://ffmpeg.org)、[格式工厂](http://pcgeshi.com)等）
- 使用在线转换网站 （如 [Aconvert](https://www.aconvert.com/cn/)、[CDKM](https://cdkm.com/cn/)、[FreeConvert](https://www.freeconvert.com/zh)等）

## 文件路径

文件路径用于描述文件或文件夹在磁盘上的位置。路径可以分为 **绝对路径** 和 **相对路径** 两类。

### **绝对路径（Absolute Path）**

从磁盘根目录开始，完整描述文件所在位置。

- 特点：无论当前工作目录在哪里，使用绝对路径都能唯一定位目标文件。
- 使用场景：独立于当前目录

::: info 示例：

```shell
C:\Users\Admin\Documents\report.docx
D:\Projects\Homework\task.txt
```

:::

### **相对路径（Relative Path）**

相对路径是基于 **当前工作目录** 的位置来描述文件或文件夹的位置。

- 特点：路径不从磁盘根目录开始，而是从当前所在目录出发。
- 使用场景：常用于程序和脚本中

#### 特殊符号

在命令行或者文件路径中，我们不仅可以通过完整路径来访问文件和目录，还可以使用一些特殊符号来快速定位位置：

- `.` 表示当前目录
- `..` 表示上一级目录（当前目录的父目录）
- `~` 表示用户主目录（home 目录）。在 Windows 下通常是 `C:\Users\用户名` ，在 Linux/macOS 下是 `/home/用户名` 。

::: info 示例：

已知某电脑的文件目录结构如下，假设**当前目录**为 `E:\Projects\Homework`

```
E:
└── Projects
    ├── README.md
    └── Homework
        ├── task.txt
        └── subfolder
            └── notes.docx
```

- 文件 `task.txt` 的相对路径为：`task.txt` 或 `.\task.txt`
- 文件 `notes.docx` 的相对路径为：`subfolder\notes.docx` 或 `.\subfolder\notes.docx`
- `.\subfolder\notes.docx` 指当前目录下的 `subfolder` 文件夹里的 `notes.docx`
- `..\README.md` 指上一级目录 `E:\Projects` 下的 `README.md`

:::

## 文件命名规范

合理的命名方式能够避免跨平台兼容性问题，并减少程序运行错误。

::: tip :white_check_mark:推荐做法

- 使用 **英文小写字母、数字、短横线、下划线** 组合命名：
    - `background-image.jpg`
    - `lab-report.docx`
    - `demo-1.cpp`
    - `example2.py`
    - `logo_256x256.png`

:::

::: danger :x:避免做法

- 使用中文或全角字符：`作业1.docx`
- 文件名中包含空格或特殊字符：`my file#.txt`
- 以数字开头：`123report.pdf`

:::

## 目录的层次结构

计算机文件系统具有层级化的树状结构：

- **根目录**：磁盘的顶层目录（如 `C:\`、`D:\`、`E:\`）。
- **子目录**：位于根目录或其他目录中的子文件夹（如 **C盘** 内的 `Windows` 、 `Program Files` 等文件夹就属于 `C:\` 的**子目录**）。
    - **一级目录**：直接位于根目录下的目录（如 `C:\Windows`）
    - **二级目录**：位于一级目录下的目录（如 `C:\Windows\System32`）
- **层级关系**：通过多级嵌套实现组织与管理。

## 注意事项

- 请避免在路径中使用中文、空格和特殊符号，以确保兼容性。
- 报错信息 `No such file or directory` 表示路径不存在或文件不在指定位置，通常源于路径书写错误或文件位置发生改变，也有可能是路径命名不规范（包含了特殊符号等）导致无法识别路径。
- 请**先**将压缩包内的所有文件**解压**到同一目录下，**再运行**其中的程序，以确保其能够正确调用所需的依赖文件。
- 请留意压缩包解压后的内容是否含有恶意可执行程序，杀毒软件无法直接检查压缩包内的文件安全性。
- 常用的文件操作快捷键：
    - `Ctrl + C` → 复制
    - `Ctrl + V` → 粘贴
    - `Ctrl + X` → 剪切
    - `Ctrl + A` → 全选
