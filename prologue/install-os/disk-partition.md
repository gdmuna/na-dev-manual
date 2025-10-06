# 如何对磁盘进行分区

本篇主要介绍两种磁盘管理方法：

- [使用 Windows 自带的磁盘管理工具](./disk-partition#windows-built-in-disk-management-tool)

- [在 PE 系统使用 DiskGenius 软件](./disk-partition#using-diskgenius-software-in-pe-system)

## 关于磁盘分区

::: info 磁盘分区的原因

方便存储与管理不同的数据。**例如**：  
**C盘** 用于存储 **操作系统** 文件，**D盘** 用于存储 **应用程序**，**E盘** 用于存储 **个人资料数据** 等。

:::

### 基本概念

#### 磁盘（Disk）

一种用于 **长期存储数据** 的存储介质。  
它的主要作用是 —— **保存电脑关机后仍然需要保留的数据**（ 如系统文件、文档、图片、视频等 ）。

> 在计算机系统中，我们常说的“磁盘”其实是一个广义概念，包括了多种不同的存储设备：
>
> - 机械硬盘（HDD）
> - 固态硬盘（SSD）
> - 光盘（CD / DVD）
> - 软盘（Floppy Disk）
> - U 盘、移动硬盘（在逻辑上也属于外接磁盘）

#### 分区（Partition）

是指在一块 **物理磁盘** 上，**人为划分出的一个或多个逻辑区域**。  
操作系统会把这些区域当作“独立磁盘”来看待，并分配不同的盘符（ 如 **C:**、**D:**、**E:** 等 ）。

> 一块物理磁盘（Disk）可以被划分成多个逻辑分区（Partition）。  
> 每个分区相当于一个独立的“虚拟磁盘”，可以单独存放文件、安装系统或进行格式化处理。

#### 系统盘 / 数据盘

- **系统盘**（ 通常是 C盘 ）：主要用于 **安装操作系统及系统相关软件**。
- **数据盘**（ 如 D盘、E盘 等 ）：用于 **存放文档、图片、视频等个人数据**，或 **安装非系统类的应用、游戏** 等。

#### 硬盘分区表（Partition Table）

**硬盘分区表** 是存储在硬盘上的一段数据结构，用于描述硬盘的分区信息。它记录了每个分区的起始位置、大小、类型等信息，帮助操作系统识别和管理硬盘上的各个分区。

> 常见的 **分区表类型** 包括 **MBR（主引导记录）**和 **GPT（GUID分区表）**。

|                    | MBR（Master Boot Record）               | GPT（GUID Partition Table）                      |
| ------------------ | --------------------------------------- | ------------------------------------------------ |
| **启动方式**       | 传统 **BIOS** 启动                      | 新式 **UEFI** 启动                               |
| **最大分区容量**   | ≤ **2TB**                               | ≤ **9.4 ZB**（1 ZB = 10⁹ TB）                    |
| **最大主分区数量** | 最多 **4 个主分区**（或 3 主 + 1 扩展） | 理论上 **128 个分区**（Windows 默认）            |
| **分区表位置**     | 磁盘开头仅有一份                        | 分区表有 **主表 + 备份表**（更安全）             |
| **兼容性**         | 支持旧系统（如 Windows XP）             | 仅支持较新系统（如 Windows 10/11、macOS、Linux） |
| **容错机制**       | 无备份表，损坏后可能无法启动            | 具备冗余备份和校验                               |
| **适用设备**       | 老式电脑 / 机械硬盘（传统 BIOS）        | 新电脑 / SSD / NVMe（UEFI 启动）                 |

::: tip 重要提示

- 如果是 **新电脑 / UEFI 启动** → 请选择 **GPT**。
- 如果是 **2006年以前的老电脑 / Legacy BIOS 启动** → 请选择 **MBR**。

:::

#### 文件系统（File System）

**文件系统** 决定着从存储设备中对文件进行 **命名、 存储 和 检索** 的方式。

|              | Windows               | Linux               | U盘/移动设备       |
| ------------ | --------------------- | ------------------- | ------------------ |
| 根目录结构   | 多盘符（C:\、D:\）    | 单一根目录（/）     | 通常挂载到系统中   |
| 默认文件系统 | NTFS                  | ext4                | FAT32 / exFAT      |
| 权限控制     | 基于用户账户（ACL）   | 严格区分权限（rwx） | 一般无权限系统     |
| 文件名大小写 | 不区分                | 区分                | 视系统而定         |
| 兼容性       | Windows 专用          | Linux 专用          | FAT/exFAT 通用     |
| 格式化方式   | 磁盘管理 / 格式化工具 | `mkfs`命令          | 设备工具或系统自带 |

> 实际上，从 **Linux Kernel 5.15**（2021 年） 开始，Linux 内核内置了一个 **原生 NTFS 驱动** —— **NTFS3**。  
> 因此，目前不少较新版本的 Linux 系统，如 Ubuntu 22.04、Debian 12 等，也可以读写 NTFS 格式的磁盘了。

## 磁盘分区的方法

### 使用 Windows 自带的磁盘管理工具 {#windows-built-in-disk-management-tool}

::: tip 使用场景

适用于在 **已有磁盘中划分新分区** 的情况。  
即：在不影响现有数据的前提下，通过“**压缩卷**”的方式，从某个磁盘中释放出一部分未分配空间，再创建新的分区。

:::

::: warning 局限性

只能在 **连续的未分配空间** 上创建分区。

若磁盘被**多次分割** 且 **未分配空间不连续**，将 **无法合并零散的未分配空间**，因此仅适用于 **压缩已有磁盘空间，分配给新磁盘** 的场景，不适用于磁盘扩容（例如：无法给 C盘 扩充容量）。

:::

#### 操作方法

::: warning 示例说明

:bangbang:下文图例 **仅作图形界面参考**，图中具体磁盘容量请根据个人实际情况计算。

:::

1. 鼠标 **右键单击** 开始图标，进入 **磁盘管理**

    ![how-to-open-disk-management](/prologue/install-os/disk-partition/how-to-open-disk-management.png)

2. 选择系统盘 C盘，鼠标 **右键单击** 选择 **压缩卷**

    ![select-drive-c-and-click-on-compress-volume](/prologue/install-os/disk-partition/select-drive-c-and-click-on-compress-volume.png)

3. 在 **输入压缩空间量** 里填写要压缩的容量，确认无误后点击 **压缩**

    > :white_check_mark:按照 `1GB = 1024MB` 计算，**要求总共有三个盘（C：、D：、E：）**，请在 **输入压缩空间大小** 处输入 **D盘 + E盘 的总容量** 。  
    > :bangbang:**务必注意**：请给 C盘 预留至少 160GB 容量，不要把 **可压缩空间** 全部分完，否则会造成 C盘 空间爆满的惨状。（ 请 **预先规划** 好本电脑各磁盘的容量 ）

    ::: warning 注意

    在弹出的窗口中（ 当前以 C盘 为例 ）:
    1. **压缩前的总计大小** 是C盘的全部大小；
    2. **可用压缩空间大小** 是能压缩出来的空间，不能压缩超过这个大小的空间；
    3. **输入压缩空间量** 是你想要压缩出来的空间；
    4. **压缩后的总计大小** 是压缩后C盘的大小。

    ![select-compression-capacity](/prologue/install-os/disk-partition/select-compression-capacity.png)

    :::

4. 磁盘多出来一个 **未分配** 空间，**右键单击** 选择 **新建简单卷**

    ![how-to-create-a-new-simple-volume](/prologue/install-os/disk-partition/how-to-create-a-new-simple-volume.png)

5. 进入 **新建简单卷向导** 窗口，在 **简单卷大小** 中输入**当前想要分区的容量**，然后点击 **下一步**

    ::: warning 为什么是 “当前想要分区的容量” 呢？

    如果你的电脑在进行磁盘分区操作前 **只有一个C盘** ，在【第3步：输入压缩空间量】时，输入的容量为 **D盘 + E盘 的总容量** ，那么在这一步中，你需要输入的就是 **D盘 的容量**。

    :::

    ![new-simple-volume-wizard](/prologue/install-os/disk-partition/new-simple-volume-wizard.png)

6. **分配驱动器号**

    ::: tip 注意

    驱动器号也就是常说的 **盘符**，可以选择默认，也可以手动修改。然后 **继续点击“下一步”**。

    :::

    ![assign-drive-letter](/prologue/install-os/disk-partition/assign-drive-letter.png)

7. **格式化分区**

    ::: tip 注意

    为了便于数据分类管理，请进行 **卷标命名**。

    :::

    ![format-partition](/prologue/install-os/disk-partition/format-partition.png)

8. **继续点击“下一步”**，直至 **完成**。  
   至此，D盘分区完成。

9. **E盘分区操作同上**，具体步骤参照上文 **第4步** 起（详见步骤4 ~ 步骤8）

---

### 在 PE 系统使用 DiskGenius 软件 {#using-diskgenius-software-in-pe-system}

#### DiskGenius 简介

**DiskGenius** 是一款功能强大的磁盘管理工具，它常见的功能包括：

- 分区管理：新建、删除、调整、格式化分区
- 分区表操作：支持 MBR 和 GPT 两种格式
- 文件系统转换：NTFS / FAT32 / exFAT
- 磁盘克隆、数据备份与恢复
- 数据恢复（适合误删文件的情况）

#### 进入 DiskGenius

1. 使用 **U 盘启动进入 PE 系统**。
2. 大多数 Win PE 系统都会内置 **DiskGenius**，你可以在桌面找到 **DiskGenius** 的快捷方式。

    ![DiskGenius](/prologue/install-os/disk-partition/diskgenius.png)

3. 双击打开，软件的界面分为三部分：
    - **左侧**：磁盘与分区列表
    - **上方**：工具栏
    - **中间**：分区的详细信息（容量、文件系统等）

#### 操作方法

1.  确认目标磁盘  
    打开 DiskGenius 后，在 **左侧区域** 会显示你电脑上的所有磁盘。  
    请选择你电脑上 **实际的磁盘** 进行分区

    ::: tip 磁盘标称容量与系统显示容量的差异

    [知乎 | 为什么硬盘容量比实际的少？1TB硬盘为何只有931GB或953GB？](https://zhuanlan.zhihu.com/p/721668897)

    :::

2.  删除旧分区

    ::: danger 警告

    **仅当彻底重装系统时，才需要做这一步，否则请跳过本步骤。**  
    此操作将会 **清空磁盘所有数据**，请提前备份重要数据！

    :::
    - 右键点击上方蓝色磁盘，选择 **删除当前分区**。

        ![clear-old-partitions](/prologue/install-os/disk-partition/clear-old-partitions.png)

    - 点击确认。
    - 此时磁盘会变成 **空闲** 状态。

        ![make-the-disk-idle](/prologue/install-os/disk-partition/make-the-disk-idle.png)

    - 不需要提前分区，系统安装程序会自动创建系统分区（ 默认创建 C盘 ），成功安装完系统后，按照下一步的步骤继续操作即可。

3.  转换分区表类型为 GUID 格式（GPT格式）  
    右键单击磁盘，**转换分区表类型为 GUID 格式**。

    ![convert-partition-table-type-to-guid-format](/prologue/install-os/disk-partition/convert-partition-table-type-to-guid-format.png)

    ::: info 转换完成检验

        转换完成后，先选中本机磁盘，在 **上方磁盘左侧**，显示 **基本GPT** 即可。

    :::

4.  更改完分区表类型后，点击左上角 **保存更改** 按钮

    ![save-partition-table-type-changes](/prologue/install-os/disk-partition/save-partition-table-type-changes.png)

5.  右键单击磁盘，选择 **调整分区大小**

    ![resize-partition](/prologue/install-os/disk-partition/resize-partition.png)

6.  将 **调整后容量** 修改为 **所需C盘容量** 后 **按 Enter 键** 确认

    > 此处我的分区方案是：C盘 300GB、D盘 300GB、E盘 330GB（占据剩余容量），**实际分区方案请按照个人实际需求划分**。

    ![adjusting-the-partition-size](/prologue/install-os/disk-partition/adjusting-the-partition-size.png)

    弹出警告弹窗后，继续点击 **是**，最后点击 **完成**。

7.  右键单击 **处于空闲** 的磁盘，点击 **建立新分区**

    ![create-a-new-partition-for-drive-d](/prologue/install-os/disk-partition/create-a-new-partition-for-drive-d.png)

8.  输入 **新分区大小** 和 **卷标**（ 磁盘名 ），点击 **确定**

    ![modify-the-partition-size-of-drive-d](/prologue/install-os/disk-partition/modify-the-partition-size-of-drive-d.png)

9.  点击软件界面左上角的 **保存更改** 按钮，点击 **确认** 即可  
    （中途包含对新分区进行格式化的确认操作）

10. 右键单击 **处于空闲** 的磁盘，点击 **建立新分区**

    ![create-a-new-partition-for-drive-e](/prologue/install-os/disk-partition/create-a-new-partition-for-drive-e.png)

11. 输入 **新分区大小** 和 **卷标**（ 磁盘名 ），点击 **确定**

    ![modify-the-partition-size-of-drive-e](/prologue/install-os/disk-partition/modify-the-partition-size-of-drive-e.png)

12. 点击软件界面左上角的 **保存更改** 按钮，点击 **确认** 即可  
    （中途包含对新分区进行格式化的确认操作）

## 磁盘扩容的方法

> 本节内容继续以 **在 PE 系统使用 DiskGenius 软件** 为扩容方式。

遵循 **拆东墙，补西墙** 原则

1. 先对你想 **拆** 的磁盘进行 **调整分区大小** 操作（调整为比当前容量更小的值）
2. 此时出现了一小块 **空闲** 区域，右键单击这块区域
3. 选择 **将空闲空间分配给** 需要扩容的磁盘

    ![disk-expansion](/prologue/install-os/disk-partition/disk-expansion.png)

## 常见问题与解决方法

1. **C 盘要分多少容量合适？**
    - 建议 160GB 以上

2. **分区格式选 NTFS 还是 FAT32？**
    - **FAT32 不支持超过 4GB 的单个文件**，请尽量避免使用
    - 如果为 Windows 的磁盘分区，请选择 NTFS
    - 如果是为 U盘 分区，请选择 exFAT

3. **GPT 和 MBR 怎么选？**
    - 新电脑（UEFI）选 GPT。
    - 2006年以前的老电脑（BIOS）选 MBR。

4. **误删分区怎么办？**
    - 停下手中目前的工作！不要继续新建或格式化分区！
    - 用 DiskGenius 的 **恢复已丢失分区** 功能尝试找回。
