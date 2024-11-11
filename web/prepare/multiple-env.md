# 配置 Node.js 多环境管理工具

## 什么是 Node.js ？

Node.js 是一个开源的、跨平台的 JavaScript 运行环境，用于构建高性能、可伸缩的网络应用程序。它基于 Chrome V8 JavaScript 引擎，使 JavaScript 能够在服务器端运行，而不仅仅局限于浏览器端。Node.js 采用事件驱动、非阻塞 I/O 模型，使得它能够处理大量并发连接，并具有出色的性能表现。

Node.js 的设计目标是提供一种简单且高效的方式来构建可扩展的网络应用程序。它的核心特性包括：

1. 单线程和事件驱动：Node.js 采用单线程模型，但通过事件驱动的方式处理并发请求，避免了传统多线程模型中线程切换的开销，提高了应用程序的性能和吞吐量。

2. 非阻塞 I/O：Node.js 使用非阻塞的 I/O 操作，使得应用程序能够以异步的方式处理 I/O 请求，从而提高了应用程序的并发处理能力。

3. 轻量和高效：Node.js 具有轻量级的设计，它的核心库只包含了一些基本的模块，可以根据需要进行扩展。这使得 Node.js 在处理大量并发连接时非常高效。

4. 跨平台：Node.js 可以运行在多种操作系统上，包括 Windows、macOS 和 Linux 等。

Node.js 广泛应用于构建服务器端的 Web 应用程序、实时应用程序、命令行工具和后端服务等。它的生态系统非常丰富，拥有大量的第三方模块和工具，使得开发者能够快速构建复杂的应用程序。

## 为什么要配置 Node.js 开发环境？

现代主流前端框架 Vue、React、Angular 都是基于 Node.js 去构建 Web 应用的，想要运行一个前端工程化项目，就必须安装配置 Node.js 环境。

## 扩展知识

### 多环境管理

多环境管理是指在同一台计算机上同时管理多个独立的软件开发环境。每个环境可以具有不同的软件包版本和配置，以满足不同项目或应用程序的需求。多环境管理的一个常见应用是在前端开发中，使用工具 nvm 来创建和管理不同的 Node.js 环境。

多环境管理的好处是可以避免不同项目之间的软件包冲突。不同的项目可能依赖于不同版本的软件包，而这些软件包可能存在不兼容或冲突的情况。通过创建独立的环境，每个项目都可以使用其所需的特定软件包版本，而不会干扰其他项目。

### 包管理

包管理是指对软件包进行安装、更新和管理的过程。在软件开发中，一个包是指一组相关的代码、库和资源，它们被打包在一起以便于分发和使用。包管理工具可以帮助用户方便地安装、更新和卸载软件包，并解决依赖关系，以确保所需的依赖项正确安装和配置。

在 Node.js 中，包管理工具如 npm 、yarn 和 pnpm 可以帮助用户管理 node_modules 包。这些工具可以从软件包仓库或指定的源中下载和安装软件包，还可以处理软件包之间的依赖关系。包管理工具使得在不同项目中使用不同版本的软件包变得更加容易，同时也提供了便捷的方式来共享和分发代码和依赖项。

## 如何配置 Node.js 开发环境

> 本文介绍使用 nvm-windows 来配置和管理多个 Node.js 环境。  
> 本文使用 npm 或 yarn 来管理某个 Node.js 环境下的软件包（依赖）。

1. 下载 nvm-windows 的安装包。NVM（Node Version Manager）是一个用于管理 Node.js 版本的工具，它允许您在同一台计算机上同时安装和切换不同版本的 Node.js ，而无需手动更改环境变量或重新安装 Node.js 。

    - 官方下载地址：[https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe)

    - NA Oasis 资源站下载地址：[https://share.gdmuna.com/d/soft_installer/nvm/v1.1.12/nvm-setup.exe](https://share.gdmuna.com/d/soft_installer/nvm/v1.1.12/nvm-setup.exe)

2. 以管理员权限运行安装包

    ![use-admin-run-installer](/web/prepare/multiple-env/use-admin-run-installer.png)

3. 按照提示一步步执行安装操作。

    > 注意事项：  
    > 请修改好安装路径，不建议使用安装程序默认的安装路径，安装路径中不能出现中文字符和空格。
    >
    > 安装时会出现2次需要填写安装路径的地方，第一次是填写 nvm 的安装路径，第二次是填写 nodejs 软链接的安装路径。两者的安装路径不能相同，但建议两者放在**同一父级目录**下。  
    > （请**仔细观察**下方的推荐安装路径，在设置这两个组件的安装路径时，<u>前面部分都是一样的，只有结尾部分不一样，</u>要仿照这样子的路径格式才是对的）
    >
    > 推荐安装路径1： `D:\nvm` 和 `D:\nodejs`  
    > 推荐安装路径2： `D:\Softs\nvm` 和 `D:\Softs\nodejs`  
    > 推荐安装路径3： `D:\Environment\nvm` 和 `D:\Environment\nodejs`

    ![install-nvm-step1](/web/prepare/multiple-env/install-nvm-step1.png)

    ![install-nvm-step2](/web/prepare/multiple-env/install-nvm-step2.png)

4. 安装完成后，打开 nvm 的安装目录，找到 `settings.txt` 文件，往里面添加以下内容：

    ```txt
    node_mirror: https://npmmirror.com/mirrors/node/
    npm_mirror: https://npmmirror.com/mirrors/npm/
    ```

5. 打开 CMD 或 Terminal ，执行 `nvm -v` 命令可查看当前 nvm 的版本号

6. 执行 `nvm install 20.18.0` 可下载 Node.js 20.18.0 这个版本

7. 执行 `nvm list` 可查看当前电脑上存在的所有 Node.js 版本

8. 执行 `nvm use 20.18.0` 可将当前电脑的当前 Node.js 版本切换为 20.18.0。切换时，会弹出一个确认提示，请点击“是”（如下图所示）

    ![allow-use-nodejs](/web/prepare/multiple-env/allow-use-nodejs.png)

9. 将电脑上当前的 Node.js 版本切换为 20.18.0 之后，<u>打开 nvm 的安装目录，再进一步打开对应版本号的子目录，再进进一步打开 `node_modules` 子目录，再进进进一步打开 `npm` 子目录，最终找到 `.npmrc` 文件，</u>往里面添加以下内容：

    ```txt
    registry=https://registry.npmmirror.com/
    disturl=https://npmmirror.com/mirrors/node/
    sass-binary-site=https://npmmirror.com/mirrors/node-sass/
    ```

10. 回到 CMD 或 Terminal ，执行 `npm install -g yarn` 下载安装 `yarn` 这个包管理工具。

11. 在完成上述配置操作后，可在 CMD 或 Terminal 执行以下命令，验证 Node.js 开发环境的配置情况。

    ```shell
    # 查看当前 nvm 的版本号
    nvm -v
    # 查看当前电脑上存在的所有 Node.js 版本
    nvm list
    # 查看当前 npm 的版本号
    npm -v
    # 查看当前 yarn 的版本号
    yarn -v
    ```
