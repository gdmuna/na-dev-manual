# 使用 Ventoy 制作系统启动盘

## 什么是系统启动盘？

系统启动盘（Bootable USB）就是一个能让电脑 **从U盘启动** 的工具盘。  
它通常装有 **操作系统安装程序**（比如 Windows、Linux），或者一些 **维护工具**。

当电脑系统损坏、崩溃、或者需要重装时，我们就可以用系统启动盘来进入安装界面，修复或重装系统。

- 普通U盘 → 用来存文件
- 系统启动盘 → 可以让电脑从U盘开机，用来安装或修复系统

## 为什么要用 Ventoy？

传统的启动盘制作方法（比如用 **Rufus、UltraISO** 等工具）有一个缺点：  
制作完成后，U盘只能装一个系统，要换系统就需要重新制作，非常麻烦。

**Ventoy 的优势：**

1. **免反复写盘**：只需安装一次 Ventoy，以后只要把 `.iso` 或 `.img` 文件复制进U盘，就能直接启动。
2. **多系统共存**：一个U盘可以同时放多个系统镜像（如 Windows 10、Windows 11、Ubuntu 等），启动时自由选择。
3. **更新简单**：想换系统？直接删除旧镜像，复制新镜像即可，就像拷电影一样。
4. **兼容性好**：支持常见的 Windows / Linux 系统镜像，几乎都能正常启动。

> 一句话总结：  
> **有了 Ventoy，一个U盘就能当“万能系统启动盘”，省时省力，非常适合新手和经常需要装机的同学。**

## Ventoy 启动盘的制作方法

### 前置准备

- **准备一个 64 GB 及以上容量的 U盘**
    - **请尽量避免选用廉价U盘**，这类U盘在使用过程中极易引起固件损坏从而导致数据丢失。品质良好的U盘价格通常在 0.8元/GB 以上，**如果购买的U盘价格低于0.6元/GB，那么很可能是“缩水盘”、“扩容盘”**
    - 推荐的U盘型号：三星 BAR Plus 128GB、联想 TU180Pro 128GB、联想 TU280Pro 256GB
- **备份U盘内重要数据**（制作过程中会格式化U盘，数据会被清空）
- **下载**需要的**系统镜像文件**（如 Windows 11 镜像、PE系统镜像 等）

### 1. 下载 Ventoy

