# 系统环境变量

## 什么是环境变量？

环境变量（Environment Variable）是操作系统中用于存放运行环境参数的一组值，是在操作系统中一个具有特定名字的对象，包含一个或多个应用程序所使用到的信息。

::: info 示例

Windows 操作系统中的 Path 环境变量，当要求系统运行一个程序，而 **没有告诉它程序所在的完整路径** 时，系统会 **先到当前目录下查找**，如果没有找到，**还会到 Path 环境变量中查找**，如果还是没有找到则会提示`命令不存在`或者`无法执行该命令`。

:::

## 为什么需要环境变量？

在操作系统中，如果没有配置 **环境变量 Path**，运行程序时必须输入完整路径。

::: info 示例

此处假设你安装了 MinGW-w64，并且它的 C++ 编译器 `g++.exe` 位于 `D:\mingw64\bin\` 目录下。

```shell
D:\mingw64\bin\g++.exe hello.cpp -o hello.exe
```

:::

一旦配置好环境变量，系统会自动在 **环境变量 Path** 中搜索对应的程序目录。  
此时只需输入简短命令即可。

::: info 示例

```shell
g++ hello.cpp -o hello.exe
```

:::

## 环境变量的类型与作用域

- **系统变量 / 机器级（System Variables）**
    - 对所有用户均有效。
    - 常用于系统级别的软件配置。
- **用户变量（User Variables）**
    - 仅对当前登录的用户有效。
    - 常用于个人开发环境的配置。
- **进程级（Process）**
    - 当前进程的环境（临时，随进程结束消失）。
    - 子进程会继承父进程环境。

## 环境变量的配置方法（Windows）

### 路径类变量（Path 变量）

#### 作用

Path 是一条“搜索路径清单”，存放了多个软件的目录。当在命令行中输入一个命令时，系统会依次在 Path 中查找该命令对应的可执行程序。

::: info 示例

输入 `python`，系统会在 Path 的目录列表中查找 `python.exe`，找到后即可直接运行。

:::

> 像 `Path` 这样的变量是一种 **路径列表变量**。  
> 它可以存放多个路径，Windows 用 分号 `;` 来分隔它们。  
> :bangbang:【当你的 `Path` 变量只有一条路径，新增路径时请用分号 `;` 分隔新旧路径】

#### 配置方法

![how-to-set-environment-variables](/prologue/basic-knowledge/system-environment-variables/how-to-set-environment-variables-path.png)

1. 右键 **此电脑** → **属性** → **高级系统设置** → **环境变量**。
2. 找到 **Path**，点击 **编辑**。
3. 新增一条路径。

    ::: info 示例

    此处假设你安装了 MinGW-w64，并且它的 C++ 编译器 `g++. exe` 位于 `D:\mingw64\bin\` 目录下，此时新增的路径为：

    ```shell
    D:\mingw64\bin
    ```

    :::

4. 保存设置并关闭窗口。
5. **重新打开命令行窗口**，输入测试命令。

    ::: info 示例

    ```shell
    gcc -v
    ```

    :::

### 普通变量（如 JAVA_HOME、NVM_HOME）

#### 作用

这一类变量不是用来查找程序的，而是用来**存储一个关键路径或配置值**，方便引用。

::: info 示例

- `JAVA_HOME` 通常指向 Java JDK 的安装目录：

    ```shell
    D:\Java\openjdk-21.0.5
    ```

- `NVM_HOME` 指向 Node.js 版本管理工具 NVM 的安装目录：

    ```shell
    D:\nvm
    ```

- `NVM_SYMLINK` 则指向当前启用的 Node.js 版本所在目录：

    ```shell
    D:\nodejs
    ```

:::

这些变量本身**不会让程序自动运行或被系统搜索到**，  
但可以被其他变量（例如 Path 变量）或脚本引用，起到“路径占位符”的作用。

::: info 示例

我们可以在 Path 中引用它们，让系统自动解析成实际路径：

- Java

    ```shell
    %JAVA_HOME%\bin
    ```

- Node.js

    ```shell
    %NVM_SYMLINK%
    ```

系统在解析 Path 变量时，会自动把 Path 变量中的 `%JAVA_HOME%` 或 `%NVM_SYMLINK%` 替换为对应的真实路径。

> 这就是为什么很多教程推荐你先配置 `JAVA_HOME`、`NVM_HOME` 等普通变量，再在 Path 变量里引用它们 —— 这样以后更换安装目录或版本时，只需改一处即可。

:::

#### 配置方法

![how-to-set-environment-variables-odinary](/prologue/basic-knowledge/system-environment-variables/how-to-set-environment-variables-odinary.png)

1. 右键 **此电脑** → **属性** → **高级系统设置** → **环境变量**。
2. 找到 **系统变量**，点击下方 **新建**。
3. 输入 **变量名** 与 **变量值**。

    ::: info 示例

    此处假设你安装了 openjdk-21.0.5，并且它位于 `D:\Java\openjdk-21.0.5` 目录下
    - 变量名：

        ```shell
        JAVA_HOME
        ```

    - 变量值：

        ```shell
        D:\Java\openjdk-21.0.5
        ```

    :::

4. 保存设置并关闭窗口。

## 常见环境变量的配置场景

### 1. 配置 C++ 编译器（GCC / MinGW-w64）

> `GCC`（GNU Compiler Collection）是编译器套件、  
> `MinGW-w64`（基于 GCC 的 Windows 发行版）

- 配置方法：将 MinGW 安装目录下的 `bin` 目录加入 Path 变量，例如 `D:\mingw64\bin`
- 配置检查：

    ```shell
    gcc -v
    ```

### 2. 配置 Python 解释器

- 自动配置：在安装时勾选 **“Add Python to PATH”**，会自动将 Python 可执行文件路径加入 Path 变量。
- 手动配置：把 Python 的安装目录（含 `python.exe`）或其 `Scripts` 目录加入 Path 变量，例如 `D:\Python\Python39\` 和 `D:\Python\Python39\Scripts\`
- 配置检查：

    ```shell
    python -v
    ```

### 3. 配置 Java (JDK)

- 配置方法：推荐设置 `JAVA_HOME` 变量指向 JDK 根目录（例如 `D:\Java\jdk-17`），并在 Path 变量中使用 `%JAVA_HOME%\bin`：

::: info 示例

- 先新增一条普通变量 `JAVA_HOME = D:\Java\jdk-17`  
  （此处`JAVA_HOME` 为变量名， `D:\Java\jdk-17` 为变量值）
- 然后在 Path 变量中加入 `%JAVA_HOME%\bin`（Windows）

:::

- 原因：部分 Java 工具（如 Maven 等）依赖 JAVA_HOME 来定位 JDK。
- 配置检查：

    ```shell
    java -v
    ```

## 环境变量不生效的原因

- 配置环境变量后未重新打开命令行窗口

::: warning 注意事项

Windows 通常在启动会合并 **系统变量** 与 **用户变量** 生成最终环境（具体合并规则在不同 Windows 版本上有细微差异），修改用户或系统变量不会影响已打开的窗口/进程 —— **需重启终端或重新登录以应用新值。**

:::

- 环境变量的值中包含中文或空格路径

::: warning 注意事项

如果某个路径中含有 **中文字符** 或 **空格**，命令行或某些程序可能在解析路径时出错。  
尤其是许多早期从 **Linux/Unix 移植到 Windows** 的开源工具，对非 ASCII 字符或带空格路径的支持并不完善。

:::

- 环境变量配置的路径未指向可执行程序

::: warning 注意事项

某些程序要求环境变量（例如 PATH 变量）中直接包含可执行文件所在的目录。  
如果你只添加了程序的 **父级目录**，命令行可能无法找到目标可执行文件。

> 例如，已知 `gcc.exe` 在 MinGW 安装目录下的 `bin` 目录内，那么：  
> :x: 错误的环境变量配置：`D:\mingw64`  
> :white_check_mark: 正确的环境变量配置：`D:\mingw64\bin`

:::
