# 如何下载系统镜像

本文将带你了解什么是 **系统镜像**，以及如何从可信渠道下载 **Windows 系统镜像** 和 **PE 系统镜像**，并进行校验与使用。

## 一、操作系统与系统镜像

### 1. 操作系统

**操作系统**（Operating System, OS）是计算机中最重要的软件，它负责管理硬件资源（CPU、内存、硬盘、外设等），并为用户和应用程序提供运行环境。

**常见的操作系统有：**

- **Windows**（微软开发，最常见的桌面系统）
- **Linux**（开源系统，常用于服务器和专业开发环境）
- **macOS**（苹果电脑使用的系统）

::: tip
详情请跳转：[操作系统概述](https://dev-manual.gdmuna.com/prologue/basic-knowledge/pc-os-overview)
:::

### 2. 系统镜像

**系统镜像（System Image）** 是操作系统或启动环境的完整备份文件，一般以 **ISO 格式** 为主。**系统镜像包含了系统安装或运行所需的所有文件**。

::: info 系统镜像常见类型总结

1. **安装镜像** （Installation Image）

- 典型格式：`.iso`
- 用途：用于安装系统到硬盘（Windows 安装盘、Linux 发行版安装镜像）。
- 特点：
    - 含有安装程序、驱动、引导程序
    - 不能直接作为硬盘运行，需要走安装流程
- 例子：Windows 10 ISO、Ubuntu ISO

---

2. **Live 镜像** （Live Image / LiveCD）

- 典型格式：`.iso`
- 用途：直接从 U 盘 / 光盘 / 虚拟机启动运行系统，不改变本机硬盘。
- 特点：
    - 开机即用，适合测试、维护、救援
    - 有的支持安装到硬盘
- 例子：WinPE、Ubuntu LiveCD、Kali Linux Live

---

3. **系统盘镜像** （Disk Image / Pre-installed System）

- 典型格式：`.img`、`.dd`、`.raw`
- 用途：已安装好的系统，直接写入磁盘或虚拟机硬盘即可运行。
- 特点：
    - 包含分区表、引导区、完整文件系统
    - 烧录到物理磁盘即可使用
    - 挂载到虚拟机可直接运行
- 例子：OpenWrt、爱快、树莓派 Raspbian 镜像

---

4. **虚拟机镜像** （Virtual Machine Image）

- 典型格式：`.vmdk` (VMware)、`.vdi` (VirtualBox)、`.qcow2` (QEMU/KVM)、`.vhd/.vhdx` (Hyper-V)
- 用途：在虚拟机环境下直接运行的硬盘镜像。
- 特点：
    - 针对不同虚拟机软件优化
    - 一般自带系统环境和配置
- 例子：阿里云/腾讯云导出的云主机镜像，官方提供的 Ubuntu .vmdk 镜像

---

5. **恢复镜像 / 备份镜像** （Recovery / Backup Image）

- 典型格式：`.wim`（Windows）、`.gho`（Ghost）、`.tib`（Acronis）
- 用途：恢复系统到某个状态，做系统还原。
- 特点：
    - 存的是某个时间点的系统快照
    - 可快速恢复到原始状态
- 例子：Windows 恢复镜像、学校机房的 Ghost 镜像

:::

### 3. 操作系统 vs 系统镜像

- **操作系统**：已经安装并能正常使用的环境（如正在运行的 Windows 11）。
- **系统镜像**：操作系统的安装盘（如 Windows 11 的 ISO 文件）或临时系统的启动盘。

## 二、系统镜像的下载方式

### 1. Windows 系统镜像下载

::: tip 下载渠道
我们推荐从 [**MSDN, I Tell You**](https://next.itellyou.cn) 网站下载 Windows 官方原版镜像，更新及时，安全可靠。
:::

1. 进入网站 [https://next.itellyou.cn](https://next.itellyou.cn) 并使用支持的第三方账户登录。

2. 登录成功后，点击 **开始使用**

3. 选择 **Windows 11** , 点击 **详细信息**

4. 查看 **所有版本** ，选择 **24H2**

![选择要下载的 Windows 镜像版本](/prologue/install-os/how-to-download-system-image/select-the-windows-image-version-to-download.png)

6. 勾选 **显示校验信息** ，可以查看镜像文件的 **校验值（Hash 值 / 摘要值）**  
   （镜像下载完成后，用于检验镜像文件是否完整）

::: tip 校验值是什么？

- **MD5、SHA1、SHA256** 都是常见的哈希算法。
- 把一个文件（比如一个 Windows 系统的 ISO 镜像文件）丢进算法里，就会生成一串唯一的“指纹”。
- 只要文件内容有哪怕 **1 个字节不同**，生成的哈希值就会完全不同。

:::

7. 选择 **business editions** ，点击 **BT** 这一列下的 **复制** 按钮  
   （此时剪贴板中得到一串以`magnet:?xt=urn:btih:`开头的字符，这是 **磁力链接**）

::: details **Business Editions 和 Consumer Editions 的区别**

---

**Business Editions（商业版）**

> 面向企业和组织，附带更多安全、管理和虚拟化功能。

**常见包含版本：**

- Pro（专业版）
- Enterprise（企业版）
- Education（教育版）

**特点：** 支持域加入、组策略、远程桌面、BitLocker 加密、虚拟化（Hyper-V）等企业功能。

---

**Consumer Editions（消费者版）**

> 面向普通个人用户，功能更偏向日常使用、娱乐和轻办公。

**常见包含版本：**

- Home（家庭版）
- Education（教育版）
- Pro（专业版）

:::

8. 打开 **Motrix** ， 点击左侧的 **+** ， 粘贴 **磁力链接** ，然后点击 **提交**  
   （此时会自动粘贴刚刚复制的 **磁力链接**）

> [Motrix 下载方式](https://dev-manual.gdmuna.com/prologue/install/motrix)

![使用 Motrix 下载镜像](/prologue/install-os/how-to-download-system-image/download-the-image-using-motrix.png)

### 2. WinPE 系统镜像下载

WinPE（Windows Preinstallation Environment）是一种基于 Windows 内核的精简版操作系统。它体积小、功能集中，通常用于系统安装、维护和修复。

以下是推荐的 WinPE 系统的制作工具或 WinPE 镜像：

- [微 PE 工具箱](https://www.wepe.com.cn)
- [HotPE](https://www.hotpe.top)
- [FirPE](https://www.firpe.cn)

我们也提供了部分可直接放入 Ventoy 启动盘的 WinPE 镜像，可通过 NA-Share 资源站下载：[https://share.gdmuna.com/system_image/win-pe](https://share.gdmuna.com/system_image/win-pe)

::: danger 严重警告！！！
某些 WinPE 系统会在安装系统时 **植入捆绑软件和广告** 且无法根除，例如 **老毛桃**、**大白菜** 等，不建议使用这类 PE 系统。
:::

## 三、校验文件完整性

::: warning 重要提醒！
镜像下载完成后，务必进行 **哈希值校验**，以确保文件的完整性，避免因下载过程中数据传输错误或被恶意篡改导致镜像文件与官方发布的版本不一致，最终致使镜像在安装、烧录或运行过程中出现异常。
:::

### 校验方法

1. **Win + R** 输入 `cmd`，进入命令提示符窗口
2. 输入以下命令（ `[文件路径]` 替换为实际镜像路径，`[算法]` 替换为实际的算法）：

```cmd
certutil -hashfile [文件路径] [算法]
```

::: details certutil 命令支持的算法

- MD2
- MD4
- MD5
- SHA1
- SHA256
- SHA384
- SHA512
  :::

---

### 示例

> 以 **Windows 11 (business editions), version 24H2 (updated Sep 2025) (x64) - DVD (Chinese-Simplified)** 为例

1. 打开镜像文件的文件位置

![镜像文件位置](/prologue/install-os/how-to-download-system-image/image-file-location.png)

2. **右键单击** 镜像文件，点击 **复制文件地址**，复制镜像文件的绝对路径

![复制镜像文件路径](/prologue/install-os/how-to-download-system-image/copy-image-file-path.png)

3. 按 **Win + R** 打开 **运行** 窗口，输入 `cmd`，进入命令提示符

4. 输入以下命令后 **回车（ 按 Enter 键 ）**，用 SHA256 算法计算文件的哈希值：

    ```shell
    certutil -hashfile [文件路径] [算法]
    ```

    ```shell
    # 下方命令仅为示例，请根据本机真实文件路径粘贴
    certutil -hashfile E:\Pries\Downloads\zh-cn_windows_11_business_editions_version_24h2_updated_sep_2025_x64_dvd_84877922.iso sha256
    ```

5. 比对哈希值，若命令执行结果与官网校验信息一致，则校验成功。

![比对哈希值](/prologue/install-os/how-to-download-system-image/compare-hash-values.png)
