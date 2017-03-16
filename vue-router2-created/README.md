# VueRouter@2におけるcreatedについて

このドキュメントは「技術書典２」にて頒布されるサークルpentapodの合同誌の補助資料です。

### berofeRouteEnter

VueRouterのv2.0以降は、1.xにあった「ページの読み込み時にcreated()」を発火させる処理が削除され、`beforeRouteEnter`に統合されました。  
しかしながら、beforeRouteEnterは単体では`this`を持たないため、インスタンス自身にアクセスすることができません。

ここでは、できるだけ統一的なインターフェースでcreatedの代替を構築してみます。
