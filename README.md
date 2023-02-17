# CCNU-LAB

代码仓库地址: https://github.com/ccnu-lab/ccnu-lab.github.io.git

## 首次启动

copy .env.shadow parameters to .env and fill all required envs

step1:

```
 yarn
```

step2:

```
 yarn start
```

## 项目访问地址

- 本地环境地址：http://localhost:5173
- 正式环境：https://ccnu-lab.github.io/

## 提交规范

提交代码 backend

```
yarn lint
git add .
git commit -m "feat:[XY-21]"
```

提交代码 frontend

```
git add .
git commit -m "feat:[XY-21]"
```

1. 提交格式: codetype:#taskId eg: `git commit -m 'feat:[XY-21]'`
2. 不可同时提交 client 、server 中修改的文件
3. 每次代码提交必须提 PR ,不可直接在 master 上提交代码
4. codetype 说明：

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)

5. 分支命名格式: name + task id eg:xxx.xx/CCNU-LAB-1

## 环境部署

生成 gh-pages 分支并且用 github-pages 来部署静态服务

### 部署脚本说明

1. Install the gh-pages npm package and designate it as a development dependency:

```
yarn add gh-pages

```

At this point, the gh-pages npm package is installed on your computer and the React app's dependence upon it is documented in the React app's package.json file.

2.  Add a homepage property in this format\*: https://{username}.github.io/{repo-name} For a project site, that's the format. For a user site, the format is: https://{username}.github.io. You can read more about the homepage property in the "GitHub Pages" section of the create-react-app documentation.

3.  Add deployment scripts to the package.json file

```
"predeploy": "npm run build"
"deploy": "gh-pages -d build"
```

4. Push the React app to the GitHub repository

```
yarn deploy
```

That will cause the predeploy and deploy scripts defined in package.json to run.
Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

```
yarn deploy -- -m "Deploy React app to GitHub Pages"
```

