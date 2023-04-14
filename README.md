# Paper proof Lean widget

To get started with development, you will need to run these commands first:

```bash
cd widget
yarn install
```

For development run `yarn dev` in command line (it will watch changes in widget ts files and automatically rebuild). Development requires [watchexec](https://watchexec.github.io/), which can be installed by running `cargo install watchexec-cli` if you have Rust toolchain available.

Run `lean4.restartFile` from VSCode when in Lean file to pick up a new widget version.