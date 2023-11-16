{
  description = "A very basic flake";

  outputs = {nixpkgs, ... }: {

    devShells.x86_64-linux.default = nixpkgs.legacyPackages.x86_64-linux.mkShell {
      packages = with nixpkgs.legacyPackages.x86_64-linux; [
        nodePackages.vscode-html-languageserver-bin 
        nodePackages.vscode-css-languageserver-bin
        nodePackages.prettier
        nodePackages.eslint_d
        nodePackages.eslint
        nodePackages.typescript-language-server
      ];
    };

  };
}
