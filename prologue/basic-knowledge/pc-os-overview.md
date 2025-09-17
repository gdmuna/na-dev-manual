# 操作系统概述

操作系统（Operating System，简称 OS）是管理计算机硬件和软件资源的系统软件。它充当用户与计算机硬件之间的中介，提供一个用户友好的界面，使用户能够方便地与计算机进行交互。

## 个人计算机的主流操作系统类型

当前世界上有三大主流的个人计算机操作系统：Windows、Linux 和 macOS。

### Windows

Windows 是由微软公司开发的一系列操作系统的名称。它是最流行的个人计算机操作系统之一，广泛应用于家庭和企业环境。Windows 提供了图形用户界面（GUI），使用户能够通过鼠标和键盘与计算机进行交互。Windows 的最新版本是 Windows 11。

### Linux

Linux 是一个开源的类 Unix 操作系统，最初由 Linus Torvalds 开发。它的源代码可以自由使用、修改和分发，因此有许多不同的 Linux 发行版（如 Ubuntu、Debian、Arch Linux 和 CentOS）。Linux 通常用于服务器和嵌入式系统，但也可以作为个人计算机的操作系统。

### macOS

macOS 是苹果公司为其 Macintosh 计算机系列开发的操作系统。它基于 Unix，提供了一个直观的用户界面。macOS 与苹果的硬件紧密集成，提供了出色的性能和稳定性。最新版本的 macOS 是 macOS 26 Tahoe。

## 操作系统的大小版本——以 Windows 为例

### 操作系统的版本

同一套操作系统在发展过程中体现代际差异的阶段性名称，称为**版本**。每个版本可能包含许多新的功能和改进。以 Windows 为例，以下是一些主要版本：

- Windows XP
- Windows Vista
- Windows 7
- Windows 8
- Windows 8.1
- Windows 10
- Windows 11

### 操作系统的发行版

在同一**版本**的基础上，面向不同用户群体或应用场景推出的不同变体，称为**发行版**。以 Windows 为例，以下是一些常见的发行版：

- 家庭版（Home）
- 专业版（Pro）
- 企业版（Enterprise）
- 教育版（Education）
- 工作站版（Workstation）
- 物联网版（IoT）

> [!WARNING]
> 市面上几乎所有笔记本电脑预装的操作系统都是 Windows 家庭版，这一发行版在 AD 域、组策略、Hyper-V 虚拟化等许多方面存在功能缺失，会对后续的编程学习造成影响。因此，建议大家在拥有电脑后，尽快安装或[切换为 Windows 专业版](./pc-os-overview#how-to-change-windows-edition)。

### 操作系统的版本号

同一操作系统**发行版**的某个具体版本标识符，通常反映版本发布的时间或主要功能更新，称为**版本号**。以 Windows 为例，以下是一些 Windows 主要更新版本的版本号：

- Windows XP SP3（Service Pack 3）
- Windows 7 SP1（Service Pack 1）
- Windows 10 1507（初始版本）
- Windows 10 1909（2019年下半年累计更新）
- Windows 10 2004（2020年上半年累计更新）
- Windows 10 20H2（2020年下半年累计更新）
- Windows 10 21H1（2021年上半年累计更新）
- Windows 10 21H2（2021年下半年累计更新）
- Windows 10 22H2（2022年下半年累计更新）
- Windows 11 21H2（初始版本）
- Windows 11 22H2（2022年下半年累计更新）
- Windows 11 23H2（2023年下半年累计更新）
- Windows 11 24H2（2024年下半年累计更新）

## 用机技巧

### 如何切换 Windows 系统的发行版？ {#how-to-change-windows-edition}

#### 方案一：重装系统

最彻底的方式是通过重装系统来切换 Windows 发行版。可以使用微软每月中旬发布的 MSDN 渠道镜像进行全新安装，请选择 business 类型的 x64 版本的镜像。

#### 方案二：使用 Microsoft-Activation-Scripts 脚本的版本切换功能

1. 打开 PowerShell，运行以下命令下载并运行 MAS 脚本。

    ```powershell
    irm https://get.activated.win | iex
    ```

2. 待脚本运行后，选择 `[7] Change Windows Edition` 进入版本切换功能。

3. 选择 `[1] Professional` 执行切换到专业版。（如果你想尽量减少 Windows 的自动功能更新，也可以选择 `[6] IoTEnterprise` 切换为 IoT LTSC 版）

4. 等待脚本运行完成后，重启电脑，此时 Windows 系统会在重启的过程中下载和更新必要的组件，请注意**保持联网**，待重启完成后，你的 Windows 系统就已经切换为专业版。

### 如何通过数字许可证激活 Windows 系统？

#### 方案一：使用 Microsoft-Activation-Scripts 脚本的 HWID 功能

1. 打开 PowerShell，运行以下命令下载并运行 MAS 脚本。

    ```powershell
    irm https://get.activated.win | iex
    ```

2. 待脚本运行后，选择 `[1] HWID` 进入 HWID 功能，此时脚本会自动执行激活过程，请注意**保持联网**。