前往 [Ventoy 官方 GitHub 仓库](https://github.com/ventoy/Ventoy/releases) 下载最新版本的 Ventoy  
（目前最新版为`ventoy-1.1.07`）。

::: warning 帮助帖
如果您访问 GitHub 受限，也可以从我们的 **NA-share** 资源站下载  
[https://share.gdmuna.com/soft_installer/Ventoy](https://share.gdmuna.com/soft_installer/Ventoy)
:::

![Ventoy 下载页面](/prologue/install-os/use-ventoy-make-bootable-usb-device/ventoy-download-page.png)

### 2. 安装 Ventoy

::: danger 装前必看！！！
若 U盘 内有文件数据，请先 **迁移** 至其他地方。  
安装 Ventoy 会对 U盘 进行 **格式化** ，数据将被清空。  
待 Ventoy 安装完成后，再将文件迁移回来即可。
:::

- **解压** 下载好的 Ventoy 压缩包至桌面，运行里面的 `Ventoy2Disk.exe` 可执行程序。
- 点击 **配置选项** 菜单，将 **分区类型** 设置为 **GPT** 格式
  ![设置分区类型为 GPT 格式](/prologue/install-os/use-ventoy-make-bootable-usb-device/set-partition-type-to-gpt-format.png)
- **选择你的U盘**，点击 **安装** 按钮。
- 弹出警告窗口，确认U盘数据会被清空，点击 **是** 继续。

### 3. 复制系统镜像

- 首先在U盘根目录下按以下目录结构创建对应的 **文件夹**  
  （以放置 **Windows 11 镜像** 和 **Win PE 镜像** 为例，假设当前U盘的盘符为 **F：**）

```
Ventoy(F:)
├── ISO
|   ├── windows11
|   └── win-pe
└── ventoy
```

- 然后在U盘的 ventoy 目录下创建 `ventoy.json`，其文件内容如下：

::: code-group

```json [ventoy.json]
{
    "control": [{ "VTOY_DEFAULT_MENU_MODE": "1" }, { "VTOY_DEFAULT_SEARCH_ROOT": "/ISO" }],
    "menu_class": [
        {
            "dir": "/ISO/win-pe",
            "class": "ventoy"
        },
        {
            "dir": "/ISO/windows11",
            "class": "windows11"
        },
        {
            "key": "windows_11",
            "class": "windows11"
        }
    ]
}
```

:::

::: tip ≧∇≦
现在可以把上一节文章下载的 **Windows 11 镜像** 和 **Win PE 镜像** 放在 **对应文件夹内** 啦！
:::

### 4. 创建镜像的哈希校验文件

新建一个**文本文档**，改名为 `xxx.iso.sha256` ，用记事本或 VS Code 打开该文件，将对应镜像的 **SHA256校验值** 粘贴进文件内，然后按 **Ctrl + S** 保存修改。

![创建镜像的哈希校验文件](/prologue/install-os/use-ventoy-make-bootable-usb-device/create-hash-verification-file-for-the-image.png)

## Ventoy 启动盘的使用方法

### 1. 引导进入 Ventoy 启动盘

**_若电脑没有 Boot Menu_**

- 重启电脑后，立刻**反复点按** 进入 **BIOS/UEFI 设置界面** 的快捷键  
  （不同主板和电脑品牌略有差异）

    ::: details 各大主板 / 电脑品牌进入 BIOS 快捷键

    | 品牌 / 类型              | 进入 BIOS 设置键     |
    | ------------------------ | -------------------- |
    | **华硕 ASUS**            | `Del` / `F2`         |
    | **微星 MSI**             | `Del`                |
    | **技嘉 GIGABYTE**        | `Del`                |
    | **华擎 ASRock**          | `Del` / `F2`         |
    | **联想 Lenovo 台式机**   | `F1` / `F2`          |
    | **联想 ThinkPad 笔记本** | `Enter` → `F1`       |
    | **惠普 HP**              | `Esc` → `F10`        |
    | **戴尔 Dell**            | `F2`                 |
    | **宏碁 Acer**            | `Del` / `F2`         |
    | **三星 Samsung**         | `F2`                 |
    | **东芝 Toshiba**         | `F2`                 |
    | **微软 Surface**         | 按住 `音量+` 键 开机 |

    :::

- 在 **Boot** 设置中，将 U 盘设置为第一启动项

- 保存设置并重启，电脑会自动从 U 盘启动

**_若电脑有 Boot Menu_**

- 重启电脑后，立刻 **反复点按** 进入 **启动菜单（Boot Menu）** 的快捷键  
  （不同主板和电脑品牌略有差异）

    ::: details 各大主板、电脑品牌进入 Boot Menu 的快捷键

    | 组装机主板   | 启动按键   | 品牌电脑       | 启动按键         |
    | ------------ | ---------- | -------------- | ---------------- |
    | 华硕主板     | F8         | 联想电脑       | F12              |
    | 技嘉主板     | F12        | 宏基电脑       | F12              |
    | 微星主板     | F11        | 华硕电脑       | ESC 或 F8        |
    | 映泰主板     | F9         | 惠普电脑       | F9 或 F12        |
    | 梅捷主板     | ESC 或 F11 | 联想 ThinkPad  | F12              |
    | 七彩虹主板   | ESC 或 F11 | 戴尔电脑       | F12 或 ESC       |
    | 华擎主板     | F11        | 神舟电脑       | F12              |
    | 斯巴达克主板 | ESC        | 东芝电脑       | F12              |
    | 昂达主板     | F11        | 三星电脑       | F12 或 F2        |
    | 双敏主板     | ESC        | IBM 电脑       | F12              |
    | 翔升主板     | F10        | 富士通电脑     | F12              |
    | 精英主板     | ESC 或 F11 | 海尔电脑       | F12              |
    | 冠盟主板     | F11 或 F12 | 方正电脑       | F12              |
    | 富士康主板   | ESC 或 F12 | 清华同方电脑   | F12              |
    | 顶星主板     | F11 或 F12 | 微星电脑       | F11              |
    | 铭瑄主板     | ESC 或 F11 | 明基电脑       | F9 或 F8         |
    | 盈通主板     | F8         | 技嘉电脑       | F12              |
    | 捷波主板     | ESC        | Gateway 电脑   | F12              |
    | Intel 主板   | F12        | eMachines 电脑 | F12              |
    | 杰微主板     | ESC 或 F8  | 索尼电脑       | ESC              |
    | 致铭主板     | F12        | 苹果电脑       | 长按 “option” 键 |
    | 磐英主板     | ESC        | -              | -                |
    | 磐正主板     | ESC        | -              | -                |
    | 冠铭主板     | F9         | -              | -                |

    :::

- 在启动菜单中使用 **键盘的↑↓方向键** 选中 **你插入的 U盘**，然后按 **Enter**

### 2. **选择需要启动的镜像**

Ventoy 启动后，会显示一个待启动镜像的列表，自动识别U盘里放置的 `.iso` / `.img` 等镜像文件。

- 如果选择 **Windows 安装镜像** → 会进入 Windows 安装界面，可以进行系统重装、系统修复等操作。
- 如果选择 **Win PE 镜像** → 会进入轻量化的 Win PE 环境，可以进行磁盘分区、数据恢复、备份还原等操作。
