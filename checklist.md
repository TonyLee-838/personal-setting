- [ ] homebrew

  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)";

  ```

- [ ] necessary to install

  ```sh
  brew install git
  brew install node@14
  ```

- [ ] Typing Method

```sh
  brew install --cask squirrel

  git clone --depth 1 https://github.com/rime/plum.git
  cd plum
  bash rime-install scj
```

- [ ] cask app

  ```sh
  homebrew_cask_app='sourcetree
  drawio
  postman
  rar
  firefox
  stats
  visual-studio-code
  alfred
  google-chrome
  alt-tab
  hiddenbar
  iterm2
  wechat
  spotify
  spotmenu
  '


  for app in $homebrew_cask_app
  do
    brew install --cask $app
  done
  ```

- [ ] vscode extensions

  ```sh
  vscode_extensions='alefragnani.Bookmarks
  bungcip.better-toml
  christian-kohler.path-intellisense
  cliffordfajardo.highlight-line-vscode
  Compulim.vscode-chinese-translation
  dbaeumer.vscode-eslint
  dustypomerleau.rust-syntax
  eamodio.gitlens
  esbenp.prettier-vscode
  formulahendry.auto-rename-tag
  GitHub.github-vscode-theme
  ms-azuretools.vscode-docker
  ms-vscode-remote.remote-containers
  ms-vscode-remote.remote-ssh
  ms-vscode-remote.remote-ssh-edit
  naumovs.color-highlight
  PKief.material-icon-theme
  ritwickdey.LiveServer
  rsbondi.highlight-words
  rust-lang.rust
  rust-lang.rust-analyzer
  streetsidesoftware.code-spell-checker
  usernamehw.errorlens
  VisualStudioExptTeam.vscodeintellicode
  vscode-icons-team.vscode-icons
  WallabyJs.quokka-vscode
  wayou.vscode-todo-highlight
  yzhang.markdown-all-in-one
  zavrakv.vscode-hacker-typer-fixed
  Huuums.vscode-fast-folder-structure
  meganrogge.template-string-converter
  '

  for extension in $vscode_extensions
  do
    code --install-extension $extension --force
  done
  ```

  - [ ] Folder Structure Extension

  ```sh
   cp -r ./configs ~/dev


  ```

- [ ] oh-my-zsh

  ```sh
  git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

  echo 'ZSH_THEME="powerlevel10k/powerlevel10k"' > ~/.zshrc

  source ~/.zshrc

  ```

  - zshrc

  ```sh
  plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
  ```

- [ ] node packages

  ```sh
  npm install --global yarn


  node_global_packages='
  typescript
  ts-node
  nodemon
  nrm
  '
  yarn add $node_global_packages --global

  ```

- [ ] Chrome extensions
  - [ ] Tabliss
  - [ ] Octotree
  - [ ] OneTab
  - [ ] React Developer Tools
  - [ ] JSON Viewer
