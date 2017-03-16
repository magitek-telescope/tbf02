# x-templateによるHTML内へのテンプレート差し込み

このドキュメントは「技術書典２」にて頒布されるサークルpentapodの合同誌の補助資料です。

### x-template / Vue.componentについて

vue-loaderやvuerifyなどのビルドツールを利用すると、VueコンポーネントのHTMLやCSS構造を比較的ラクに記述ができますが、
そうでない場合でも、x-templateを利用することで、HTMLに限っては同様のことが可能となります。

ここでは、text/x-template上に、バインディングによって値やテキストの変わるコンポーネントを記述し、DOM操作によって中身を取得、Viewとロジックの切り分けを行っています。